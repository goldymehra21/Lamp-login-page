//====================================
// Lamp Login Animation
// js/script.js
//====================================

const container = document.querySelector(".container");
const lampSwitch = document.getElementById("switch");
const loginCard = document.getElementById("loginCard");

let lampOn = false;

// Toggle lamp
lampSwitch.addEventListener("click", () => {

    lampOn = !lampOn;

    // Pull cord animation
    lampSwitch.animate(
        [
            {
                transform: "translateY(0)"
            },
            {
                transform: "translateY(20px)"
            },
            {
                transform: "translateY(0)"
            }
        ],
        {
            duration: 250,
            easing: "ease-in-out"
        }
    );

    if (lampOn) {

        container.classList.add("on");

        setTimeout(() => {

            loginCard.classList.add("show");

        }, 300);

    } else {

        container.classList.remove("on");

        loginCard.classList.remove("show");

    }

});

// Prevent page refresh
document.querySelector("form").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Login Successful!");

});
