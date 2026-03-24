import mongoose from "mongoose";

const Schema = mongoose.Schema;

const HallsSchema = new Schema({
    title: { type: String },
    img: { type: String },
    description: { type: String },
    cost: { type: Number },
})

const halls = mongoose.model('halls', HallsSchema)

export default halls;