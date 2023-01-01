function registerServiceWorker () {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('sw.js');
}
registerServiceWorker();

// Test For mobile
if(/iPhone|Android/i.test(navigator.userAgent)) {
    document.getElementById("click").innerHTML = "Tap!";
}

let clicks = 0;

document.addEventListener('click', (e) => {
    clicks++;
    document.getElementById("click").innerHTML = clicks;
});