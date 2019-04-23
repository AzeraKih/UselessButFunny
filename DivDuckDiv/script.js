$(document).ready(function(){

	var canvas = document.getElementById("container");
	var context = canvas.getContext("2d");
	var myImg = new Image();	

	let widthCanvas = parseFloat($(window).width());
	let heightCanvas = parseFloat($(window).height())
	canvas.width =  widthCanvas;
	canvas.height =  heightCanvas;
	$(canvas).css({'width': widthCanvas + 'px', 'height': heightCanvas + 'px'})

	myImg.src = 'Duck.png';
	
	$("#container").on("mousemove", function(event){
		context.drawImage(myImg, event.clientX, event.clientY);
	});

});