const fs = require('fs')
var FrasesDM1 = new Array();

module.exports = {
	randomInt: function Michi(min,max,dm,numDados) {
		return getRandomInt(min,max,dm,numDados)
	}
};

// Gets the random number for the dice and its phrase.
function getRandomInt(min, max, dm, numDados) {
	var resul = '';
	var total = 0;
	var maxTotal = (max-1)*numDados;
	msg = '';
	
	if (numDados == 1) {
		resul = Math.floor(Math.random() * (max - min)) + min;
		max = max-1;
		
		return MensajeDado(resul, max, dm, numDados);	
	}
	else {
		for (var i=1; i<=numDados; i++) {
			resul = Math.floor(Math.random() * (max - min)) + min;
			msg += "Dado Nº " + i + ": " + resul + "\n";
			total += resul;
		}
		msg += "\nTotal: " + total;
		msg += "\n\n" + MensajeDado(total, maxTotal, dm, numDados);
	}
	console.log(FrasesDM1)
	return msg;
}

// Handles the logic for the thrown dice.
function MensajeDado(num, dado, dm, numDados) {
	var min = dado/dado;
	var tercioInferior = Math.floor(dado / 3);
	var tercioSuperior = Math.floor(tercioInferior * 2);
	var msg = '';
	
	if (dm == true && numDados == 1) {
		if (num == min) {
			msg = fraseRandom(num, dado, 'Frases1dDM1', numDados);
		}
		else if (num < tercioInferior && num > min) {
			msg = fraseRandom(num, dado, 'Frases1dDM2', numDados);
		}
		else if (num >= tercioInferior && num <= tercioSuperior) {
			msg = fraseRandom(num, dado, 'Frases1dDM3', numDados);
		}
		else if (num > tercioSuperior && num < dado){	
			msg = fraseRandom(num, dado, 'Frases1dDM4', numDados);
		}
		else {
			msg = fraseRandom(num, dado, 'Frases1dDM5', numDados);
		}
	}
	else if (dm == false && numDados == 1) {
		if (num == min) {
			msg = fraseRandom(num, dado, 'Frases1dPL1', numDados);
		}
		else if (num < tercioInferior && num > min) {
			msg = fraseRandom(num, dado, 'Frases1dPL2', numDados);
		}
		else if (num >= tercioInferior && num <= tercioSuperior) {
			msg = fraseRandom(num, dado, 'Frases1dPL3', numDados);
		}
		else if (num > tercioSuperior && num < dado){
			msg = fraseRandom(num, dado, 'Frases1dPL4', numDados);
		}
		else {
			msg = fraseRandom(num, dado, 'Frases1dPL5', numDados);	
		}
	}
	else if (dm == true && numDados != 1) {
		if (num == min) {	
			msg = fraseRandom(num, dado, 'FrasesDM1', numDados);
		}
		else if (num < tercioInferior && num > min) {	
			msg = fraseRandom(num, dado, 'FrasesDM2', numDados);
		}
		else if (num >= tercioInferior && num <= tercioSuperior) {	
			msg = fraseRandom(num, dado, 'FrasesDM3', numDados);	
		}
		else if (num > tercioSuperior && num < dado){	
			msg = fraseRandom(num, dado, 'FrasesDM4', numDados);
		}
		else {
			msg = fraseRandom(num, dado, 'FrasesDM5', numDados);
		}	
	}
	else if (dm == false && numDados != 1) {
		if (num == min) {
			msg = fraseRandom(num, dado, 'FrasesPL1', numDados);
		}
		else if (num < tercioInferior && num > min) {
			msg = fraseRandom(num, dado, 'FrasesPL2', numDados);	
		}
		else if (num >= tercioInferior && num <= tercioSuperior) {
			msg = fraseRandom(num, dado, 'FrasesPL3', numDados);	
		}
		else if (num > tercioSuperior && num < dado){
			msg = fraseRandom(num, dado, 'FrasesPL4', numDados);
		}
		else {
			msg = fraseRandom(num, dado, 'FrasesPL5', numDados);
		}
	}
	return msg;
}

