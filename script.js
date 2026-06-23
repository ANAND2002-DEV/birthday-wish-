function startExperience() {

const music = document.getElementById("bgMusic");

music.play().catch(() => {
console.log("Autoplay blocked");
});

window.scrollTo({
top: window.innerHeight,
behavior: "smooth"
});
}

const heartsContainer = document.getElementById("hearts");

setInterval(() => {

const heart = document.createElement("div");

heart.classList.add("heart");
heart.innerHTML = "❤️";

heart.style.left = Math.random()*100 + "vw";

heart.style.fontSize =
(Math.random()*20 + 15) + "px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

},500);
