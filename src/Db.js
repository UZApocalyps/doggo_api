const { Sequelize } = require('sequelize');
class Db {
    constructor(){
        var env = process.env 
        // Option 3: Passing parameters separately (other dialects)
        console.log(env);
        const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
            host: 'localhost',
            dialect: 'mariadb'
        });
        try {
            sequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }
}

db = new Db();
module.exports = db;