const { Schema, model  } = require('mongoose');

const QuestionSchema = new Schema(
    {
        question: {
            type: String
        },
        answerOptions: [String],
        isCorrect: {
            type: String
        },
        year: {
            type: [Number]
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

const Question = model('Question', QuestionSchema);

module.exports = Question;