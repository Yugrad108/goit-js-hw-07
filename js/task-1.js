const categorieslist = document.getElementById('categories');
const categories = categorieslist.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const items = category.querySelector('ul li').textContent;

    console.log(`Catagory: ${title}`);
    console.log(`Elements: ${items.lenght}`);
});


// // ОТримуэмо элемент ul#categories  
// const categoriesList = document.getElementById('categories');  

// // ОТримуэмо всі елементи li.item  
// const categories = categoriesList.querySelectorAll('.item');  

// // Виводимо кількість категорій  
// console.log(`Number of categories: ${categories.length}`);  

// // Проходимо по кожній категорії  
// categories.forEach(category => {  
//     // Знаходимо заголовок h2  
//     const title = category.querySelector('h2').textContent;  
    
//     // Знаходимо всі елементи li в категорії  
//     const items = category.querySelectorAll('ul li');  
    
//     // Виводимо назву категорії та кількість елементів  
//     console.log(`Category: ${title}`);
//     console.log(`Elements: ${items.length}`);  
// });