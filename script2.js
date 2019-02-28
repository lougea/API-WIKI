

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
  root = document.getElementById("root");

  for (var i=0 ; i< data[1].length ; i++) {

  var titre = data[1][i];
  var description = data[2][i];
  var lien = data[3][i];

  ///// incorporation des div
  var div = document.createElement("div");
  div.setAttribute("class","bg-secondary rounded m-3 p-2 bloc");

  var monTitre = document.createElement("h1");
  monTitre.innerHTML = titre;
  div.appendChild(monTitre);

  var monParagraphe = document.createElement("p");
  monParagraphe.innerHTML = description;
  div.appendChild(monParagraphe);
  root.appendChild(div);

  var ifra = document.createElement("iframe")
  ifra.setAttribute("src",lien)
  ifra.setAttribute("width","900px")
  ifra.setAttribute("height","400px")
  div.appendChild(ifra);


  };

    div.addEventListener("click", function iframClick(){
    for (var i=0 ; i< data[1].length ; i++) {
    ifra.setAttribute("width","500px")
    ifra.setAttribute("height","200px")

  };
  })
})
  });

//document.location.reload(true);