// Return a random interactive phrase based on the thrown dice and rol of the user, DM or Player
function fraseRandom(num, dado, array, numDados, callback) {
	
	if (array == 'Frases1dPL1') {
		var FrasesPL1 = new Array();
		FrasesPL1.push('Oh oh un ' + num + ', RIP :skull_crossbones:');
		FrasesPL1.push('Uffff un ' + num + ', RIP :skull_crossbones:');
		var random = Math.floor(Math.random() * FrasesPL1.length);
		
		return FrasesPL1[random];
	}
	if (array == 'Frases1dPL2') {	
		var FrasesPL2 = new Array();
		FrasesPL2.push('Aishhhh un ' + num + ', no tienes mucha suerte :crying_cat_face:');
		var random = Math.floor(Math.random() * FrasesPL2.length);
		
		return FrasesPL2[random];
	}
	if (array == 'Frases1dPL3') {
		var FrasesPL3 = new Array();
		FrasesPL3.push('Un ' + num + ', no está del todo mal :smiley_cat:');
		var random = Math.floor(Math.random() * FrasesPL3.length);
		
		return FrasesPL3[random];
	}
	if (array == 'Frases1dPL4') {
		var FrasesPL4 = new Array();
		FrasesPL4.push('Un ' + num + ' que buena tirada! :heart_eyes_cat:');
		var random = Math.floor(Math.random() * FrasesPL4.length);
		
		return FrasesPL4[random];
	}
	if (array == 'Frases1dPL5') {
		var FrasesPL5 = new Array();
		FrasesPL5.push('Super ' + num + ' vaya suerte!!! :scream_cat:');
		FrasesPL5.push('Super ' + num + ' vaya suerte!!! :scream_cat:');
		FrasesPL5.push('Super ' + num + ' vaya suerte!!! :scream_cat:');
		FrasesPL5.push('Super ' + num + ' vaya suerte!!! :scream_cat:');
		var random = Math.floor(Math.random() * FrasesPL5.length);
		
		return FrasesPL5[random];
	}
	if (array == 'Frases1dDM1') {
		if (fs.existsSync('frasesDM1.json')) {
			fs.readFileSync('frasesDM1.json', function (err, data) {
				var json = JSON.parse(data)
				Object.keys(json).forEach(function(key){			
					FrasesDM1.push(json[key])
				});
				callback()
			})
			console.log(FrasesDM1)
		}
		else {
			FrasesDM1.push("Agh... 1... Creo que las estrellas se han alineado para vosotros...");
			FrasesDM1.push("¿1? En fin... Supongo que hay gente con menos suerte...");
			FrasesDM1.push("Esto no debería de ser asi... Un maldito 1.");
			FrasesDM1.push("¿¡1!?, ¡La ultima vez que pierdo! No os acostumbréis.");
		}
		var random = Math.floor(Math.random() * FrasesDM1.length)
		return FrasesDM1[random]
	}
	if (array == 'Frases1dDM2') {
		var FrasesDM2 = new Array();
		FrasesDM2.push("Vaya, un " + num + "... Esta vez os salvareis...");
		FrasesDM2.push("MALDITA SEA UN " + num + ". Con un poco mas de suerte hasta te doy una piruleta legendaria");
		FrasesDM2.push("Otra vez, ahora un " + num + "... Quien sabe que hubiera sido un 1...");
		FrasesDM2.push("Poca suerte con ese " + num + "... La próxima vez será");
		var random = Math.floor(Math.random() * FrasesDM2.length);
		
		return FrasesDM2[random];
	}
	if (array == 'Frases1dDM3') {
		var FrasesDM3 = new Array();
		FrasesDM3.push("Un " + num + " eh... ¿Bastante decente por esta vez no?");
		FrasesDM3.push("Hey un " + num + "... La cosa se pone interesante...");
		FrasesDM3.push("Bueno un " + num +". No esta mal para empezar...");
		FrasesDM3.push("Tampoco un " + num + " es lo mejor del mundo, pero es algo...");
		var random = Math.floor(Math.random() * FrasesDM3.length);
		
		return FrasesDM3[random];
	}
	if (array == 'Frases1dDM4') {
		var FrasesDM4 = new Array();
		FrasesDM4.push("Hehehe... ese " + num + " pudiera haber sido un " + dado + "...");
		FrasesDM4.push("¡Un " + num + "! La proxima vez... Será aun mas.");
		FrasesDM4.push("¡HA! Un " + num + ", ¡Un día llegaré a ese " + dado + "!");
		FrasesDM4.push("Este " + num + " dolerá.");
		var random = Math.floor(Math.random() * FrasesDM4.length);
		
		return FrasesDM4[random];
	}
	if (array == 'Frases1dDM5') {
		var FrasesDM5 = new Array();
		FrasesDM5.push(num + ". HAHAAHAHAHAHAHAHH.");
		FrasesDM5.push("CUANDO LLEGA UN " + num + ", A VECES TOCA DIVERTIRSE.");
		FrasesDM5.push("¡HAHAHAHAHA UN " + num + "!, AQUÍ LLEGA EL COCO.");
		FrasesDM5.push("EL INFIERNO NO SERÁ NADA COMPARADO CONMIGO, DADLE GRACIAS A ESE " + num + ".");
		var random = Math.floor(Math.random() * FrasesDM5.length);
		
		return FrasesDM5[random];
	}
	if (array == 'FrasesDM1') {
		var FrasesDM1 = new Array();
		FrasesDM1.push("Agh... Creo que las estrellas se han alineado para vosotros...");
		FrasesDM1.push("En fin... Supongo que hay gente con menos suerte...");
		FrasesDM1.push("Esto no debería de ser asi...");
		FrasesDM1.push("¡La ultima vez que pierdo! No os acostumbréis.");
		var random = Math.floor(Math.random() * FrasesDM1.length);
		
		return FrasesDM1[random];
	}
	if (array == 'FrasesDM2') {
		var FrasesDM2 = new Array();
		FrasesDM2.push("Vaya, Esta vez os salvareis...");
		FrasesDM2.push("Con un poco mas de suerte hasta te doy una piruleta legendaria.");
		FrasesDM2.push("Poca suerte eh... La próxima vez será.");
		var random = Math.floor(Math.random() * FrasesDM2.length);
		
		return FrasesDM2[random];
	}
	if (array == 'FrasesDM3') {
		var FrasesDM3 = new Array();
		FrasesDM3.push("¿Bastante decente por esta vez no?");
		FrasesDM3.push("La cosa se pone interesante...");
		FrasesDM3.push("No esta mal para empezar...");
		FrasesDM3.push("Tampoco es lo mejor del mundo, pero es algo...");
		var random = Math.floor(Math.random() * FrasesDM3.length);
		
		return FrasesDM3[random];
	}
	if (array == 'FrasesDM4') {
		var FrasesDM4 = new Array();
		FrasesDM4.push("La proxima vez... Será aun mas.");
		FrasesDM4.push("Esto dolerá.");
		var random = Math.floor(Math.random() * FrasesDM4.length);
		
		return FrasesDM4[random];
	}
	if (array == 'FrasesDM5') {
		var FrasesDM5 = new Array();
		FrasesDM5.push("HAHAAHAHAHAHAHAHH");
		FrasesDM5.push("A VECES TOCA DIVERTIRSE.");
		FrasesDM5.push("AQUÍ LLEGA EL COCO.");
		FrasesDM5.push("EL INFIERNO NO SERÁ NADA COMPARADO CONMIGO.");
		var random = Math.floor(Math.random() * FrasesDM5.length);
		
		return FrasesDM5[random];
	}	
	if (array == 'FrasesPL1') {
		var FrasesPL1 = new Array();
		FrasesPL1.push('Oh oh, RIP :skull_crossbones:');
		FrasesPL1.push('Uffff, RIP :skull_crossbones:');
		var random = Math.floor(Math.random() * FrasesPL1.length);
		
		return FrasesPL1[random];
	}
	if (array == 'FrasesPL2') {
		var FrasesPL2 = new Array();
		FrasesPL2.push('Aishhhh, no tienes mucha suerte :crying_cat_face:');
		var random = Math.floor(Math.random() * FrasesPL2.length);
		
		return FrasesPL2[random];
	}
	if (array == 'FrasesPL3') {
		var FrasesPL3 = new Array();
		FrasesPL3.push('No está del todo mal :smiley_cat:');
		var random = Math.floor(Math.random() * FrasesPL3.length);
		
		return FrasesPL3[random];
	}
	if (array == 'FrasesPL4') {
		var FrasesPL4 = new Array();
		FrasesPL4.push('Que buenas tiradas! :heart_eyes_cat:');
		var random = Math.floor(Math.random() * FrasesPL4.length);
		
		return FrasesPL4[random];
	}
	if (array == 'FrasesPL5') {
		var FrasesPL5 = new Array();
		FrasesPL5.push('Super ' + dado + ' vaya suerte!!! :scream_cat:');
		var random = Math.floor(Math.random() * FrasesPL5.length);
		
		return FrasesPL5[random];
	}
}
