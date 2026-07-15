// ===============================
// Cute Mang Inasal Website
// script.js
// PART 1
// ===============================

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

const petals = document.getElementById("petals");
const hearts = document.getElementById("hearts");
const sparkles = document.getElementById("sparkles");

const popSound = document.getElementById("popSound");

let yesScale = 1;
let noScale = 1;
let noClicks = 0;

const cuteMessages = [

"🥺 Sure ka?",
"🥹 Pleaseeee?",
"🍗 Libre ko chicken!",
"🍟 With fries pa!",
"💕 Tara naaaa.",
"🥰 Promise masaya.",
"🌸 One meal lang.",
"🐱 Meow approves.",
"💖 Don't break my heart.",
"😤 Ayaw mo talaga?",
"🥹 Last chance.",
"✨ Hindi ka magsisisi.",
"💗 Chicken is life.",
"🍗 Mang Inasal awaits.",
"💕 Cute tayo together.",
"🌸 Sige na please.",
"🥺 Baka naman.",
"💝 Libre dessert.",
"❤️ Wag ka na tumanggi.",
"😂 Napapagod na ako.",
"🐣 Pleaseeeee.",
"🍓 Pretty please.",
"💐 One click na lang.",
"🎀 Don't be shy.",
"😎 It'll be fun.",
"💘 I believe in you.",
"🥰 Say yes.",
"🌈 Happy food trip!",
"💖 Go na.",
"🐥 Hehehe."

];

// ===============================
// Random message
// ===============================

function showRandomMessage(){

message.textContent =
cuteMessages[
Math.floor(
Math.random()*cuteMessages.length
)
];

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

noBtn.addEventListener("click", () => {

    noClicks++;

    showRandomMessage();

    if(popSound){
        popSound.currentTime = 0;
        popSound.play().catch(()=>{});
    }

    // Shake animation
    noBtn.animate([
        {transform:"translateX(0)"},
        {transform:"translateX(-10px)"},
        {transform:"translateX(10px)"},
        {transform:"translateX(-8px)"},
        {transform:"translateX(8px)"},
        {transform:"translateX(0)"}
    ],{
        duration:300
    });

    // Grow YES button
    yesScale += 0.18;

    yesBtn.style.transform =
    `scale(${yesScale})`;

    // Grow width too
    if(noClicks>4){

        yesBtn.style.width="75%";

    }

    if(noClicks>8){

        yesBtn.style.width="90%";

    }

    if(noClicks>12){

        yesBtn.style.width="100%";

    }

    // Bigger text

    if(noClicks>15){

        yesBtn.style.fontSize="2.6rem";

        yesBtn.style.padding="30px";

    }

    // Make No smaller

    noScale -= .08;

    if(noScale<0){

        noScale=0;

    }

    noBtn.style.transform=
    `scale(${noScale})`;

    // Fade away

    if(noClicks>=10){

        noBtn.style.opacity=.6;

    }

    if(noClicks>=14){

        noBtn.style.opacity=.3;

    }

    if(noClicks>=18){

        noBtn.style.opacity=0;

        noBtn.style.pointerEvents="none";

    }

    // Funny button texts

    if(noClicks==5){

        noBtn.innerHTML="Sure? 🥺";

    }

    if(noClicks==8){

        noBtn.innerHTML="Really? 😭";

    }

    if(noClicks==11){

        noBtn.innerHTML="Please? 💕";

    }

    if(noClicks==14){

        noBtn.innerHTML="Last Chance 😭";

    }

    if(noClicks>=18){

        noBtn.innerHTML="";

    }

});

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

                origin:{x:0}

            });

            confetti({

                particleCount:10,

                angle:120,

                spread:70,

                origin:{x:1}

            });

            confetti({

                particleCount:15,

                spread:100,

                origin:{y:.6}

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

// Little pulse animation

setInterval(()=>{

    yesBtn.animate([

        {

            transform:`scale(${yesScale})`

        },

        {

            transform:`scale(${yesScale+0.05})`

        },

        {

            transform:`scale(${yesScale})`

        }

    ],{

        duration:900

    });

},1200);

// Welcome message

setTimeout(()=>{

    message.innerHTML="💕 Click one... if you dare 💕";

},600);

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

    yesBtn.animate([

        {transform:`scale(${yesScale}) rotate(0deg)`},

        {transform:`scale(${yesScale+0.04}) rotate(-2deg)`},

        {transform:`scale(${yesScale}) rotate(0deg)`}

    ],{

        duration:250

    });

});

noBtn.addEventListener("mouseenter",()=>{

    noBtn.animate([

        {transform:`scale(${noScale})`},

        {transform:`scale(${noScale+.05})`},

        {transform:`scale(${noScale})`}

    ],{

        duration:200

    });

});