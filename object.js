const siswa = {
    nama: "Budi",
    umur: 17,
    lulus: true
}

const lulus = siswa.lulus ? "lulus" : "tidak lulus"

console.log(`Ada seorang siswa bernama ${siswa.nama}, berumur ${siswa.umur} yang ${lulus}`)