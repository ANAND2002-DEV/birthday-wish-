/* MUSIC */

const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {

```
music.play();

document.querySelector(".memory").scrollIntoView({
    behavior: "smooth"
});
```

});

/* LETTER */

const letterBtn = document.getElementById("letterBtn");
const fullLetter = document.getElementById("fullLetter");

letterBtn.addEventListener("click", () => {

```
if(fullLetter.style.display === "block"){

    fullLetter.style.display = "none";
    letterBtn.innerText = "Read My Letter ❤️";

}else{

    fullLetter.style.display = "block";
    letterBtn.innerText = "Hide Letter ❤️";

}
```

});

/* IMAGE MODAL */

const images = document.querySelectorAll(".gallery-grid img");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

images.forEach(image => {

```
image.addEventListener("click", () => {

    modal.style.display = "block";
    modalImg.src = image.src;

});
```

});

closeModal.addEventListener("click", () => {

```
modal.style.display = "none";
```

});

modal.addEventListener("click", () => {

```
modal.style.display = "none";
```

});

/* REVEAL ON SCROLL */

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

```
reveals.forEach(section => {

    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

        section.classList.add("active");

    }

});
```

}

window.addEventListener("scroll", revealSections);
revealSections();

/* FLOATING HEARTS */

const heartsContainer = document.getElementById("hearts-container");

function createHeart(){

```
const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left = Math.random() * 100 + "vw";

heart.style.fontSize =
    Math.random() * 20 + 20 + "px";

heartsContainer.appendChild(heart);

setTimeout(() => {

    heart.remove();

}, 6000);
```

}

setInterval(createHeart, 800);

/* EXTRA GLOW EFFECT */

window.addEventListener("load", () => {

```
document.body.style.opacity = "1";
```

});
