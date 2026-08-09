const heartsContainer =
    document.querySelector(".hearts");

const openBtn =
    document.getElementById("openBtn");

const message =
    document.getElementById("message");


// ========================================
// FLOATING HEARTS
// ========================================

const heartSymbols = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💘",
    "💝"
];

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 25 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);
}

setInterval(createHeart, 350);


// ========================================
// OPEN MESSAGE
// ========================================

openBtn.addEventListener("click", () => {

    message.classList.toggle("show");

    if (message.classList.contains("show")) {

        openBtn.innerHTML =
            "💖 Close Message";

        heartExplosion();

    } else {

        openBtn.innerHTML =
            "💌 Open My Message";
    }

});


// ========================================
// HEART EXPLOSION
// ========================================

function heartExplosion() {

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "💗";

        heart.style.position = "fixed";

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.fontSize = "20px";

        heart.style.zIndex = "100";

        heart.style.pointerEvents = "none";

        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            Math.random() *
            250 + 100;

        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;

        heart.animate(

            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(1.5)`,

                    opacity: 0
                }
            ],

            {
                duration: 1200,

                easing: "ease-out"
            }
        );

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 1200);
    }
}