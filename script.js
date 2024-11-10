// Fungsi untuk menampilkan kejutan
function revealSurprise() {
    // Menghapus kelas "hidden" untuk menampilkan elemen kejutan
    document.getElementById("surprise").classList.remove("hidden");
}

// Fungsi untuk menampilkan pesan cinta tambahan
function displayLove() {
    // Menghapus kelas "hidden" untuk menampilkan elemen loveNote
    document.getElementById("loveNote").classList.remove("hidden");
}

// Fungsi untuk mengatur volume musik (Opsional)
document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById("background-music");
    if (music) {
        music.volume = 0.5; // Atur volume musik ke 50%
    }
});

// Fungsi untuk memutar atau memberhentikan musik
function playMusic() {
    const music = document.getElementById("background-music");
    if (music) {
        music.play();
        document.getElementById("playMusicButton").style.display = "none";
    }
}
