const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema (
    {
        username: {
            type: String, 
            required: true,
            unique: true, 
            trim: true
        },
        email: {
            type: String, 
            required: true,
            unique: true,
            match:[/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        wand: [Wand],
        year: { type: Number, default: 1}
        
    }
)