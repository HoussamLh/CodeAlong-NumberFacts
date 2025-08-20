const numberInput = document.getElementById('numberInput');
const factText = document.getElementById('factText');

numberInput.addEventListener('input', () => {
    const number = numberInput.value;
    if (number) {
        fetch(`http://numbersapi.com/${number}`)
            .then(response => response.text())
            .then(data => {
                factText.textContent = data;
            })
            .catch(err => {
                factText.textContent = "Could not fetch a fact.";
                console.error(err);
            });
    } else {
        factText.textContent = '';
    }
});
