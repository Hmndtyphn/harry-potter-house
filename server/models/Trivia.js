const { Schema, model, Types } = require('mongoose');

const TriviaSchema = new Schema(
    {
        question: {
            type: String
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

const Trivia = model('Trivia', TriviaSchema);

module.exports = Trivia;