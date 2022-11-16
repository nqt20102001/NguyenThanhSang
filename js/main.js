import {tshitsList, hoodiesList, sweatersList, productsList} from "./productList.js";

// ======== OPEN NAVBAR IN MOBILE =========
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// ======= ACTIVE BUTTON NAVBAR =========
const tabs = document.querySelectorAll("#navbar li button");
tabs.forEach(tab=>{
    tab.onclick =()=>{
        document.querySelector("#navbar li button.active").classList.remove("active");
        tab.classList.add("active");
    }
})


// ======= ACTIVE BUTTON MENU =========
const menus = document.querySelectorAll("#menu-wrapper ul li")
menus.forEach(menu => {
    menu.onclick= () => {
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


// ======= CHANGE THEMES IN ADMIN PAGES =======
// const sideMenu = document.querySelector("aside")
// const menuBtn = document.querySelector("#menu-btn")
// const closeBtn = document.querySelector("#close-btn")

// const themeToggler = document.querySelector(".theme-toggler")

// // show sidebar
// menuBtn.addEventListener('click', () => {
//     sideMenu.style.display = 'block';
// })

// closeBtn.addEventListener('click', () => {
//     sideMenu.style.display = 'none';
// })

// // change theme
// themeToggler.addEventListener('click', () => {
//     document.body.classList.toggle('dark-theme-variables');

//     themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
//     themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
// })

// ======= FILL ORDERS IN TABLE (ADMIN PAGES) =======

// Orders.forEach(order => {
//     const tr = document.createElement('tr');
//     const trContent = `
//                     <td>${order.productName}</td>
//                     <td>${order.productNumber}</td>
//                     <td>${order.paymentStatus}</td>
//                     <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}
//                     </td>
//                     <td class="primary">Details</td>
//                     `;
//     tr.innerHTML = trContent;
//     document.querySelector('table tbody').appendChild(tr);
// });



const Orders = [
    {
        productName: 'Foldable Mini Drone',
        productNumber: '123',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
    {
        productName: 'LARVENDER KF102 Drone',
        productNumber: '7543',
        paymentStatus: 'Refunded',
        shipping: 'Declined'
    },
    {
        productName: 'Ruko F11 Pro Drone',
        productNumber: '5673',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
    {
        productName: 'Drone with Camera Drone',
        productNumber: '54545',
        paymentStatus: 'Paid',
        shipping: 'Delivered'
    },
    {
        productName: 'GPS 4k Drone',
        productNumber: '123133',
        paymentStatus: 'Paid',
        shipping: 'Delivered'
    },
    {
        productName: 'DJI Air 25',
        productNumber: '6223',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
    {
        productName: 'Lozenge Drone',
        productNumber: '15523',
        paymentStatus: 'Due',
        shipping: 'Delivered'
    }
];


// ======= OPEN MODAL (DETAILS PRODUCT) =======
const htmls = productsList.map((product,index)=>{
    
    return`
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
                    <button class="normal" id="btn-add-cart">Add to cart</button>
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



// ======= CHANGE IMAGES SMALL IN MODAL =======
var mainImg = document.getElementsByClassName("main-img");
var smallImg = document.getElementsByClassName("sm-img");

var j = 0;
for(let i = 0 ; i < smallImg.length; i++){
    smallImg[i].onclick = function(){
        j = Math.floor(i/4);
        mainImg[j].src = smallImg[i].src;
    }
}



// ========= ADD PRODUCTS IN CART ==========
const btnAddCarts = document.querySelectorAll("#btn-add-cart");

btnAddCarts.forEach(function(button, index) {
    button.addEventListener('click', function(event) {
        var btnAddCart = event.target;
        var product = btnAddCart.parentElement;
        var productDetail = product.parentElement;
        var productImg = productDetail.querySelector('.main-img').src;
        var productName = productDetail.querySelector('#name-product').innerText;
        var productPrice = productDetail.querySelector('#price-product').innerText;

        addCart(productImg, productName, productPrice);
    })
})

function addCart(productImg, productName, productPrice) {
    var addTr = document.createElement("tr");
    var cartItems = document.querySelectorAll("#cart tbody tr");
    
    for(var i = 0 ; i < cartItems.length; i++) {
        var productItem = document.querySelectorAll("#name-product");
        if(productItem[i].innerHTML == productName) {
            // console.log(productName);
            // var quantityProduct = cartItems[i].querySelector("#cart tbody tr input").value;
            // var quantityProducts = Number(quantityProduct);
            // console.log(quantityProducts.toString());
            // quantityProducts += 1;
            alert("Sản phẩm đã có trong giỏ hàng!");    
        }
    }
    var trContent = `
        <td><button id="remove-product"><i class="fa-sharp fa-solid fa-circle-xmark"></i></button></td>
        <td><img src="${productImg}" alt=""></td>
        <td id="name-product" style="font-weight: 600;">${productName}</td>
        <td id="price-product">${productPrice}</td>
        <td><input type="number" value="1"></td>
    `
    addTr.innerHTML = trContent;
    var cartTable = document.querySelector("tbody");
    cartTable.append(addTr);
    cartToTal();
}


// ======= TOTAL MONEY CART ========
function cartToTal() {
    var cartItems = document.querySelectorAll("#cart tbody tr");
    var totalPrice = 0;

    for(var i = 0 ; i < cartItems.length; i++){
        var inputValue = cartItems[i].querySelector("#cart tbody tr input").value;
        var productPrice = cartItems[i].querySelector("#price-product").innerText;
        var total = (inputValue*productPrice)*1000;
        totalPrice += total;
    }

    var subTotal = document.querySelector("#subtotal span");
    subTotal.innerHTML = totalPrice.toLocaleString('de-DE');
}


// ======= DELETE PRODUCT IN CART ==========
function deleteCart() {
    for(var i = 0 ; i < cartItems.length; i++) {
        
    }
}


// =========== PAGINATION =========
// function pages(current_page, last_page, onSides = 3) {
//     // pages
//     let pages = [];
//     // Loop through
//     for (let i = 1; i <= last_page; i++) {
//         // Define offset
//         let offset = (i == 1 || last_page) ? onSides + 1 : onSides;
//         // If added
//         if (i == 1 || (current_page - offset <= i && current_page + offset >= i) || 
//             i == current_page || i == last_page) {
//             pages.push(i);
//         } else if (i == current_page - (offset + 1) || i == current_page + (offset + 1)) {
//             pages.push('...');
//         }
//     }
//     return pages;
// // }


// var productsList
// if (localStorage.getItem('product') === null) {
//     console.log("day du lieu len");
//     productList = [
//         { img: "img/non_1.png", id: "shirt", price: "100", name: "sp-1" },
//         { img: "img/non_2.png", id: "shirt", price: "50", name: "sp-2" },
//         { img: "img/non_3.png", id: "shirt", price: "100", name: "sp-3" },
//         { img: "img/non_4.png", id: "shoes", price: "50", name: "sp-4" },
//         { img: "img/non_5.png", id: "shoes", price: "100", name: "sp-5" },
//         { img: "img/non_6.png", id: "shoes", price: "50", name: "sp-6" },
//     ];
//     localStorage.setItem('product', JSON.stringify(productList));
// }
// productList = JSON.parse(localStorage.getItem('product'))

// let perPage = 6
// let start = 0
// let end = perPage

// const btnNext = document.getElementById("next-btn");
// const btnPrev = document.getElementById("prev-btn);
// var currentPage = 1

// function getCurrentPage(currentPage) {
//     start = (currentPage - 1) * perPage
//     end = currentPage * perPage
// }
// function inRa() {
//     let listProduct = ""
//     productList.map((item, index) => {

//         if (index >= start && index < end) {
//             listProduct += `
//             <li class="element_product" id="`+ item.id + `">
//                 <div class="mid-2--img both">
//                     <div class="both-top" onclick="detailProduct(this)">
//                         <span class="both-top--img"><img src="`+ item.img + `" alt=""></span>
//                         <a class="both-top--muaNgay">SẢN PHẨM</a>
//                     </div>
//                     <div class="both-bot">
//                         <div class="both-bot--name">
//                             <h2 class="name_item">`+ item.name + `</h2>
//                         </div>
//                         <div class="price_item">`+ item.price + `</div>
//                     </div>
//                 </div>
//                 <span id="detail"></span>
//             </li>
//             `
//         }
//         document.getElementById('pagination').innerHTML = listProduct
//     })

// }
// totalPages = Math.ceil(productList.length / perPage);
// renderListPage(totalPages)
// inRa()