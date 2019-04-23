var mousedownID = -1;  

var canvas;
var canvasContext;
var mouse;
var rect;
var correctWidth;
var correctHeight;

$(document).ready(function(){

	canvas = document.getElementById("cp");

	let widthCanvas = parseFloat($(window).width()*(90/100));
	let heightCanvas = parseFloat($(window).height()*(90/100))
	canvas.width =  widthCanvas;
	canvas.height =  heightCanvas;
	$(canvas).css({"width": widthCanvas, "height": heightCanvas});

	canvasContext = canvas.getContext("2d");
	canvasContext.lineCap = "round";

	//funcao para corrigir o posicionamento do mouse relativo ao canvas
	rect = canvas.getBoundingClientRect();
	correctWidth = rect.left ;
	correctHeight = rect.top ;

	$(window).on('resize', function(event){
		rect = canvas.getBoundingClientRect();
		correctWidth = rect.left ;
		correctHeight = rect.top ;
	});

	//seta a variavel global mouse
	$(window).on('mousemove', function(event){
		mouse = event;
	});

	//troca o ponteiro do mouse de acordo com a Tool selecionada
	$("#toolbar").on( "click"	, function(){
		switch($('input[name=toolbar]:checked').val()){
			case '0':
				$(canvas).css({'cursor': 'url(Pencil.cur), default'});
			break;
			case '1':
				$(canvas).css({'cursor': 'url(Eraser.cur), default'});
			break;
			case '2':
				$(canvas).css({'cursor': 'url(Bucket.cur), default'});
				break;
		}
	});

	//valida o seletor de expessura >=1 e <=99 e seta a espessura selecionada
	$("#linewidth").on("change", function(){
		let lw = $("#linewidth").val();
		if (lw < 1){
			$("#linewidth").val(1);
		}
		else if (lw > 99){
			$("#linewidth").val(99);
		}
		canvasContext.lineWidth = $("#linewidth").val();
	});


	$("#cp").on('mousedown', function(event) {
		
		if (event.which != 1) //previne click direito e mid click
			return;

		let tool = $('input[name=toolbar]:checked').val();

		if(tool == 2){ //ferramenta de preenchimento

			let arrColor = hexToRgb($("#toolColorBtn").val());
			var posY = mouse.clientY - correctHeight;
			var posX = mouse.clientX - correctWidth;
			replaceColor(arrColor, getColorAt(posX, posY));

		} else if(mousedownID==-1){ //verifica se o time ta ligado

			canvasContext.beginPath();
			canvasContext.moveTo(mouse.clientX - correctWidth, mouse.clientY - correctHeight);

			if (tool == 0){ // se for pincel
				canvasContext.strokeStyle = $("#toolColorBtn").val();
				canvasContext.globalCompositeOperation = "source-over";
			} else if(tool ==1){ //se for borracha
				canvasContext.globalCompositeOperation = "destination-out";
			}

			mousedownID = setInterval(whilemousedown, 10); //starta o timer iniciando 
		}

	});

	$("#cp").on("mouseup", stopClick);
	$("#cp").on("mouseleave", stopClick);


});


var stopClick = function(){

	if(mousedownID!=-1) { // desliga o timer se estiver ligado
		clearInterval(mousedownID);
		mousedownID=-1;
	}

};

function hexToRgb(hex) {
	//converte hexa para RGB
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var re = [parseInt(result[1], 16),parseInt(result[2], 16),parseInt(result[3], 16)];
    return re;

}


function whilemousedown(){
	//funcao é chamada a cada 10ms para desenhar no canvas quando o botao estiver abaixado
	var posY = mouse.clientY - correctHeight;
	var posX = mouse.clientX - correctWidth;
	canvasContext.lineTo(posX, posY);
	canvasContext.stroke();

}

function getColorAt(X, Y){
	//retorna cor na posicao
	return canvasContext.getImageData(X, Y, 1, 1).data
}


function replaceColor(colorplace, colorremove){

    var canvasData = canvasContext.getImageData(0, 0, canvas.width, canvas.height), //faz uma copia para manipular
        pix = canvasData.data; 

    for (var i = 0, n = pix.length; i < n; i += 4) {//corre pixel por pixel para repor a cor selecionada
        if(
        (pix[ i ] < colorremove[0] + 20 && pix[ i ] > colorremove[0] - 30) &&
        (pix[i+1] < colorremove[1] + 20 && pix[i+1] > colorremove[1] - 30) &&
        (pix[i+2] < colorremove[2] + 20 && pix[i+2] > colorremove[2] - 30)){
        	pix[ i ] = colorplace[0];
        	pix[i+1] = colorplace[1];
        	pix[i+2] = colorplace[2];
        	pix[i+3] = 255;	
        }
    }

    canvasContext.putImageData(canvasData, 0, 0); //repoe o canvas original com a copia modificada
}

