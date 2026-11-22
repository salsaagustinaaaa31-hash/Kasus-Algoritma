const prompt = require("prompt-sync")({sigint : true})

let X = Number(prompt("x : "))
let Y = Number(prompt("y : "))
let Z = Number(prompt("z : "))

let Sementara = 0

X = Y
Y = Z
Z = Sementara

console.log(`${X}`)
console.log(`${Y}`)
console.log(`${Z}`)
