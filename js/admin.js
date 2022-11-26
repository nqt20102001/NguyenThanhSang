productsList = JSON.parse(localStorage.getItem('productsList'))

function shop() {
    let text = ""
    productsList.forEach(product => {
        text += `
        <tr>
            <td><img src="${product.img}" alt=""></td>
            <td id="name-product">${product.name}</td>
            <td id="price-product">${product.price}.000</td>
            <td><button id="remove-product" onclick="xoaPrc(this)"><i class="fa-sharp fa-solid fa-circle-xmark"></i></button></td>
            <td><button id="update-product" onclick="suaPrc(this)"><i class="fa-solid fa-pen-to-square"></i></button></td>
        </tr>
        `
    })
    document.querySelector('table tbody').innerHTML = text
}
shop()

// Xoa

function xoaPrc(x) {
    let xoa = x.parentElement.parentElement
    let tenSp = xoa.children[1].innerText
    xoa.remove()
    let i = 0
    productsList.forEach(product => {
        if (tenSp === product.name) {
            productsList.splice(i, 1)
        }
        i++
    })

    localStorage.setItem('productsList', JSON.stringify(productsList))
}

// Them

var add_img_m = ""
var add_img_2 = ""
var add_img_3 = ""
var add_img_4 = ""

imgInp.addEventListener("change", function () {
    const files = imgInp.files[0];
    if (files) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load", function () {
            add_img_m = this.result
        })
    }
})
imgInp2.addEventListener("change", function () {
    const files = imgInp2.files[0];
    if (files) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load", function () {
            add_img_2 = this.result
        })
    }
})
imgInp3.addEventListener("change", function () {
    const files = imgInp3.files[0];
    if (files) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load", function () {
            add_img_3 = this.result
        })
    }
})
imgInp4.addEventListener("change", function () {
    const files = imgInp4.files[0];
    if (files) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load", function () {
            add_img_4 = this.result
        })
    }
})

function themPrc() {
    alert("Đã thêm!")
    let add_id = document.getElementById('select_type').value
    let add_name = document.getElementById('select_name').value
    let add_price = document.getElementById('select_price').value

    productsList.push({ id: add_id, name: add_name, price: add_price, img: add_img_m, img2: add_img_2, img3: add_img_3, img4: add_img_4 })
    localStorage.setItem('productsList', JSON.stringify(productsList))
    shop()
}

// Sua

function suaPrc(x) {
    let sua = x.parentElement.parentElement
    let tenSp = sua.children[1].innerText
    let i = 0
    productsList.forEach(product => {
        if (tenSp === product.name) {
            document.getElementById('changeFunc').innerHTML = `
                <div id="suaPrc2">
                    <span class="material-symbols-sharp">add</span>
                    <h3 id="addAndUpdate">Update Product</h3>
                </div>`
            document.getElementById('flex-center').innerHTML = `
                UPDATE PRODUCT`

            document.getElementById('select_type').value = product.id
            document.getElementById('select_name').value = product.name
            document.getElementById('select_price').value = product.price
            document.getElementById('suaAnh').src = product.img
            document.getElementById('suaAnh2').src = product.img2
            document.getElementById('suaAnh3').src = product.img3
            document.getElementById('suaAnh4').src = product.img4

            let suaPrc2 = document.querySelector('#suaPrc2')
            let vt = i
            suaPrc2.addEventListener("click", function (e) {
                alert("Cập nhật thành công!")
                a = document.getElementById('select_type').value
                b = document.getElementById('select_name').value
                c = document.getElementById('select_price').value
                let item = { id: a, name: b, price: c, img: product.img, img2: product.img2, img3: product.img3, img4: product.img4 }
                productsList.splice(vt, 1, item)
                shop()
                localStorage.setItem('productsList', JSON.stringify(productsList))
            })
        }
        else {
            i++
        }
    })
}