const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('backend', 'root', 'root1234', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306 
});

module.exports = sequelize;

const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
    } catch (error) {
        console.error('Não foi possível conectar ao MySQL:', error);
    }
};

connectDatabase();

module.exports = sequelize;
