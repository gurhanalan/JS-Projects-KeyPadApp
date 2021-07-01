// Selections

const shiftCheckbox = document.querySelector(
    ".keypad__keys__key--shift-checkbox"
);
const shiftKey = document.querySelector(".keypad__keys__key--shift");

const keysBox = document.querySelector(".keypad__keys");

const keys = document.querySelectorAll(".keypad__keys__key");
const displayEl = document.querySelector(".keypad__display__text");

// Variables
let text = "";
let upper = false;

// FUNCTIONS

function display() {
    displayEl.value = text;
    displayEl.focus();
}

display();

// EVENT LISTENERS
shiftKey.addEventListener("click", () => {
    if (!shiftCheckbox.checked) {
        keysBox.classList.add("keypad__keys--upper");
        upper = true;
    } else {
        keysBox.classList.remove("keypad__keys--upper");
        upper = false;
    }
});

keysBox.addEventListener("click", (e) => {
    if (e.target.classList.contains("keypad__keys__key")) {
        let add = upper ? e.target.innerHTML.toUpperCase() : e.target.innerHTML;
        text = text + add;
    } else if (e.target.classList.contains("keypad__keys__key--space")) {
        text = text + " ";
    } else if (e.target.classList.contains("keypad__keys__key--del")) {
        text = text.slice(0, -1);
    }
    display();
});
