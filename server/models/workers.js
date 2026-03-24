import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const workersSchema = new Schema({
    name: {type: String, required: true},
    profession: String,
    img: String,
    info: String,
    schedule: String,
    salary: Number,
    works: Array,
})

const workers = mongoose.model('workers', workersSchema)

export default workers;