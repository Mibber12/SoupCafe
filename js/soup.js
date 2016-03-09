
$(function () {
            $(window).on("load resize", function () {
                $(".fill-screen").css("height", window.innerHeight);
     });

  // add Bootstrap's scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 200
    });

    // smooth scrolling
    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    //parallax scrolling with stellar.js
    $(window).stellar();

});
