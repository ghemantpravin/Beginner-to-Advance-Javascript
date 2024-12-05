function RegisterClick(){
    document.getElementById('rightInfo').style.display = 'block'

    document.getElementById('pname').innerHTML = document.getElementById('city').value
    document.getElementById('mname').innerHTML = document.getElementById('movie').value
    document.getElementById('tname').innerHTML = document.getElementById('theatre').value
    document.getElementById('ddate').innerHTML = document.getElementById('manufactured').value
    document.getElementById('ttiming').innerHTML = document.getElementById('time').value
}

function EditClick(){
    document.getElementById('btnModalRegister').innerHTML = 'Save'
}