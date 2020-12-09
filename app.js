const fs = require('fs')
const express = require('express')
const app = express()
const dogsRouter = require('./routes/dogs.router')
const { sequelize } = require('./models');

(async function () {
    try {
        await sequelize.authenticate()
        console.log('Successful connection')
        await sequelize.sync()
        console.log('Successful sync')
        main()
    } catch (error) {
        console.error('DB server error')
    }
})()

function main() {
    app.use(express.json())
    
    app.get('/', (req, res, next) => {
        res.send('App root')
    })
    
    app.use('/api/dog', dogsRouter)
    
    app.listen(3000, () => {
        console.log('Server started at http://localhost:3000')
    })
}
