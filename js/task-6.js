// Функція для генерації випадкового кольору в hex-форматі  
function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215)  
        .toString(16)  
        .padStart(6, 0)}`;  
}  

// Отримуємо елементи  
const input = document.querySelector('#controls input');  
const createButton = document.querySelector('[data-create]');  
const destroyButton = document.querySelector('[data-destroy]');  
const boxesContainer = document.querySelector('#boxes');  

// Функція для очищення квадратів  
function destroyBoxes() {  
    boxesContainer.innerHTML = ''; // Очищаємо вміст контейнера  
}  

// Функція для створення квадратів  
function createBoxes(amount) {  
    destroyBoxes(); // Очищаємо попередні квадрати перед створенням нових  
    const boxes = [];  
    for (let i = 0; i < amount; i++) {  
        const size = 30 + i * 10; // Розмір квадрата  
        const box = document.createElement('div');  
        box.style.width = `${size}px`;  
        box.style.height = `${size}px`;  
        box.style.backgroundColor = getRandomHexColor();  
        box.classList.add('box');  
        boxes.push(box);  
    }  
    boxesContainer.append(...boxes); // Додаємо всі квадрати за одну операцію  
}  

// Обробник події для кнопки Create  
createButton.addEventListener('click', () => {  
    const amount = Number(input.value);  
    if (amount < 1 || amount > 100) {  
        return; // Якщо значення поза межами, нічого не робимо  
    }  
    createBoxes(amount); // Створюємо квадрати  
    input.value = ''; // Очищаємо значення в інпуті  
});  

// Обробник події для кнопки Destroy  
destroyButton.addEventListener('click', destroyBoxes);