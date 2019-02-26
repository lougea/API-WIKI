

document.getElementById("bouton").addEventListener("click", function(){
  var motInput = document.getElementById("inPut").value;
  const pageBase = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=";
  var pageRecherche = pageBase + motInput;

fetch(pageRecherche)


.then(function(response) {
return response.json();
})

.then(function(data) {
console.log(data);

for (var i=0 ; i <= data[1].lenght ; i++){

  document.getElementById("root").innerHTML = "<h2>" + data[0][i]+  "</h2>";

}


})






});
