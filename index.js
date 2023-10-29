const input1= document.querySelector('.input-1');
const input2= document.querySelector('.input-2');
const years= document.querySelector('.year');
const months = document.querySelector('.month');
const imgBtn = document.querySelector('.img');
const inputValidator = document.querySelector('.input-validator');


// calcualte age,moths and days based on the present year
function calcualteAge( month, year){
    const yearNow = new Date()
    month = Math.abs(yearNow.getMonth() - input1.value);
    year = Number(input2.value);
    const currentYear = yearNow.getFullYear();
    const age = currentYear - year;
    years.textContent = age;
    months.textContent = month;
    if(!input1.value && !input2.value){
         inputValidator.textContent =`This fields are required`
         years.textContent = '--';
         months.textContent = '--';
     }else{
         inputValidator.textContent = " "
         imgBtn.style.backgroundColor="hsl(0, 0%, 8%)"
     }
     imgBtn.style.backgroundColor= '#000'
    return (days.textContent, months.textContent, years.textContent)
}
 
imgBtn.addEventListener('click', calcualteAge)
