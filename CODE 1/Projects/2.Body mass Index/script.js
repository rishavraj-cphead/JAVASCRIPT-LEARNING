const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = "Please give a valid height";
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "Please give a valid weight";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `Your BMI is ${bmi}`;

    if (bmi < 18.6) {
        results.innerHTML += "<br>Underweight";
    } else if (bmi <= 24.9) {
        results.innerHTML += "<br>Normal Range";
    } else {
        results.innerHTML += "<br>Overweight";
    }
});