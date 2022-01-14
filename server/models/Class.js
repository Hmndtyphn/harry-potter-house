const { Schema, model, Types } = require('mongoose');

const ClassSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        professor: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        quizzes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Quiz'
            }
        ],
        year: [Number]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

const Class = model('Class', ClassSchema);

module.exports = Class;