
//To load all products

function LoadProducts(){
    fetch(`https://dummyjson.com/products`)
    .then(function (response){
        return response.json()
    })
    .then(function (products){
        for (let product of products.products){

            let card = document.createElement('div')
            card.className = 'col-md-3'

            let div = document.createElement('div')
            div.className = 'card p-2 m-2'

            div.innerHTML = `
                <img src=${product.images} style='height : 200px'>

                <div class='card-header'>
                    <p class='card-text'>${product.title}</p>
                </div>
                <br>
                <p class='card-text'> Product ID : ${product.id}</p>
                <p class='card-text'> Product Category : ${product.category}</p>
                <p>Rating</p>
                    <div class=d-flex>
                        <span class='bi bi-star-fill text-success'></span> <p>&nbsp;${product.rating}</p>
                    </div>
            `

            for (let review of product.reviews) {
                let ptag = document.createElement('p')
                ptag.className = 'card-text'
                ptag.innerHTML = `
                    <p>${review.comment}</p>
                `

                card.appendChild(div)
                div.appendChild(ptag)
                document.getElementById('add').appendChild(card)
            }
        }
    })
}


    function CategoryChanged(){
        let categoryName = document.getElementById('lstCategories').ariaValueMax

        if(categoryName == 'all'){
            LoadProducts(`https://dummyjson.com/products`)
        }
        else{
            LoadProducts(`https://dummyjson.com/products/category/${categoryName}`)
        }
    }


//To load all body 

    function Bodyload(){
        LoadProducts()
    }