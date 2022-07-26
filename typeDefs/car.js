const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query{
        myCar:[Car!]
        myCarByNumber(reg_num:ID!):Car
    }

    input createCarInput{
        reg_num:String!
        make:String!
        model:String!
        color:String!
    }
    
    extend type Mutation{
        createCar(input: createCarInput!):Car
    }
    
    type Car{
        reg_num:String!
        make:String!
        model:String!
        color:String!
        user:User!
    }
`;