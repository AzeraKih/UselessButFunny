var mousedownID = -1;  

var canvas;
var canvasContext;
var mouse;
var rect;

$(document).ready(function(){

	let widthCanvas = parseFloat($(window).width()*(90/100));
	let heightCanvas = parseFloat($(window).height()*(90/100))
	canvas = document.getElementById("cp");
	canvas.width =  widthCanvas;
	canvas.height =  heightCanvas;
	$(canvas).css({"width": widthCanvas, "height": heightCanvas});
	canvasContext = canvas.getContext("2d");
	rect = canvas.getBoundingClientRect();

	$(window).on('resize', function(event){
		rect = canvas.getBoundingClientRect();
	});

	$(window).on('mousemove', function(event){
		mouse = event;
	});

	$("#cp").on('mousedown', function(event) {
		if(mousedownID==-1){
			canvasContext.moveTo(mouse.clientX - rect.left, mouse.clientY - rect.top);
			mousedownID = setInterval(whilemousedown, 10 /*execute every 100ms*/);
		}
	});

	$("#cp").on('mouseup', function(event) {
		if(mousedownID!=-1) {  //Only stop if exists
	     clearInterval(mousedownID);
	     mousedownID=-1;
	   }
	});


});
function whilemousedown(){

	

	var posY = mouse.clientY - rect.top;
	var posX = mouse.clientX - rect.left;

	//$("#bodi").append($("<div class = 'dive'>").css({"top": posY-7+"px", "left": posX-7+"px"}));

	canvasContext.lineTo(posX, posY);
	canvasContext.stroke();

}
