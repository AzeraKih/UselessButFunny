
var biblioteca = [
	["batata", "uma raiz"],
	["avião",  "meio de transporte rapido"],
	["carteira", "guarda coisas"],
	["brasil", "carnaval"],
	["amorzinho", "apelido carinhoso"],
	["fresco", "o brasil não é no calor"],
	["andrezinho", "apelido para masculino de andreia"],
	["bobeira", "moscando"],
	["marco", "ponto marcante"],
	["helio", "nobre"],
	["jogo", "Voce perdeu"],
	["mapa", "nos guia"],
	["bebado", "alcool"],
	["banana", "fruta"],
	["criticas", "temos que evitar situações..."],
	["windows", "S.O bom"],
	["linux", "S.O menos bom"],
	["macaco", "animal"],
	["panela", "bateram antes da dilma sofrer impeachment"],
	["frederico", "sobrenome"],
	["fofura", "kawaii"],
	["grafico", "fishbone"],
	["mula", "animal estereo"],
	["cavalo", "quadrupede"],
	["escola", "adolescentes normalmente odeiam"]
];
var word;
var dica;
var presseds = '';
var errors = 0;
var acertos = 0;

$(document).ready(function(){
	
	let p = Math.floor((Math.random() * biblioteca.length));

	word = biblioteca[p][0].toUpperCase();
	dica = biblioteca[p][1];

	$('#qtd').text("Tamanho da palavra: " + word.length);
	$('#dica').text("dica: " + dica);

	for (var i = 0 ; i < word.length ; i ++ ){
		$("#container").append($("<div>").attr({"id" : i, "class": "center"}));
	};
	var xTriggered=0;
	$("#field").keyup(function(e) {
		if (e.which == 13) {
			validaLetra($("#field").val());
			$("#field").val("");
		}else{
			$("#field").val($("#field").val().toUpperCase());
		}
	});
	$("#field").keydown(function(e) {
		if (e.which != 13) {
			$("#field").val(($("#field").val().substr(0,0)));
		}
	});


});	

function validaLetra(char){

	char = char.toUpperCase();
	if (char == ""){
		return;
	}
	for (var i = 0 ; i < presseds.length ; i ++ ){
		if(presseds[i] == char){
			console.log("already pressed!");
			return;
		}
	}

	$("#digitados").append($("<div>" + char + "</div>").attr({"class": "center"}));
	let flagAcerto = false;

	presseds += char;
	for (var i = 0 ; i < word.length ; i ++ ){

		if (word[i] == char){
			$("#" + i).append("<span>" + word[i] + "</span>");
			flagAcerto = true;
			acertos ++;
		}
	}
	if (acertos >= word.length){
		alert('voce ganhou!');
		$("#container>.center").css("background-color", "#0F0")
		$('#field').attr('disabled', 'disabled');
	}
	if (!flagAcerto) {
		alert(char + " Nao existe na palavra!");
		errors++
		if (errors >= 7){
			gameover();
		}
		drawcanvas()
	}

}

function gameover(){
	$('#gameover').removeClass("gameoveroff");
	$('#gameover').addClass("gameoveron");
	$("canvas").css({"width" : "100%", "height" : "100%"})
}

function drawcanvas(){
	var c = document.getElementById("people");
	var ctx = c.getContext("2d");

	switch(errors){
		case 1:
		//cabeça
			ctx.beginPath();
			ctx.arc(150, 30, 15, 0, 2 * Math.PI);
			ctx.stroke()
			break;
		case 2:
		//corpo
			ctx.moveTo(150, 45);
			ctx.lineTo(150, 100);
			ctx.stroke();
			break;
		case 3:
		//braco esquerdo
			ctx.moveTo(150, 45);
			ctx.lineTo(120, 80);
			ctx.stroke();
			break;
		case 4:
		//braco direiro
			ctx.moveTo(150, 45);
			ctx.lineTo(180, 80);
			ctx.stroke();
			break;
		case 5:
		//perna direita
			ctx.moveTo(150, 100);
			ctx.lineTo(180, 130);
			ctx.stroke()
			break;
		case 6:
		//perna esquerda	
			ctx.moveTo(150, 100);
			ctx.lineTo(120, 130);
			ctx.stroke();
		break;
		default:
			break;
	}
}