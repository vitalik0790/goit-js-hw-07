// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию
// в список ul.ingredients.Для создания DOM - узлов используй
// document.createElement().


const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

let ulList = document.querySelector('#ingredients');

const createElements = ingredients.map(ingredient => {
    const createList = document.createElement('li');
    createList.textContent = ingredient;
    ulList.append(createList);
    console.log(createList);
})




