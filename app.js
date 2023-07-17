const passward = document.getElementById('pass1'),
    password = document.getElementById('pass2'),
    btn = document.getElementById('enter'),
    success = document.getElementById('success-message'),
    error = document.getElementById('error-message'),
    err1 = document.getElementById('err1'),
    err2 = document.getElementById('err2'),
    err3 = document.getElementById('err3'),
    err4 = document.getElementById('err4'),
    err5 = document.getElementById('err5'),
    err6 = document.getElementById('err6'),
    suc1 = document.getElementById('suc1'),
    suc2 = document.getElementById('suc2'),
    suc3 = document.getElementById('suc3'),
    suc4 = document.getElementById('suc4'),
    suc5 = document.getElementById('suc5'),
    suc6 = document.getElementById('suc6');

window.onload = () => {
    error.style.display = "none";
    success.style.display = "none";
}
let num = /[0-9]{1}/g;
let small = /[a-z]{1}/g;
let capital = /[A-Z]{1}/g;
let spChar = /[@ # $ % & ^ * . , = + - _ !]{1}/g;
let six = /[0-9a-zA-Z ! @ # $ % ^ & * . , = + - _ ]{6}/g;

passward.onfocus = () => {
    error.style.display = "block";
    success.style.display = "none";
}
passward.onblur = () => {
    error.style.display = "none";
    success.style.display = "none";
}
passward.onkeyup = () => {
    success.style.display = "block";
    if (passward.value.match(num)) {
        suc1.style.display = "block";
        err1.style.display = "none";

    }
    else {
        suc1.style.display = "none";
        err1.style.display = "block";

    }
    if (passward.value.match(capital)) {
        suc2.style.display = "block";
        err2.style.display = "none";
    }
    else {
        suc2.style.display = "none";
        err2.style.display = "block";

    }
    if (passward.value.match(small)) {
        suc3.style.display = "block";
        err3.style.display = "none";
    }
    else {
        suc3.style.display = "none";
        err4.style.display = "block";

    }
    if (passward.value.match(spChar)) {
        suc4.style.display = "block";
        err4.style.display = "none";
    }
    else {
        suc4.style.display = "none";
        err4.style.display = "block";

    }
    if (passward.value.match(six)) {
        suc5.style.display = "block";
        err5.style.display = "none";
    }
    else {
        suc5.style.display = "none";
        err5.style.display = "block";

    }
    if (passward.value === password.value && passward.value !== "" && password.value !== "") {
        suc6.style.display = "block";
        err6.style.display = "none";
        passward.style.border = "2px solid darkgreen";
    }
    else {
        suc6.style.display = "none";
        err6.style.display = "block";

    }

}
password.onfocus = () => {
    if (passward.value !== "") {
        success.style.display = "block";
        error.style.display = "block";
        passward.style.border = "2px solid darkgreen";
    }
    else {
        success.style.display = "none";
        error.style.display = "none";
        passward.style.border = "2px solid red";
        password.style.border = "2px solid red";
    }
}
password.onkeyup = () => {
    if (passward.value === password.value && passward.value !== "" && password.value !== "") {
        suc6.style.display = "block";
        err6.style.display = "none";
        passward.style.border = "2px solid darkgreen";
        password.style.border = "2px solid darkgreen";
    }
    else {
        suc6.style.display = "none";
        err6.style.display = "block";
        passward.style.border = "2px solid red";
        password.style.border = "2px solid red";
    }
}
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let tested = document.querySelector("#sent");
    if (passward.value === password.value &&
        passward.value.match(num) &&
        passward.value.match(small) &&
        passward.value.match(capital) &&
        passward.value.match(six) &&
        passward.value.match(spChar)) {
        tested.innerHTML = 'Conditions are compulsorily certified ok!';
        passward.style.border = "2px solid darkgreen";
        password.style.border = "2px solid darkgreen";
    }
    else {
        passward.style.border = "2px solid red";
        password.style.border = "2px solid red";
    }
});