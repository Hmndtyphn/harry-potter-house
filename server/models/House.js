const { Schema, model } = require("mongoose");
const User = require("./User");

const HouseSchema = new Schema(
  {
    wizards: [
      {
        type: Schema.Types.ObjectId,
        ref: User
      }
    ],
    points: {
      type: Number,
      default: 0
    },
    headOfHouse: {
      type: String
    }
  }
);

const House = model("House", HouseSchema);

module.exports = House;