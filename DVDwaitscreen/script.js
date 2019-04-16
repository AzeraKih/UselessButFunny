var numImg = 0;

$(document).ready(function(){
	
	var icon = document.getElementById("DVD");
	var ph = 1;
	var pv = 1

	setInterval(function(){
		let Xs =  $(icon).css("top");
		let x = parseInt(Xs.substr(0, (Xs.length - 2)));
		if ($(window).height() - $("#DVD").height() <= x){
			ph = -1;
			changeColor();
		}else if (x <= 0){
			ph = 1;
			changeColor();
		}		
		x += ph; 
		$(icon).css('top', (x + "px"));
	}
	, 1);

	setInterval(function(){			
		let Ys =  $(icon).css("left");
		let y = parseInt(Ys.substr(0, (Ys.length - 2)));
		if ($(window).width() - $("#DVD").width() <= y){
			pv = -1;
			changeColor();
		}else if (y <= 0){
			pv = 1;
			changeColor();
		}			
		y += pv; 
		$(icon).css('left', (y + "px"));
	}
	, 1);
});

function changeColor(){
	if (numImg < 6 && numImg >=0){
		numImg ++;
	}else{
		numImg = 0;	
	}

	$(document.getElementById("DVD")).attr('src', 'dvd' + numImg + '.png');

}