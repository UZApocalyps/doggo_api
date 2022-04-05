const { Sequelize } = require('sequelize');
let sequelize;
class Db {
    constructor(){
        var env = process.env 
        // Option 3: Passing parameters separately (other dialects)
            sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
            host: 'localhost',
            dialect: 'mariadb',
            port: env.DATABASE_PORT
        });
    }
    getDatabase()
    {
        return sequelize;
    }
}

db = new Db();
module.exports = db;