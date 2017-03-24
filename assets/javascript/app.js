// DECLARING GLOBAL VARIABLES
// Grabbing displays
var correct = document.getElementById("correct");
console.log(correct);

var incorrect = document.getElementById("incorrect");
console.log(incorrect);


// THIS IS JUST A VARIABLE
var scoreCounter = 0;


var questions=["This country is one of the largest wine-producing countries of the world, where wine is grown in every region of the country. Which country is this?","What is the name for the type of art portrait that deliberately exaggerates a person?","Who was the first president of the United States?","Who is the current president of the United States?"];
var answers1=[ "France","Germany","Australia","Italy"];

var answers2=[ "Environmental","Cartooning", "Tribal", "Caricature"];

var answers3=["Abraham Lincoln","Ronald Reagan", "Barack Obama","George Washington"];

var answers4=["Abraham Lincoln","George Clooney","Arnold Schwartzeneger","Donald Trump"];




var startGame = function() {
    correct.innerHTML = 0;
    incorrect.innerHTML = 0;
    unanswered.innerHTML = 0;
    randomQuestion(); //points to first question
}

startGame();

// ------------------FIX ME (SEE BELOW)--------------------------------

function randomQuestion(){
        document.getElementById("randomQuestion").innerHTML = questions[0];
}






//start timer
var count=30;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second


 //number of seconds

function timer()
{
 count=count-1;
 if (count <= 0)
 {
    clearInterval(counter);
    return;
 }

document.getElementById("timer").innerHTML= "Time remaining: " + count + " secs"; // watch for spelling
}


console.log("TEST");


// $.getJSON('js/questions1.json').done(function(data){
//         window.questionnaire = data;
//         console.log(window.questionnaire);
//         startGame();
//     });





//display question and answer choices with radio buttons to screen
//when user clicks radio button:
	//start timer when question is displayed
	//take in choice
	//compare choice to correct answer
	//determine if match
	//if match, increment var correct and display message of good job
	//if not match or timeout, increment var incorrect and display message nice try, try again
	




// // Grabbing buttons


// var sapphire = document.getElementById("sapphire");
// console.log(sapphire);

// var emerald = document.getElementById("emerald");
// console.log(emerald);

// var diamond = document.getElementById("diamond");
// console.log(diamond);

// DECLARING GLOBAL FUNCTIONS

// function comparativeFunction(){
// 	if (scoreCounter === (randomQuestion.innerHTML)) { 
// 		console.log("I won");
// 		correct.innerHTML++;
// 		console.log(correct);
// 		reset();
// 	}
// 	else if (scoreCounter > (randomQuestion.innerHTML)) {
// 		console.log("I lost");
// 		incorrect.innerHTML++;
// 		console.log(incorrect);
// 		reset();
// 	}
// }


// function reset() {
//     randomQuestion.innerHTML = randomQuestion;
//     userScore.innerHTML = 0;
//     scoreCounter = 0;
// }

// Click event listener
// $(".crystal").on("click", function(){
// 	// console.log(this);
// 	console.log(this.value);
// 	console.log(parseInt(this.value));
// 	scoreCounter = scoreCounter + parseInt(this.value);
// 	comparativeFunction();
// })

// DECLARING MAIN CODE
