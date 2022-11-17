import { tshitsList, hoodiesList, sweatersList, productsList } from "./productList.js";


// ======== OPEN NAVBAR IN MOBILE =========
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// ======= ACTIVE BUTTON NAVBAR =========
const tabs = document.querySelectorAll("#navbar li button");
tabs.forEach(tab => {
    tab.onclick = () => {
        document.querySelector("#navbar li button.active").classList.remove("active");
        tab.classList.add("active");
    }
})


// ======= ACTIVE BUTTON MENU =========
const menus = document.querySelectorAll("#menu-wrapper ul li")
menus.forEach(menu => {
    menu.onclick = () => {
        document.querySelector("#menu-wrapper ul li.active").classList.remove("active");
        menu.classList.add("active");
    }
})


// ======= CHANGE PAGES =========
const btnShop = document.querySelector("#btn-shop");
const btnCart = document.querySelector("#btn-cart");
const btnCartMobile = document.querySelector("#btn-cart-mobile");

const shop = document.querySelector("#shopp");
const cart = document.querySelector("#cartt");
const menuWrapper = document.querySelector("#menu-wrapper");

btnShop.addEventListener('click', () => {
    shop.style.display = 'block';
    cart.style.display = 'none';
    menuWrapper.style.display = 'block';
})

btnCart.addEventListener('click', () => {
    shop.style.display = 'none';
    cart.style.display = 'block';
    menuWrapper.style.display = 'none';
})

btnCartMobile.addEventListener('click', () => {
    shop.style.display = 'none';
    cart.style.display = 'block';
})


// ======= CHANGE IMAGES SMALL IN MODAL =======
function csmic() {
    var mainImg = document.getElementsByClassName("main-img");
    var smallImg = document.getElementsByClassName("sm-img");

    var j = 0;
    for (let i = 0; i < smallImg.length; i++) {
        smallImg[i].onclick = function () {
            j = Math.floor(i / 4);
            mainImg[j].src = smallImg[i].src;
        }
    }
}
csmic()





// LIST PRODUCT + Phan Loai San Pham + (Theo Gia Tang Dan, Giam Dan)

function out(art) {
    let temp = ""
    art.map((product, index) => {
        temp += `
    <div>
        <input type="checkbox" name="product" id="p${index}"/>
        <div class="modal">
            <div class="modal-container">

                <div class="single-pro-img">
                    <img src="${product.img}" style="width: 100%;" class="main-img" alt="">
                    <div class="sm-img-group">
                        <div class="sm-img-col">
                            <img src="${product.img}" style="width: 100%;" class="sm-img" alt="">
                        </div>
                        <div class="sm-img-col">
                            <img src="${product.img2}" style="width: 100%;" class="sm-img" alt="">
                        </div>
                        <div class="sm-img-col">
                            <img src="${product.img3}" style="width: 100%;" class="sm-img" alt="">
                        </div>
                        <div class="sm-img-col">
                            <img src="${product.img4}" style="width: 100%;" class="sm-img" alt="">
                        </div>
                    </div>
                </div>

                <div class="single-pro-details">
                    <h6>Home / T - Shirst</h6>
                    <h4 id="name-product">${product.name}</h4>
                    <h5 id="price-product">${product.price}.000</h5>
                    <select>
                        <option>Select Sizes</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    <input type="number" value="1">
                    <button class="normal" id="btn-add-cart" onclick="addToCart()">Add to cart</button>
                </div>

            </div>
            <label for="p${index}"></label>
        </div>

        <label for="p${index}">
            <div  class="pro">
                <img src="${product.img}" alt="">
                <div class="des">
                    <h4 id="name-product">${product.name}</h4>
                    <h5 id="price-product">${product.price}.000</h5>
                </div>
            </div>
        </label>
    </div>`
    })
    document.querySelector("#shopp #product1 .pro-container").innerHTML = temp
    csmic()
}

var btnAll = document.querySelector('#btn-alls')
var btnShirt = document.querySelector('#btn-tshirts')
var btnHoodie = document.querySelector('#btn-hoodies')
var btnSwt = document.querySelector('#btn-sweaters')
var giaThap = document.querySelector('#btn-priceT')
var giaCao = document.querySelector('#btn-priceC')


