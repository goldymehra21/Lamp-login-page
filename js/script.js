// ===============================
// Table Lamp Login
// js/script.js
// ===============================

const room = document.querySelector(".room");
const switchBtn = document.getElementById("switchBtn");
const loginCard = document.getElementById("loginCard");

let lightOn = false;

// Toggle light
switchBtn.addEventListener("click", () => {

    lightOn = !lightOn;

    if (lightOn) {

        room.classList.add("light-on");

        // Small pull animation
        switchBtn.animate(
            [
                { transform: "translateY(0px)" },
                { transform: "translateY(18px)" },
                { transform: "translateY(0px)" }
            ],
            {
                duration: 250,
                easing: "ease-out"
            }
        );

        // Show login form after light turns on
        setTimeout(() => {
            loginCard.classList.add("show");
        }, 350);

    } else {

        room.classList.remove("light-on");

        switchBtn.animate(
            [
                { transform: "translateY(0px)" },
                { transform: "translateY(18px)" },
                { transform: "translateY(0px)" }
            ],
            {
                duration: 250,
                easing: "ease-out"
            }
        );

        // Hide login form
        loginCard.classList.remove("show");
    }

});

// Prevent form submission (demo page)
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Login functionality can be connected to your backend.");
});
