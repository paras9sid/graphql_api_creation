const { gql } = require('apollo-server-express');

const userTypeDefs = require('./user');
const carTypeDefs = require('./car');


// _:String = placeholder as fields cant be empty
const typeDefs = gql`
    type Query{
        _: String
    }

    type Mutation{
        _: String
    }
`;

module.exports = [
    typeDefs,
    userTypeDefs,
    carTypeDefs
]