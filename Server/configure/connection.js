const {MongoClient}=require("mongodb");
const mongoclient=new MongoClient("mongodb://localhost:27017");
async function createConnection(){
    await mongoclient.connect()
    const db=mongoclient.db("QTchatdb");
    const collection = db.collection("usersinfo");
    return collection;
}
module.exports = createConnection;
//then() and catch() formate
// function createConnection() {
//     return mongoclient.connect()
//         .then(() => {
//             const db = mongoclient.db("QTchatdb");
//             const collection = db.collection("usersinfo");
//             return collection;
//         })
//         .catch((err) => {
//             console.error("Failed to connect to MongoDB:", err);
//             throw err;
//         });
// }
