
$(document).ready(function() { 
	/*slowly fade in and fade out header*/
    $('#main-header').fadeOut(1000); $('#main-header').fadeIn(5000);
    
});

var checkOpenStatus = function () {
    var d = new Date();
    var date = d.getHours();
    var day = d.getDay();
    if ((date > 9) && (date < 20) && (day != 0)) {
        y = "<span style=\"color:#FFFFFF\">We zijn open en de soep staat klaar.</span>";
    } else {
        y = "<span style=\"color:#FFFFFF\">Sorry, we zijn gesloten.</span>";
    }
    document.getElementById("open-dicht").innerHTML = y;
}
setInterval(checkOpenStatus,100);