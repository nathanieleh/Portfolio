const nathaniel = document.getElementById("Nathaniel");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('is-visible'); 
        }
        else
        entry.target.classList.remove('is-visible');
});
fadeIntro();
});

observer.observe(nathaniel);

const fadeIntro = () => {
    if(nathaniel.classList.contains('is-visible')){
        nathaniel.classList.add('opacity-100');
        nathaniel.classList.remove('translate-x-5');
    }
    else {
        nathaniel.classList.remove('opacity-100');
        nathaniel.classList.add('translate-x-5');
    }
}

document.querySelectorAll(".gif").forEach(element => {
    element.addEventListener("mousemove", function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        x = -1 * (x - 0.5 * element.clientWidth);
        y = y - 0.5 * element.clientHeight;
        element.style.transitionDuration = "0s";
        element.style.transitionDelay = "0s";
        element.style.transform = "scale(1.05, 1.05) rotateX(" + y * 0.01 + "deg) rotateY(" + x * 0.1 + "deg)";
    });
    element.addEventListener("mouseleave", function() {
        element.style.transform = "none";
    })
});