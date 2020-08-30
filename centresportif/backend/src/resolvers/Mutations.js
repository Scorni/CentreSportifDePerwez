const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const Mutations = {
    async createClient(parent, args, ctx, info) {

        const client = await ctx.db.mutation.createClient({
            data: { 
                ...args
            }
        },info);
           
        return await client;
    },
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
    async createLocation(parent, args, ctx, info) {

        const location = await ctx.db.mutation.createLocation({
            data: { 
                sport : args.sport,
                is_paid : args.is_paid,
                hour: args.hour,
                day: args.day,
                userId:{
                    connect: {
                        id: args.userId
                    }
                },
                roomName:{
                    connect: {
                        id: args.roomName
                    }
                },
                uniqueLocationsRoomHourDay:  args.roomName + "_" + args.day + "_" + args.hour

            }
        },info);
           
        return await location;
        /** Location mutation in playground
         * 
         * mutation {
             createLocation(
                sport: "cheval"
                is_paid: false
                id_user : "cke442zlh8o0v0a358yxw9dxx"
                id_room : "cke2zg916q6mg0a32j7jwhgav"
            ) {
                sport
                is_paid
                id_user{name}
                id_room{name}
            }
            
            }
        */
    },
    async signup(parent, { password, email, name, surname,adress,city}, ctx, info) {
        // lowercase email
        email = email.toLowerCase();
        // hash password  
        const passwordCrypted = await bcrypt.hash(password, 10);
        // create user in DB
        const user = await ctx.db.mutation.createUser(
            {
             data: {
             email,
             name,
             surname,
             adress,
             city,
             password: passwordCrypted,
             permissions: {
              set: ["USER"]
             }
            }
            },
            info
            );
        // create jwt token           
        const token = jwt.sign({ userId: name }, "test123");
        // set jwt as a cookie 
        ctx.response.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365
          });
          
        return user;
    }

};


module.exports = Mutations;