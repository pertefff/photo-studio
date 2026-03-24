import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './utils/router.js';
import baseConfig from './baseConfig.json' assert { type: 'json'}

const app = express();
const PORT = baseConfig.PORT ?? 5000;
//"mongodb+srv://kate_z:katezaytseva@cluster0.iqkkb7s.mongodb.net/?retryWrites=true&w=majority"
async function start() {
    try {
        await mongoose.connect(baseConfig.database);

        app.use(express.json({ extended: true }));
        app.use(bodyParser.urlencoded({ extended: true })); //?

        app.use(cors({ origin: "*" }));

        app.use('/api', router)

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })

    } catch (err) { console.error(err) }
}

start();