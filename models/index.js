const Sequelize = require('sequelize').Sequelize
const dogInitFunc = require('./Dog')

const sequelize = new Sequelize('dogs', 'san', 'YOS6bi', {
    host: '109.206.169.221',
    dialect: 'mysql'
});

const Dog = dogInitFunc(sequelize)

module.exports = {
    sequelize,
    Dog
}