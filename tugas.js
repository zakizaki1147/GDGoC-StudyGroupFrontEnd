const input = require('prompt-sync')({ sigint: true })

const nama = input("Masukkan nama: ")
const umur = Number(input("Masukkan umur: "))

if (umur >= 21) {
	//
} else {
	console.log("Maaf " + nama + ", umur kamu kurang " + (21 - umur))
}