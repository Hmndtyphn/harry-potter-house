const { Schema, model, Types } = require('mongoose');

const QuizSchema = new Schema(
    {
        question: {
            type: String,
            required: true
        },
        answerOptions: [String],
        isCorrect: {
            type: String
        },
        subject: {
            type: Schema.Types.ObjectId,
            ref: 'Class'
        },
        year: {
            type: Number,
            required: true
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

const Quiz = model('Quiz', QuizSchema);

module.exports = Quiz;