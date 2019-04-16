$(document).ready(function(){

	 setInterval(function(){
		var dt = new Date();

		var year = dt.getFullYear();
		var month = dt.getMonth();
		var day = dt.getDate();
		var hour = dt.getHours();
		var minutes = dt.getMinutes();
		var seconds = dt.getSeconds();
		var milli = dt.getMilliseconds();

		//guarda as variaveis para usar no canvas subtrai para iniciar o 0 no topo do circulo
		var isec = seconds - 15;
		var imil = milli   - 250;
		var imin = minutes - 15;
		var ihou = hour    - 6;


		//normaliza as casas 9 vira 09
		month   = ("00"  + month  ).slice(-2);
		day     = ("00"  + day    ).slice(-2);
		hour    = ("00"  + hour   ).slice(-2);
		minutes = ("00"  + minutes).slice(-2);
		seconds = ("00"  + seconds).slice(-2);
		milli   = ("000" + milli  ).slice(-3);

		
		$("#year").text(year);
		$("#month").text(month);
		$("#day").text(day);
		$("#hour").text(hour);
		$("#minute").text(minutes);
		$("#second").text(seconds);
		$("#milli").text(milli);


		 
		
		var c = document.getElementById("canvasSS");
		var ctx = c.getContext("2d");
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.lineWidth = 9;
		ctx.beginPath();
		ctx.arc(150, 75, 70, ((2 * isec / 60) + 0.025) * Math.PI, ((2 * isec / 60) - 0.025) * Math.PI);
		ctx.stroke()

		c = document.getElementById("canvasMS");
		ctx = c.getContext("2d");
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.lineWidth = 9;
		ctx.beginPath();
		ctx.arc(150, 75, 70, ((2 * imil / 1000) + 0.025) * Math.PI, ((2 * imil / 1000) - 0.025) * Math.PI);
		ctx.stroke()

		c = document.getElementById("canvasMI");
		ctx = c.getContext("2d");
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.lineWidth = 9;
		ctx.beginPath();
		ctx.arc(150, 75, 70, ((2 * imin / 60) + 0.025) * Math.PI, ((2 * imin / 60) - 0.025) * Math.PI);
		ctx.stroke()

		c = document.getElementById("canvasHR");
		ctx = c.getContext("2d");
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.lineWidth = 9;
		ctx.beginPath();
		ctx.arc(150, 75, 70, ((2 * ihou / 24) + 0.025) * Math.PI, ((2 * ihou / 24) - 0.025) * Math.PI);
		ctx.stroke()


		
		
		
	},1);

});