const { Schema, model } = require('mongoose');

const SortingSchema = new Schema({
  // questions
  question: {
    type: String,
    required: true
  },
  // gryffindor answer
  gryffindor: {
    type: String,
    required: true
  },
  // ravenclaw answer
  ravenclaw: {
    type: String,
    required: true
  },
  // hufflepuff answer
  hufflepuff: {
    type: String,
    required: true
  },
  // slytherin answer
  slytherin: {
    type: String,
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

const Sorting = model('Sorting', SortingSchema);

module.exports = Sorting;
