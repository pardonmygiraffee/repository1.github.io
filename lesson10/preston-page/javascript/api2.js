let url2 = 'https://api.openweathermap.org/data/2.5/forecast?id=';
let id2 = '5604473';
let apiKey2 = 'cd4be470d33a0e4c2b2a197c2c84f2ae';
let units2 = "imperial";

let apiURL2 = url2 + 
              id2 + 
              "&appid=" + apiKey2 +
              "&units=" + units2; 

//http://api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}

console.log(apiURL2);

fetch(apiURL2)
  .then(response => response.json())
  .then(data => {

    console.log(data);

    let day1 = data.list[1].main.temp + "° F";
    document.getElementById('forecast-temp1').innerText = day1;

    for (let i = 1; i <= 5; i++ ) {
        let day = data.list[i].main.temp + "° F";
        document.getElementById('forecast-temp' + i).innerText = day;
    }

    const imagesrc = 'https://openweathermap.org/img/w/' + 
    data.weather[0].icon + 
    '.png';  

    const desc = data.weather[0].description;  

    console.log(imagesrc);

    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc); 
    document.getElementById('icon').setAttribute('alt', desc);


});