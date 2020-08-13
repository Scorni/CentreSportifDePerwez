const Query = {
    Person(parent, args, ctx, info){
        return [ { name : 'Maxou'}]
    }
};

module.exports = Query;