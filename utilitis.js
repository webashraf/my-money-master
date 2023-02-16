const balance = document.getElementById('balance-input');
const food = document.getElementById('food-input');
const rent = document.getElementById('rent-input');
const cloth = document.getElementById('cloth-input');
const totalBlance = document.getElementById('total-blance');


function expenseUpdate(){
        // console.log('expnse clicked');
        const total = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(cloth.value);
        const totalExpnse = document.getElementById('total-expnse');
        totalExpnse.innerText = total;
        // console.log(total);
    
        totalBlance.innerText = parseFloat(balance.value) - total;

        console.log(totalBlance.innerText);
}
function savingsUpdate(){
    const savings = document.getElementById('savings');
    const savingCalculate = parseFloat(savings.value) / 100;
    const totalSavings = document.getElementById('total-savings');
    const finalSavings = totalSavings.innerText = parseFloat(totalBlance.innerText) * savingCalculate;
    document.getElementById('remaining-Balance').innerText = parseFloat(totalBlance.innerText) - finalSavings;
    // console.log(parseFloat(totalBlance.innerText), savingCalculate);
}