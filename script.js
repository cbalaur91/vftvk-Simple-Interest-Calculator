function compute()
{
    p = document.getElementById("principal").value;
    // variables required for calculating the interest

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    
    //var result =  document.getElementById("result").value;
    document.getElementById("result").innerHTML ="\<br\>If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";;
}

function validate(){
    var amount = document.getElementById("principal").value;
    if (amount <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
}
// function to update the rate slider
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}