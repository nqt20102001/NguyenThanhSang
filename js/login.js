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

let username_signup = document.getElementById("username_signup");
let password_signup = document.getElementById("password_signup");
let password_signup2 = document.getElementById("password_signup2");
let btnSignup = document.querySelector(".btn-signup");

let username = document.getElementById("username");
let password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-login");

var userrrList = [{ tk_dk: "user1", mk_dk: "user1" }]
if (localStorage.getItem('userList') === null) {
    localStorage.setItem('userList', JSON.stringify(userrrList))
}
userrrList = JSON.parse(localStorage.getItem('userList'))

// Đăng kí

btnSignup.addEventListener("click", (e) => {
    let tk = username_signup.value
    let mk = password_signup.value
    let mk2 = password_signup2.value

    if (!tk || !mk || !mk2) {
        alert("Nhập đầy đủ thông tin!")
        return
    }

    if (mk === mk2) {
        alert("Đăng kí thành công!")
        userrrList.push({ tk_dk: tk, mk_dk: mk })
        localStorage.setItem('userList', JSON.stringify(userrrList))
        su_wr.style.visibility = "hidden"
        lg_wr.style.visibility = "visible"
        return
    }
    else {
        alert("Nhập lại mật khẩu không hợp lệ!")
        document.getElementById("password_signup2").focus()
        document.getElementById("password_signup2").value = null
        return
    }
})

// Đăng nhập

btnLogin.addEventListener("click", (e) => {
    let tk_dn = username.value
    let mk_dn = password.value

    if (!tk_dn || !mk_dn) {
        alert("Nhập đầy đủ thông tin!");
        return
    }

    if (tk_dn === "admin" && mk_dn === "admin") {
        alert("Admin!")
        window.location.href = "admin.html"
    }
    else {
        let kt = 0
        let cru
        userrrList.forEach(product => {
            if (product.tk_dk === tk_dn && product.mk_dk === mk_dn) {
                kt = 1
                cru = tk_dn
            }
        })
        if (kt == 1) {
            alert("Đăng nhập thành công")
            localStorage.setItem("currenUser", JSON.stringify(cru));
            window.location.href = "index.html"
        }
        else {
            alert("Tài khoản không tồn tại!")
            document.getElementById("username").focus()
            document.getElementById("username").value = null
            document.getElementById("password").value = null
            return
        }
    }
})

// Dang Xuat

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const CURRENT_USER = "currenUser"
let getUser = JSON.parse(localStorage.getItem(CURRENT_USER) || null)
let config = JSON.parse(localStorage.getItem(getUser))

if (getUser) {
    let t1 = document.querySelector('.user')
    let t2 = document.querySelector('.logout')
    t1.innerHTML = `
    <div >
        <p style="font-size: 1.2rem;">Hey, <b>${getUser}</b></p>
    </div>
    `
    t2.innerHTML = `
    <li>
        <button id="btn-logout">
            <i class="fa-solid fa-right-from-bracket"></i>
        </button>
    <style>
        #navbar li button#btn-logout:hover,
        #navbar li button#btn-logout.active {
            color: red;
        }

        #navbar li button#btn-logout.active::after,
        #navbar li button#btn-logout:hover::after {
            content: "";
            width: 40%;
            height: 2px;
            background-color: red;
            position: absolute;
            bottom: -4px;
            left: 30%;
        }
    </style>
    </li>
    `
}

let logOutBtn = $(".logout")

logOutBtn.onclick = (e) => {
    localStorage.setItem(CURRENT_USER, null)
    document.location.reload();
}