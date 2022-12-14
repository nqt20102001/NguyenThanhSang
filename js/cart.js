var btnAddCarts = document.querySelectorAll('#btn-add-cart');
var arrCart = new Array

function addToCart(x) {
    if (getUser) {
        var product = x.parentElement
        var productImg = product.parentElement.querySelector('.main-img').src;
        var productName = product.querySelector('#name-product').innerText;
        var productPrice = product.querySelector('#price-product').innerText;
        var sl_hienTai = parseInt(product.querySelector('#sl-product').value)

        for (let i = 0; i < arrCart.length; i++) {
            if (productName === arrCart[i][1]) {
                alert("Đã thêm.")
                sl_hienTai += parseInt(arrCart[i][3])
                arrCart[i][3] = sl_hienTai
                localStorage.setItem("arrCart", JSON.stringify(arrCart))
                cart()
                return
            }
        }

        alert("Đã thêm.")
        let productCart = [productImg, productName, productPrice, sl_hienTai]
        arrCart.push(productCart)
        cart()
        localStorage.setItem("arrCart", JSON.stringify(arrCart))
    }
    else {
        alert("Vui lòng đăng nhập!")
        return
    }
}

function cart() {
    if (getUser) {
        let trContent = ""
        for (let i = 0; i < arrCart.length; i++) {
            trContent += `
        <tr>
            <td><img src="${arrCart[i][0]}" alt=""></td>
            <td id="name-product" style="font-weight: 600;">${arrCart[i][1]}</td>
            <td id="price-product">${arrCart[i][2]}</td>
            <td><input type="text" value="${arrCart[i][3]}"></td>
            <td><button id="remove-product" onclick="xoaSp(this)"><i class="fa-sharp fa-solid fa-circle-xmark"></i></button></td>
        </tr>    
            `
        }
        document.querySelector("tbody").innerHTML = trContent
        cartToTal()
    }
}

// ======= TOTAL MONEY CART ========

var totalPrice
function cartToTal() {
    totalPrice = 0
    for (var i = 0; i < arrCart.length; i++) {
        let tt = parseInt(arrCart[i][2] * parseInt(arrCart[i][3]))
        totalPrice += tt
    }
    document.querySelector("#subtotal span").innerHTML = totalPrice
}

xoaSp = (x) => {
    if (confirm("Xác nhận xóa sản phẩm này khỏi giỏ hàng?") == false)
        return
    var xoa = x.parentElement.parentElement
    var tenSp = xoa.children[1].innerText
    xoa.remove()
    for (let i = 0; i < arrCart.length; i++)
        if (tenSp === arrCart[i][1])
            arrCart.splice(i, 1)
    cart()
    localStorage.setItem('arrCart', JSON.stringify(arrCart))
}

emptyCart = () => {
    arrCart = []
    cart()
    localStorage.setItem('arrCart', JSON.stringify(arrCart))
}

function khoiTaoCart() {
    let lcstAC = localStorage.getItem('arrCart')
    let tp = JSON.parse(lcstAC)
    if (tp === null) {
        return
    }
    arrCart = tp.slice()
    cart()
}
khoiTaoCart()

function thanhToan() {
    if (!getUser) {
        alert("Vui lòng đăng nhập!")
        return
    }

    if (arrCart.length != 0) {
        document.getElementById('userBill').innerHTML = `
            <div class="acceptBuy">
                <h2>Thông tin khách hàng</h2><br>
                <h3>Địa chỉ:</h3>
                <input type="text" id="dcKh">
                <h3>Số điện thoại:</h3>
                <input type="text" id="sdtKh">
                <br>
                <button onclick="datHang()">Đặt hàng</button>
            </div>  `
    }
    else {
        alert("Giỏ hàng rỗng!")
    }
}

var bill = []
if (localStorage.getItem('bill') === null) {
    localStorage.setItem('bill', JSON.stringify(bill))
}
bill = JSON.parse(localStorage.getItem('bill'))

function datHang() {
    // check
    let dc = document.getElementById('dcKh').value
    let sdt = document.getElementById('sdtKh').value
    if (!dc || !sdt) {
        alert("Vui lòng nhập đầy đủ thông tin!")
        return
    }
    if (isNaN(sdt)) {
        alert("Vui lòng nhập đúng số điện thoại!")
        document.getElementById('sdtKh').focus()
        document.getElementById('sdtKh').value = null
        return
    }

    bill.push({ diachi: dc, sdt: sdt, tt: totalPrice, kh: getUser })
    localStorage.setItem('bill', JSON.stringify(bill))

    alert("Bạn đã đặt hàng thành công!")
    document.getElementById('dcKh').value = null
    document.getElementById('sdtKh').value = null
    emptyCart()
    location.reload()
    dhdd()
}

function dhdd() {
    let text = ""
    bill.forEach(product => {
        text += `
        <div class="bill-i">
            <p>Khách hàng: ${product.kh}</p>
            <p>Địa chỉ: ${product.diachi}</p>
            <p>Số điện thoại: ${product.sdt}</p>
            <p>Tổng tiền: ${product.tt}</p> 
        </div>  `
    })
    document.getElementById('donHangDaDat').innerHTML = text
}
if (getUser) {
    dhdd()
}