const btn = document.querySelector("header > .bars"),
      navbar = document.querySelector("nav > ul"),
      burger = document.querySelector("header .bars"),
      navItems = document.querySelectorAll("ul > li");

     btn.addEventListener("click", () => {
            navbar.classList.toggle("active");
            burger.classList.toggle("toggle");
     });
     
     navItems.forEach((navItem) => {
           navItem.addEventListener("click", () => {
              navbar.classList.remove("active");  
              burger.classList.toggle("toggle");  
           })
     });

    //     srollToTop Btn

    const scrollToTopBtn = document.querySelector(".scrollToTopButton");

       window.addEventListener("scroll", function() {
              scrollToTopBtn.classList.toggle("active", window.scrollY > 500);
       });

       scrollToTopBtn.addEventListener("click", () => {
              document.body.scrollTop = 0;
              document.body.style.transition = " .8s ease";
              document.documentElement.scrollTop = 0;
       });

     //           carusel   

     var swiper = new Swiper(".mySwiper", {
       effect: "coverflow",
       grabCursor: true,
       centeredSlides: true,
       slidesPerView: "auto",
       coverflowEffect: {
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
       },
       pagination: {
         el: ".swiper-pagination",
       },
     });

     //      Scroll Reveal animation 

     ScrollReveal({
       // reset: true,
       distance:'60px',
       duration:2500,
       delay:100 
     });
     //    Target elements, and specify options to create reveal animation 
     

     ScrollReveal().reveal('main .home_text', {delay:400, origin:'left'});
     ScrollReveal().reveal('.service .services', {delay:300, origin:'bottom', interval:200 });
     ScrollReveal().reveal('.about .images img', {delay:300, origin:'left', interval:200 });
     ScrollReveal().reveal('.about .images2 img', {delay:300, origin:'left', interval:200 });

     ScrollReveal().reveal('.about .about-description', {delay:300, origin:'right' });

     ScrollReveal().reveal('.menu .menu-food .food-menu', {delay:300, origin:'bottom' });
     ScrollReveal().reveal('.menu .menu-food h1', {delay:450, origin:'bottom' });
     ScrollReveal().reveal('.menu ul', {delay:300, origin:'bottom'});
     ScrollReveal().reveal('.menu .list-items .menu-list .menu-1', {delay:300, origin:'bottom', interval:200 });
     ScrollReveal().reveal('.booking-section .reservation h5, .h-1, .email, .data, textarea, button', {delay:200, origin:'bottom', interval:200 });
     ScrollReveal().reveal('.our-team > h4, .h-1', {delay:300, origin:'bottom', interval:200 });
     ScrollReveal().reveal('.member-list .team-member', {delay:300, origin:'bottom', interval:200 });
     ScrollReveal().reveal('.client-section > h4, .h-1', {delay:300, origin:'bottom', interval:200 });
     ScrollReveal().reveal('footer .contacts-about', {delay:300, origin:'bottom', interval:200 });
     ScrollReveal().reveal('footer .content-left', {delay:300, origin:'left' });
     ScrollReveal().reveal('footer .contents', {delay:300, origin:'right' });