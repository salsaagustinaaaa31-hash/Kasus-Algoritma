const prompt = require ("prompt-sync")({sigint : true });

let x = Number(prompt("Hari : "));

//instialisasi  
let tahun = Math.floor(x / 365)
let sisa = x % 365

let bulan = Math.floor(sisa / 30)
let Hari  = sisa % 30

console.log("Tahun :",tahun)
console.log("Bulan :",bulan)
console.log("Hari  :",Hari)