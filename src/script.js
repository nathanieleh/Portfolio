document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.arrow-button').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector("#GroupProjects").scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const intro = document.getElementById("Intro");
const justin = document.getElementById("Justin");
const nathaniel = document.getElementById("Nathaniel");
const minesweeperVideo = document.getElementById("MinesweeperVideo");
const snakeVideo1 = document.getElementById("SnakeAIVideo1");
const snakeVideo2 = document.getElementById("SnakeAIVideo2");
const threeDAIVideo1 = document.getElementById("threeDimVid1");
const threeDAIVideo2 = document.getElementById("threeDimVid2");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('is-visible'); 
        }
        else
            entry.target.classList.remove('is-visible');
    });
    fadeIntro();
    initialNavViewing();
});

observer.observe(intro);
observer.observe(justin);
observer.observe(nathaniel);
observer.observe(minesweeperVideo);
observer.observe(snakeVideo1);
observer.observe(snakeVideo2);
observer.observe(threeDAIVideo1);
observer.observe(threeDAIVideo2);

const panels = document.querySelectorAll("#Panel");
const translateAmount = 100;
let translate = 0;
const slide = (direction) => {
    if(direction === "left")
        translate += translateAmount;
    else 
        translate -= translateAmount;
    
    leftArrow.classList.add("hidden");
    rightArrow.classList.add("hidden");
    setTimeout(() => {
        hideArrows();
    }, 1500);

    panels.forEach(
        panels => (panels.style.transform = `translateX(${translate}%)`)
    );
}
    
const hideArrows = () => {
    if(minesweeperVideo.classList.contains('is-visible') && !snakeVideo1.classList.contains('is-visible')){
        leftArrow.classList.add('hidden');
    }
    else {
        leftArrow.classList.remove('hidden');
    }
    if(threeDAIVideo1.classList.contains('is-visible') && threeDAIVideo2.classList.contains('is-visible')){
        rightArrow.classList.add('hidden');
    }
    else {
        rightArrow.classList.remove('hidden');
    }
}
    
const fadeIntro = () => {
    if(intro.classList.contains('is-visible')){
        intro.classList.add('opacity-100');
        intro.classList.remove('-translate-y-5');
    }
    else {
        intro.classList.remove('opacity-100');
        intro.classList.add('-translate-y-5');
    }
    if(justin.classList.contains('is-visible')){
        justin.classList.add('opacity-100');
        justin.classList.remove('-translate-x-5');
    }
    else {
        justin.classList.remove('opacity-100');
        justin.classList.add('-translate-x-5');
    }
    if(nathaniel.classList.contains('is-visible')){
        nathaniel.classList.add('opacity-100');
        nathaniel.classList.remove('translate-x-5');
    }
    else {
        nathaniel.classList.remove('opacity-100');
        nathaniel.classList.add('translate-x-5');
    }
}

const initialNavViewing = () => {
    if(minesweeperVideo.classList.contains("is-visible") &&
        !snakeVideo1.classList.contains("is-visible") &&
        !snakeVideo2.classList.contains("is-visible")){
        hideArrows();
    }
    if(threeDAIVideo1.classList.contains("is-visible") &&
        threeDAIVideo2.classList.contains("is-visible") &&
        !snakeVideo1.classList.contains("is-visible") &&
        !snakeVideo2.classList.contains("is-visible")){
        hideArrows();
    }
}