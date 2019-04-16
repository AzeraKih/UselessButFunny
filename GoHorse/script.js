$(document).ready(function(){

	var posicaoAtual = $(window).scrollTop();
	var documentSize = $(document).height();
	var sizeWindow = $(window).height();
	
	$(window).scroll(function () {
		posicaoAtual = $(window).scrollTop();
 	if ( posicaoAtual >= (documentSize - sizeWindow ) ) {
 			document.getElementById('bodi').classList.add("black");
 			document.getElementById('bd').innerHTML += 
 			'<pre>  | |    | |                 | |    | |  </pre>';
		}
	if ( posicaoAtual < (documentSize - sizeWindow ) ) {
 			document.getElementById('bodi').classList.remove("black");
 			document.getElementById('bd').innerHTML = 
 			'<pre>  | |    | |                 | |    | |  </pre>';
		}

	});
	
	$(window).resize(function() {
		posicaoAtual = $(window).scrollTop();
		documentSize = $(document).height();
		sizeWindow = $(window).height();
	});
});