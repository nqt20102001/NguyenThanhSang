document.querySelector('#header').innerHTML = `
    <div class="logo-main">
        <a href="#" class="logo">
            <img src="./img/logo.png" alt="">
            <h2>EGA<span>TOR</span></h2>
        </a>
    </div>

    <div class="search-wrapper">
        <div class="search-main" id="search-main">
            <input type="text" id="search-item" placeholder="Vd: hoodie, croco, lion...">
        </div>
        <button id="btn-find">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </div>

    <div>
        <ul id="navbar" class="flex-center">
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
                    <h1>SIGN IN</h1>
                </div>
                <form>
                    <div class="input__field">
                        <input id="username" type="text" placeholder="User Name" />
                    </div>
                    <div class="input__field">
                        <input id="password" type="password" placeholder="Password" />
                    </div>
                    <div class="flex-center" style="margin-bottom: 10px;">
                        <a class="btn btn-login">Sign in</a>
                    </div>
                    <div class="flex-center">
                        <p>Create your account:</p>
                        <a class="signup-link" onclick="eLogin()">Sign up</a>
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
                    <h1>CREATE ACCOUNT</h1>
                </div>
                <form>
                    <div class="input__field">
                        <input id="username_signup" type="text" placeholder="User Name" />
                    </div>
                    <div class="input__field">
                        <input id="password_signup" type="password" placeholder="Password" />
                    </div>
                    <div class="input__field">
                        <input id="password_signup2" type="password" placeholder="Confirm Password" />
                    </div>
                    
                    <div class="flex-center" style="margin-bottom: 10px;">
                        <a class="btn btn-signup">Sign up</a>
                    </div>
                    <div class="flex-center">
                        <p>Already have an account?</p>
                        <a class="login-link" onclick="eSignup()">Sign in</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <link rel="stylesheet" href="./css/login.css">
    `

document.querySelector('.modal').innerHTML = `
    <div class="modal-container"></div> `

document.querySelector('.ft').innerHTML = `
    <div class="logo-main">
            <a href="#" class="logo">
                <img src="./img/logo.png" alt="">
                <h2>EGA<span>TOR</span></h2>
            </a>
        </div>
        <div class="col">

            <h4>CONTACT</h4>
            <p><strong>Address:</strong> 273 An D????ng V????ng, P.3, Q.5, TP. H??? Ch?? Minh</p>
            <p><strong>Phone:</strong> 0867804787</p>
            <p><strong>Hours:</strong> 10:00 - 20:00</p>

            <div class="follow">
                <h4>FOLLOW US</h4>
                <div class="icon">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-youtube"></i>

                </div>
            </div>
        </div>

        <div class="col">
            <h4>MY ACCOUNT</h4>
            <a href="#">Sign in</a>
            <a href="">View cart</a>
            <a href="">My wishlist</a>
        </div>

        <div class="col install">
            <h4>INSTALL APP</h4>
            <p>Form App Store or Google Play</p>
            <div class="row">
                <img src="/img/pay/app.jpg" alt="">
                <img src="/img/pay/play.jpg" alt="">
            </div>
        </div>

        <div class="copyright">
            <p>Designed by Tuan & Toan Copyright ?? 2021</p>
        </div>  `

document.querySelector('head').innerHTML = `
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
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Store</title>`

document.querySelector('#menu-wrapper').innerHTML = `
    <ul class="menu-main flex-space">
        <li id="btn-alls" class="active">ALL</li>
        <li id="btn-hoodies">HOODIE</li>
        <li id="btn-tshirts">TSHIRT</li>
        <li id="btn-sweaters">SWEATER</li>
        <li id="btn-price">PRICE <i style="font-size: .8rem;" class="fa-solid fa-chevron-down"></i>
            <ul>
                    <li id="btn-priceT">Low to High</li>
                    <li id="btn-priceC">High to Low</li>
                    <li id="btn-priceKG1">0 - 500</li>
                    <li id="btn-priceKG2">500 - 1000</li>
            </ul>
        </li>
        
    </ul>`

document.querySelector('#shopp').innerHTML = `
    <section id="product1" class="section-p1" style="text-align: center;">
        <div class="pro-container"></div>
    </section>

    <nav class="pagination-container flex-center" id="an">
        <button class="pagination-button" id="prev-button" aria-label="Previous page" title="Previous page" style="background: transparent">
            &lt;
        </button>
        <div class="number-page" id="number-page"></div>
        <button class="pagination-button" id="next-button" aria-label="Next page" title="Next page" style="background: transparent">
            &gt;
        </button>
    </nav>`

document.querySelector('#cartt').innerHTML = `
    <section id="cart" class="section-p1">
        <table width:"100%">
            <thead>
                <tr>
                    <td>Image</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Remove</td>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </section>
    <section id="cart-add" class="section-p1"></section>
    <h2 id="donHang-content">C??c ????n h??ng ???? ?????t</h2>
    <div id="donHangDaDat"></div>`

document.querySelector('#cart-add').innerHTML = `
    <div id="subtotal">
        <h3>Cart Totals</h3>
        <table>
            <tr>
                <td style="width: 18%;"><strong>Total</strong></td>
                <td id="price_css">
                    <strong><span>0</span></strong>
                </td>
            </tr>
        </table>
        <button class="btn-totalCart" style="background-color: red;" onclick="emptyCart()">X??a gi??? h??ng</button>
        <button class="btn-totalCart" onclick="thanhToan()">Thanh to??n</button>

        <div id="userBill"></div>
    </div>  `