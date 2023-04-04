
const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};


refs.input.addEventListener('input', nameChanger);


function nameChanger(event) {
    if (refs.input.value === '') {
        refs.output.textContent = 'Anonymous';
    }
    else {
        refs.output.textContent = refs.input.value;
        
    }        
}