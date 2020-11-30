// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться
// размер текста.

const inputSize = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

inputSize.addEventListener('input', onInput);
function onInput() {
    const size = inputSize.value;
    textSize.style.fontSize = size + 'px';
}
