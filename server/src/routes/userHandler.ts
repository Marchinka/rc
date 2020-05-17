var express = require('express');
import mongoRepository from "../data-layer/mongo-repository";
var router = express.Router();

router.post('/', (req : any, res: any) => {
    console.log("Hello node");
    res.send('Hello World 3!');
});

router.get('/', async (req : any, res: any) => {
    let db = await mongoRepository.getDb();
    let result = await db.PAGES_COLLECTION.find({}).toArray();
    res.json(result);
});

export default router;