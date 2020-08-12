const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: { type: String },
    description: {},
    duration: {},
    date: {},
}, {
    timestamps: true,
});