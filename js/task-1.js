const categorieslist = document.getElementById('categories');
const categories = categorieslist.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const items = category.querySelector('ul li').textContent;

    console.log(`Catagory: ${title}`);
    console.log(`Elements: ${items.lenght}`);
});

