const { DataTypes, Sequelize } = require('sequelize')

/**
 * Init Dog model function
 * @param {Sequelize} sequelize 
 */
function initDog(sequelize) {
    const DogModel = sequelize.define('Dog', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {})
    return DogModel
}

console.log('Dog')

module.exports = initDog