$("#start-button").click(function() {
	
    $("#loader").fadeOut(1000);

	$('#fullpage').fullpage({
    //Changing the colours of the fullpage framework
	sectionsColor: ['#211E2B', '#211E2B', '#211E2B', '#211E2B'],
	//Allowing css to be used with fullpage framework
	css3: true
	 });

});


$('#Incorrect-one').hover(function(){

$('#Incorrect-one').delay(1000).fadeOut('slow');
document.getElementById("fullpage").style.display = "block";
});



$("#yes-one").click(function() {  
    document.getElementById("fullpage").style.display = "none";
    document.getElementById("Incorrect-one").style.display = "block";
});



$("#no-one").click(function() {  
	document.getElementById("fullpage").style.display = "none";
    document.getElementById("correct-one").style.display = "block";
});


$("#yes-two").click(function() {  
    document.getElementById("fullpage").style.display = "none";
    document.getElementById("correct-one").style.display = "block";

});

$("#no-two").click(function() {  
	document.getElementById("fullpage").style.display = "none";
    document.getElementById("glitch").style.display = "block";
});



$("#yes-three").click(function() {  
    document.getElementById("fullpage").style.display = "none";
    document.getElementById("correct-one").style.display = "block";
    
});



$("#no-three").click(function() {  
	document.getElementById("fullpage").style.display = "none";
    document.getElementById("glitch").style.display = "block";
});


$("#yes-four").click(function() {  
    document.getElementById("fullpage").style.display = "none";
    document.getElementById("Incorrect-one").style.display = "block";
    
});


$("#no-four").click(function() {  
    document.getElementById("fullpage").style.display = "none";
    document.getElementById("correct-one").style.display = "block";
    
});


