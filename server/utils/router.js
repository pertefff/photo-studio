import { Router } from "express";
import QuestionController from "./QuestionController.js";
import WorkerController from "./WorkerController.js";
import OrderController from "./OrderController.js";
import HallController from "./HallController.js";
import * as db from './DataBaseUtils.js';
import _ from 'lodash';
import baseConfig from '../baseConfig.json' assert { type: 'json'}

// const baseConfig = require('../baseConfig.json')

const router = new Router()

router.get('/halls_main', async (req, res) => {
    const halls_main = await db.listRecords({ skip: 0, limit: 2, number: 0 });
    res.status(200).json({ message: "api halls_main", halls_main });
})

router.get('/halls', async (req, res) => {
    const halls = await db.listRecords({ skip: 0, limit: 10, number: 0 });
    res.status(200).json({ message: "api halls", halls });
})
//=
router.get('/about', async (req, res) => {
    const about = await db.listRecords({ skip: 0, limit: 10, number: 1 });
    res.status(200).json({ message: "api about", about });
})

router.post('/question', QuestionController.create);
router.post('/order', OrderController.createSpecial)

// react-admin 
router.post('/admin/authenticate', async (req, res) => {
    let { login, password } = req.body
    console.log("body ", req.body);
    if (login !== baseConfig.adminLog || password !== baseConfig.adminPass) {
        res.status(400).json({ message: 'Wrong login or password' });
        return;
    }
    res.status(200).json({ login, password })
})

// halls  //проверка на регистрацию
router.get('/admin/halls', HallController.get)
router.post('/admin/halls', HallController.create)
router.get('/admin/halls/:id', HallController.getOne)
router.put('/admin/halls/:id', HallController.update)
router.delete('/admin/halls/:id', HallController.delete)
router.delete('/admin/halls', HallController.deleteMany)

//workers
router.get('/admin/workers', WorkerController.get)
router.post('/admin/workers', WorkerController.create)
router.get('/admin/workers/:id', WorkerController.getOne)
router.put('/admin/workers/:id', WorkerController.update)
router.delete('/admin/workers/:id', WorkerController.delete)
router.delete('/admin/workers', WorkerController.deleteMany)

//orders
router.get('/admin/orders', OrderController.get)
router.post('/admin/orders', OrderController.create)
router.get('/admin/orders/:id', OrderController.getOne)
router.put('/admin/orders/:id', OrderController.update)
router.delete('/admin/orders/:id', OrderController.delete)
router.delete('/admin/orders', OrderController.delete)

//questions
router.get('/admin/questions', QuestionController.get)
router.post('/admin/questions', QuestionController.create)
router.get('/admin/questions/:id', QuestionController.getOne)
router.put('/admin/questions/:id', QuestionController.update)
router.delete('/admin/questions/:id', QuestionController.delete)
router.delete('/admin/questions', QuestionController.deleteMany)

export default router