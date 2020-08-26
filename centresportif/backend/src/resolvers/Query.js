const {forwardTo} = require('prisma-binding');

const Query = {
    clients:forwardTo('db'),
    rooms:forwardTo('db'),
    locations:forwardTo('db'),
    users:forwardTo('db'),
    async roomsFilter(parent, args, context, info) {
        return await context.db.query.rooms({
            where:{
                sport : args.sport,
        }})
    }
};

module.exports = Query;