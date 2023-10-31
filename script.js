const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

yesButton.addEventListener("click", function() {
    alert("¡Gracias por aprobarme!");
});

noButton.addEventListener("mouseover", function() {
    // Genera una posición aleatoria para el botón "No"
    const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Mueve el botón "No" a la posición aleatoria
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
});
