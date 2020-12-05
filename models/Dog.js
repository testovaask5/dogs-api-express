const { DataTypes } = require('sequelize')

module.exports = function(sequelize) {
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