const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const { randomBytes } = require('crypto');
const { promisify } =require('util');
const { singleFieldOnlyMessage } = require("graphql/validation/rules/SingleFieldSubscriptions");
const { transport , MakeANiceEmail, makeANiceEmail } = require("../mail");
const { hasPermission } = require("../utils");
const Mutations = {
    
    async createRoom(parent, args, ctx, info) {

        const room = await ctx.db.mutation.createRoom({
            data: { 
                name : args.name,
                price : args.price,
                sport : args.sport,
                uniqueNameSport : args.name + "_" + args.sport
            }
        },info);
           
        return await room;
    },
    async createBooking(parent, args, ctx, info) {

        if(!ctx.request.userId){
            throw new Error('Pour effectuer une réservation,vous devez être connecté!')
        }
        const [user] = await ctx.db.query.users({
            where : {
                resetToken: args.resetToken,
                resetTokenExpiry_gte: Date.now() - 3600000
            }
        });
        const booking = await ctx.db.mutation.createBooking({
            data: { 
                idBooking: args.idBooking,
                title : args.title,
                allDay : args.allDay,
                start: args.start,
                end: args.end,
                type: args.type,
                room: args.room,
                is_paid: args.is_paid,
                userId:{
                    connect: {
                        id: ctx.request.userId
                    }
                },
            }
        },info);
           
        return await booking;
    },
    async signup(parent, args, ctx, info) {
        // lowercase email
        args.email = args.email.toLowerCase();
        // hash password  
        const password = await bcrypt.hash(args.password, 10);
        // create user in DB
        const user = await ctx.db.mutation.createUser(
            {
             data: {
                ...args,
                password,
                permissions: { set: ["USER"]},
            },
            },
            info
            );
        // create jwt token           
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
        // set jwt as a cookie 
        ctx.response.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365
          });
          
        return user;
    },
    async signin(parent,{email,password},ctx,info){
        //check user with that email
        const user = await ctx.db.query.user({where: {email}})
        if(!user){
            throw new Error('Aucun utilisateur trouvé pour cette adresse mail' + email);
        }
        //check if password is correct
        const valid = await bcrypt.compare(password, user.password)
        if(!valid){
            throw new Error('Mot de passe incorrect!')
        }
        //generate the jwt token
        const token = jwt.sign({ userId : user.id}, process.env.APP_SECRET)
        //set the cookie with the token
        ctx.response.cookie("token",token, {
            httpOnly: true,
            maxAge: 1000 *60 *60 *24 *365 
         });
        //return the user
        return user;
    },
    signout(parent,args,ctx,info){
        ctx.response.clearCookie('token');
        return{message: "Au revoir !"};
    },
    async requestReset(parent,args,ctx,info){
        // check if real user
        const user = await ctx.db.query.user({where: {email: args.email}})
        if(!user){
            throw new Error("Pas d'utilisateur correspondant à cette email : " + args.email)
        }
        // set reset token
        const randomBytesPromiseified =promisify(randomBytes);
        const resetToken = (await randomBytesPromiseified(20)).toString('hex');
        const resetTokenExpiry = Date.now() + 3600000;
        const res = await ctx.db.mutation.updateUser({
            where:{email: args.email},
            data:{resetToken,resetTokenExpiry}
        })
        // email the reset token
        const mailRes = await transport.sendMail({
            from: 'maxscorni@hotmail.com',
            to : args.email,
            subject: 'Your Password Reset Token',
            html: makeANiceEmail(`Voici le lien pour changer votre mot de pase ! \n\n <a href='${process.env.FRONTEND_URL}/requestReset?resetToken=${resetToken}'>Cliquez ici !</a>`)
        }

        )

        return{message: 'Merci !'}
        
        
    },
    async resetPassword (parent,args,ctx,info){
        //check if password equals
        if(args.password !== args.confirmPassword){
            throw new Error('Les mots de passe ne correspondent pas :( ')
        }
        //check if token is legit
        //check if its expired
        const [user] = await ctx.db.query.users({
            where : {
                resetToken: args.resetToken,
                resetTokenExpiry_gte: Date.now() - 3600000
            }
        });
        if(!user){
            throw new Error("Le token est invalide ou est expiré")
        }
        //hash new password
        const password = await bcrypt.hash(args.password,10);
        //save the new password and remove resettoken field
        const updatedUser = await ctx.db.mutation.updateUser({
            where : {email : user.email},
            data : {
                password,
                resetToken: null,
                resetTokenExpiry: null,
            }
        })
        //generate jwt
        const token = jwt.sign({userId: updatedUser.id},"test123")
        //set jwt cookie
        ctx.response.cookie('token',token,{
           httpOnly: true,
           maxAge: 1000 *60 *60 *24 *365 
        })
        //return new user
        return updatedUser;
    },
    async updatePermissions(parent,args,ctx,info){
        if(!ctx.request.userId){
            throw new Error('Pour effectuer une réservation,vous devez être connecté!')
        }
        const currentUser = await ctx.db.query.user({
            where: {
                id : ctx.request.userId,
            }
        },
        info
        );
        hasPermission(currentUser, ['SADMIN'])
        return ctx.db.mutation.updateUser({
            data: {
                permissions: {
                    set: args.permissions
                }
            },
            where: {
                id: args.userId
            },
        },
        info
        )
    },
    async updateSchedule(parent,args,ctx,info){
        if(!ctx.request.userId){
            throw new Error('Pour effectuer une réservation,vous devez être connecté!')
        }
        return ctx.db.mutation.updateSchedule({
            data: {
                lundi: args.lundi
                ,
                mardi: args.mardi
                ,
                mercredi: args.mercredi
                ,
                jeudi: args.jeudi
                ,
                vendredi:args.vendredi
                ,
                samedi: args.samedi
                ,
                dimanche:args.dimanche
                ,
                vacances:args.vacances
                ,
                

            },
            where: {
                id: args.id
            },
        },
        info
        )
    }, 
    async updateContact(parent,args,ctx,info){
        if(!ctx.request.userId){
            throw new Error('Pour effectuer une réservation,vous devez être connecté!')
        }
        return ctx.db.mutation.updateContact({
            data: {
                adress: args.lundi
                ,
                fix: args.fix
                ,
                phone: args.phone
                ,
                fax: args.fax
                ,
                mail:args.mail
                ,
                memberOne: args.memberOne
                ,
                memberTwo:args.memberTwo
                ,
                

            },
            where: {
                id: args.id
            },
        },
        info
        )
    },
    async deleteMyBooking(parent,args,ctx,info){
        
        const where = {id : args.id};

        const item = await ctx.db.query.booking({where},`{id}`);

        return ctx.db.mutation.deleteBooking({where},info);
    },
    async deleteActuality(parent,args,ctx,info){
        if(!ctx.request.userId){
            throw new Error('Pour annuler une réservation,vous devez être connecté!')
        }
        const where = {id : args.actualityId};

        const item = await ctx.db.query.actuality({where},`{id}`);

        return ctx.db.mutation.deleteActuality({where},info);
    },
    async deleteStage(parent,args,ctx,info){
        if(!ctx.request.userId){
            throw new Error('Pour annuler une réservation,vous devez être connecté!')
        }
        const where = {id : args.stageId};

        const item = await ctx.db.query.stage({where},`{id}`);

        return ctx.db.mutation.deleteStage({where},info);
    },
    async deleteFaq(parent,args,ctx,info){
        if(!ctx.request.userId){
            throw new Error('Pour annuler une réservation,vous devez être connecté!')
        }
        const where = {id : args.faqId};

        const item = await ctx.db.query.faq({where},`{id}`);

        return ctx.db.mutation.deleteFaq({where},info);
    },
    async createActuality(parents,args,ctx,info){
        
        const actuality = await ctx.db.mutation.createActuality({
            data: { 
                title : args.title,
                date : args.date,
                content : args.content,
            }
        },info);
           
        return await actuality;
    },
    async createStage(parents,args,ctx,info){
        
        const stage = await ctx.db.mutation.createStage({
            data: { 
                title : args.title,
                date : args.date,
                content : args.content,
            }
        },info);
           
        return await stage;
    },
    async createFaq(parents,args,ctx,info){
        
        const faq = await ctx.db.mutation.createFaq({
            data: { 
                question : args.question,
                date : args.date,
                answer : args.answer,
            }
        },info);
           
        return await faq;
    },
    async createSchedule(parents,args,ctx,info){
        
        const schedule = await ctx.db.mutation.createSchedule({
            data: { 
                lundi: args.lundi,
                mardi: args.mardi,
                mercredi: args.mercredi,
                jeudi: args.jeudi,
                vendredi: args.vendredi,
                samedi: args.samedi,
                dimanche: args.dimanche,
                vacances: args.vacances
            }
        },info);
           
        return await schedule;
    },
    async createContact(parents,args,ctx,info){
        
        const contact = await ctx.db.mutation.createContact({
            data: { 
                adress: args.adress,
                fix: args.fix,
                phone: args.phone,
                fax: args.fax,
                mail: args.mail,
                memberOne: args.memberOne,
                memberTwo: args.memberTwo,
            }
        },info);
           
        return await contact;
    }
};


module.exports = Mutations;