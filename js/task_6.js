// Напиши скрипт, который бы при потере фокуса на инпуте,
//     проверял его содержимое на правильное количество символов.

// Cколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

const inputValidation = document.querySelector('#validation-input');

inputValidation.addEventListener('blur', onInputValidation);

function onInputValidation() {
    if (inputValidation.value.length < inputValidation.dataset.length || inputValidation.value.length > inputValidation.dataset.length) {
        inputValidation.classList.add('invalid');
        inputValidation.classList.remove('valid');
    } else {
        inputValidation.classList.add('valid');
        inputValidation.classList.remove('invalid');
    }
}