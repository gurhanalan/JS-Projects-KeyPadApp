// Selections

const shiftCheckbox = document.querySelector(
    ".keypad__keys__key--shift-checkbox"
);
const shiftKey = document.querySelector(".keypad__keys__key--shift");

const keysBox = document.querySelector(".keypad__keys");

const keys = document.querySelectorAll(".keypad__keys__key");
const displayEl = document.querySelector(".keypad__display__text");

// Variables
let text = "asas";
let upper = false;

// FUNCTIONS

function display() {
    displayEl.value = text;
}

display();

// EVENT LISTENERS
shiftKey.addEventListener("click", () => {
    console.log("clicked");
    console.log(shiftCheckbox.checked);
    if (!shiftCheckbox.checked) {
        keysBox.classList.add("keypad__keys--upper");
        upper = true;
    } else {
        keysBox.classList.remove("keypad__keys--upper");
        upper = false;
    }
});

keysBox.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.classList.contains("keypad__keys__key")) {
        let add = upper ? e.target.innerHTML.toUpperCase() : e.target.innerHTML;
        text = text + add;
        // console.log(e.target.innerHTML);
        // text = text + e.target.innerHTML;
        display();
    }
});
