import * as db from './DataBaseUtils.js';
import _ from 'lodash';

class WorkerController {
    async get(req, res) {
        const filter = JSON.parse(req.query.filter ?? '{}')
        const query = filter?.ids ? { id: { $in: filter.ids } } : {}
        const skip = req.query.skip ?? 0
        const limit = req.query.limit ?? 10
        const sort = JSON.parse(req.query.sort ?? '[]')
        const userRecords = await db.listRecords({ query, skip, limit, mySort: sort, number: 1 });
        const totalRecords = await db.countRecords(1, query)
        res.status(200).json({ records: userRecords, total: totalRecords });
    }

    async create(req, res) {
        const result = await db.createWorker(req.body)

        if (_.isError(result)) {
            console.log('createWorkerError: ', error.message);
            res.status(400).json({ message: result.message });
            return;
        }
        res.status(200).json(result);
    }

    async getOne(req, res) {
        const result = await db.getRecord({ id: req.params.id, number: 1 })
        if (_.isNil(result)) {
            console.log('getWorkerError: ', result.message);
            res.status(404).json({ message: result.message })
            return
        }
        res.status(200).json(result)
    }

    async update(req, res) {
        let result = await db.getRecord({ id: req.params.id, number: 1 })
        if (_.isNil(result)) {
            console.log('editWorkerError: ', result.message);
            res.status(404).json({ message: result.message })
            return
        }
        result = await db.updateRecord(req.body, 1)
        res.status(200).json(result)
    }

    async delete(req, res) {
        let result = await db.getRecord({ id: req.params.id, number: 1 })
        if (_.isNil(result)) {
            console.log('editWorkerError: ', result.message);
            res.status(404).json({ message: result.message })
            return
        }
        result = await db.deleteRecord({ id: req.params.id, number: 1 })
        res.status(200).json(result)
    }

    async deleteMany(req, res) {
        const filter = JSON.parse(req.query.filter ?? '{}')
        await db.deleteManyRecords({ ids: filter?.ids, number: 1 })
        res.status(200).json({})
    }
}

export default new WorkerController()