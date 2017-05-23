$(document).ready(function(){

	//******DECLARING VARIABLES*******// 
	//characters is the object used to hold all possible characters
	var characters = { 
	 "Obi-Wan Kenobi":{
	 	name: "obi",
	 	url: "assets/images/obi-wan.jpg",  
	    health: 120,
	    attack: 8,
	    counter: 15,
	}, 
	 "Darth Sidious":{
	 	name:"sidious",
	 	url:"assets/images/darth-sidious.png",
	    health: 150,
	    attack: 300,
	    counter: 300,
	},  
	 "Darth Maul":{
	 	name: "darthmaul",
	 	url: "assets/images/darth-maul.jpg", 
	    health: 180,
	    attack: 300,
	    counter: 300,
	}, 
	 "Luke Skywalker":{
	 	name: "luke",
	 	url:"assets/images/luke-skywalker.jpg", 
	    health: 100,
	    attack: 14,
	    counter: 5,
	},  
 }; 

 var selectCharacter; // populates when a player selects a character 
 var currentOpponent;  // field that populates for character selected as opponent 
 var opponents = []; // empty array for holding  players not chosen as your character (should be 3 characters)
 var defeatedCounter = 1; //counter for how many opponents you defeat 
 var killCount = 0; // counter for how many opponents you kill

 // on click function for attack action to begin and trigger counter attack by defender

	/*if (yourcharacter) health >= 0; 
	alert("YOU LOSE: GAME OVER!") //if conditional for when you lose 

	if (defender) health == 0 ; 
	alert("YOU WIN!!") // if conditional of when you win 

	$(reset button).on("click", function(){ } ///click event for reseting the game */


	$('.players').on('click',function(){ 
		$(this).removeClass('players').addClass('yourcharacter'); //.appendTo('#defendersection');
	$('.players').removeClass('players').addClass('nowEnemy');
	$('.nowEnemy').appendTo('#enemysection');
	});
	$('.static').on('click', function() {
	    if ($(this).hasClass('nowEnemy')) {
	        $(this).removeClass('nowEnemy').addClass('defender');
	        $('.defender').appendTo('#defendersection');
	        $('.nowEnemy').removeClass('nowEnemy').addClass('remainingEnemy'); 
	    }
	});


	$('attack').on('click', function() {
	    $('#obi').html("Health: " + obi.health); // do this for all four variables and divs what you are doing is updating the values in the divs and displaying them 
	});

}); 

