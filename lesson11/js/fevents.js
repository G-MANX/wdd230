// json file load
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const towns = jsonObject['towns'];
    var i = 0;
    var name = towns[i].name;

    for (i = 0; i < towns.length; i++) {
        var name = towns[i].name;
        if (name == "Fish Haven") {
            var event = towns[i].events.join('<br>');
            document.getElementById("events").innerHTML = event;
        }
    }
});