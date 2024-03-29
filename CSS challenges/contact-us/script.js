
let fields = {}

document.addEventListener("DOMContentLoaded", function() {
    fields.fullName = document.getElementById('fullName')
    fields.email = document.getElementById('email')
    fields.message = document.getElementById('message')
    fields.newsletter = document.getElementById('newsletter')
})

function isNotEmpty(value){
    if(value == null || typeof value == 'undefined') return false;
    return (value.length > 0)
}

function isEmail(email){
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return regex.test(String(email).toLowerCase())
}

function fieldValidation(field, validationFunction){
    if(field == null) return false

    let isFieldValid = validationFunction(field.value)
    if(!isFieldValid){
        field.className = 'placeholderRed'
    } else {
        field.className = ''
    }

    return isFieldValid
}

function isValid(){
    let valid = true

    valid &= fieldValidation(fields.fullName, isNotEmpty)
    valid &= fieldValidation(fields.email, isEmail)
    valid &= fieldValidation(fields.message, isNotEmpty)

    return valid
}

class User{
    constructor(fullName, email, message, newsletter){
        this.fullName = fullName
        this.email = email
        this.message = message
        this.newsletter = newsletter
    }
}

function submitInfo(){
    if (isValid()){
        let usr = new User(fullName.value, email.value, newsletter.checked)

        alert(`${usr.fullName} thanks for registering`)
    } else {
        alert('You missed something')
    }
}