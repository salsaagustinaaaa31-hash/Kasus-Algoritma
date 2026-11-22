const prompt = require("prompt-sync")({sigint:true})

let meter = Number(prompt("Panjang sebuah benda dari satuan meter : "))

let inch = meter * 39.37
let feet = meter * 3.28084
let yard = meter * 1.09361

console.log("panjang sebuah benda dari inch: " + inch)
console.log("panjang sebuah benda dari feet: " + feet)
console.log("panjang sebuah benda dari yard: "+ yard)