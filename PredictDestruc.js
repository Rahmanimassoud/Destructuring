
// Destructure and Predict the output of the following blocks of code:

// 1-
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

console.log(randomCar); //would log Tesla
console.log(otherRandomCar); //would log Mercedes

// 2-
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

console.log(name); //would through an error
console.log(otherName); //would log Elon

// 3-
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  

console.log(password); //would log the password
console.log(hashedPassword); //would be undefined 

// 4-
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;

console.log(first == second); //would log false
console.log(first == third); //would log true

// 5-
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;

console.log(key); //would log value
console.log(secondKey); //would log the entire array
console.log(secondKey[0]); //would log 1
console.log(willThisWork); //would log 5