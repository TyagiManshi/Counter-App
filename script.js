const count = document.querySelector('.count')
const minusBtn = document.querySelector('.minus-btn')
const plusBtn = document.querySelector('.plus-btn')
const changeBy = document.querySelector('.changeBy')
const reset = document.querySelector('.reset')

minusBtn.addEventListener('click', ()=>{   
    const countValue = parseInt(count.innerText) 
    // 0 was a string by default changing it to an integer to increment and decrement 
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue - changeByValue;
})

plusBtn.addEventListener('click', ()=>{ 
    const countValue = parseInt(count.innerText) 
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue + changeByValue;
})

reset.addEventListener('click', () => {
    count.innerText = 0
})