function temp() {
    const htmls = productsList.map((product, index) => {
        return `
            <div>
                <input type="checkbox" name="product" id="p${index}"/>
                <div class="modal">
                    <div class="modal-container">
                        <div class="single-pro-img">
                            <img src="${product.img}" style="width: 100%;" class="main-img" alt="">
                            <div class="sm-img-group">
                                <div class="sm-img-col">
                                    <img src="${product.img}" style="width: 100%;" class="sm-img" alt="">
                                </div>
                                <div class="sm-img-col">
                                    <img src="${product.img2}" style="width: 100%;" class="sm-img" alt="">
                                </div>
                                <div class="sm-img-col">
                                    <img src="${product.img3}" style="width: 100%;" class="sm-img" alt="">
                                </div>
                                <div class="sm-img-col">
                                    <img src="${product.img4}" style="width: 100%;" class="sm-img" alt="">
                                </div>
                            </div>
                        </div>
        
                        <div class="single-pro-details">
                            <h6>Home / T - Shirst</h6>
                            <h4 id="name-product">${product.name}</h4>
                            <h5 id="price-product">${product.price}.000</h5>
                            <input type="number" value="1">
                            <button class="normal" id="btn-add-cart" onclick="addToCart()">Add to cart</button>
                        </div>
                    </div>
                    <label for="p${index}"></label>
                </div>
        
                <label for="p${index}">
                    <div  class="pro">
                        <img src="${product.img}" alt="">
                        <div class="des">
                            <h4 id="name-product">${product.name}</h4>
                            <h5 id="price-product">${product.price}.000</h5>
                        </div>
                    </div>
                </label>
            </div>
            `
    })
    document.querySelector("#shopp #product1 .pro-container").innerHTML = htmls.join("")
    csmic()

    giaThap.addEventListener("click", function (e) {
        let art = productsList.slice();
        art.sort(function (a, b) { return a.price - b.price })
        out(art)
    })

    giaCao.addEventListener("click", function (e) {
        let art = productsList.slice();
        art.sort(function (a, b) { return b.price - a.price })
        out(art)
    })
}
temp()

btnAll.addEventListener('click', function (event) {
    temp()
})


btnShirt.addEventListener('click', function (event) {
    let temp = ""
    tshitsList.map((product, index) => {
        temp += `
    <div>
        <input type="checkbox" name="product" id="p${index}"/>
        <div class="modal">
            <div class="modal-container">

                <div class="single-pro-img">
                    <img src="${product.img}" style="width: 100%;" class="main-img" alt="">
                    <div class="sm-img-group">
                        <div class="sm-img-col">
                            <img src="${product.img}" style="width: 100%;" class="sm-img" alt="">
                        </div>
                        <div class="sm-img-col">
                            <img src="${product.img2}" style="width: 100%;" class="sm-img" alt="">
                        </div>
                        <div class="sm-img-col">
                            <img src="${product.img3}" style="width: 100%;" class="sm-img" alt="">
                        </div>
                        <div class="sm-img-col">
                            <img src="${product.img4}" style="width: 100%;" class="sm-img" alt="">
                        </div>
                    </div>
                </div>

                <div class="single-pro-details">
                    <h6>Home / T - Shirst</h6>
                    <h4 id="name-product">${product.name}</h4>
                    <h5 id="price-product">${product.price}.000</h5>
                    <select>
                        <option>Select Sizes</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    <input type="number" value="1">
                    <button class="normal" id="btn-add-cart" onclick="addToCart()">Add to cart</button>
                </div>

            </div>
            <label for="p${index}"></label>
        </div>

        <label for="p${index}">
            <div  class="pro">
                <img src="${product.img}" alt="">
                <div class="des">
                    <h4 id="name-product">${product.name}</h4>
                    <h5 id="price-product">${product.price}.000</h5>
                </div>
            </div>
        </label>
    </div>`
    })
    document.querySelector("#shopp #product1 .pro-container").innerHTML = temp
    csmic()

    giaThap.addEventListener("click", function (e) {
        let art = tshitsList.slice();
        art.sort(function (a, b) { return a.price - b.price })
        out(art)
    })

    giaCao.addEventListener("click", function (e) {
        let art = tshitsList.slice();
        art.sort(function (a, b) { return b.price - a.price })
        out(art)
    })
})

