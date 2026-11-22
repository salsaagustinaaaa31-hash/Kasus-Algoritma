const prompt = require("prompt-sync")({sigint:true})

let t = Number(prompt("masukan tinggi badan : "))

let hasil = t - 100
let pengurangan =  t * 10 / 100
let berat = hasil - pengurangan     

console.log("Berat badan ideal :",berat)