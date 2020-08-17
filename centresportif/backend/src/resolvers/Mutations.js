const Mutations = {
    async createClient(parent, args, ctx, info) {

        const client = await ctx.db.mutation.createClient({
            data: { 
                ...args
            }
        },info);
           
        return await client
    }
};


module.exports = Mutations;