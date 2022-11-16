document.querySelector('#header').innerHTML = `

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
    <link rel="stylesheet" href="./assets/fontawesome/css/all.css">
    <link rel="stylesheet"
        href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,400,1,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp">

    <link rel="stylesheet" href="./css/base.css">
    <link rel="stylesheet" href="./css/admin.css">
    <link rel="stylesheet" href="./css/admin.responsive.css">
    <link rel="stylesheet" href="./css/form.css">
    <link rel="stylesheet" href="./css/form.responsive.css">
    <link rel="stylesheet" href="./css/validator.css">

    <div class="logo-main">
        <a href="#" class="logo">
            <img src="./img/logo.png" alt="">
            <h2>EGA<span>TOR</span></h2>
        </a>
    </div>

    <div class="search-wrapper">
        <div class="search-main" id="search-main">
            <input type="text" id="input-search" placeholder="Search here...">
        </div>
        <button id="btn-search">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </div>

    <div>
        <ul id="navbar">
            <li>
                <button id="btn-shop" class="active">
                    <i class="fa-solid fa-house"></i>
                </button>
            </li>
            <li id="lg-bag">
                <button id="btn-cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </li>
            <li class="user">
                <button>
                    <i class="fa-solid fa-circle-user" onclick="cc()"></i>
                </button>
            </li>
            <div class="logout"></div>
            <button>
                <i id="close" class="fa-solid fa-xmark"></i>
            </button>
        </ul>
    </div>

    <!-- in MOBILBE -->
    <div id="mobile">
        <button id="btn-cart-mobile">
            <i class="fa-solid fa-cart-shopping"></i>
        </button>
        <i id="bar" class="fa-solid fa-bars"></i>
    </div>
    <!-- in MOBILBE -->`


document.querySelector('.dangNhap').innerHTML = `
    <div class="login" id="my-login" onclick="xLogin()">
        <div class="login_wrapper">
            <div class="login_mid">
                <div class="wapper-heading">
                    <h1>Login</h1>
                </div>
                <form>
                    <div class="input__field">
                        <input id="email" type="text" placeholder="Email" />
                    </div>
                    <div class="input__field">
                        <input id="username" type="text" placeholder="User Name" />
                    </div>
                    <div class="input__field">
                        <input id="password" type="password" placeholder="Password" />
                    </div>
                    <div style="display: flex; justify-content: end;">
                        <a class="signup-link" onclick="eLogin()">Sign Up</a>
                    </div>
                    <div style="display: flex; justify-content: center;">
                        <button class="btn btn-login">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!--  -->
    <div class="signup" id="my-signup" onclick="xLogin()">
        <div class="signup_wrapper">
            <div class="signup_mid">
                <div class="wapper-heading">
                    <h1>Sign Up</h1>
                </div>
                <form>
                    <div class="input__field">
                        <input id="username_signup" type="text" placeholder="User Name" />
                    </div>
                    <div class="input__field">
                        <input id="email_signup" type="text" placeholder="Email" />
                    </div>
                    <div class="input__field">
                        <input id="password_signup" type="password" placeholder="Password" />
                    </div>
                    <div class="input__field">
                        <input id="password_signup" type="password" placeholder="Confirm Password" />
                    </div>
                    <div style="display: flex; justify-content: end;">
                        <a class="login-link" onclick="eSignup()">Login</a>
                    </div>
                    <div style="display: flex; justify-content: center;">
                        <button class="btn btn-signup">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <link rel="stylesheet" href="./css/login.css">
    `