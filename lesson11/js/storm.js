/*small screen menu code*/
const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navBar');

menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

/*footer date code*/
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

//Selector code
function adjustSeverity(severity) {
    document.getElementById("severityvalue").innerHTML = severity;
}

window.onload = function()
{
  document.getElementById("submit").onclick = validateForm;
};
function validateForm(){
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    let zip = document.getElementById('zip');
     if((name.checkValidity()) && (phone.checkValidity()) && (zip.checkValidity())) {
        window.location.href = "thanks.html";
     }
    else{
        return null;
    }
};