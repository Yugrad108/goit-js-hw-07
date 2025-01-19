const form = document.querySelector('.login-form');  

form.addEventListener('submit', (event) => {  
    // Запобігаємо перезавантаженню сторінки  
    event.preventDefault();  

    // Отримуємо значення полів  
    const email = form.elements.email.value.trim();  
    const password = form.elements.password.value.trim();  

    // Перевіряємо, чи є незаповнені поля  
    if (!email || !password) {  
        alert('All form fields must be filled in');  
        return;  
    }  

    // Створюємо об'єкт з даними  
    const formData = {  
        email: email,  
        password: password,  
    };  

    // Виводимо об'єкт у консоль  
    console.log(formData);  

    // Очищаємо форму  
    form.reset();  
});
