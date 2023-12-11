/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dayCost = 35;
let dayNum = 0;
let dayTotal = 0;
// const dayBtn = document.getElementsByClassName()
const allBtns = document.querySelectorAll(".day-selector li");
const clearBtn = document.getElementById("clear-button");
const halfBtn = document.getElementById("half");
const wholeBtn  = document.getElementById("full");
const calculated_cost = document.getElementById("calculated-cost");

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
const calculate_cost = ()=>{
    dayTotal = dayNum * dayCost;
    calculated_cost.innerHTML = dayTotal;
    // console.log(calculated_cost.innerHTML)
};


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


for (let i =0; i< allBtns.length; i++){
     let currentBtn = allBtns[i];
     if (currentBtn.classList.contains("clicked") == false){
        currentBtn.addEventListener("click", ()=>{
        currentBtn.classList.add("clicked");
        dayNum += 1;
        // console.log(dayNum)
        calculate_cost();
    });
}}
    


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearBtn.addEventListener("click",()=>{
    dayNum = 0;
    dayTotal = 0;
    calculate_cost();
    for (let i =0; i< allBtns.length; i++){
        let currentBtn = allBtns[i];
        currentBtn.classList.remove("clicked");
    }


});





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


const half_day_cost = ()=>{
    dayCost = 20;
    halfBtn.classList.add("clicked");
    wholeBtn.classList.remove("clicked");
    calculate_cost();
};
halfBtn.addEventListener('click',half_day_cost);





// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
const whole_day_cost = ()=>{
    dayCost = 35;
    wholeBtn.classList.add("clicked");
    halfBtn.classList.remove("clicked");
    calculate_cost();
};
wholeBtn.addEventListener('click',whole_day_cost);








