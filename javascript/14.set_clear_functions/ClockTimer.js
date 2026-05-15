let playBtn = document.getElementById("play_icon_container");
let resetBtn = document.getElementById("reset_icon_container");
let timerDisplay = document.getElementById("clock_timer");

let count = parseInt(timerDisplay.textContent);
let intervalId = null;
let isRunning = false;

// PLAY / PAUSE
playBtn.addEventListener("click", () => {
    if (!isRunning) {
        // Start timer
        playBtn.innerHTML = '<i class="fa-solid fa-pause clock_timer_icons"></i>';
        isRunning = true;

        intervalId = setInterval(() => {
            if (count > 0) {
                count--;
                timerDisplay.textContent = count;
            } else {
                clearInterval(intervalId);
                isRunning = false;
            }
        }, 1000);

    } else {
        // Pause timer
        playBtn.innerHTML = '<i class="fa-solid fa-play clock_timer_icons"></i>';
        clearInterval(intervalId);
        isRunning = false;
    }
});

// RESET
resetBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    count = 10; // reset value
    timerDisplay.textContent = count;
    isRunning = false;

    playBtn.innerHTML = '<i class="fa-solid fa-play clock_timer_icons"></i>';
});