// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
let value = document.getElementById('value');

let btnIncrement = document.querySelector('[data-action="increment"]')

let btnDecrement = document.querySelector('[data-action="decrement"]')

const increment = () => {
    return (value.textContent = counterValue += 1);
};
const decrement = () => {
    return (value.textContent = counterValue -= 1);
};

btnIncrement.addEventListener("click", increment);

btnDecrement.addEventListener("click", decrement);
