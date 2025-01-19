const input = document.querySelector('#name-input');  
const output = document.querySelector('#name-output');  

input.addEventListener('input', () => {  
    // Очищення значення від пробілів по краях  
    const name = input.value.trim();  

    // Якщо інпут порожній або містить лише пробіли, підставляємо "Anonymous"  
    output.textContent = name ? name : 'Anonymous';  
});