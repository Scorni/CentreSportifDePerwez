const {forwardTo} = require('prisma-binding');

const Query = {
    clients:forwardTo('db'),
    rooms:forwardTo('db'),
    locations:forwardTo('db'),
    users:forwardTo('db')
};

module.exports = Query;