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


const intro = document.getElementById("Intro");
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
            if(entry.target.innerHTML.includes("Snake AI")){
                snakeVideo1.setAttribute("src", "../img/SnakeAIBeginner.mp4");
                snakeVideo2.setAttribute("src", "../img/SnakeAIExpert.mp4");
                snakeVideo1.play();
                snakeVideo2.play();
                threeDAIVideo1.pause();
                threeDAIVideo2.pause();
                minesweeperVideo.pause();
                minesweeperVideo.removeAttribute("src");
                threeDAIVideo1.removeAttribute("src");
                threeDAIVideo2.removeAttribute("src");
            }
            else if(entry.target.innerHTML.includes("3D AI")){
                threeDAIVideo1.setAttribute("src", "../img/3DAIBeginner.mp4");
                threeDAIVideo2.setAttribute("src", "../img/3DAIExpert.mp4");
                threeDAIVideo1.play();
                threeDAIVideo2.play();
                snakeVideo1.pause();
                snakeVideo2.pause();
                minesweeperVideo.pause();
                minesweeperVideo.removeAttribute("src");
                snakeVideo1.removeAttribute("src");
                snakeVideo2.removeAttribute("src");
            }
            else if(entry.target.innerHTML.includes("Minesweeper")){
                minesweeperVideo.setAttribute("src", "../img/MinesweeperDemo.mp4");
                minesweeperVideo.play();
                threeDAIVideo1.pause();
                threeDAIVideo2.pause();
                snakeVideo1.pause();
                snakeVideo2.pause();
                snakeVideo1.removeAttribute("src");
                snakeVideo2.removeAttribute("src");
                threeDAIVideo1.removeAttribute("src");
                threeDAIVideo2.removeAttribute("src");
                leftArrow.classList.add('hidden');
            }
        }
        else
            entry.target.classList.remove('is-visible');
        
    });
    fadeIntro();
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
}