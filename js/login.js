var lg_wr = document.querySelector('.login')
var su_wr = document.querySelector('.signup')

function cc() {
    lg_wr.style.visibility = "visible"
}

document.querySelector('.login_wrapper').onclick = (e) => {
    e.stopPropagation()
}
document.querySelector('.signup_wrapper').onclick = (e) => {
    e.stopPropagation()
}

function xLogin() {
    lg_wr.style.visibility = "hidden"
    su_wr.style.visibility = "hidden"
}

function eLogin() {
    lg_wr.style.visibility = "hidden"
    su_wr.style.visibility = "visible"
}
function eSignup() {
    su_wr.style.visibility = "hidden"
    lg_wr.style.visibility = "visible"
}



// Đăng kí

let email_signup = document.getElementById("email_signup");
let username_signup = document.getElementById("username_signup");
let password_signup = document.getElementById("password_signup");
let btnSignup = document.querySelector(".btn-signup");

btnSignup.addEventListener("click", (e) => {
    e.preventDefault();
    let user = {
        username: username_signup.value,
        email: email_signup.value,
        password: password_signup.value,
    };
    let json = JSON.stringify(user);
    if (!username_signup.value || !email_signup.value || !password_signup.value) {
        alert("Nhập đầy đủ thông tin!");
    } else {
        localStorage.setItem(username_signup.value, json);
        alert("Đăng kí thành công!");
        ccc.style.visibility = "visible"
        loz.style.visibility = "hidden"
    }
});

// Đăng nhập

let email = document.getElementById("email");
let username = document.getElementById("username");
let password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    let user = {
        username: username.value,
        email: email.value,
        password: password.value,
    };
    let json2 = JSON.stringify(user);
    if (!username.value || !email.value || !password.value) {
        alert("Nhập đầy đủ thông tin!");
    }
    else if (username.value === "admin" && email.value === "admin" && password.value === "admin") {
        alert("Admin!")
        window.location.href = "admin.html"
    } else if (localStorage.getItem(username.value) == json2) {
        // Dang nhap
        let userConfig = "currenUser";
        let json2 = JSON.stringify(user.username);
        localStorage.setItem(userConfig, json2);
        alert("Đăng nhập thành công")
        window.location.href = "index.html";
    } else {
        alert("Sai thông tin!");
    }
});

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const CURRENT_USER = "currenUser"
let getUser = JSON.parse(localStorage.getItem(CURRENT_USER) || null)
let config = JSON.parse(localStorage.getItem(getUser))

if (getUser) {
    let t1 = document.querySelector('.user')
    let t2 = document.querySelector('.logout')
    t1.innerHTML = `
    <div style="color: pink; font-size: 18px;">
        ${getUser}
    </div>
    `
    t2.innerHTML = `
    <div style="margin-right: 22px;">
      <a href="">Đăng xuất</a>
      <style>
        a {
          text-decoration: none;
          color: pink;
          font-size: 18px;
          }

        a:hover {
          color: black;
        }
      </style>
    </div>
    `
}

const dangXuat = () => {
    localStorage.setItem(CURRENT_USER, null)
}
let logOutBtn = $(".logout")
logOutBtn.onclick = (e) => {
    dangXuat();
    document.location.reload();
}
