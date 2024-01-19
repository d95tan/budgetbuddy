const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const savingSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  isShared: { type: Boolean, default: false },
  amount: { type: Number, required: true },
});

const investmentSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  amount: { type: Number, required: true, default: 0 },
  deposit: { type: Number, required: true, default: 0 },
});

const liabilitySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  amount: { type: Number, required: true, default: 0 },
});

const logSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    date: {
      type: Date,
      required: true,
    },
    savings: {
      type: [savingSchema],
    },
    investments: {
      type: [investmentSchema],
    },
    liabilities: {
      type: [liabilitySchema],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Log", logSchema);
