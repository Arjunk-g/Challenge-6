// var displayDayCards = document.getElementById("dayCards");
// var search = document.getElementById("searchBar");
// var APIKey = aafe4f4c88c16dbb6b700eb070949996;
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" +  + "&appid=" + APIKey;
var citySearch = document.querySelector('.cityRequested');
var button = document.querySelector('.searchBar');

var nameOfCity =document.querySelector('.nameOfCity');
var dateOfSearch = document.querySelector('.date');
var icon = document.querySelector('.icon');
var temperature = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var windSpeed = document.querySelector('.windSpeed');


button.addEventListener('click', function(){

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+citySearch.value+'&appid=aafe4f4c88c16dbb6b700eb070949996')
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(err => alert("Make sure your you capatilize the name of your city!"))


})






























// async function bruhMan() {
//     let bruhSearch = await axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=aafe4f4c88c16dbb6b700eb070949996");
//     console.log(bruhSearch);
// }

// fetch(queryURL)
// .then(data => data.text)
// .tehn
// .catch(error => {
//     // handle the error
// });

//      async function launch(){
//     var  fiveAM = document.getElementById("searchBar").value;
//     const  theURL = `"http://api.openweathermap.org/data/2.5/weather?q=" + ${fiveAM} + "&appid=aafe4f4c88c16dbb6b700eb070949996"`;
//     const actualQURL = await fetch(theURL);
//     const moreWaiting = await actualQURL;
//     console.log(moreWaiting);
//     // document.getElementById("demo").innerHTML = city;
//     // localStorage.setItem("bruh2", bruh);
// }
// value!!!!
// var outtaHere = localStorage.getItem("bruh2");






// makes it a string in storage but not outside?
// var parsed = JSON.parse(outtaHere);

// var stringed = JSON.stringify(outtaHere);
// $("#formID").submit(function(e) {
//     e.preventDefault();
// });

// console.log(outtaHere);
// console.log(queryURL);












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