"use strict"

const URL = "https://reqres.in/api/users"
const URL2 = "https://reqres.in/api/users/2"
const URL3 = "https://reqres.in/api/register"
const URL4 = "https://reqres.in/api/login"

function getUsers() {
    axios.get(URL)
        .then(response => console.log(response.data))
        .catch(err => console.error(err));
}

axios.get(URL2)
    .then(response => console.log(response.data))
    .catch(err => console.error(err));

function createUser() {
    const name = document.getElementById("userName").value;
    const job = document.getElementById("userJob").value;
    console.log("NAME:", name);
    axios.post(URL, {
        name,
        job,
    })
        .then(response => console.log(response.data))
        .catch(err => console.error(err));
}

axios.post(URL3, {
    email: "eve.holt@reqres.in",
    password: "pistol"
})
    .then(response => console.log(response.data))
    .catch(err => console.error(err));

axios.post(URL4, {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
})
    .then(response => console.log(response.data))
    .catch(err => console.error(err));






