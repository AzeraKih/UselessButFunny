$(document).ready(function(){




});


function converter(){

	var text2Convert = $("#entrada").val();
	var result;
	switch($('input[name=convertionType]:checked').val()){
		case "Text2Binary":
			result = AsciiToBinario(text2Convert);
			break;
		case "Binary2Text":
			result = BinarioToAscii(text2Convert);
			break;
		case "Text2Hexa":
			result = AsciiToHexa(text2Convert);
			break;
		case "Hexa2Text":
			result = HexaToAscii(text2Convert);
			break;
		case "Hexa2Binary":
			result = HexaToBinario(text2Convert);
			break;
		case "Binary2Hexa":
			result = BinarioToHexa(text2Convert);
			break;

	}

	$("#saida").text(result);

}


function log(str){
	console.log(str);
}

function BinarioToAscii(str){
    return str.replace(/\s*[01]{8}\s*/g, function(str) {
      return String.fromCharCode(parseInt(str, 2))
    });
}

function AsciiToBinario(str) {

	var res = "";
	for (var i = 0; i < str.length; i++) {
      res += ("00000000"  + str[i].charCodeAt(0).toString(2)).slice(-8) + " ";
	}
	return res;
}

function HexaToAscii(str){

	str = str.replaceAll(" ", '');
	var res = '';
	for (var i = 0; i < str.length; i += 2) {
		res += String.fromCharCode(parseInt(str.substr(i, 2), 16));
	}
	return res;
}


function AsciiToHexa(str){

	var res = "";
	for (var i = 0; i < str.length; i++) {
      res += str[i].charCodeAt(0).toString(16) + " ";
	}
	return res;
}

function HexaToBinario(str){

	str = str.replaceAll(" ", '');
	var res = "";
	for (var i = 0; i < str.length; i+=2) {
		res += ("00000000"  + parseInt(str.substr(i, 2), 16).toString(2)).slice(-8) + " ";
	}

	return res;
}

function BinarioToHexa(str){

	str = str.replaceAll(" ", '');
	var res = "";
	for (var i = 0; i < str.length; i+=8) {
		 res += parseInt(str.substr(i, 8), 2).toString(16) + " ";
		 log(str.substr(i, 8)); 
	}

	return res;
}


String.prototype.replaceAll = function(search, replace)
{
    if (replace === undefined) {
        return this.toString();
    }
    return this.replace(new RegExp('[' + search + ']', 'g'), replace);
};
