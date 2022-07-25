const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query{
        users:[User!]
        user(id:ID!):User
    }

    input signupInput{
        name:String!
        email:String!
        password:String!
    }

    input loginInput{
        email:String!
        password:String!
    }

    type Token{
        token:String!
    }

    extend type Mutation{
        signup(input : signupInput):User
        login(input: loginInput) : Token
    }
        
    type User{
        id:ID!
        name:String!
        email:String!
        tasks:[Task!]
        myCar:[Car!]
        createdAt: String!
        updatedAt: String!
   }
`;