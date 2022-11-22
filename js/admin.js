productsList = JSON.parse(localStorage.getItem('productsList'))
sweatersList = JSON.parse(localStorage.getItem('sweatersList'))
hoodiesList = JSON.parse(localStorage.getItem('hoodiesList'))
tshitsList = JSON.parse(localStorage.getItem('tshitsList'))

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

function xoaPrc(x) {
    let xoa = x.parentElement.parentElement
    let tenSp = xoa.children[1].innerText
    xoa.remove()
    let i = 0
    productsList.forEach(product => {
        if (tenSp === product.name) {
            productsList.splice(i, 1)

            if (product.id === "ts") {
                tshitsList.splice(i, 1)
            }
            else if (product.id === "hd") {
                hoodiesList.splice(i, 1)
            }
            else if (product.id === "st") {
                sweatersList.splice(i, 1)
            }
        }
        i++
    })

    localStorage.setItem('productsList', JSON.stringify(productsList))
    localStorage.setItem('tshitsList', JSON.stringify(tshitsList))
    localStorage.setItem('sweatersList', JSON.stringify(sweatersList))
    localStorage.setItem('hoodiesList', JSON.stringify(hoodiesList))
}


var add_img_m
imgInp.onchange = evt => {
    const [file] = imgInp.files
    if (file) {
        add_img_m = URL.createObjectURL(file)
    }
}
// var add_img_2
// imgInp2.onchange = evt => {
//     const [file] = imgInp2.files
//     if (file) {
//         add_img_2 = URL.createObjectURL(file)
//     }
// }
// var add_img_3
// imgInp3.onchange = evt => {
//     const [file] = imgInp3.files
//     if (file) {
//         add_img_3 = URL.createObjectURL(file)
//     }
// }
// var add_img_4
// imgInp4.onchange = evt => {
//     const [file] = imgInp4.files
//     if (file) {
//         add_img_4 = URL.createObjectURL(file)
//     }
// }


function themPrc() {
    alert("Đã thêm!")

    let add_id = document.getElementById('select_type').value
    let add_name = document.getElementById('select_name').value
    let add_price = document.getElementById('select_price').value

    productsList.push({ id: `${add_id}`, name: `${add_name}`, price: `${add_price}`, img: `${add_img_m}` })
    localStorage.setItem('productsList', JSON.stringify(productsList))

    if (add_id === "ts") {
        tshitsList.push({ id: `${add_id}`, name: `${add_name}`, price: `${add_price}`, img: `${add_img_m}`, img2: `${add_img_2}`, img3: `${add_img_3}`, img4: `${add_img_4}` })
        localStorage.setItem('tshitsList', JSON.stringify(tshitsList))
    }
    else if (add_id === "hd") {
        hoodiesList.push({ id: `${add_id}`, name: `${add_name}`, price: `${add_price}`, img: `${add_img_m}`, img2: `${add_img_2}`, img3: `${add_img_3}`, img4: `${add_img_4}` })
        localStorage.setItem('hoodiesList', JSON.stringify(hoodiesList))
    }
    else if (add_id === "st") {
        sweatersList.push({ id: `${add_id}`, name: `${add_name}`, price: `${add_price}`, img: `${add_img_m}`, img2: `${add_img_2}`, img3: `${add_img_3}`, img4: `${add_img_4}` })
        localStorage.setItem('sweatersList', JSON.stringify(sweatersList))
    }

    shop()
}


// function suaPrc(x) {
//     let sua = x.parentElement.parentElement
//     let tenSp = sua.children[1].innerText
//     // sua.remove()
//     let i = 0
//     productsList.forEach(product => {
//         if (tenSp === product.name) {
//             document.getElementById('changeFunc').innerHTML = `
//                 <div id="suaPrc2">
//                     <span class="material-symbols-sharp">add</span>
//                     <h3 id="addAndUpdate">Update Product</h3>
//                 </div>`
//             document.getElementById('select_type').value = product.id
//             document.getElementById('select_name').value = product.name
//             document.getElementById('select_price').value = product.price

//             let suaPrc2 = document.querySelector('#suaPrc2')
//             suaPrc2.addEventListener("click", function (e) {
//                 a = document.getElementById('select_type').value
//                 b = document.getElementById('select_name').value
//                 c = document.getElementById('select_price').value
//                 var item = { id: `${a}`, name: `${b}`, price: `${c}`, img: `${add_img_m}`, img: `${add_img_2}`, img: `${add_img_3}`, img: `${add_img_4}` }
//                 console.log(item);
//                 // productsList.splice(i, 1, item)
//                 // console.log(productsList)
//             })
//         }
//         i++
//     })
//     // shop()

//     // localStorage.setItem('productsList', JSON.stringify(productsList))
//     // localStorage.setItem('tshitsList', JSON.stringify(tshitsList))
//     // localStorage.setItem('sweatersList', JSON.stringify(sweatersList))
//     // localStorage.setItem('hoodiesList', JSON.stringify(hoodiesList))
// }