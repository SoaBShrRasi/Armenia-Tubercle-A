'use strict'
//This is the script for the Dark and light button.
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Night";
    }
    else {
        this.textContent = "Day";
    }
    console.log('current class name: ' + className);
});
//This is the script for the imagemap.
function myFunction() {
    alert("The secret will be revealed on December 21, 2020 at 6 AM CET. ");
};
//Now begins the script for fireworks.