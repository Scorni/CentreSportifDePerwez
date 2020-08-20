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
                ...args
            }
        },info);
           
        return await room;
    },
    async createLocation(parent, args, ctx, info) {

        const location = await ctx.db.mutation.createLocation({
            data: { 
                ...args
            }
        },info);
           
        return await location;
    }
};


module.exports = Mutations;