btnHoodie.addEventListener('click', function (event) {
    let temp = ""
    hoodiesList.map((product, index) => {
        temp += `
    <div>
        <input type="checkbox" name="product" id="p${index}"/>
        <div class="modal">
            <div class="modal-container">

                <div class="single-pro-img">
                    <img src="${product.img}" style="width: 100%;" class="main-img" alt="">
                    <div class="sm-img-group">
                        <div class="sm-img-col">
                            <img src="${product.img}" style="width: 100%;" class="sm-img" alt="">
                        </div>
                        <div class="sm-img-col">
                            <img src="${product.img2}" style="width: 100%;" class="sm-img" alt="">
                        </div>
                        <div class="sm-img-col">
                            <img src="${product.img3}" style="width: 100%;" class="sm-img" alt="">
                        </div>
                        <div class="sm-img-col">
                            <img src="${product.img4}" style="width: 100%;" class="sm-img" alt="">
                        </div>
                    </div>
                </div>

                <div class="single-pro-details">
                    <h6>Home / T - Shirst</h6>
                    <h4 id="name-product">${product.name}</h4>
                    <h5 id="price-product">${product.price}.000</h5>
                    <select>
                        <option>Select Sizes</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    <input type="number" value="1">
                    <button class="normal" id="btn-add-cart" onclick="addToCart()">Add to cart</button>
                </div>

            </div>
            <label for="p${index}"></label>
        </div>

        <label for="p${index}">
            <div  class="pro">
                <img src="${product.img}" alt="">
                <div class="des">
                    <h4 id="name-product">${product.name}</h4>
                    <h5 id="price-product">${product.price}.000</h5>
                </div>
            </div>
        </label>
    </div>`
    })
    document.querySelector("#shopp #product1 .pro-container").innerHTML = temp
    csmic()

    giaThap.addEventListener("click", function (e) {
        let art = hoodiesList.slice();
        art.sort(function (a, b) { return a.price - b.price })
        out(art)
    })

    giaCao.addEventListener("click", function (e) {
        let art = hoodiesList.slice();
        art.sort(function (a, b) { return b.price - a.price })
        out(art)
    })
})


btnSwt.addEventListener('click', function (event) {
    let temp = ""
    sweatersList.map((product, index) => {
        temp += `
    <div>
        <input type="checkbox" name="product" id="p${index}"/>
        <div class="modal">
            <div class="modal-container">

                <div class="single-pro-img">
                    <img src="${product.img}" style="width: 100%;" class="main-img" alt="">
                    <div class="sm-img-group">
                        <div class="sm-img-col">
                            <img src="${product.img}" style="width: 100%;" class="sm-img" alt="">
                        </div>
                        <div class="sm-img-col">
                            <img src="${product.img2}" style="width: 100%;" class="sm-img" alt="">
                        </div>
                        <div class="sm-img-col">
                            <img src="${product.img3}" style="width: 100%;" class="sm-img" alt="">
                        </div>
                        <div class="sm-img-col">
                            <img src="${product.img4}" style="width: 100%;" class="sm-img" alt="">
                        </div>
                    </div>
                </div>

                <div class="single-pro-details">
                    <h6>Home / T - Shirst</h6>
                    <h4 id="name-product">${product.name}</h4>
                    <h5 id="price-product">${product.price}.000</h5>
                    <select>
                        <option>Select Sizes</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    <input type="number" value="1">
                    <button class="normal" id="btn-add-cart" onclick="addToCart()">Add to cart</button>
                </div>

            </div>
            <label for="p${index}"></label>
        </div>

        <label for="p${index}">
            <div  class="pro">
                <img src="${product.img}" alt="">
                <div class="des">
                    <h4 id="name-product">${product.name}</h4>
                    <h5 id="price-product">${product.price}.000</h5>
                </div>
            </div>
        </label>
    </div>`
    })
    document.querySelector("#shopp #product1 .pro-container").innerHTML = temp
    csmic()

    giaThap.addEventListener("click", function (e) {
        let art = sweatersList.slice();
        art.sort(function (a, b) { return a.price - b.price })
        out(art)
    })

    giaCao.addEventListener("click", function (e) {
        let art = sweatersList.slice();
        art.sort(function (a, b) { return b.price - a.price })
        out(art)
    })
})