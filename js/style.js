let totalAmountInput = document.getElementById("totl");
let numOfPeopleInput = document.getElementById("num-peop");
let tipDisplay = document.getElementById("tip-display");
let splitDisplay = document.getElementById("split");
let resetValues = document.getElementById("reset");
let discountbutton = document.querySelectorAll(".btn");

discountbutton.forEach(function(btn){
    btn.addEventListener('click',function(){
        applyDiscount(parseFloat(btn.dataset.percentage))
    })   
})

function applyDiscount(discountpercentage) {
    
    let totalAmount = parseFloat(totalAmountInput.value);
    let numOfPeople = parseInt(numOfPeopleInput.value);
    // Check if the values are valid numbers
    if (isNaN(totalAmount) || isNaN(numOfPeople) || totalAmount <= 0 || numOfPeople <= 0) {
        alert("Please enter valid values for total amount and number of people.");
        return;
    }
    let tipAmount = (discountpercentage / 100) * totalAmount;
    let totalWithTip = totalAmount + tipAmount;
    let amountPerPerson = totalWithTip / numOfPeople;

    // Update the HTML content
    tipDisplay.textContent = totalWithTip.toFixed(2);
    splitDisplay.textContent = amountPerPerson.toFixed(2);
}
resetValues.addEventListener('click',function(){
    totalAmountInput.value= "";
    numOfPeopleInput.value = "";
    tipDisplay.textContent = " ";
    splitDisplay.textContent = " ";
})
