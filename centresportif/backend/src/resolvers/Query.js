const {forwardTo} = require('prisma-binding');
const {hasPermission} = require('../utils');
const Query = {
    rooms:forwardTo('db'),
    locations:forwardTo('db'),
    bookings:forwardTo('db'),
    actualities:forwardTo('db'),
    actualitiesConnection:forwardTo('db'),
    schedules:forwardTo('db'),
    bookings:forwardTo('db'),

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
    async bookingFilter(parent, args, ctx, info) {
      if(!ctx.request.userId){
        throw new Error('Vous devez être connecté !')
      }
      return await ctx.db.query.bookings({
        where:{
          userId : { id : ctx.request.userId},
    }})
    },
    async scheduleFilter(parent, args, ctx, info) {
      /*if(!ctx.request.userId){
        throw new Error('Vous devez être connecté !')
      }*/
      return await ctx.db.query.schedules({
        where:{
          id :  args.id,
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
    },
};

module.exports = Query;