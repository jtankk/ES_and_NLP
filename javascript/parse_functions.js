/*
Retrieves the input and passes it to the main parsing function
*/
function runInput(){
  var input = document.getElementById('mainSearch').valueOf();
  console.log("retrieval success");
  console.log("input value:" + input.toString());
  parseInput(input);

}

/*
Main parsing function, passes the input through several parsing functions
*/
function parseInput(input){
  console.log("parse received input");
  var uncleanInput = input.toString(); //store the unlcean input

  spaceless = uncleanInput.split(" "); //remove spaces from input string
  console.log("spaceless array:" + spaceless);

  var stopless = new Array; //create new array to store stopless input
  stopless = removeStopWords(spaceless); //remove stop words from spaceless
  console.log("stopless array:" + stopless);
}

/*
This funcntion removes stop words. For now, we're starting with a small subset:
  of, the, what, where, and, or, it, is
*/

function removeStopWords(input){
  console.log("called stop word function");



}
