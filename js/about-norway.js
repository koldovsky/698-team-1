(function () {
    const clockContainer = document.querySelector('.about__norway-description-clock');
    function updatedateclock() {
    clockContainer.innerText = new Date (). toLocaleDateString([], {hour12: false });  
    }
    setInterval(updatedateclock, 1000);
}) ();



