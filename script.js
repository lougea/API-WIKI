/* var request= new XMLHttpRequest();

request.open('GET', 'https://project-622bb.firebaseio.com/BeCode.json', true)
request.onload = function () {
var data = JSON.parse(this.response);

  console.log(data);
};
request.send() */


fetch('https://project-622bb.firebaseio.com/BeCode.json')

.then(function(response) {
return response.json();
})


.then(function(data) {
console.log(data);
console.log(data[0].history);
console.log(data[0].image);
console.log(data[0].profile);
console.log(data[0].profile.firstname);
console.log(data[0].profile.lastname);
console.log(data[0].wiki)


var CheminComplet = document.location.href;
console.log(CheminComplet);

//document.getElementById('root').


});
