const {forwardTo} = require('prisma-binding');

const Query = {
    clients:forwardTo('db'),
    rooms:forwardTo('db'),
    location:forwardTo('db'),

};

module.exports = Query;