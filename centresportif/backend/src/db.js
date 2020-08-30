const { Prisma } = require('prisma-binding')

const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'https://eu1.prisma.sh/maxscorni-dce3a0/centresportifbe/dev',
    secret: "test123",
    debug: false
});

module.exports = db;
