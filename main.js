function onSubmit() {
    let input123 = document.getElementById("pages-input").value;
    let pages = parseInt(input123);
    if (isNaN(pages)) {
        alert('Please chg to number');
        return;
    }
    if (input123 > 604 || input123 <= 0) {
        alert('Please limit your number to less than or equal to 604!');
        return;
    }
    let numOfDays = caclulateDaysNeeded(604, input123);
    document.getElementById('pages-output').innerHTML = 'The number of days needed are ' + numOfDays;
}

// this function will return the number of days needed
function caclulateDaysNeeded(totalPage, input) {
    return totalPage/input;
}
