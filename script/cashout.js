document.getElementById('cashout-btn')
    .addEventListener('click', function(){
    //1-get the agent number 
        const agentNumberInput = document.getElementById('agent-number');
        const agentNumberValue = agentNumberInput.value;
        console.log(agentNumberValue);
        if(agentNumberValue.length !=11){
            alert('invalid agent number');
            return;
        }
    //2-get the  amount
        const cashoutAmountInput = document.getElementById('cashout-amount');
        const cashoutAmountValue = cashoutAmountInput.value;
        console.log(cashoutAmountValue);
    //get the current balance 
        const currentBalance = document.getElementById('balance');
        const balanceElement = currentBalance.innerText;
        console.log(balanceElement);
    //calculate new balance 
        const newBalance = Number(balanceElement) - Number(cashoutAmountValue);
        if(newBalance < 0){
            alert('Invalid Amount')
            return;
        }
    // get the pic verify 
        const cashoutPinInput = document.getElementById('cashout-pin');
        const pin = cashoutPinInput.value;
        if(pin === '1234'){
            alert('cashout successful');
             console.log(newBalance);
             currentBalance.innerText = newBalance;
        }else{
            alert('invalid pin');
        }
    })