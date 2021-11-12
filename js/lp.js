/* Navbar Responsive */

document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-content").classList.toggle("hidden");
}

/* Sticky Navbar */

window.addEventListener('scroll', function(){
    let navbar = this.document.querySelector('.navbar')
    navbar.classList.toggle('sticky', window.scrollY > 0)
})

/* Active Menú */

const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll("li a")

sections.forEach(section => {
    section.addEventListener('mouseenter', function() {
        const id = this.getAttribute('id')
        const navActive = document.querySelector(`a[href="/#${id}"]`)
        // console.log(navActive)
        navLinks.forEach(link => link.classList.remove('active'))
        navActive.classList.add('active')
    })
})

/* AOS Config */

AOS.init({
    animatedClassName: 'aos-animate',
    debounceDelay: 50,
    throttleDelay: 99,
    duration: 400,
    easing: 'ease',
});

/* Particles.js Config */

particlesJS("particles-js", {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":800}},"color":{"value":"#FE3B1F"},"shape":{"type":"image","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"../images/icon-particles.png","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":10,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#000000","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

/* reCaptcha V3 */

function onSubmit(token) {
    document.getElementById("contact-form").submit();
}
