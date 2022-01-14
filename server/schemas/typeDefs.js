const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        house: String
        wand: WandSchema
    }

    type WandSchema {
        _id: ID
        wood: String
        core: String
        length: String
    }

    type Quiz {
        _id: ID
        question: String
        answerOptions: [String]
        subject: Class
        year: Int
    }

    type Class {
        _id: ID
        name: String
        description: String
        professor: String
        image: String
        quizzes: [Quiz]
        year: [Int]
    }

    type Sorting {
        _id: ID
        question: String
        gryffindor: String
        ravenclaw: String
        hufflepuff: String 
        slytherin: String

    }
    type Trivia {
        _id: ID
        question: String
        answer: String
        subject: String 
        professor: String
        points: Int
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: User
        users: [User]
        user: (username:String!): User
    }
`;

module.exports = typeDefs;