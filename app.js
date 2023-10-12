const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const countDisplay = document.getElementById('count');
const input = document.getElementById('input');
const resultSpan = document.getElementById('result');

let count = 0;

// Initial count value and input value

countDisplay.textContent = count;
input.value = 1;

incrementButton.addEventListener('click', () => {
    count += parseInt(input.value);
    updateCountDisplay();
});

decrementButton.addEventListener('click', () => {
    count -= parseInt(input.value);
    updateCountDisplay();
});

function updateCountDisplay() {
    countDisplay.textContent = count;
    updateResultSpan();
}

function updateResultSpan() {
    resultSpan.textContent = count;
    resultSpan2.textContent = count;
}
getCountButton.addEventListener('click', () => {
  alert('Current Count: ' + count);
});