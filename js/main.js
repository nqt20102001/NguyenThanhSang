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



// Phân trang

let perPage = 8
let start = 0
let end = perPage
const btnNext = document.getElementById("next-button");
const btnPrev = document.getElementById("prev-button");
var currentPage = 1
var totalPages

function getCurrentPage(currentPage) {
    start = (currentPage - 1) * perPage
    end = currentPage * perPage
}

function renderListPage(totalPages) {
    let html = '';
    html += `<li class="current-page active"><a>${1}</a></li>`;
    for (let i = 2; i <= totalPages; i++) {
        html += `<li><a>${i}</a></li>`;
    }
    if (totalPages === 0) {
        html = ''
    }
    document.getElementById('number-page').innerHTML = html
}

btnNext.addEventListener("click", () => {
    currentPage++
    if (currentPage > totalPages) {
        currentPage = totalPages
    }
    getCurrentPage(currentPage)
    out(art)
})

btnPrev.addEventListener("click", () => {
    currentPage--
    if (currentPage <= 1) {
        currentPage = 1
    }
    getCurrentPage(currentPage)
    out(art)
})

function changePage() {
    const idPages = document.querySelectorAll('.number-page li');
    for (let i = 0; i < idPages.length; i++) {
        idPages[i].addEventListener("click", () => {
            let value = i + 1;
            currentPage = value
            getCurrentPage(currentPage)
            out(art)
        })
    }
}



// LIST PRODUCT + Phan Loai San Pham + (Theo Gia Tang Dan, Giam Dan)

var btnAll = document.querySelector('#btn-alls')
var btnShirt = document.querySelector('#btn-tshirts')
var btnHoodie = document.querySelector('#btn-hoodies')
var btnSwt = document.querySelector('#btn-sweaters')
var giaThap = document.querySelector('#btn-priceT')
var giaCao = document.querySelector('#btn-priceC')
var art

function out(art) {
    let temp = ""
    art.map((product, index) => {
        if (index >= start && index < end) {
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
                                <h4 id="name-product">${product.name}</h4>
                                <h5 id="price-product">${product.price}.000</h5>
                                <input type="number" value="1">
                                <button class="normal" id="btn-add-cart" onclick="addToCart(this)">Add to cart</button>
                            </div>

                        </div>
                        <label for="p${index}"></label>
                    </div>

                    <label for="p${index}">
                        <div class="pro">
                            <img src="${product.img}" alt="">
                            <div class="des">
                                <h4 id="name-product">${product.name}</h4>
                                <h5 id="price-product">${product.price}.000</h5>
                            </div>
                        </div>
                    </label>
                </div>`
        }
    })
    document.querySelector("#shopp #product1 .pro-container").innerHTML = temp
    csmic()
}

function listPr() {
    getCurrentPage(1)
    totalPages = Math.ceil(productsList.length / perPage)

    art = productsList.slice()
    out(art)
    renderListPage(totalPages)
    changePage(art)

    giaThap.addEventListener("click", function (e) {
        getCurrentPage(1)
        let art = productsList.slice();
        art.sort(function (a, b) { return a.price - b.price })
        out(art)
        renderListPage(totalPages)
        changePage(art)
    })

    giaCao.addEventListener("click", function (e) {
        getCurrentPage(1)
        art = productsList.slice();
        art.sort(function (a, b) { return b.price - a.price })
        out(art)
        renderListPage(totalPages)
        changePage()
    })

}
listPr()

btnAll.addEventListener('click', function (event) {
    listPr()
})

btnHoodie.addEventListener('click', function (event) {
    getCurrentPage(1)
    totalPages = Math.ceil(hoodiesList.length / perPage)

    art = hoodiesList.slice()
    out(art)
    renderListPage(totalPages)
    renderListPage(totalPages)
    changePage()

    giaThap.addEventListener("click", function (e) {
        art = hoodiesList.slice();
        art.sort(function (a, b) { return a.price - b.price })
        out(art)
        renderListPage(totalPages)
        changePage()
    })

    giaCao.addEventListener("click", function (e) {
        art = hoodiesList.slice();
        art.sort(function (a, b) { return b.price - a.price })
        out(art)
        renderListPage(totalPages)
        changePage()
    })
})

btnShirt.addEventListener('click', function (event) {
    getCurrentPage(1)
    totalPages = Math.ceil(tshitsList.length / perPage)

    art = tshitsList.slice()
    out(art)
    renderListPage(totalPages)
    changePage()

    giaThap.addEventListener("click", function (e) {
        art = tshitsList.slice();
        art.sort(function (a, b) { return a.price - b.price })
        out(art)
        renderListPage(totalPages)
        changePage()
    })

    giaCao.addEventListener("click", function (e) {
        art = tshitsList.slice();
        art.sort(function (a, b) { return b.price - a.price })
        out(art)
        renderListPage(totalPages)
        changePage()
    })
})

btnSwt.addEventListener('click', function (event) {
    getCurrentPage(1)
    totalPages = Math.ceil(sweatersList.length / perPage)

    art = sweatersList.slice()
    out(art)
    renderListPage(totalPages)
    changePage()

    giaThap.addEventListener("click", function (e) {
        art = sweatersList.slice();
        art.sort(function (a, b) { return a.price - b.price })
        out(art)
        renderListPage(totalPages)
        changePage()
    })

    giaCao.addEventListener("click", function (e) {
        art = sweatersList.slice();
        art.sort(function (a, b) { return b.price - a.price })
        out(art)
        renderListPage(totalPages)
        changePage()
    })
})

var find = document.getElementById("btn-find")
find.addEventListener("click", function () {
    let dataInputFind = document.getElementById('search-item').value

    let art = productsList.filter(function (product) {
        return product.name === dataInputFind
    })
    out(art)
})