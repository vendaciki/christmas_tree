function updateCountdown() {
    const christmas = new Date('December 24, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const diff = christmas - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "Veselé Vánoce!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days} d ${hours} h ${minutes} m ${seconds} s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// --------------------- GRINCH KRADENÍ ---------------------
const grinch = document.getElementById("grinch");
const gifts = document.getElementById("gifts");

// animace běží 12 s → Grinch je u stromku kolem 25–40 %
setInterval(() => {
    const computed = parseInt(window.getComputedStyle(grinch).left);

    // když je Grinch u stromku (zhruba uprostřed)
    if (computed > window.innerWidth * 0.35 &&
        computed < window.innerWidth * 0.55) {

        // Grinch vezme dárky
        gifts.style.opacity = "0";

        // změní obrázek na Grinche s pytlem
        grinch.classList.add("stealing");
    }

    // reset dárků, když Grinch uteče pryč
    if (computed > window.innerWidth) {
        gifts.style.opacity = "1";
        grinch.classList.remove("stealing");
    }

}, 200);
