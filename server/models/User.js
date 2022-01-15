const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const WandSchema = new Schema(
  {
    wood: {
      type: String,
    },
    core: {
      type: String,
    },
    length: {
      type: Number,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    // look into pulling from sorting house column
    house: {
      type: String,
    },

    wand: WandSchema,
    year: { type: Number, default: 1 },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

UserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

UserSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model("User", UserSchema);

module.exports = User;
