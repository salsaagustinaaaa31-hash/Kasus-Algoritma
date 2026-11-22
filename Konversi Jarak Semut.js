const prompt = require("prompt-sync")({sigint : true});

let x = parseInt(prompt("jarak dalam Cm : "));
// Hitung Kilometer,Meter dan Cm

let km = Math.floor(x / 100000);
let m = Math.floor((x % 100000) / 100); // sisa km diubah ke meter
let cm = x % 100;

console.log(km + "km");
console.log(m + "m");
console.log(cm + "cm");
