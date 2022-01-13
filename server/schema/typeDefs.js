const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        house: String
        wand: Wand
    }

    type Sorting {
        _id: ID
        question: String
        gryffindor: String
        ravenclaw: String
        hufflepuff: String 
        slytherin: String

    }
    {
        _id: ID
        question: String
        answer: String
        subject: String 
        professor: String
        points: Number
    }

`

module.exports = typeDefs;