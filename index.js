let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count++;
    countEl.textContent = count;
}

function save() {
    let saveCount = ` ${count}`;
    saveEl.textContent[saveEl.textContent.length - 1] === ":" ? saveEl.textContent += saveCount : saveEl.textContent += " -" + saveCount;
    countEl.textContent = 0;
    count = 0;
}