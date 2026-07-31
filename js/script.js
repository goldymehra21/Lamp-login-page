// Lamp Login Animation
// Goldy Mehra

const body = document.body;
const chain = document.getElementById("chain");

let lightOn = false;

chain.addEventListener("click", () => {

    // Toggle light
    lightOn = !lightOn;

    if(lightOn){

        body.classList.add("light-on");

    }else{

        body.classList.remove("light-on");

    }

});

// Pull chain animation

chain.addEventListener("mousedown",()=>{

    chain.style.transform="translateY(15px)";

});

chain.addEventListener("mouseup",()=>{

    chain.style.transform="translateY(0px)";

});

chain.addEventListener("mouseleave",()=>{

    chain.style.transform="translateY(0px)";

});

// Mobile Touch Support

chain.addEventListener("touchstart",()=>{

    chain.style.transform="translateY(15px)";

});

chain.addEventListener("touchend",()=>{

    chain.style.transform="translateY(0px)";

});
