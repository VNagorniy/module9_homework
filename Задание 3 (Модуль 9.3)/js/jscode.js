/* Задание 3
Напишите код приложения, интерфейс которого представляет собой input и кнопку. 
В input можно ввести любое число. При клике на кнопку происходит следующее:

Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос 
c помощью XHR по URL https://picsum.photos/v2/list?limit=10, 
где get-параметр limit — это введённое число.*/


function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Response status: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Error! Response status: ', xhr.status);
  };
  
  xhr.send();
};

function displayResult(apiData) {
  let images = '';
  
  apiData.forEach(item => {
    const imageBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    images = images + imageBlock;
  });

  resultNode.innerHTML = images;
}

// Get HTML tags
const btnNode = document.querySelector('.btn');
const resultNode = document.querySelector('.result'); 


btnNode.addEventListener('click', () => {

  const value = +document.querySelector('input').value;

  if ( value >= 1 && value <= 10 ) {
    let url = `https://picsum.photos/v2/list/?limit=${value}`;
    useRequest( url, displayResult);
  } else {
    alert('The client number does not match the range 1-10 ');
  }
  
})