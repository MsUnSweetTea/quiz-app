$(document).ready(function() {

	var question1 = {
		question: "You talking to me?"
		guess1: "Taxi Driver"
		guess2: "Kill Bill"
		guess3: "It"
		guess4: "Grand Budapest Hotel"
}

//function to increase count by one
  	function questionCounter() {
		$(".submitButton").click(function(event) {
			event.preventDefault();
			count+=1;
			$("#counter").text(count);
		});
	}

	//call guessCounter function
  	questionCounter();

}

