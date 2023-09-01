'use strict';
// button reference: uses CSS selectors, just like we used in the CSS file
const switcher = document.querySelector(`.btn`);
// Event Handler: uses the toggle element to switch between light and dark themes
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});