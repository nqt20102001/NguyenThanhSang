import { tshitsList, hoodiesList, sweatersList, productsList } from "./productList.js";

var btnAll = document.querySelector('#btn-alls')
var btnShirt = document.querySelector('#btn-tshirts')
var btnHoodie = document.querySelector('#btn-hoodies')
var btnSwt = document.querySelector('#btn-sweaters')


btnAll.addEventListener('click', function (event) {
    const htmls = productsList.map((product, index) => {
        return `
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
})


btnShirt.addEventListener('click', function (event) {
    let temp = ""
    tshitsList.map((product, index) => {
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
    </div>`
    })
    document.querySelector("#shopp #product1 .pro-container").innerHTML = temp
})


btnHoodie.addEventListener('click', function (event) {
    let temp = ""
    hoodiesList.map((product, index) => {
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
    </div>`
    })
    document.querySelector("#shopp #product1 .pro-container").innerHTML = temp
})


btnSwt.addEventListener('click', function (event) {
    let temp = ""
    sweatersList.map((product, index) => {
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
    </div>`
    })
    document.querySelector("#shopp #product1 .pro-container").innerHTML = temp
})