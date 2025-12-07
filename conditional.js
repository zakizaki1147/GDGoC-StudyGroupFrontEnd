const input = require('prompt-sync')({ sigint: true })

const nilai = Number(input("Masukkan nilai: "))

if (nilai > 75) {
    console.log("A")
} else {
    console.log("Remed woy")
}