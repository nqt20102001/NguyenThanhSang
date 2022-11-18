// t coppy qua file khac cho dễ đọc
// viết chung rối quá

var btnAddCarts = document.querySelectorAll('#btn-add-cart');

function addToCart() {
    if (getUser) {
        alert("Đã thêm.")
        var btnAddCart = event.target;
        var product = btnAddCart.parentElement;
        var productDetail = product.parentElement;
        var productImg = productDetail.querySelector('.main-img').src;
        var productName = productDetail.querySelector('#name-product').innerText;
        var productPrice = productDetail.querySelector('#price-product').innerText;
        addCart(productImg, productName, productPrice);
    }
    else
        alert("Đăng nhập đi thằng lz")
}

function addCart(productImg, productName, productPrice) {
    var addTr = document.createElement("tr");
    var cartItems = document.querySelectorAll("#cart tbody tr");

    for (var i = 0; i < cartItems.length; i++) {
        var productItem = document.querySelectorAll("#name-product");
        if (productItem[i].innerHTML == productName) {
            // console.log(productName);
            // var quantityProduct = cartItems[i].querySelector("#cart tbody tr input").value;
            // var quantityProducts = Number(quantityProduct);
            // console.log(quantityProducts.toString());
            // quantityProducts += 1;
            alert("Sản phẩm đã có trong giỏ hàng!");
        }
    }
    var trContent = `
            <td><img src="${productImg}" alt=""></td>
            <td id="name-product" style="font-weight: 600;">${productName}</td>
            <td id="price-product">${productPrice}</td>
            <td><input type="number" value="1"></td>
            <td><button id="remove-product"><i class="fa-sharp fa-solid fa-circle-xmark"></i></button></td>
    
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

    for (var i = 0; i < cartItems.length; i++) {
        var inputValue = cartItems[i].querySelector("#cart tbody tr input").value;
        var productPrice = cartItems[i].querySelector("#price-product").innerText;
        var total = (inputValue * productPrice) * 1000;
        totalPrice += total;
    }

    var subTotal = document.querySelector("#subtotal span");
    subTotal.innerHTML = totalPrice.toLocaleString('de-DE');
}