var botScore=0,
	playerScore=0;
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;
document.getElementById("lizard").onclick=playerThrowsLizard;
document.getElementById("spock").onclick=playerThrowsSpock;


setInterval(function(){
	$(".scoreboard").toggleClass("borderChange");

},1000);







function playerThrowsRock(){
	var botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");

}
function playerThrowsScissors(){
	var botsWeapon= getRandomWeapon();
		checkWhoWon(botsWeapon,"scissors");
}
function playerThrowsPaper(){
	var botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon, "paper");

}
function playerThrowsSpock(){
	var botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon, "spock");
}

function playerThrowsLizard(){
	var botsWeapon= getRandomWeapon();
		checkWhoWon(botsWeapon,"lizard");
}










function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";



	if(randomNumber<.20){
		botsWeapon="scissors";
	}else if(randomNumber<.40){
		botsWeapon="paper";
	}else if (randomNumber<.60) {
		botsWeapon="lizard";
	}else if (randomNumber<.80) {
		botsWeapon="spock";
	}
	return botsWeapon;
}







function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")||
		(botsWeapon=="lizard" && playersWeapon=="spock")||
		(botsWeapon=="spock" && playersWeapon=="rock")||
		(botsWeapon=="rock" && playersWeapon=="lizard")||
		(botsWeapon=="spock" && playersWeapon=="scissors")||
		(botsWeapon=="lizard" && playersWeapon=="paper")||
		(botsWeapon=="paper" && playersWeapon=="spock")||
		(botsWeapon=="scissors" && playersWeapon=="lizard")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}








function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){
playerScore+=1;
document.getElementById("humanScore").innerHTML=playerScore;
displayCompleteMessage("Computer can suck it!");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
