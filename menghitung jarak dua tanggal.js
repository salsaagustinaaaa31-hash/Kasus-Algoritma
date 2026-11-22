const prompt = require("prompt-sync")({sigint:true})

let tanggal1 = Number(prompt("tanggal pertama: "))
let bulan1 = Number(prompt("bulan pertama   : "))
let tahun1 = Number(prompt("tahun pertama   : "))

let tanggal2 = Number(prompt("tanggal kedua : "))
let bulan2 = Number(prompt("bulan kedua    : "))
let tahun2 = Number(prompt("tahun keduan   : "))

let total1 = tahun1 * 365 + bulan1 * 30 + tanggal1 ;
let total2 = tahun2 * 365 + bulan2 * 30 + tanggal2 ;
let selisih = total2 - total1;

let tahun = Math.floor(selisih / 365);
let sisa = selisih % 365;

let bulan = Math.floor(sisa / 30);
let hari = sisa % 30;

console.log("Selisih:", tahun, "tahun", bulan, "bulan", hari, "hari");