import {tshitsList, hoodieList} from "./productList.js";

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

btnShop.addEventListener('click', () => {
    shop.style.display = 'block';
    cart.style.display = 'none';
})

btnCart.addEventListener('click', () => {
    shop.style.display = 'none';
    cart.style.display = 'block';

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
const htmls = tshitsList.map((product,index)=>{
    return`
    <div>
        <input type="checkbox" name="product" id="p${index}"/>
        <div class="modal">
            <div class="modal-container">
                <div class="single-pro-img">
                    <img src="${product.img}" style="width: 100%;" id="mainImg" alt="">
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
var mainImg = document.getElementById('mainImg');
var smallImg = document.getElementsByClassName("sm-img");
const array = Object.keys(smallImg);

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;
}