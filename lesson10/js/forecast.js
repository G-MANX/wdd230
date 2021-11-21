const oneday = dayNames[todaysdate.getDay() + 1];
const twoday = dayNames[todaysdate.getDay() + 2];
const threeday = dayNames[todaysdate.getDay() + 3];
const fourday = dayNames[todaysdate.getDay() + 4];
const fiveday = dayNames[todaysdate.getDay() + 5];

document.getElementById('1day').innerHTML = oneday;
document.getElementById('2day').innerHTML = twoday;
document.getElementById('3day').innerHTML = threeday;
document.getElementById('4day').innerHTML = fourday;
document.getElementById('5day').innerHTML = fiveday;

let request = new XMLHttpRequest();
const apiURLF = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=46c7dd86b763384946891a3bda107a7f";
request.open('Get', apiURLF, true);
request.send();

request.onload = function () {
    var data = JSON.parse(request.responseText);
    console.log(data);
    var weatherLogo = "https://openweathermap.org/img/wn/";
    const forecastArr = data.list;
    let j = 0;
    for (var i = 0; i < forecastArr.length; i++) {
        var dt = forecastArr[i].dt_txt;
        var time = dt.includes('18:00:00');
        if (time == true && j < 5){
            var temperature = data.list[i].main.temp;
            console.log(temperature);
            document.getElementById(j + "Cast").innerHTML = temperature;
            document.getElementById(j + "Img").setAttribute("src",weatherLogo + data.list[i].weather[0].icon + "@2x.png");
            document.getElementById(j + "Img").setAttribute("alt",data.list[i].weather[0].description);
            j++;
        }
    }
};