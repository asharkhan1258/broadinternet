(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);


document.getElementById("whatsappButton").addEventListener("click", function() {
    window.location.href = "tel:+18889035346"; // WhatsApp number link
  });

  function toggleFAQ(event) {
    const allContents = document.querySelectorAll('.faq-content');
    allContents.forEach(content => {
        content.style.display = 'none'; // سبھی جواب بند کریں
    });

    const clickedFAQ = event.currentTarget.querySelector('.faq-content');
    if (clickedFAQ.style.display === 'block') {
        clickedFAQ.style.display = 'none'; // اگر کھلا ہے تو بند کریں
    } else {
        clickedFAQ.style.display = 'block'; // کھولیں
    }
}
function toggleAnswer(answerId) {
    // Get all FAQ answers
    const allAnswers = document.querySelectorAll('.faq-answer');

    // Close all answers
    allAnswers.forEach(answer => {
        if (answer.id !== answerId) {
            answer.style.display = 'none';
        }
    });

    // Toggle the clicked answer
    const currentAnswer = document.getElementById(answerId);
    if (currentAnswer.style.display === 'block') {
        currentAnswer.style.display = 'none';
    } else {
        currentAnswer.style.display = 'block';
    }
}