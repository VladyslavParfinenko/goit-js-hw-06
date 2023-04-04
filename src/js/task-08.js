const form = document.querySelector('.login-form');


form.addEventListener('submit', checkUser);


function checkUser(event) {
    event.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (!email || !password) {
        alert('Заполните все поля');
        return;
    }

    const userData = {
        email,
        password,
    };

    console.log(userData);
    form.reset();
    
        
        
}