
const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.input.addEventListener('input', changeFontSize);
refs.text.style.fontSize = '50px';

function changeFontSize(event) {
    refs.text.style.fontSize = event.currentTarget.value + 'px';


}
