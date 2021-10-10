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
    "Sunday",
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

