const input = require('prompt-sync')({ sigint: true })

const nama = input("Masukkan nama: ")
const umur = Number(input("Masukkan umur: "))

if (umur >= 21) {
	const uang = Number(input("Masukkan jumlah uang yang dibawa: "))
	if (uang < 500000) {
		console.log("Maaf " + nama + ", uang kamu cuma " + uang + ", datang lagi lain kali")
	} else {
		console.log("Selamat datang, " + nama)
	}
} else {
	console.log("Maaf " + nama + ", umur kamu kurang " + (21 - umur))
}