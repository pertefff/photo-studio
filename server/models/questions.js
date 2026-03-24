import mongoose from "mongoose";

const Schema = mongoose.Schema;

const questSchema = new Schema({
    name: String,
    email: String,
    question: String,
})

const questions = mongoose.model('questions', questSchema)

export default questions;