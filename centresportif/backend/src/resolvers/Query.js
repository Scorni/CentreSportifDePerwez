const {forwardTo} = require('prisma-binding');

const Query = {
    
    clients:forwardTo('db')
};

module.exports = Query;