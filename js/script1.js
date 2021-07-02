// Selections

const shiftCheckbox = document.querySelector(
    ".keypad__keys__key--shift-checkbox"
);
const shiftKey = document.querySelector(".keypad__keys__key--shift");

const keysBox = document.querySelector(".keypad__keys");

const displayEl = document.querySelector(".keypad__display__text");

// Variables
let upper = false;

// FUNCTIONS

// EVENT LISTENERS

// Shift key functionality
shiftKey.addEventListener("click", () => {
    if (!shiftCheckbox.checked) {
        keysBox.classList.add("keypad__keys--upper");
        upper = true;
    } else {
        keysBox.classList.remove("keypad__keys--upper");
        upper = false;
    }
});

// Writing on the screen
keysBox.addEventListener("click", (e) => {
    if (e.target.classList.contains("keypad__keys__key")) {
        let add = upper ? e.target.innerHTML.toUpperCase() : e.target.innerHTML;
        displayEl.value = displayEl.value + add;
    } else if (e.target.classList.contains("keypad__keys__key--space")) {
        displayEl.value = displayEl.value + " ";
    } else if (e.target.classList.contains("keypad__keys__key--del")) {
        displayEl.value = displayEl.value.slice(0, -1);
    }
    displayEl.focus();
});

// Change theme
const themeCheckbox = document.querySelector(".keypad__theme__checkbox");
const themeToggle = document.querySelector(".keypad__theme__toggle");
const section = document.querySelector(".section-one");

themeToggle.addEventListener("click", () => {
    if (!themeCheckbox.checked) {
        section.setAttribute("data-theme", "dark");
    } else {
        section.setAttribute("data-theme", "light");
    }
});
