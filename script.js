let userInput;'  y'

function setup() {
  noCanvas();
  userInput = select('#userinput');
  userInput.changed(wiki);
  wiki();

function wiki(){
  let term = userInput.value();
  console.log(term);
}
}
