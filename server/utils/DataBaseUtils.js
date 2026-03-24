import Hall from '../models/halls.js'
import Order from "../models/order.js";
import Questions from "../models/questions.js";
import Worker from '../models/workers.js'
import _ from 'lodash'

const dataModels = [Hall, Worker, Order, Questions]

//залы
export function createHall({ title, img, description, cost }) {
    const hall = new Hall({
        title,
        img,
        description,
        cost,
    })
    console.log("worked")

    return hall.save()
}

export function listHalls({ skip, limit }) {
    return Hall.find().skip(skip).limit(limit);
}

export function getHall(id) {
    return Hall.findById(id);
}

export function countHalls() {
    return Hall.countDocuments()
}

export function deleteHalls(id) {
    return Hall.findByIdAndDelete(id);
}

export function updateHall(record) {
    return Hall.findByIdAndUpdate(record.id, record, { new: true })
}


//общие
export function listRecords({ filter = {}, skip, limit, number, mySort = [], populate = '' }) {
    let field = mySort[0]
    let order = mySort[1]
    let userSort = { [String(field)]: order === 'ASC' ? 1 : -1 }
    // console.log(mySort);
    return dataModels[number].find(filter).populate(populate).sort(userSort).skip(skip).limit(limit);
}

export function getRecord({ id, number }) {
    return dataModels[number].findById(id);
}

export function countRecords(number, filter = {}) {
    return dataModels[number].countDocuments(filter)
}

export function deleteRecord({ id, number }) {
    return dataModels[number].findByIdAndDelete(id);
}
export function deleteManyRecords({ ids, number }) {
    return dataModels[number].deleteMany({ _id: { $in: ids } });
}

export function updateRecord(record, number) {
    const newRecord = { ...record, __v: Number(record.__v) + 1 }
    return dataModels[number].findByIdAndUpdate(newRecord.id, newRecord, { new: true })
}

//вопросы
export function createQuestion(questionData) {
    if (!questionData) { return new Error('invalid parameters') }
    const { name, email, question } = questionData;
    const quest = new Questions({
        name,
        email,
        question,
    })
    return quest.save();
}

//заказы
export function createOrder(orderData) {
    if (!orderData) {
        return new Error('invalid parametrs, wrong order data')
    }
    const { hallId, workers = [], date, name, phone, email } = orderData;
    const order = new Order({
        hallId,
        workers,
        date,
        name,
        phone,
        email
    });

    return order.save();
}

//работники
export function createWorker(workerData) {
    if (!workerData) {
        return new Error('invalid parametrs, wrong data')
    }
    const { name, profession, img, info, schedule, salary, works = [] } = workerData;
    const worker = new Worker({
        name,
        profession,
        img,
        info,
        schedule,
        salary,
        works,
    })

    return worker.save()
}