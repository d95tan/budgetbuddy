const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const incomeSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    income: {
      type: Number,
      required: true,
    }
  }
)

const userPreferenceSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      //todo: unique 
    },
    updateFrequency: {
      type: Number,
    },
    incomeHistory: {
      type: [incomeSchema],
    },
    birthday: {
      type: String,
    }
  }, {
    timestamps: true,
  }
);

module.exports = model("UserPreference", userPreferenceSchema);