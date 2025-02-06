document.addEventListener("DOMContentLoaded", () => {
    const keys = document.querySelectorAll(".key");
    const handOverlay = document.querySelector(".hand-overlay");

    keys.forEach(key => {
        key.addEventListener("mouseover", () => {
            const finger = key.getAttribute("data-finger");
            handOverlay.style.opacity = "1"; // Highlight hands when hovered
        });

        key.addEventListener("mouseout", () => {
            handOverlay.style.opacity = "0.5"; // Return to semi-transparent
        });
    });
});
