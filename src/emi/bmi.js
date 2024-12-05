function CalculateBMI(){

    let age = parseInt(document.getElementById('age').value)
    let height = parseInt(document.getElementById('height').value)
    let weight = parseInt(document.getElementById('weight').value)
    

    let bmi = (weight / ((height * height)/ 10000)).toFixed(2);
    

    document.getElementById('result').innerHTML = 
    'Your height is' +  height  + 'and weight is' +  weight  + 'so your BMI is' +  bmi
}
