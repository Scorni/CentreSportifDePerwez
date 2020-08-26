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
                        name: args.roomName
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
    async createUser(parent, args, ctx, info) {

        const user = await ctx.db.mutation.createUser({
            data: { 
                ...args
            }
        },info);
           
        return await user;
    }
};


module.exports = Mutations;