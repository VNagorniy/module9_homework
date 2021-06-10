
// Задание 4
/*Напишите код приложения, интерфейс которого представляет собой input и кнопку. 
В input можно ввести любое число. При клике на кнопку происходит следующее:

Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст 
«одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL 
https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.
Пример: если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.
После получения данных вывести ниже картинку на экран.  */

// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.button');


// Вешаем обработчик на кнопку для запроса и запускаем функцию useRequest. 
	btnNode.addEventListener('click', useRequest);

function useRequest() {
	let limit_1 = document.querySelector('.input_1').value; /** поиск и получение данных из input. */
    let limit_2 = document.querySelector('.input_2').value; /** поиск и получение данных из input. */
	if (limit_1 < 100 || limit_1 > 300 || limit_2 < 100 || limit_2 > 300) {
		alert(`Одно из чисел вне диапазона от 100 до 300`);
        document.querySelector(".error").insertAdjacentHTML('beforebegin', "<span>Одно из чисел вне диапазона от 100 до 300 !!!</span>"); /** Поиск элемента с классом "error" и вставка нового Элемента перед элементом с классом "error"*/ 
		return;
	} else {
        fetch(`https://picsum.photos/${limit_1}/${limit_2}`)
        .then(response => {
            const card = `<img src=${response.url}>`;
            resultNode.innerHTML = card; /** Замена содержимого элемента с классом result на на новый элемент card*/
            })
        .catch(() => { console.log('error') });
        }
    };
