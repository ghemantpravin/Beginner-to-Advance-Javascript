// function to load categories dropdown (select)

function LoadCategories() {
        fetch('https://fakestoreapi.com/products/categories')
        .then(function (response){
            return response.json()
        })
        .then(function (categories){
            categories.unshift('All')
            for (let category of categories){
                let option = document.createElement('option')
                option.text = category.toUpperCase()
                option.value = category
                document.getElementById('lstCategories').appendChild(option)
            }
        })
}

// function to load all data

function BodyLoad(){
    LoadCategories()
    LoadProducts('https://fakestoreapi.com/products')
    GetCartCount()
}

// function to load all products and search product (url) dropdown (select)

function LoadProducts(url){
    document.getElementById('add').innerHTML = '';
    fetch(url)
    .then(function (response){
        return response.json()
    })
    .then(function (products){
        for(let product of products){

            let div = document.createElement('div')
            div.className = 'col-md-3'

            let card = document.createElement('div')
            card.className = 'card p-2 m-2'
            card.innerHTML = `
                <img src=${product.image} class='card-img-top' height='150'>
                <div class='card-header' style = "height:180px">
                    ${product.title} 
                </div>

                <div class='card-body'>
                    <h5 class="card-title">Price : ${product.price}</h5>
                </div>

                <div class='card-body'>
                    <p class="card-text">
                        ${product.category}
                    </p>
                    <p>Rating</p>
                        <div class=d-flex>
                            <span class=' bi bi-star-fill text-success'></span> <p>&nbsp;${product.rating.rate} [${product.rating.count}]</p>
                        </div>
                </div>

                <div class='card-footer'>
                    <button onclick="AddToCartClick(${product.id})" class='btn btn-primary w-100'>
                        <span class='bi bi-cart'></span> Add to cart
                    </button>
                </div>
                `

            div.appendChild(card)
            document.getElementById('add').appendChild(div)
        }
    
    })
}

// function to select specific item from product (searching) - on dropdown

function CategoryChange(){
    let categoryName = document.getElementById('lstCategories').value
        if(categoryName == 'All'){
            LoadProducts(`https://fakestoreapi.com/products/`)
        }
        else{
            LoadProducts(`https://fakestoreapi.com/products/category/${categoryName}`)
        }
}   

//CategoryChange - function perform but on navclick

function NavClick(categoryName){
    document.getElementById('lstCategories').value = categoryName
    if(categoryName == 'Home'){
        LoadProducts(`https://fakestoreapi.com/products/`)
    }
    else{
        LoadProducts(`https://fakestoreapi.com/products/category/${categoryName}`)
    }
}


let cartItems = [];

function GetCartCount()
{   
    document.getElementById('cartcount').innerHTML = cartItems.length;
}

function AddToCartClick(id)
{   
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(function (response){
        return response.json()
    })
    .then (function (product){
        alert(`${product.title} \n added to cart`)
        cartItems.push(product)
        GetCartCount()
    })
}

//load all cart items into table which we purchase

function LoadCartItems(){
    for (let item of cartItems){
        let tr = document.createElement('tr')
        let tdTitle = document.createElement('td')
        let tdImage = document.createElement('td')
        let tdPrice = document.createElement('td')

        tdTitle.innerHTML = item.title
        tdImage.innerHTML = `img src=${item.image} width='50' height='100'`
        tdPrice.innerHTML = item.price

        tr.appendChild(tdTitle)
        tr.appendChild(tdImage)
        tr.appendChild(tdPrice)

        document.querySelector('tbody').appendChild(tr)
    }
}