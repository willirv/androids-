$("#start-button").click(function() {
	
    $("#loader").fadeOut(1000);

	$('#fullpage').fullpage({
    //Changing the colours of the fullpage framework
	sectionsColor: ['#0D0E0C', '#00270A', '#0D0E0C', '#00270A'],
	//Allowing css to be used with fullpage framework
	css3: true
	 });

});

