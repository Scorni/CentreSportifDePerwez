const {forwardTo} = require('prisma-binding');

const Query = {
    clients:forwardTo('db'),
    rooms:forwardTo('db'),
    locations:forwardTo('db'),
    users:forwardTo('db'),
    async roomsFilter(parent, args, context, info) {
        return await context.db.query.rooms({
            where:{
                name : args.name,
                sport : args.sport
        }})
    },
    async userFilter(parent, args, context, info) {
        return await context.db.query.users({
            where:{
                id : args.id,
        }})
    },
    async locationFilter(parent, args, context, info) {
        return await context.db.query.users({
            where:{
                id: args.userId           
        }})
    },
    me(parent, args, ctx, info) {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info
    );
  },
};

module.exports = Query;