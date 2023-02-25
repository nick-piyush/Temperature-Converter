const temperatureInput = document.getElementById("temperature-input");
const unitInput = document.getElementById("unit-input");
const unitOutput = document.getElementById("unit-output");
const convertButton = document.getElementById("convert-button");
const result = document.getElementById("result");

convertButton.addEventListener("click", function() {
    let temperature = parseFloat(temperatureInput.value);
    let inputUnit = unitInput.value;
    let outputUnit = unitOutput.value;

    if (isNaN(temperature)) {
        result.innerHTML = "Please enter a valid number.";
    } else {
        if (inputUnit === "celsius") {
            if (outputUnit === "fahrenheit") {
                temperature = (temperature * 9) / 5 + 32;
            } else if (outputUnit === "kelvin") {
                temperature += 273.15;
            }
        } else if (inputUnit === "fahrenheit") {
            if (outputUnit === "celsius") {
                temperature = ((temperature - 32) * 5) / 9;
            } else if (outputUnit === "kelvin") {
                temperature = ((temperature - 32) * 5) / 9 + 273.15;
            }
        } else if (inputUnit === "kelvin") {
            if (outputUnit === "celsius") {
                temperature -= 273.15;
            } else if (outputUnit === "fahrenheit") {
                temperature = ((temperature - 273.15) * 9) / 5 + 32;
            }
        }
        result.innerHTML = `${ temperature.toFixed(2) } &deg;
        ${ outputUnit.toUpperCase() }`;
    }
});