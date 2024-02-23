const humburugr = document.querySelector(".humburugr");
const navbar = document.querySelector(".navbar"); 

humburugr.addEventListener("click",()=>{
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active")
})

window.addEventListener('scroll', () => {
    const scrollThreshold = 30;

    if (window.scrollY > scrollThreshold) {
        navbar.classList.remove('active');
    }
});




const script = document.createElement("script");
        script.src = "scrollreveal.min.js";
        script.onload = function () {
            const sr = ScrollReveal({
                origin: 'left',
                distance: '90px',
                duration: 2000,
                delay: 450,
                reset: false, 
            });

            sr.reveal('.testing', { delay: 400 });
            sr.reveal('.testing2', { delay: 430, origin: 'right' });
            sr.reveal('.testing3', { delay: 450 });

            sr.reveal('.text', { delay: 450 ,origin: 'right'});
            sr.reveal('.countent', { delay: 450 });

            sr.reveal('.services-all', { delay: 450 });
            sr.reveal('.testing4', { delay: 450,origin: 'right' });
            sr.reveal('.', { delay: 450 });
            sr.reveal('.', { delay: 450 });
        };

        document.head.appendChild(script);