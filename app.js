const billInput = document.querySelector('.amount');
const numOfpeople = document.querySelector(".people"); 
const tips = document.querySelectorAll(".tips");
const tipAmount = document.querySelector(".tip-amount");
const tipTotal = document.querySelector(".total-amount");
const resetButton = document.querySelector(".reset-btn")
const customBtn = document.querySelector("#custom")
numOfpeople.value = 1;

let billValue = 0.0;
let numpeople = 1;
let tipValue = 0.15;
tipAmount.innerHTML =  "$" + (0.0).toFixed(2);
tipTotal.innerHTML = "$" + (0.0).toFixed(2);

billInput.addEventListener('input', ()=>{
    billValue = parseFloat(billInput.value);
    calculateTip()
})

numOfpeople.addEventListener('input', ()=>{
    numpeople = parseFloat(numOfpeople.value);
    calculateTip()
})

customBtn.addEventListener('input', ()=>{
    tipValue = parseFloat(customBtn.value /100)
    tips.forEach(val =>{
        val.classList.remove("active")
    })
    calculateTip();  
})



tips.forEach(val =>{
    val.addEventListener('click', (event)=>{
        tips.forEach(val =>{
            val.classList.remove("active");
                if(event.target.innerHTML == val.innerHTML){
                    val.classList.add("active")
                    tipValue = parseFloat(val.innerHTML)/100;
                }
            }); 
            calculateTip();
        })
    
})


function calculateTip(){
    if(numpeople >= 1){
    let tipPerPerson = (tipValue * billValue) / numpeople;
    let total = (billValue + tipPerPerson) / numpeople ;
    tipAmount.innerHTML = "$" + tipPerPerson.toFixed(2);
    tipTotal.innerHTML = "$" + total.toFixed(2);
    }
}


resetButton.addEventListener('click', () =>{
    tipAmount.innerHTML ="$" + (0.0).toFixed(2)
    tipTotal.innerHTML ="$" + (0.0).toFixed(2)
    billInput.value = "";
    numpeople = "";
    customBtn.value = ""
})
