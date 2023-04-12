import dotenv from 'dotenv';
dotenv.config()
const localhost = process.env.Url;
const localport = process.env.PORT;
const dbName = process.env.serverName;
 const result = {
        "server": {
            "host": localhost,
            "port": localport,
            "dbName": dbName,
        },
        "mongo": {
            "host": "mongodb://localhost:",
            "port": 27017,
            "dbName": "/Result-app"
        }
 }

export default result;