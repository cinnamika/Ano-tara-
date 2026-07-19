// ===============================
// Cute Mang Inasal Website
// script.js
// PART 1
// ===============================

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.querySelector(".card");
const buttons = document.querySelector(".buttons");
const question = document.getElementById("question");

const petals = document.getElementById("petals");
const hearts = document.getElementById("hearts");
const sparkles = document.getElementById("sparkles");

const popSound = document.getElementById("popSound");

let yesScale = 1;
let noScale = 1;
let noClicks = 0;
let growInterval = null;
let isNoPressed = false;

function updateButtonLayout(){

    const width = 230 * yesScale;
    const height = 72 * yesScale;
    const fontSize = 24 * yesScale;
    const titleLift = Math.min(window.innerHeight * 0.12, (yesScale - 1) * 12);
    const cardWidth = Math.min(window.innerWidth - 20, 700 + (yesScale - 1) * 260);
    const cardHeight = Math.min(window.innerHeight - 20, 260 + (yesScale - 1) * 120);

    yesBtn.style.width = `${width}px`;
    yesBtn.style.height = `${height}px`;
    yesBtn.style.fontSize = `${fontSize}px`;
    yesBtn.style.padding = "0 24px";
    yesBtn.style.transform = "none";
    question.style.transform = `translateY(-${titleLift}px)`;
    question.style.opacity = "1";
    noBtn.style.marginLeft = "0px";
    noBtn.style.transform = "translateX(0)";

    buttons.style.gap = "18px";
    buttons.style.justifyContent = "center";
    buttons.style.paddingLeft = "0";
    buttons.style.paddingRight = "0";

    card.style.position = "relative";
    card.style.inset = "auto";
    card.style.width = `${cardWidth}px`;
    card.style.height = `${cardHeight}px`;
    card.style.borderRadius = "35px";
    card.style.padding = "45px 38px";
    card.style.animation = "floatCard 4s ease-in-out infinite";

}

function startGrowing(){

    if(growInterval){
        return;
    }

    growInterval = setInterval(()=>{

        yesScale += 0.06;

        updateButtonLayout();

    },70);

}

function stopGrowing(){

    isNoPressed = false;

    if(growInterval){
        clearInterval(growInterval);
        growInterval = null;
    }

}

// ===============================
// Falling Petals
// ===============================

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=
(5+Math.random()*6)+"s";

petal.style.opacity=.4+Math.random()*.6;

petal.style.transform=
`rotate(${Math.random()*360}deg)`;

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

// ===============================
// Floating Hearts
// ===============================

const heartIcons=[

"💖",
"💕",
"💗",
"💘",
"💝"

];

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=
heartIcons[
Math.floor(Math.random()*heartIcons.length)
];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=
(18+Math.random()*24)+"px";

heart.style.animationDuration=
(5+Math.random()*5)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

// ===============================
// Sparkles
// ===============================

function createSparkle(){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.innerHTML="✨";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top=Math.random()*100+"vh";

sparkle.style.fontSize=
(10+Math.random()*18)+"px";

sparkles.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},1800);

}

// ===============================
// Cursor Hearts
// ===============================

document.addEventListener("mousemove",(e)=>{

if(Math.random()>0.75){

const h=document.createElement("div");

h.innerHTML="💖";

h.style.position="fixed";

h.style.left=e.clientX+"px";

h.style.top=e.clientY+"px";

h.style.pointerEvents="none";

h.style.fontSize="18px";

h.style.transition="all 1s ease";

document.body.appendChild(h);

setTimeout(()=>{

h.style.transform="translateY(-40px) scale(1.6)";

h.style.opacity="0";

},20);

setTimeout(()=>{

h.remove();

},1000);

}

});

// ===============================
// Start Background Effects
// ===============================

setInterval(createPetal,220);

setInterval(createHeart,700);

setInterval(createSparkle,200);

window.addEventListener("load",()=>{

for(let i=0;i<25;i++){

setTimeout(createPetal,i*120);

}

for(let i=0;i<10;i++){

setTimeout(createHeart,i*300);

}

for(let i=0;i<20;i++){

setTimeout(createSparkle,i*150);

}

});

// ===============================
// PART 2
// Continue below PART 1
// ===============================

// Ayaw button

const ayawMessages = [
    { threshold: 5, text: "sure?🥺" },
    { threshold: 10, text: "please?🥺" },
    { threshold: 15, text: "baba😞" },
    { threshold: 20, text: "no?🥺" },
    { threshold: 25, text: "tatampo ako😞" },
    { threshold: 30, text: "di wag😒" },
    { threshold: 35, text: "hmph😒" },
    { threshold: 40, text: "🥺🥺🥺" }
];

function updateAyawText(){

    const nextMessage = ayawMessages.reduce((current, entry) => {
        if(noClicks >= entry.threshold){
            return entry.text;
        }
        return current;
    }, "Ayaw");

    noBtn.textContent = nextMessage;

}

function beginNoPress(){

    if(isNoPressed){
        return;
    }

    isNoPressed = true;
    noClicks++;
    updateAyawText();

    if(popSound){
        popSound.currentTime = 0;
        popSound.play().catch(()=>{});
    }

    noBtn.animate([
        {transform:"translateX(0)"},
        {transform:"translateX(-6px)"},
        {transform:"translateX(6px)"},
        {transform:"translateX(0)"}
    ],{
        duration:180
    });

    startGrowing();

}

noBtn.addEventListener("pointerdown", beginNoPress);
noBtn.addEventListener("mousedown", beginNoPress);
noBtn.addEventListener("touchstart", beginNoPress, {passive:true});

window.addEventListener("pointerup", stopGrowing);
window.addEventListener("pointercancel", stopGrowing);
window.addEventListener("touchend", stopGrowing, {passive:true});
window.addEventListener("touchcancel", stopGrowing, {passive:true});
noBtn.addEventListener("pointerleave", stopGrowing);
window.addEventListener("resize", updateButtonLayout);

// YES button

yesBtn.addEventListener("click",()=>{

    if(popSound){

        popSound.currentTime=0;

        popSound.play().catch(()=>{});

    }

    if(window.confetti){

        const duration=1800;

        const end=Date.now()+duration;

        (function frame(){

            confetti({

                particleCount:10,

                angle:60,

                spread:70,

                origin:{x:0, y:1}

            });

            confetti({

                particleCount:10,

                angle:120,

                spread:70,

                origin:{x:1, y:1}

            });

            confetti({

                particleCount:15,

                spread:100,

                origin:{y:1}

            });

            if(Date.now()<end){

                requestAnimationFrame(frame);

            }else{

                window.location.href="success.html";

            }

        })();

    }else{

        window.location.href="success.html";

    }

});

updateButtonLayout();

// Floating emojis every few seconds

const emojis = ["💖","💕","🌸","✨","🎀","💗","🍗"];

setInterval(()=>{

    const e=document.createElement("div");

    e.className="floatEmoji";

    e.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

    e.style.left=Math.random()*100+"vw";

    e.style.bottom="-40px";

    document.body.appendChild(e);

    setTimeout(()=>{

        e.remove();

    },5000);

},1200);

// Button hover sound

yesBtn.addEventListener("mouseenter",()=>{

    yesBtn.style.transform = "none";

});

yesBtn.addEventListener("mouseleave",()=>{

    yesBtn.style.transform = "none";

});

noBtn.addEventListener("mouseenter",()=>{

    noBtn.style.transform = "translateX(0)";

});

noBtn.addEventListener("mouseleave",()=>{

    noBtn.style.transform = "translateX(0)";

});