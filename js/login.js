var lg_wr = document.querySelector('.login')
var su_wr = document.querySelector('.signup')

function cc() {
    lg_wr.style.visibility = "visible"

    document.querySelector('.login_wrapper').onclick = (e) => {
        e.stopPropagation()
    }
    document.querySelector('.signup_wrapper').onclick = (e) => {
        e.stopPropagation()
    }
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

let email_signup = document.getElementById("email_signup");
let username_signup = document.getElementById("username_signup");
let password_signup = document.getElementById("password_signup");
let btnSignup = document.querySelector(".btn-signup");

let email = document.getElementById("email");
let username = document.getElementById("username");
let password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-login");

var userrrList = JSON.parse(localStorage.getItem('userList'))

// Đăng kí

btnSignup.addEventListener("click", (e) => {
    let tk = username_signup.value
    let mk = email_signup.value
    let em = password_signup.value
    if (!username_signup.value || !email_signup.value || !password_signup.value) {
        alert("Nhập đầy đủ thông tin!");
    } else {
        alert("Đăng kí thành công!");
        userrrList.push({ tk: tk, mk: mk, em: em })
        localStorage.setItem('userList', JSON.stringify(userrrList))
        su_wr.style.visibility = "hidden"
        lg_wr.style.visibility = "visible"
    }
})

// Đăng nhập

btnLogin.addEventListener("click", (e) => {
    let user = {
        ck: username.value,
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
})


// Dang Xuat

// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

// const CURRENT_USER = "currenUser"
// let getUser = JSON.parse(localStorage.getItem(CURRENT_USER) || null)
// let config = JSON.parse(localStorage.getItem(getUser))

// if (getUser) {
//     let t1 = document.querySelector('.user')
//     let t2 = document.querySelector('.logout')
//     t1.innerHTML = `
//     <div >
//         <p style="font-size: 1.2rem;">Hey, <b>${getUser}</b></p>
//     </div>
//     `
//     t2.innerHTML = `
//     <li>
//         <button id="btn-logout">
//             <i class="fa-solid fa-right-from-bracket"></i>
//         </button>
//     <style>
//         #navbar li button#btn-logout:hover,
//         #navbar li button#btn-logout.active {
//             color: red;
//         }

//         #navbar li button#btn-logout.active::after,
//         #navbar li button#btn-logout:hover::after {
//             content: "";
//             width: 40%;
//             height: 2px;
//             background-color: red;
//             position: absolute;
//             bottom: -4px;
//             left: 30%;
//         }
//     </style>
//     </li>
//     `
// }

// let logOutBtn = $(".logout")

// logOutBtn.onclick = (e) => {
//     localStorage.setItem(CURRENT_USER, null)
//     document.location.reload();
// }