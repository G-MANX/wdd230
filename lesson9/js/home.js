const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navBar');

menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const todaysdate = new Date();
const dayName = dayNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const currentdate = dayName + ", " + todaysdate.getDate() + " " + monthName + " " + todaysdate.getFullYear();

document.getElementById('date').textContent = currentdate;
// json file load
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const towns = jsonObject['towns'];
    var p, f, s;
    for(let j=0; j < towns.length; j++){
       if(towns[j].name == "Preston"){
         p = j;
       }
       else if(towns[j].name == "Fish Haven"){
         f = j;
       }
       else if(towns[j].name == "Soda Springs"){
         s = j;
       }
    }
    var index = [p, f, s];
    for (let i = 0; i < index.length; i++ ) {
        let town = document.createElement('div');
        let data = document.createElement('div');
        data.setAttribute("class","data");
        town.setAttribute("id","town" + i);
        town.setAttribute("class","town");
        let h2 = document.createElement('h2');
        h2.setAttribute("class","townheader")
        let motto = document.createElement('p');
        motto.setAttribute("class","motto")
        let yearfounded = document.createElement('p');
        yearfounded.setAttribute("class","founded");
        let pop = document.createElement('p');
        pop.setAttribute("class", "pop");
        let rain = document.createElement('p');
        rain.setAttribute("class","rain");
        let image = document.createElement('img');

h2.textContent = towns[index[i]].name;
motto.textContent = "'" + towns[index[i]].motto + "'";
yearfounded.textContent = "Established: " + towns[index[i]].yearFounded; 
pop.textContent = "Population: " + towns[index[i]].currentPopulation;
rain.textContent = "Average Rainfall: " + towns[index[i]].averageRainfall; 
image.setAttribute('src', "images/" + towns[index[i]].photo);
town.appendChild(data);
data.appendChild(h2);
data.appendChild(motto);
data.appendChild(yearfounded);
data.appendChild(pop);
data.appendChild(rain);
town.appendChild(image);
document.querySelector('section.towns').appendChild(town);
    }
      });
