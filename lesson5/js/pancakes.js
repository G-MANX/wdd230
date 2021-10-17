//This was then logic to do with the second toggle paragraph which works on day of the week. 
let date = new Date();
let dayOfWeek = date.getDay();
console.log("day of the week is: " + dayOfWeek);

if (dayOfWeek == 5) {
    console.log("its the right day of the week");
    document.getElementById("toggle2").style.display = "block";
} else {
    console.log("its NOT the right day of the week");
    document.getElementById("toggle2").style.display = "none";
}
