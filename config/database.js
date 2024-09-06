const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('backend', 'root', 'senha', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306 
});

module.exports = sequelize;

const connectDataBaseSql = async () => {
    try {
        await sequelize.authenticate();
    } catch (error) {
        console.error('Não foi possível conectar ao MySQL:', error);
    }
};

connectDataBaseSql();

module.exports = sequelize;
