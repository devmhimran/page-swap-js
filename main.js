
let timer;

function startTimer() {
    timer = setInterval(() => {
        if (window.location.href.includes('home')) {
            window.location.href = '/index.html'
        } else {
            window.location.href = '/home.html'
        }
    }, 1000);
}
startTimer();

const timeBtn = document.getElementById('handleBtn');
timeBtn.addEventListener('click', function () {
    clearInterval(timer);
    setTimeout(startTimer, 10000);
})


