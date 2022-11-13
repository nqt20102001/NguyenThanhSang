// ======= ADD PRODUCTS IN CART ========
const btnAddCarts = document.querySelectorAll("#btn-add-cart");

btnAddCarts.forEach(function(button, index) {
    console.log(button);
    button.addEventListener('click', function(event) {
        var btnAddCart = event.target;
        var product = btnAddCart.parentElement;
        var productDetail = product.parentElement;
        var productImg = productDetail.querySelector('#mainImg').src;
        console.log(productImg);
        var productName = productDetail.querySelector('#name-product').innerText;
        var productPrice = productDetail.querySelector('#price-product').innerText;

        addCart(productImg,productName,productPrice);
    })
})

function addCart(productImg,productName,productPrice) {
    var addTr = document.createElement("tr");
    var cartItems = document.querySelectorAll("#cart tbody tr");
    
    for(var i = 0 ; i < cartItems.length; i++) {
        var productItem = document.querySelectorAll("#name-product");
        if(productItem[i].innerHTML == productName) {
            // var quantityProduct = cartItems[i].querySelector("#cart tbody tr input").value;
            // var quantityProducts = Number(quantityProduct);
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
        total = (inputValue*productPrice)*1000;
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