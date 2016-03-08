
$(document).ready(function() { 
	/*slowly fade in and fade out header*/
    $('#headertitle').fadeOut(1000); $('#headertitle').fadeIn(5000);
    
});

 $(function () {
            $(window).on("load resize", function () {
                $(".fill-screen").css("height", window.innerHeight);
            });
        
});
