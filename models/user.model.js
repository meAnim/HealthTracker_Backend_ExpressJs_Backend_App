const { Schema } = require("mongoose");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
    },
}, {
    timestamps: true,
});