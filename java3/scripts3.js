let numbers = [];
const maxNumbers = 12;

function insertNumber() {
    const input = document.getElementById("numInput");
    const value = parseInt(input.value);

    if (isNaN(value)) {
        alert("Please enter a number.");
        return;
    }

    if (numbers.length >= maxNumbers) {
        alert("You can only enter 12 numbers.");
        return;
    }

    numbers.push(value);
    input.value = "";
    displayResults();
}

function displayResults() {
    document.getElementById("numbers").innerHTML =
        numbers.join("<br>");

    let sum = numbers.reduce((a, b) => a + b, 0);
    let highest = Math.max(...numbers);
    let lowest = Math.min(...numbers);

    document.getElementById("sum").textContent = sum;
    document.getElementById("highest").textContent = highest;
    document.getElementById("lowest").textContent = lowest;
}

function deleteAll() {
    numbers = [];
    document.getElementById("numbers").innerHTML = "";
    document.getElementById("sum").textContent = "";
    document.getElementById("highest").textContent = "";
    document.getElementById("lowest").textContent = "";
}