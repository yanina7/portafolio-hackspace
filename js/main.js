$(document).ready(function() {


	$('.carousel.carousel-slider').carousel({fullWidth: true});

	$('.carousel').carousel();
		setInterval(function() {
		$('.carousel').carousel('next');
	}, 3000);

	$('.button-collapse').sideNav({
    	menuWidth: 300, // Default is 300
    	edge: 'left', 
    	closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    	draggable: true, // Choose whether you can drag to open on touch screens,
    });
 
    //smoove transition
    $('.mov').smoove({opacity:'0', moveY: '50px',});

	$("#port-id-img-1").hover(function(){
		$("#port-1").removeClass('hide',3000);}, 
		function(){$("#port-1").addClass('hide',3000);}
	);
	$("#port-id-img-2").hover(function(){
	    $("#port-2").removeClass('hide',1000);}, 
	    function(){$("#port-2").addClass('hide',1000);}
	);
	$("#port-id-img-3").hover(function(){
	    $("#port-3").removeClass('hide',1000);}, 
	    function(){$("#port-3").addClass('hide',1000);}
	);
	$("#port-id-img-4").hover(function(){
	    $("#port-4").removeClass('hide',1000);}, 
	    function(){$("#port-4").addClass('hide',1000);}
	);
	$("#port-id-img-5").hover(function(){
	    $("#port-5").removeClass('hide',1000);}, 
	    function(){$("#port-5").addClass('hide',1000);}
	);	
	$("#port-id-img-6").hover(function(){
	    $("#port-6").removeClass('hide',1000);}, 
	    function(){$("#port-6").addClass('hide',1000);}
	);	
	$("#port-id-img-7").hover(function(){
	    $("#port-7").removeClass('hide',1000);}, 
	    function(){$("#port-7").addClass('hide',1000);}
	);	
	$("#port-id-img-8").hover(function(){
	    $("#port-8").removeClass('hide')}, 
	    function(){$("#port-8").addClass('hide');}
	);	
		
});