let counterValue = 0;

const counterTable = document.querySelectorAll("#counter button");
console.log(counterTable);

counterTable[0].addEventListener('click', () => {
    console.log("click");
    counterValue -= 1;
    console.log(counterValue);

    let valueCount = document.querySelector('#value');
    // console.log(valueCount);
    valueCount.textContent = counterValue;
    
});
counterTable[1].addEventListener('click', () => {
    console.log("click");
    counterValue += 1;
    console.log(counterValue);

    let valueCount = document.querySelector('#value');
    // console.log(valueCount);
    valueCount.textContent = counterValue;
    
});