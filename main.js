const username_input = document.getElementById('username');
const email_input = document.getElementById('email');
const password_input = document.getElementById('password');
const submit_input = document.getElementById('submit');
const alertbox_div = document.getElementById('alertbox');

let username;
let email;
let password;

submit_input.addEventListener('click', (e) => {
    e.preventDefault();
    username = username_input.value;
    email = email_input.value;
    password = password_input.value;
    alertbox_div.hidden = false;
    const text = alertbox_div.querySelector('p');
    if(username == "") {
        alertbox_div.className = "alert alert-danger";
        text.innerText = "Invalid Username";
    }
    else if (email == "") {
        alertbox_div.className = "alert alert-danger";
        text.innerText = "Invalid Email";
    }
    else if (password == "") {
        alertbox_div.className = "alert alert-danger";
        text.innerText = "Invalid Password";
    }
    else {
        alertbox_div.className = "alert alert-success";
        text.innerText = "Login Successfully";
    }
});
