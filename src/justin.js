const justin = document.getElementById("Justin");

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

observer.observe(justin);

const fadeIntro = () => {
    if(justin.classList.contains('is-visible')){
        justin.classList.add('opacity-100');
        justin.classList.remove('-translate-x-5');
    }
    else {
        justin.classList.remove('opacity-100');
        justin.classList.add('-translate-x-5');
    }
}

document.querySelectorAll(".gif").forEach(element => {
    element.addEventListener("mousemove", function(e){
        let x = -1 * (e.offsetX - 0.5 * element.clientWidth);
        let y = e.offsetY - 0.5 * element.clientHeight;
        element.style.transition = "0s";
        element.style.transform = "scale(1.05) rotateX(" + y * 0.15 + "deg) rotateY(" + x * 0.15 + "deg)";
    });
    element.addEventListener("mouseleave", function() {
        element.style.transition = "0.3s";
        element.style.transform = "none";
    })
});