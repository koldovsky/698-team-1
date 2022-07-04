(function () {
    const clockContainer = document.querySelector ('.about__norway-description-clock');
    function undateClock() {
    clockContainer.innerText = new Date().toLocaleDateString();  
    }
    setInterval(undateClock, 1000);
}) ();


