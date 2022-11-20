productsList = JSON.parse(localStorage.getItem('productsList'))
// sweatersList = JSON.parse(localStorage.getItem('sweatersList'))
// hoodiesList = JSON.parse(localStorage.getItem('hoodiesList'))
// tshitsList = JSON.parse(localStorage.getItem('tshitsList'))

function shop() {
    productsList.forEach(product => {
        const tr = document.createElement('tr');
        const trContent = `
        <tr>
            <td><img src="${product.img}" alt=""></td>
            <td id="name-product">${product.name}</td>
            <td id="price-product">${product.price}.000</td>
            <td><button id="remove-product" onclick="xoaPrc(this)"><i class="fa-sharp fa-solid fa-circle-xmark"></i></button></td>
            <td><button id="update-product"><i class="fa-solid fa-pen-to-square"></i></button></td>
        </tr>
        `
        tr.innerHTML = trContent;
        document.querySelector('table tbody').appendChild(tr);
    })
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
            // if (product.id === "ts0") {
            //     console.log("them dc cai nay ne");
            //     tshitsList.splice(i, 1)
            // }
        }
        i++
    })
    localStorage.setItem('productsList', JSON.stringify(productsList))
    // localStorage.setItem('tshitsList', JSON.stringify(tshitsList))
}