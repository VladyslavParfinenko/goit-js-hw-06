
const refs = {
    input: document.querySelector('#validation-input'),
};

refs.input.addEventListener('blur', validationColor);


function validationColor(event) {
    const symbols = refs.input.value.length;
    const dataLength = refs.input.getAttribute('data-length');
    
    if (symbols === Number(dataLength)) {
        refs.input.classList.add('valid');
        if (refs.input.classList.contains('invalid')) {
            refs.input.classList.remove('invalid');
        }
        
    }
    else {
        refs.input.classList.add('invalid');
    }

}