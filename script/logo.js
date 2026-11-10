document.getElementById('login-btn')
    .addEventListener('click', function(){
    //get the mobile number and 
        const numberInput = document.getElementById('input-number');
        const contactNumber = numberInput.value;
        console.log(contactNumber);
    //get the pin
        const inputPin = document.getElementById('input-pin');
        const pinNumber = inputPin.value;
        console.log(pinNumber);
    //match pin & mobile number
        if(contactNumber == '01777822045' && pinNumber == '1234'){
            alert('login success');
    //window.location.assign
        window.location.assign('/home.html')
        }else{
            alert('login fail')
            return;
        }        
})