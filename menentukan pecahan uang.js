const prompt = require("prompt-sync")({sigint : true})

let nilaiUang = Number(prompt("Masukan nilai uang :  "));
let sisaUang = nilaiUang;

const jumlah1000 = Math.floor(sisaUang / 1000);
sisaUang = sisaUang % 1000

const jumlah500 = Math.floor(sisaUang / 500 );
sisaUang = sisaUang % 500

const jumlah100 = Math.floor(sisaUang / 100);
sisaUang = sisaUang % 100

const jumlah50 = Math.floor(sisaUang / 50)
sisaUang = sisaUang % 50

const jumlah25 = Math.floor(sisaUang / 25)
sisaUang = sisaUang % 25

console.log(`${jumlah1000} ${jumlah500} ${jumlah100} ${jumlah50} ${jumlah25}`)
