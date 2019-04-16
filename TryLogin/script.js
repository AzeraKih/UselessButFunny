$(document).ready(function(){
	
	$(window).keydown(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			return false;
		}
	});

	$('#btn').focus(function() {
		$( "#senha" ).focus();
	});

	$('#btn').hover( function() {
		$('#btn').css('position', 'absolute');
		let y = Math.floor((Math.random() * $(window).height() - 50) + 1);
		let x = Math.floor((Math.random() * $(window).width() - 100) + 1);
		$('#btn').css('top', y + 'px');
		$('#btn').css('left', x + 'px');
	}, function(){}	);

});