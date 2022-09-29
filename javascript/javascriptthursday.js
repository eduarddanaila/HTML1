"use strict"

let multiply = (x) => {
    return (y) => {   
    return x-y;
    };
}

let multi2 = multiply(2);
console.log(multi2(10));

let multi5 = multiply(5);
console.log(multi5(5));



const title = document.createElement("h1");

title.innerText = "Let's manipulate the DOM";

document.body.appendChild(title);




//Create function that creates paragraph tag
const makePara = () => {
   const newPara = document.createElement("p");
    newPara.id - "paraID";
    newPara.innerText = "New paragraph made";
    document.body.appendChild(newPara);
}

makePara();

const updatePara =() => {
    const existingPara = document.getElementById("paraID");
    const newText = docuent.getElementById("paraText").value;
    existingPara.innertext = newText;
}



const add = (a,b,operator) =>{
    
}
