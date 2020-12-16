// получить все телефоны
const getAllPhones = document.querySelector('#all-phones')

// получить 1 телефон из базы
const getOnePhoneForm = document.querySelector('#get-one-phone-form')
const onePhone = document.querySelector('#requestedPhone')

// создать новый телефон
const postPhoneForm = document.querySelector('#post-phone-form')

// изменить существующий телефон
const updatePhoneForm = document.querySelector('#update-phone-form')

// удалить телефон из базы
const deletePhoneForm = document.querySelector('#delete-phone-form')


//ПОЛУЧЕНИЕ ВСЕХ ТЕЛЕФОНОВ
fetch('http://localhost:3000/api/dog').then((response) => {
    if (response.ok) {
        return response.json()
    }
}).then((dogs) => {
    let result = ''
    dogs.forEach((dog) => {
        result += `<li><p>Name:${dog.name}<br>Breed:${dog.breed}</li>`
    })
    getAllPhones.innerHTML = result
})


// ПОЛУЧЕНИЕ ОДНОГО ТЕЛЕФОНА
getOnePhoneForm.addEventListener('click', async function(event){
    event.preventDefault()
    const phoneId = getOnePhoneForm[0].value
    let response = await fetch(`http://localhost:3000/api/phone/${phoneId}`)
    if (response.ok) {
       let phoneModel = await response.json()
       if (phoneModel.model) onePhone.innerHTML = phoneModel.model
    }
})


//СОЗДАНИЕ НОВОГО ТЕЛЕФОНА
postPhoneForm.addEventListener('submit', async function(event) {
     event.preventDefault()
    const newPhoneModel = postPhoneForm[0].value
    const newPhoneDisplaySize = postPhoneForm[1].value

    let response = await fetch('http://localhost:3000/api/phone', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: newPhoneModel,
            displaySize: newPhoneDisplaySize,
        })
    })
    location.reload()
})


//ИЗМЕНЕНИЕ СУЩЕСТВУЮЩЕГО ТЕЛЕФОНА
updatePhoneForm.addEventListener('submit', async function(event) {
    event.preventDefault()
    const updatePhoneId = updatePhoneForm[0].value
   const updatePhoneModel = updatePhoneForm[1].value
   const updatePhoneDisplaySize = updatePhoneForm[2].value
   const updatedPhone = {}
   if (updatePhoneModel) updatedPhone.model = updatePhoneModel
   if (updatePhoneDisplaySize) updatedPhone.displaySize = updatePhoneDisplaySize

   let response = await fetch(`http://localhost:3000/api/phone/${updatePhoneId}`, {
       method: 'PATCH',
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify(
        updatedPhone
       )
   })
   location.reload()
})


// УДАЛЕНИЕ СУЩЕСТВУЮЩЕГО ТЕЛЕФОНА
deletePhoneForm.addEventListener('submit', async function(event) {
    event.preventDefault()
    const deletePhoneId = deletePhoneForm[0].value
   let response = await fetch(`/api/phone/${deletePhoneId}`, {
       method: 'DELETE',
   })
   location.reload()
})

