/* Задание 1. 
Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, 
который будет преобразовывать XML в JS-объект и выводить его в консоль.*/

const parser = new DOMParser();

const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>
`;

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

const result = {
  list: []
}

const listNode = xmlDOM.querySelector('list');
const studentsList = listNode.querySelectorAll('student').forEach( element => {

  const nameNode = element.querySelector('name');

  result.list.push( 
    {
      name: `${nameNode.querySelector('first').textContent}  ${nameNode.querySelector('second').textContent}`,
      age: Number(element.querySelector('age').textContent),
      prof: element.querySelector('prof').textContent,
      lang: nameNode.getAttribute('lang')
    })
})

console.log(result);