//Function to display updated rates as the slider moves
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "";
}

//Function to calculate and display the interest
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * years * rate /100;
    document.getElementById("result").innerHTML="If you deposit <mark>" + principal + 
        "</mark>, \<br\> at an interest rate of <mark>" + rate + "</mark>, \<br\> You will recieve an amount of <mark>" 
        + interest + "</mark> \<br\> in the year <mark>" + year + "</mark> \<br\>";
    
}
//Function to validate the the principal value is a positive number
function validation()
{
    var principal = document.getElementById("principal").value;
    if (principal == NaN || principal <=0){
        alert("Please enter a positive value!");
        document.getElementById("principal").focus();
    }
    else {
        compute();
    }
}



        
