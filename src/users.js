
function LoadProducts(){
    fetch('https://reqres.in/api/users/')
    .then(function (response){
        return response.json()
    })
    .then(function (users){
        document.getElementById('text1').innerHTML = users.page;
        document.getElementById('text2').innerHTML = users.per_page;
        document.getElementById('text2').innerHTML = users.total;
        document.getElementById('text4').innerHTML = users.total_pages;

        for (let data of users.data){

            let col = document.createElement('div')
            col.className = 'col-md-4'

            let div = document.createElement('div')
            div.className = 'card p-2 m-2'

            div.innerHTML = `
                <p class='card-text'>${data.id}</p>
                <p class='card-text'>${data.email}</p>
                <p class='card-text'>${data.first_name}</p>
                <p class='card-text'>${data.last_name}</p>
                <img src=${data.avatar}>
            `
            col.appendChild(div)
            document.getElementById('row').appendChild(col)
        }

    })
}


// to load all body data

function Bodyload(){
    LoadProducts()
}