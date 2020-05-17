import * as mongo from 'mongodb';

const MONGO_URL = "mongodb://room_203_adm:room_203_adm@ds215229.mlab.com:15229/heroku_pjdmzjmd?retryWrites=true";;
const DB_NAME = "heroku_pjdmzjmd";
const PAGES_NAME = "pages";

const getDb = async (): Promise<any> =>  {
    return new Promise<any>((resolve, reject) => {
        console.log("1");
        mongo.MongoClient.connect(MONGO_URL, {useNewUrlParser: true}, (err, client: mongo.MongoClient) => {
            console.log("2");
            resolve({
                PAGES_COLLECTION: client.db(DB_NAME).collection(PAGES_NAME)
            });
        });
    });
};

export default {
    getDb: getDb
};