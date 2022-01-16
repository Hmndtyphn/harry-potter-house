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

    type Question {
        _id: ID
        question: String
        answerOptions: [String]
        isCorrect: String
        year: [Int]
    }

    type Subject {
        _id: ID
        name: String
        description: String
        professor: String
        image: String
        questions: [Question]
        year: [Int]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        questions: [Question]
        subjects: [Subject]
        subject(subject: String!): Subject
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        updateUser(username: String!, email: String!, password: String!): User
        
    }
`;
// add delete user to mutation above
module.exports = typeDefs;