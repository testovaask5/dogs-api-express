const fs = require('fs')
const express = require('express')
const app = express()
let dogs = require('./dogs.json')
// let dogs = ['Rex', 'Bobik', 'Sharick']

function saveDogsToFile() {
    const dogsJSON = JSON.stringify(dogs)
    fs.writeFile('./dogs.json', dogsJSON, 'utf8', () => {
        console.log('The file has been saved!');
    })
}

app.use(express.json())
// API http
// routing
// Restful API (CRUD)
// C - create R - read U - update D - delete
// C - POST (HTTP)
// R - GET (HTTP)
// U - PATCH/PUT (HTTP)
// D - DELETE (HTTP)

app.get('/', (req, res) => {
    res.send('App root')
})

app.get('/api/dog', (req, res) => {
    res.send(dogs)
})

app.get('/api/dog/:dogId', (req, res) => {
    const dogIndex = req.params.dogId
    res.send(dogs[dogIndex])
})

app.post('/api/dog', (req, res) => {
    const newDog = req.body.name
    dogs.push(newDog)
    res.send(dogs)
    saveDogsToFile()
})

app.patch('/api/dog/:dogId', (req, res) => {
    const dogIndex = req.params.dogId
    const newDogName = req.body.name
    dogs[dogIndex] = newDogName
    res.send(dogs)
    saveDogsToFile()
})

app.delete('/api/dog/:dogId', (req, res) => {
    const dogIndex = +req.params.dogId
    dogs = dogs.filter((_, index) => {
        let result = (index !== dogIndex)
        return result
    })
    res.send(dogs)
    saveDogsToFile()
})

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000')
})