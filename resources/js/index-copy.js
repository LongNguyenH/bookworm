import '../css/styles.css';

const itemRow1 = [
    {
        image:"./img/product-1.png",
        name:"product",
        price:"100",
    },
    {
        image:"./img/product-2.png",
        name:"product",
        price:"100",
    },
    {
        image:"./img/product-3.png",
        name:"product",
        price:"100",
    },
    {
        image:"./img/product-4.png",
        name:"product",
        price:"100",
    },
    
]

const itemRow2 = [
    {
        image:"./img/product-5.png",
        name:"product",
        price:"100",
    },
    {
        image:"./img/product-6.png",
        name:"product",
        price:"100",
    },
    {
        image:"./img/product-7.png",
        name:"product",
        price:"100",
    },
    {
        image:"./img/product-8.png",
        name:"product",
        price:"100",
    },
    
]

var itemRow1Elems = itemRow1.map((item) => {
    const itemRow1Element = `
        <div class="col-4 col-md-3 d-flex justify-content-center">
            <div class="card" style="width:18rem ; margin:5px">
            <img
                src="${item.image}"
                class="card-img-top"
                alt="..."
                />
                <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">
                    Some quick example text
                </p>
                <p class="card-text card-price">
                    ${item.price}
                </p>
                <button class="card-btn btn btn-primary" onclick="onItemClick('${item.productName}')">Add to cart</button>
                </div>
            </div>
        </div>
    `;
    return itemRow1Element;
}).join('');

const itemContainer1 = document.getElementById("item-row-1");
itemContainer1 .innerHTML = itemRow1Elems;

var itemRow2Elems = itemRow2.map((item) => {
    const itemRow2Element = `
        <div class="col-4 col-md-3 d-flex justify-content-center">
            <div class="card" style="width:18rem ; margin:5px">
            <img
                src="${item.image}"
                class="card-img-top"
                alt="..."
                />
                <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">
                    Some quick example text
                </p>
                <p class="card-text card-price">
                    ${item.price}
                </p>
                <button class="card-btn btn btn-primary" onclick="onItemClick('${item.productName}')">Add to cart</button>
                </div>
            </div>
        </div>
    `;
    return itemRow2Element;
}).join('');

const itemContainer2 = document.getElementById("item-row-2");
itemContainer2 .innerHTML = itemRow2Elems;

var cards = document.getElementsByClassName('card');
for(var i=0;i<cards.length;i++){
    var card = cards[i];
    card.onclick =function () {
        location.href = "product.html";
    };
}