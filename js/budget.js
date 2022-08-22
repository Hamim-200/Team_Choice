document.getElementById('calculate').addEventListener('click', function () {
    const playerValue = getInputValueById('player-budget');

    if (isNaN(playerValue)) {
        alert('Enter a Number');
        return;
    }
    else if (playerValue < 0) {
        alert("Please Provide Positive Number");
        return;
    }

    const selectedPlayerTotal = getElementById('selected-total');

    const totalPlayerExpenseAmount = playerValue * selectedPlayerTotal;

    const playerExpenses = setElementValueById('player-expense', totalPlayerExpenseAmount);

})

document.getElementById('calculate-total').addEventListener('click', function () {
    const managerAmountValue = getInputValueById('manager-amount');

    const coachAmountValue = getInputValueById('coach-amount');

    const playerExpensesTotal = getElementById('player-expense');

    if (managerAmountValue < 0) {
        alert("Please Provide Positive Number");
        return;
    }
    else if (coachAmountValue < 0) {
        alert("Please Provide Positive Number");
        return;
    }
    if (isNaN(coachAmountValue)) {
        alert('Enter a Number');
        return;
    }
    else if (isNaN(managerAmountValue)) {
        alert('Enter a Number');
        return;
    }

    const totalAmount = managerAmountValue + coachAmountValue + playerExpensesTotal;

    const total = document.getElementById('total');
    total.innerText = totalAmount;
})