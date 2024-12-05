function RegisterClick(){
    document.getElementById('DetailsContainer').style.display = 'block';
    document.getElementById('RegisterContainer').style.display = 'none';

    document.getElementById('lblname').innerHTML = document.getElementById('name').value
    document.getElementById('lblprice').innerHTML = document.getElementById('price').value
    document.getElementById('lblcity').innerHTML = document.getElementById('city').value
    document.getElementById('lblmfd').innerHTML = document.getElementById('manufactured').value

    stockStatus = '';
    stockCheckBox = document.getElementById('stock')
    if(stockCheckBox.checked){
        stockStatus = 'Available'
    }else{
        stockStatus = 'Not Available'
    }
    document.getElementById('lblstock').innerHTML = stockStatus;
}

function EditClick(){
    document.getElementById('btnModalRegister').innerHTML = 'Save'
}
