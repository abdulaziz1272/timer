// real time
const realHrs = document.querySelector(".real-hrs");
const realMin = document.querySelector(".real-min");
const realSec = document.querySelector(".real-sec");

setInterval(() => {
    const newData = new Date;

    realHrs.innerHTML = (newData.getHours() < 10 ? "0" : "") + newData.getHours();
    realMin.innerHTML = (newData.getMinutes() < 10 ? "0" : "") + newData.getMinutes();
    realSec.innerHTML = (newData.getSeconds() < 10 ? "0" : "") + newData.getSeconds();
}, 1000);
// real time





// timer
const timerHrs = document.querySelector(".timer-hrs");
const timerMin = document.querySelector(".timer-min");
const timerSec = document.querySelector(".timer-sec");
const timerMil = document.querySelector(".timer-mil");
const startBtn = document.querySelector(".startBtn");
let replicaHrs = 0;
let replicaMin = 0;
let replicaSec = 0;
let replicaMil = 0;
let interMil;
let active = false;


// start and stop
function checkActive() {
    if (!active) {
        timerCounter();
        active = true;
        startBtn.textContent = "Stop";
    } else {
        active = false;
        timerStop();
        startBtn.textContent = "Start";
    }
}

function timerCounter() {
    interMil = setInterval(() => {
        replicaMil++;

        if (replicaMil < 100) {
            timerMil.innerHTML = (replicaMil < 10 ? "0" : "") + replicaMil;
        } else if (replicaMil == 100) {
            timerMil.innerHTML == "00";
            replicaMil = 0;
            replicaSec++;

            if (replicaSec < 60) {
                timerSec.innerHTML = (replicaSec < 10 ? "0" : "") + replicaSec;
            } else if (replicaSec == 60) {
                timerSec.innerHTML = "00";
                replicaSec = 0;
                replicaMin++;

                if (replicaMin < 60) {
                    timerMin.innerHTML = (replicaMin < 10 ? "0" : "") + replicaMin;
                } else if (replicaMin == 60) {
                    timerMin.innerHTML = "00";
                    replicaMin = 0;
                    replicaHrs++;

                    if (replicaHrs < 24) {
                        timerHrs.innerHTML = (replicaHrs < 10 ? "0" : "") + replicaHrs;
                    } else if (replicaHrs == 24) {
                        timerHrs.innerHTML = "00";
                        replicaHrs = 0;
                    }
                }
            }
        }
    }, 10);
}

function timerStop() {
    clearInterval(interMil);
}
document.addEventListener("keydown", function (event) {
    if (event.key.toLowerCase() === "s") {
        checkActive();
    }
});
// start and stop

// note
const noteLists = document.querySelector(".timer-notes");

function addNote() {
    if (active) {
        let list = document.createElement("li");
        list.innerHTML = `
            ${(replicaHrs < 10 ? "0" : "") + replicaHrs}:
            ${(replicaMin < 10 ? "0" : "") + replicaMin}:
            ${(replicaSec < 10 ? "0" : "") + replicaSec}:
            ${(replicaMil < 10 ? "0" : "") + replicaMil}
            <span class="note-clear">+</span>
    `;
        noteLists.appendChild(list);
    }
}

noteLists.addEventListener("click", function (event) {
    if (event.target.classList.contains("note-clear")) {
        event.target.parentElement.remove();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        event.preventDefault();
        addNote();
    }
});

// note

// reset

function timerReset() {
    timerStop();
    active = false;
    timerStop();
    startBtn.textContent = "Start";

    replicaMil = 0;
    timerMil.innerHTML = "00";
    replicaSec = 0;
    timerSec.innerHTML = "00";
    timerMin = 0;
    interMil.innerHTML = "00";
    replicaHrs = 0;
    timerHrs.innerHTML = "00"
};

document.addEventListener("keydown", function (event) {
    if (event.key.toLowerCase() === "r") {
        timerReset();
    }
});

// reset

// timer