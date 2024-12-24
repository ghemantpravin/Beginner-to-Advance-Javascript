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


//function to load products

    function Loadproducts(url){
        document.getElementById('row').innerHTML = ''
        fetch(url)
        .then(function (response){
            return response.json()
        })
        .then(function (products){
            for(let product of products){

                let div = document.createElement('div')
                div.className = 'col-md-4'

                let div2 = document.createElement('div')
                div2.className = 'card p-2 m-2'
                
                div2.innerHTML = `
                    <img src=${product.image} class='card-image-top' height='200'>

                    <div class='card-header' style = "height:120px">
                        ${product.title}
                    </div>

                    <div class='card-body'>
                        <p class='card-text'>Product ID : ${product.id}</p>
                        <p class='card-text'>Product Price : ${product.price}</p>
                        <p class='card-text'>Product Category : ${product.category}</p>
                        <p>Rating</p>
                        <div class=d-flex>
                            <span class='bi bi-star-fill text-success'></span> <p>&nbsp;${product.rating.rate} [${product.rating.count}]</p>
                        </div>
                    </div>

                    <div class='card-footer'>
                        <button onclick="AddToCartClick(${product.id})" class='btn btn-primary w-100'>
                            <span class='bi bi-cart'></span> Add to cart
                        </button>
                </div>
                `

                div.appendChild(div2)
                document.getElementById('row').appendChild(div)

                
            }
        })
    }

// function to change category

function CategoryChanged(){
    let categoryName = document.getElementById('lstCategories').value

    if(categoryName == 'All'){
        Loadproducts('https://fakestoreapi.com/products/')
    }
    else{
        Loadproducts(`https://fakestoreapi.com/products/category/${categoryName}`)
    }
}

// function to load all data with nav click

    function NavClick(categoryName){
        document.getElementById('lstCategories').value = categoryName 
        if(categoryName == 'All'){
            Loadproducts('https://fakestoreapi.com/products/')
        }
        else{
            Loadproducts(`https://fakestoreapi.com/products/category/${categoryName}`)
        }
    }

// function to load all data

    function Bodyload(){
        LoadCategories()
        Loadproducts('https://fakestoreapi.com/products/')
    }