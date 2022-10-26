var header = document.getElementById("heading");
var displayDayCards = document.getElementById("dayCards");
var search = document.getElementById("searchBar");
var APIKey = "aafe4f4c88c16dbb6b700eb070949996";
// var city = document.getElementById("cityRequested").value;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + outtaHere + "&appid=" + APIKey;




// fetch(queryURL)
// .then(data => data.text)
// .tehn
// .catch(error => {
//     // handle the error
// });

async unction launch(){
    var bruh = document.getElementById("cityRequested").value;   
    // document.getElementById("demo").innerHTML = city;
    localStorage.setItem("bruh2", JSON.stringify(bruh));
}
var outtaHere = localStorage.getItem("bruh2");

// makes it a string in storage but not outside?
// var parsed = JSON.parse(outtaHere);

// var stringed = JSON.stringify(outtaHere);
// $("#formID").submit(function(e) {
//     e.preventDefault();
// });

console.log(outtaHere);
console.log(queryURL);












// function bruhHeader(){
//     Text.style.color = 'white'; 
// }

// function renderDayCard(){
//     var bruh = `
//     <div>
//     Talk here and insert an item eventuallity
//     </div>`
//     displayDayCards.innerhtml += bruh
// };

// renderDayCard();
// // function RenderStuff(){
//     displayDayCard();
// };
// RenderStuff();