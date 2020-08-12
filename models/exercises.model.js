const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseShema = new Schema({
    username: {},
    description: {},
    duration: {},
    date: {},
}, {
    timestamps: true,
});