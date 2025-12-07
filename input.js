const input = require('prompt-sync')({ sigint: true })

const sapa = "Halo "
const nama = input("Masukkan nama: ")
const tahunLahir = Number(input("Masukkan tahun lahir: "))
const umur = 2025 - tahunLahir

console.log(sapa + nama)
console.log(`Halo ${nama}, yang sekarang berumur ${umur} tahun`)