const { Schema, model, Types } = require('mongoose');

const SubjectSchema = new Schema(
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
        questions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Question'
            }
        ],
        year:[Number]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

const Subject = model('Subject', SubjectSchema);

module.exports = Subject;