(function () {
    const clockContainer = document.querySelector('.about__norway-description-clock');
    function updatedateclock() {
    clockContainer.innerText = new Date ().toLocaleDateString ();  
    }
    setInterval(updatedateclock, 1000);
}) ();



