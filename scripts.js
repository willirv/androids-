$("#start-button").click(function() {
	
    $("#loader").fadeOut(1000);

	$('#fullpage').fullpage({
    //Changing the colours of the fullpage framework
	sectionsColor: ['#ED8F5B', '#ED8F5B', '#ED8F5B', '#ED8F5B'],
	//Allowing css to be used with fullpage framework
	css3: true

	 });

});


$('#Incorrect-one').hover(function(){
$('#Incorrect-one').delay(500).fadeOut('slow');
$("#fullpage").show();
});



$('#correct-one').hover(function(){
$('#correct-one').delay(500).fadeOut('slow');
$("#fullpage").show();
});






$("#yes-one").click(function() {  
    $(".section:nth-child(1)").fadeOut();
    document.getElementById("Incorrect-one").style.display = "block";
});



$("#no-one").click(function() {  
	$(".section:nth-child(1)").fadeOut();
    document.getElementById("correct-one").style.display = "block";
});


$("#yes-two").click(function() {  
    $(".section:nth-child(2)").fadeOut();
    document.getElementById("correct-one").style.display = "block";

});

$("#no-two").click(function() {  
	$(".section:nth-child(2)").fadeOut();
    document.getElementById("glitch").style.display = "block";
});


$("#yes-three").click(function() {  
    $(".section:nth-child(3)").fadeOut();
    document.getElementById("correct-one").style.display = "block";

});

$("#no-three").click(function() {  
	$(".section:nth-child(2)").fadeOut();
    document.getElementById("glitch").style.display = "block";
});

$("#yes-four").click(function() {  
    $(".section:nth-child(4)").fadeOut();
    document.getElementById("Incorrect-one").style.display = "block";

});

$("#no-four").click(function() {  
	$(".section:nth-child(4)").fadeOut();
    document.getElementById("correct-one").style.display = "block";
});





