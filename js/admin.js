import {tshitsList, hoodiesList, sweatersList, productsList} from "./productList.js";

// ======= CHANGE THEMES IN ADMIN PAGES =======
const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")

// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// ======= FILL ORDERS IN TABLE (ADMIN PAGES) =======

productsList.forEach(product => {
    const tr = document.createElement('tr');
    const trContent = `
    <tr>
        <td><img src="${product.img}" alt=""></td>
        <td id="name-product">${product.name}</td>
        <td id="price-product">${product.price}.000</td>
        <td><button id="remove-product"><i class="fa-sharp fa-solid fa-circle-xmark"></i></button></td>
        <td><button id="update-product"><i class="fa-solid fa-pen-to-square"></i></button></td>
    </tr>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})