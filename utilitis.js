const balance = document.getElementById('balance-input');
const food = document.getElementById('food-input');
const rent = document.getElementById('rent-input');
const cloth = document.getElementById('cloth-input');
const totalBlance = document.getElementById('total-blance');


function expenseUpdate(){
        const total = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(cloth.value);
        const totalDownBlance = parseFloat(balance.value) - total;
        if (isNaN(parseFloat(balance.value)) || isNaN(parseFloat(food.value)) || isNaN(parseFloat(rent.value)) || isNaN(parseFloat(cloth.value))) {
            alert('Give valid number');
            return;
        }
        else if (balance.value < 0 || food.value < 0 || rent.value < 0 || cloth.value < 0 ){
            alert('Give Possitive number');
            return;
        }
        setValue('total-expnse', total);
        setValue('total-blance', totalDownBlance);
}
function savingsUpdate(){
    const savings = document.getElementById('savings');
    const savingCalculate = parseFloat(savings.value) / 100;
    const finalSavings = parseFloat(balance.value) * savingCalculate;
    const totalSavings = document.getElementById('total-savings')
    if (isNaN(parseFloat(savings.value))) {
        alert('Give valid number');
        return;
    }
    else if(finalSavings > totalBlance.innerText){
        alert('Not enuagh money')
        return;
    }
    setValue('total-savings', finalSavings)
    const remainingBlance = parseFloat(totalBlance.innerText) - finalSavings;
    setValue('remaining-Balance', remainingBlance);
}

function setValue(setId, setValue ){
    document.getElementById(setId).innerText = setValue.toFixed(2);
}
// function validation(){
//     return isTrue? document.getElementById(setId).innerText: document.getElementById(setId).value;
// }