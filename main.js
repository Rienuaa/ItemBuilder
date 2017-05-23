var level = 1;
var powerLevel = 1;
var power = 0;
var prefix = "";
var suffix = "";
var extra = "";
var extra2 = "";


function submitAll(){
	//sets level
	a = document.getElementById("levelChoices");
	level = a.options[a.selectedIndex].text;
	console.log(level);
	document.getElementById("levelDisplay").innerHTML = level;
	
	//sets power level
	b = document.getElementById("powerLevelChoices");
	powerLevel = b.options[b.selectedIndex].text;
	document.getElementById("powerLevelDisplay").innerHTML = powerLevel;
	
	//sets prefix
	c = document.getElementById("prefixChoices");
	prefix = c.options[c.selectedIndex].text;
	document.getElementById("prefixDisplay").innerHTML = prefix;
	
	//sets suffixe
	d = document.getElementById("suffixChoices");
	suffix = d.options[d.selectedIndex].text;
	document.getElementById("suffixDisplay").innerHTML = suffix;
	
	
	//sets extra
	e = document.getElementById("extraChoices");
	extra = e.options[e.selectedIndex].text;
	document.getElementById("extraDisplay").innerHTML = extra;
	
	
	//sets extra2
	f = document.getElementById("extra2Choices");
	extra2 = f.options[f.selectedIndex].text;
	document.getElementById("extra2Display").innerHTML = extra2;
	
	console.log(level);
	computePower();
	
	//sets power
	document.getElementById("powerDisplay").innerHTML = power;
	
};

function computePower(){
	console.log("part 1 working");
	console.log(level);
	power = parseInt(power);
	if (powerLevel == "Low") {
		console.log("power level is low");
		console.log(level);
		switch(parseInt(level)) {
			default:
				power = 1000000;
				break;
			case 1:
				power = 1;
				break;
			case 2:
				power = 2;
				break;
			case 3:
				power = 3;
				break;
			case 4:
				power = 4;
				break;
			case 5:
				power = 6;
				break;
			case 6:
				power = 9;
				break;
			case 7:
				power = 12;
				break;
			case 8:
				power = 15;
				break;
			case 9:
				power = 18;
				break;
			case 10:
				power = 21;
				break;
			case 11:
				power = 24;
				break;
			case 12:
				power = 27;
				break;
			case 13:
				power = 30;
				break;
			case 14:
				power = 33;
				break;
			case 15:
				power = 36;
				break;
			case 16:
				power = 39;
				break;
			case 17:
				power = 42;
				break;
			case 18:
				power = 45;
				break;
			case 19:
				power = 48;
				break;
			case 20:
				power = 51;
				break;
			case 21:
				power = 54;
				break;
			case 22:
				power = 57;
				break;
			case 23:
				power = 60;
				break;
			case 24:
				power = 63;
				break;
			case 25:
				power = 68;
				break;
			case 26:
				power = 69;
				break;
			case 27:
				power = 72;
				break;
			case 28:
				power = 75;
				break;
			case 29:
				power = 78;
				break;
			case 30:
				power = 81;
				break;
			case 31:
				power = 84;
				break;
			case 32:
				power = 87;
				break;
			case 33:
				power = 90;
				break;
			case 34:
				power = 93;
				break;
		}		
	}
	if (powerLevel == "Medium") {
		console.log("power level is med");
		switch(parseInt(level)) {
			default:
				power = 1000000;
				break;
			case 1:
				power = 4;
				break;
			case 2:
				power = 7;
				break;
			case 3:
				power = 9;
				break;
			case 4:
				power = 13;
				break;
			case 5:
				power = 16;
				break;
			case 6:
				power = 19;
				break;
			case 7:
				power = 22;
				break;
			case 8:
				power = 25;
				break;
			case 9:
				power = 28;
				break;
			case 10:
				power = 31;
				break;
			case 11:
				power = 34;
				break;
			case 12:
				power = 37;
				break;
			case 13:
				power = 40;
				break;
			case 14:
				power = 43;
				break;
			case 15:
				power = 46;
				break;
			case 16:
				power = 49;
				break;
			case 17:
				power = 52;
				break;
			case 18:
				power = 55;
				break;
			case 19:
				power = 58;
				break;
			case 20:
				power = 61;
				break;
			case 21:
				power = 64;
				break;
			case 22:
				power = 67;
				break;
			case 23:
				power = 70;
				break;
			case 24:
				power = 73;
				break;
			case 25:
				power = 78;
				break;
			case 26:
				power = 79;
				break;
			case 27:
				power = 82;
				break;
			case 28:
				power = 85;
				break;
			case 29:
				power = 88;
				break;
			case 30:
				power = 91;
				break;
			case 31:
				power = 94;
				break;
			case 32:
				power = 97;
				break;
			case 33:
				power = 100;
				break;
			case 34:
				power = 103;
		}
	}
	if (powerLevel == "High") {
		console.log("power level is high");
		switch(parseInt(level)) {
			case 1:
				power = 7;
				break;
			case 2:
				power = 12;
				break;
			case 3:
				power = 15;
				break;
			case 4:
				power = 22;
				break;
			case 5:
				power = 26;
				break;
			case 6:
				power = 29;
				break;
			case 7:
				power = 32;
				break;
			case 8:
				power = 35;
				break;
			case 9:
				power = 38;
				break;
			case 10:
				power = 41;
				break;
			case 11:
				power = 44;
				break;
			case 12:
				power = 47;
				break;
			case 13:
				power = 50;
				break;
			case 14:
				power = 53;
				break;
			case 15:
				power = 56;
				break;
			case 16:
				power = 59;
				break;
			case 17:
				power = 62;
				break;
			case 18:
				power = 65;
				break;
			case 19:
				power = 68;
				break;
			case 20:
				power = 71;
				break;
			case 21:
				power = 74;
				break;
			case 22:
				power = 77;
				break;
			case 23:
				power = 80;
				break;
			case 24:
				power = 83;
				break;
			case 25:
				power = 88;
				break;
			case 26:
				power = 89;
				break;
			case 27:
				power = 92;
				break;
			case 28:
				power = 95;
				break;
			case 29:
				power = 98;
				break;
			case 30:
				power = 101;
				break;
			case 31:
				power = 104;
				break;
			case 32:
				power = 107;
				break;
			case 33:
				power = 110;
				break;
			case 34:
				power = 113;
			default:
				power = 1000000;
				break;
		}
	}
	console.log(power);
};



function START(){
	level = 1;
	power = 1;
	powerLevel = "Low";
	prefix = "Prefix";
	suffix = "Suffix";
	extra = "Extra 1";
	extra2 = "Extra 2";
	document.getElementById("levelForm").reset();
	document.getElementById("powerLevelForm").reset();
	document.getElementById("prefixForm").reset();
	document.getElementById("suffixForm").reset();
	document.getElementById("extraForm").reset();
	document.getElementById("extra2Form").reset();
	updateDisplay();
};

function updateDisplay(){
	document.getElementById("levelDisplay").innerHTML = level;
	document.getElementById("powerLevelDisplay").innerHTML = powerLevel;
	document.getElementById("prefixDisplay").innerHTML = prefix;
	document.getElementById("suffixDisplay").innerHTML = suffix;
	document.getElementById("extraDisplay").innerHTML = extra;
	document.getElementById("extra2Display").innerHTML = extra2;
	document.getElementById("powerDisplay").innerHTML = power;
	
};

START();