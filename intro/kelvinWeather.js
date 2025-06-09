//input temperature
const kelvin = 0;
//celsius is 273 lower than kevlin
const celsius = kelvin - 273;
//using fahrenheit equation
let fahrenheit = celsius * (9/5) + 32
//to get rid of decimal
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)