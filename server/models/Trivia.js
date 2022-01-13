const { Schema, model } = require("mongoose");

const TriviaSchema = new Schema(
    {
        question: {
            type: String,
            required: true,
        },
        answer: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
        professor: {
            type: String,
            required: true,
        },
        points: {
            type: Number,
            required: true,
        },
    });

module.exports = TriviaSchema;