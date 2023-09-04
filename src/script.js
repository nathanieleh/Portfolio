window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}


const intro = document.querySelector("#Intro");
const minesweeperVideo = document.querySelector("#MinesweeperVideo");
const snakeVideo1 = document.querySelector("#SnakeAIVideo1");
const snakeVideo2 = document.querySelector("#SnakeAIVideo2");
const threeDAIVideo1 = document.querySelector("#threeDimVid1");
const threeDAIVideo2 = document.querySelector("#threeDimVid2");
const leftArrow = document.querySelector("#leftArrow");
const rightArrow = document.querySelector("#rightArrow");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('is-visible');
        }
        else{
            entry.target.classList.remove('is-visible');
        }
    });
});

observer.observe(intro);
observer.observe(minesweeperVideo);
observer.observe(snakeVideo1);
observer.observe(snakeVideo2);
observer.observe(threeDAIVideo1);
observer.observe(threeDAIVideo2);

const panels = document.querySelectorAll("#Panel");
const translateAmount = 100;
let translate = 0;
const slide = (direction) => {
    if(direction === "left"){
        translate += translateAmount;
    }
    else {
        translate -= translateAmount;
    }
    panels.forEach(
        panels => (panels.style.transform = `translateX(${translate}%)`)
    );
}
    
const hideArrows = () => {
    if(minesweeperVideo.classList.contains('is-visible') && !snakeVideo1.classList.contains('is-visible')){
        leftArrow.classList.add('hidden');
        minesweeperVideo.play();
        snakeVideo1.pause();
        snakeVideo2.pause();
    }
    else {
        leftArrow.classList.remove('hidden');
        snakeVideo1.play();
        snakeVideo2.play();
        minesweeperVideo.pause();
    }
    if(threeDAIVideo1.classList.contains('is-visible') && threeDAIVideo2.classList.contains('is-visible')){
        rightArrow.classList.add('hidden');
        threeDAIVideo1.play();
        threeDAIVideo2.play();
        snakeVideo1.pause();
        snakeVideo2.pause();
    }
    else{
        rightArrow.classList.remove('hidden');
        threeDAIVideo1.pause();
        threeDAIVideo2.pause();
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
}

document.addEventListener('scroll', function() {
    hideArrows();
    fadeIntro();
});