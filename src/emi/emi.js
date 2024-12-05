function AmountChange()
{
    document.getElementById('amount').value = document.getElementById('customAmount').value
}

function YearsChange()
{
    document.getElementById('years').value = document.getElementById('customYears').value
}

function InterestChange()
{
    document.getElementById('rate').value = document.getElementById('customRate').value
}

function AmounttextBoxChange()
{
    document.getElementById('customAmount').value = document.getElementById('amount').value
}

function YearstextBoxChange()
{
    document.getElementById('customYears').value = document.getElementById('years').value
}

function InteresttextBoxChange()
{
    document.getElementById('customRate').value = document.getElementById('rate').value
}

function CalculateClick()
{
    let p = parseInt(document.getElementById('amount').value)
    let r = parseFloat(document.getElementById('rate').value)/12/100
    let n = parseInt(document.getElementById('years').value)*12

    let emi = p * r * Math.pow(1 + r, n) / Math.pow(1 + r, n) - 1 ;
    document.getElementById("result").innerHTML = "Your monthly installment is <b>"+  Math.round(emi) + "</b> for " + p + " in " + n + " months";
}

