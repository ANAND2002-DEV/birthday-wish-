function startExperience(){

    const content = document.getElementById("mainContent");
    const cover = document.getElementById("coverPage");
    const music = document.getElementById("bgMusic");

    cover.style.display = "none";
    content.style.display = "block";

    music.play().catch(() => {});

    startHearts();

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

function startHearts(){

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize =
        (15 + Math.random() * 15) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);

    }, 1200);

}
