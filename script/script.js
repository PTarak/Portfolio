function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

var i = 0;
 var vanBan = 'Hi, Greetings from Tarak 🌟';
 var tocDo = 200;
function typeWriter() {
   if (i < vanBan.length) {
     document.getElementById("Welcome_Intro").innerHTML += vanBan.charAt(i);
     i++;
     setTimeout(typeWriter, tocDo );
   }
 }

document.addEventListener('DOMContentLoaded', function () {
    typeWriter(); // Call your function here
});

// JavaScript to display the current time and date in the header
function updateTimeAndDate() {
    const dateTimeElement = document.getElementById('date-time');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    dateTimeElement.textContent = `📅 🕒 ${formattedDate}`;
}

// Update the time and date every second
setInterval(updateTimeAndDate, 1000);

// Call the function to set the initial time and date
updateTimeAndDate();

