// Get DOM elements
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const celsiusToFahrenheitButton = document.getElementById("celsius-to-fahrenheit");
const fahrenheitToCelsiusButton = document.getElementById("fahrenheit-to-celsius");
const resultText = document.getElementById("result-text");

// Conversion functions
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Event listeners
celsiusToFahrenheitButton.addEventListener("click", () => {
    const celsiusValue = parseFloat(celsiusInput.value);
    if (!isNaN(celsiusValue)) {
        const fahrenheitValue = convertCelsiusToFahrenheit(celsiusValue);
        resultText.textContent = `${celsiusValue} °C is equal to ${fahrenheitValue} °F`;
    }
});

fahrenheitToCelsiusButton.addEventListener("click", () => {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheitValue)) {
        const celsiusValue = convertFahrenheitToCelsius(fahrenheitValue);
        resultText.textContent = `${fahrenheitValue} °F is equal to ${celsiusValue} °C`;
    }
});
