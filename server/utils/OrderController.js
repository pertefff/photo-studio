import * as db from './DataBaseUtils.js';
import _ from 'lodash';

class OrderController {
    async get(req, res) {
        const filter = JSON.parse(req.query.filter ?? '{}')
        const query = filter?.ids ? { id: { $in: filter.ids } } : {}
        const skip = req.query.skip ?? 0
        const limit = req.query.limit ?? 10
        const sort = JSON.parse(req.query.sort ?? '[]')
        const orderRecords = await db.listRecords({
            filter: query,
            skip,
            limit,
            mySort: sort,
            number: 2,
        });
        const totalRecords = await db.countRecords(2, query)
        res.status(200).json({ records: orderRecords, total: totalRecords });
    }

    async create(req, res) {
        const result = await db.createOrder(req.body)

        if (_.isError(result)) {
            console.log('createOrderError: ', error.message);
            res.status(400).json({ message: result.message });
            return;
        }
        res.status(200).json(result);
    }

    async createSpecial(req, res) {
        let workersRecords = await db.listRecords({
            filter: {
                profession: {
                    $in: req.body.workers
                },
            },
            skip: 0,
            limit: 10,
            mySort: JSON.parse(req.query.sort ?? '[]'),
            number: 1,
        })
        workersRecords = _.uniqWith(workersRecords, (a, b) => a.profession === b.profession)
        const newOrderRecord = {
            ...req.body,
            workers: workersRecords.map((worker) => worker._id),
        }
        const result = await db.createOrder(newOrderRecord)

        if (_.isError(result)) {
            console.log('createOrderError: ', error.message);
            res.status(400).json({ message: result.message });
            return;
        }
        res.status(200).json(result);
    }

    async getOne(req, res) {
        const result = await db.getRecord({ id: req.params.id, number: 2 })
        if (_.isNil(result)) {
            console.log('getOrderError: ', result.message);
            res.status(404).json({ message: result.message })
            return
        }
        res.status(200).json(result)
    }

    async update(req, res) {
        let result = await db.getRecord({ id: req.params.id, number: 2 })
        if (_.isNil(result)) {
            console.log('editOrderError: ', result.message);
            res.status(404).json({ message: result.message })
            return
        }
        result = await db.updateRecord(req.body, 2)
        res.status(200).json(result)
    }

    async delete(req, res) {
        const filter = JSON.parse(req.query.filter ?? '{}')
        if (_.isNil(filter?.ids)) {
            let result = await db.getRecord({ id: req.params.id, number: 2 })
            if (_.isNil(result)) {
                console.log('editOrderError: ', result.message);
                res.status(404).json({ message: result.message })
                return
            }
            await db.deleteRecord({ id: req.params.id, number: 2 })
        } else {
            await db.deleteManyRecords({ ids: filter.ids, number: 2 })
        }
        res.status(200).json({})
    }

}

export default new OrderController()