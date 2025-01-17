const FULL_DASH_ARRAY = 283;
const TARGET_DATE = new Date("2025-10-20T12:00:00Z");

document.querySelector("#timer").innerHTML = `
  ${createTimer("Days")}
  ${createTimer("Hours")}
  ${createTimer("Minutes")}
  ${createTimer("Seconds")}
`;

startCountdown();

function createTimer(label) {
    return `
      <div class="base-timer" id="timer-${label.toLowerCase()}">
        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g class="base-timer__circle">
            <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
            <path
              id="base-timer-path-remaining-${label.toLowerCase()}"
              stroke-dasharray="283"
              class="base-timer__path-remaining"
              d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
              "
            ></path>
          </g>
        </svg>
            <div class="timer-text">
                <div class="base-timer__unit-label">${label}</div>
                <div id="base-timer-label-${label.toLowerCase()}" class="timer__unit"></div>
            </div>
      </div>
    `;
  }

function startCountdown() {
  const timerInterval = setInterval(() => {
    const timeLeft = calculateTimeLeft();

    if (timeLeft.total <= 0) {
      clearInterval(timerInterval);
      onTimesUp();
      return;
    }

    updateTimerDisplay(timeLeft, "days");
    updateTimerDisplay(timeLeft, "hours");
    updateTimerDisplay(timeLeft, "minutes");
    updateTimerDisplay(timeLeft, "seconds");

    setCircleDasharray(timeLeft, "days");
    setCircleDasharray(timeLeft, "hours");
    setCircleDasharray(timeLeft, "minutes");
    setCircleDasharray(timeLeft, "seconds");
  }, 1000);
}

function calculateTimeLeft() {
  const now = new Date();
  const difference = TARGET_DATE - now;

  return {
    total: difference,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function updateTimerDisplay(timeLeft, unit) {
  const value = timeLeft[unit];
  document.getElementById(`base-timer-label-${unit}`).textContent = value;
}

function setCircleDasharray(timeLeft, unit) {
  const totalUnits = {
    days: 365,
    hours: 24,
    minutes: 60,
    seconds: 60,
  };

  const rawTimeFraction = timeLeft[unit] / totalUnits[unit];
  const circleDasharray = `${(rawTimeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;

  document
    .getElementById(`base-timer-path-remaining-${unit}`)
    .setAttribute("stroke-dasharray", circleDasharray);
}

function onTimesUp() {
  ["days", "hours", "minutes", "seconds"].forEach((unit) => {
    const path = document.getElementById(`base-timer-path-remaining-${unit}`);
    path.classList.add("base-timer__path-completed");
    document.getElementById(`base-timer-label-${unit}`).textContent = "0";
  });
}
