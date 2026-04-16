const menu = document.getElementById("burger-menu");
const navbarNav = document.querySelector(".navbar-nav");

menu.onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di mana ajaa untuk mengembalikan menu//
document.addEventListener("click", function(e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

el


function playMusic() {
    if (audio.paused) {
        // pertama kali play
        audio.src = songs[index];
        audio.play();
    } else {
        // kalau diklik lagi → ganti lagu
        index++;
        if (index >= songs.length) {
            index = 0;
        }

        audio.src = songs[index];
        audio.play();
    }
}