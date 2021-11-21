const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=46c7dd86b763384946891a3bda107a7f";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const weather = jsObject['weather'];
    const main =jsObject['main'];
    const wind =jsObject['wind'];
    document.getElementById('temp').textContent = main.temp;
    document.getElementById('humid').textContent = main.humidity;
    document.getElementById('speed').textContent = wind.speed;
    document.getElementById('weat').textContent = weather[0].main;
    doInputOutput(main, wind);
  });

  

function doInputOutput(main, wind){
    let tempF = main.temp;
    let speed = wind.speed;
    let calculatedChill = windChill(tempF, speed);
    windChill(tempF, speed);
    document.getElementById('chill').innerHTML = calculatedChill;
    
}

function windChill(t, s) {
    if (t < 50 && s > 3) {
    let chill = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
    chill = chill.toFixed(0);
    return chill;
    }
    else {
    chill = "N/A"
    return chill;
    }
}

