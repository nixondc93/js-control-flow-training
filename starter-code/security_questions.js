console.log("security_questions.js loaded");


var securityQuestions = [{
		question: "What's your hometown?", expectedAnswer: "Boone",
	},{
		question: "What was your first pet's name?", expectedAnswer: "FlufferNutter"
	},{
		question: "What Highschool did you attend?", expectedAnswer: "Ashe County High"
	}
];

for(var i = 0; i < securityQuestions.length; i++){
  var answer = prompt(securityQuestions[i].question);
  if(answer !== securityQuestions[i].expectedAnswer){
    alert("Sorry, that wasn't the correct answer.");
    break;
  }
}
