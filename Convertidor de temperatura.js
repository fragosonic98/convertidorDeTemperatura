// 1. Pedir 3 números al usuario 
let temperaturaCelsius= parseFloat(prompt("Ingresa temperatura en grados Celsius")); //ParseFloat convierte el valor ingresado en números tipo float (decimales)

// 2. Convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
const formulaKelvin = 273.15;
const formulaFahrenheit = ((9*temperaturaCelsius)/5)+32;

if (isNaN(temperaturaCelsius)){ //is NaN, No es un Número
      alert("Error: Ingresa un número, no se admiten caracteres.");
}else{
      const Kelvin = temperaturaCelsius + formulaKelvin
      const Fahrenheit = ((9*temperaturaCelsius)/5)+32
      alert(temperaturaCelsius + " equivalen a " + Kelvin + "° Kelvin o " + Fahrenheit + "° Farenheit");
}