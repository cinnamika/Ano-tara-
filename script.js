const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let scale = 1;

noBtn.addEventListener("click", () => {

    scale += 0.2;

    yesBtn.style.transform = `scale(${scale})`;

    // Eventually hide Ayaw
    if(scale > 4){

        noBtn.style.opacity = "0";

        noBtn.style.pointerEvents = "none";

    }

});

yesBtn.addEventListener("click", () => {

    window.location.href = "success.html";

});