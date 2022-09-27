"use strict"

const text = "This is a message";
console.log(text);
console.info(text);
console.warn(text);
console.error(text);

let myCar = "BMW";
let myModel = "4 Series";
console.info("my fav car is ", myCar, " and the model is ", myModel);

let a;
let b = "12345";
let c = 12334;
let d = true;
let e = { a: "JavaScript" };

console.log(a, b, c, d, e);
console.log(typeof b, typeof c, typeof d, typeof e);


let totalMoney = "4000";
let moneyPaidSoFar = "2348";
let totalLeftToPay = totalMoney - moneyPaidSoFar;

console.log(`The total bill is £${totalMoney} and the remaining amount of money is £${totalLeftToPay}`);


for (let i = 0; i < 3; i++) {
    console.log(`i = ${i}`)
}

let A = 100
while (A <= 200) {
    console.log(A)
    A++
}
//for (let A=100; A<=200, A++) {
//    console.log(A)
//}


let B = 100
while (B <= 200) {
    if (B % 2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
    B++;
}

//for (let B=100; B<=200; B++) {
//if (B%2==0) {
//   console.log("-");
//} else {
//    console.log("*");
//}  
//}

for (let i = 0; i < 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(j);
    }
}

let today = 2;

switch (today) {
    case 0:
        console.log(`Today is Tuesday`);
    case 1:
        console.log(`Today is Wednesday`);
    case 2:
        console.log(`Today is Thursday`);
    case 3:
        console.log(`Today is Friday`);
    case 4:
        console.log(`Today is Saturday`);

    case 5:
        console.log(`Today is Sunday`);
        break;
    case 6:
        console.log(`Today is Monday`);
    default:
        console.log(`I do not know`);
        break;

}

let strictA = true;
let strictB = 1;

console.log(strictA == strictB);//true
console.log(strictA === strictB);//false


console.log(strictA != strictB);//false
console.log(strictA !== strictB);//true


let age = 66;

if (age >= 18 && age <= 65) {
    console.log(`age is in the required range`);
} else if (age < 18) {
    console.log(`underage`);
} else {
    console.log(`all is good`);
}



age == 10 ? console.log(`age is above 50`) : console.log(`age is below 50`);




for (let i = 1; i <= 100; i++) {
    if (i % 15 ==0) {
        console.log(`fizzbuzz`);
    }
    else if (i % 3 == 0) {
        console.log(`Fizz`);
    }
    else if (i % 5 == 0) {
        console.log(`Buzz`);
    }
    else {
        console.log(i);
    }
}

//for (let i = 0; i <= 100; i++) {
//    switch (true) {
 //       case (i % 3 == 0):
//            console.log("fizz")
//            break;
//        case (i % 5 == 0):
//            console.log("Buzz")
//            break;
//        case (i % 15 == 0):
//            console.log("fizzbuzz")
//    }



