$("#start-button").click(function() {
	
    $("#loader").fadeOut(1000);

	$('#fullpage').fullpage({
    //Changing the colours of the fullpage framework
	sectionsColor: ['#211E2B', '#211E2B', '#211E2B', '#211E2B'],
	//Allowing css to be used with fullpage framework
	css3: true
	 });

});


myScore = [];



$("#yes").click(function() {  
    console.log($("#yes").data.type);

});

