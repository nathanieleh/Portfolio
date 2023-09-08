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
                setTimeout(() => {
                    minesweeperVideo.setAttribute("src", "");
                    threeDAIVideo1.setAttribute("src", "");
                    threeDAIVideo2.setAttribute("src", "");
                }, 1000);
            }
            else if(entry.target.innerHTML.includes("3D AI")){
                threeDAIVideo1.setAttribute("src", "../img/3DAIBeginner.mp4");
                threeDAIVideo2.setAttribute("src", "../img/3DAIExpert.mp4");
                setTimeout(() => {
                    snakeVideo1.setAttribute("src", "");
                    snakeVideo2.setAttribute("src", "");
                }, 1000);
            }
            else if(entry.target.innerHTML.includes("Minesweeper")){
                minesweeperVideo.setAttribute("src", "../img/MinesweeperDemo.mp4");
                setTimeout(() => {
                    snakeVideo1.setAttribute("src", "");
                    snakeVideo2.setAttribute("src", "");
                }, 1000);
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