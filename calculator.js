"use strict"


const counter = document.getElementById("counter");

const minusOne = () => {
    counter.value = parseInt(counter.value) - 1;
    history();
}

const plusOne = () => {
    counter.value = parseInt(counter.value) +1;
    history();
}

const reset = () => {
        counter.value = "0"
    history();    
}

const minusFive = () => {
    counter.value = parseInt(counter.value) -5;
    history();
}

const plusFive = () => {
    counter.value = parseInt(counter.value) +5;
    history();
}

const minusTen = () => {
    counter.value = parseInt(counter.value) -10;
    history();
}

const plusTen =() => {
    counter.value = parseInt(counter.value) +10;
    history();
}

const history = () => {
const hist = document.createElement("p");
hist.innerText = counter.value;
const addToBody = document.body.appendChild(hist);
const output = document.getElementById("output");
output.prepend(addToBody);
}