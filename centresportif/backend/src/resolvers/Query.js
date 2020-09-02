const {forwardTo} = require('prisma-binding');
const {hasPermission} = require('../utils');
const Query = {
    clients:forwardTo('db'),
    rooms:forwardTo('db'),
    locations:forwardTo('db'),
    async roomsFilter(parent, args, context, info) {
      return await ctx.db.query.rooms({
          where:{
              name : args.name,
              sport : args.sport
      }})
    },
    async userFilter(parent, args, ctx, info) {
      return await ctx.db.query.users({
          where:{
              id : args.id,
      }})
    },
    async locationFilter(parent, args, ctx, info) {
      if(!ctx.request.userId){
        throw new Error('Vous devez être connecté !')
      }
      return await ctx.db.query.locations({
        where:{
          userId : { id : ctx.request.userId},
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
    async users(parent, args, ctx, info) {
      //check users permissions to query all users
      if(!ctx.request.userId){
        throw new Error('Vous devez être connecté !')
      }
      //if they can get all users
      hasPermission(ctx.request.user, ['ADMIN']);

      return ctx.db.query.users({},info);
    }
};

module.exports = Query;