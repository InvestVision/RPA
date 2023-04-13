import dotenv from 'dotenv';
dotenv.config()
const localhost = process.env.Url;
const localport = process.env.PORT || 4000;
const dbName = process.env.serverName;
const db_host = process.env.dbUrl;
const db_port = process.env.dbPORT || 27017;
const db_Name = process.env.db_serverName;
const prod_host = process.env.prod_host;
const prod_port = process.env.prod_db_port || 5000;
const prod_Name = process.env.prod_serverName;
const h_captcha = process.env.hcaptcha;
const token = process.env.token;

export const ap = {
    "server": {
        "host": localhost,
        "port": localport,
        "dbName": dbName,
    }
}

export const mongo = {
    "server": {
        "host": db_host,
        "port": db_port,
        "dbName": db_Name
    }
}
        
export const production = {
    "server": {
        "host": prod_host,
        "port": prod_port,
        "dbName": prod_Name
    }
}

export const cred = {
    captcha: {
        "user": h_captcha,
        "access": token,
    }
};