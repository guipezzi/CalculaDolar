const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

const inputValue = document.getElementById("valorReal");
const selectCurrency = document.getElementById("currency");
const result = document.getElementById("result");

function handleSubmit(e) {
    e.preventDefault();

    if (!inputValue.value || inputValue.value <= 0) {
        alert("Por favor, insira um valor válido.");
        return;
    } else if (!selectCurrency.value) {
        alert("Por favor, selecione uma moeda.");
        return;
    }

    convert();
}

function convert() {
    let valueConverted;

    if (selectCurrency.value === "EUR") {
        valueConverted = inputValue.value * 5.79;
        result.innerHTML = `O valor convertido é: ${valueConverted.toFixed(2)} EUR`;
    } else if (selectCurrency.value === "USD") {
        valueConverted = inputValue.value * 5.09;
        result.innerHTML = `O valor convertido é: ${valueConverted.toFixed(2)} USD`;
    } else if (selectCurrency.value === "GBP") {
        valueConverted = inputValue.value * 6.79;
        result.innerHTML = `O valor convertido é: ${valueConverted.toFixed(2)} GBP`;
    }

    animateResult();
}

function animateResult() {
    result.classList.remove("show-result");
    void result.offsetWidth;
    result.classList.add("show-result");
}