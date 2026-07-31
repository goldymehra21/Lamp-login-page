document.addEventListener("DOMContentLoaded", function () {
    const lamp = document.getElementById("lamp");

    lamp.addEventListener("click", function () {
        document.body.classList.toggle("light-off");
    });
});
