import mongoose from "mongoose";

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    hallId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'halls',
    },
    workers: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        require: true,
        ref: 'workers' 
    }],
    date: String,
    name: String,
    phone: String,
    email: String
})

const order = mongoose.model('order', OrderSchema);

export default order;