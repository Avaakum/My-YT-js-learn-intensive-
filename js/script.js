// Задаем переменные которые будут использоваться в коде
const switcher = document.querySelector('#cbx'),
  more = document.querySelector('.more'),
  modal = document.querySelector('.modal'),
  videos = document.querySelectorAll('.videos__item');
let player;

// прописываем функцию "переиспользования" для всмплывающейсверху менюшки с кнопки будерброда
// с неявно заданными значениями функции
function bindSlideToggle(trigger, boxBody, content, openClass) {
  let button = { //задаем кнопку, которая будет состоять из объекта и
    // и свойства
    'element': document.querySelector(trigger),
    'active': false
  };
  const box = document.querySelector(boxBody),
    boxContent = document.querySelector(content);

  // button - это объект, element - это свойство объекта. Пото добаляем
  //  обработчик события для события клик и пишем стрелочную функцию
  button.element.addEventListener('click', () => {

    if (button.active === false) { // проверяем активна ли кнопка, причем проверяем через "===", т.е. по типу данных

      button.active = true; // присваиваем кнопке значение "активна"
      box.style.height = boxContent.clientHeight + 'px'; // присваиваем стили к менюшке box
      box.classList.add(openClass); //добавляем активный класс, через свойство класс лист
      // которое получает доступ ко всем классам которые есть у объекта
    } else {
      button.active = false;
      box.style.height = 0 + 'px';
      box.classList.remove(openClass);
    }
  });
}
bindSlideToggle('.hamburger', '[data-slide="nav"]', '.header__menu', 'slide-active');

//Переключение темный/светлый режим
function switchMode() {
  if (night === false) {
    night = true;
    // document.body.style.backgroundColor = '#000';
    document.body.classList.add('night');
    document.querySelectorAll('.hamburger > line').forEach(item => {
      // метод форич -перебирает все селекторы внутри массива   
      //  внутри forEach мы положили функцию, которая будет менять цвета полосок
      item.style.stroke = '#fff'; //атрибут svg графики, кот. отв. за цвет линий
    });
    document.querySelectorAll('.videos__item-descr').forEach(item => {
      item.style.color = '#fff';
    });
    document.querySelectorAll('.videos__item-views').forEach(item => {
      item.style.color = '#fff';
    });
    document.querySelector('.header__item-descr').style.color = '#fff';
    document.querySelector('.logo > img').src = 'logo/youtube_night.svg';



  } else {
    night = false;
    document.body.classList.remove('night');
    document.querySelectorAll('.hamburger > line').forEach(item => { //внутри forEach 
      //мы положили функцию, которая будет менять цвета полосок
      item.style.stroke = '#000';
    });
    document.querySelectorAll('.videos__item-descr').forEach(item => {
      item.style.color = '#000';
    });
    document.querySelectorAll('.videos__item-views').forEach(item => {
      item.style.color = '#000';
    });
    document.querySelector('.header__item-descr').style.color = '#000';
    document.querySelector('.logo > img').src = 'logo/youtube.svg';



  }
}

// задаем переменную ночного режима, по умолчанию false
let night = false;

// добавляем обработчик событий(switcher отслеживает когда изменяется
// значение чекбокса и включает выполнение функции) на чекбокс ночного режима
// т.к. чекбокс - поэтому не клик и чейндж
switcher.addEventListener('change', () => {
  switchMode();
});

const data = [
  ['img/thumb_3.webp', 'img/thumb_4.webp', 'img/thumb_5.webp'],
  ['#3 Верстка на flexbox CSS | Блок преимущества и галерея | Марафон верстки | Артем Исламов',
    '#2 Установка spikmi и работа с ветками на Github | Марафон вёрстки Урок 2',
    '#1 Верстка реального заказа landing Page | Марафон вёрстки | Артём Исламов'
  ],
  ['3,6​ тыс. просмотров', '4,2 тыс. просмотров', '28 тыс. просмотров'],
  ['X9SmcY3lM-U', '7BvHoh0BrMw', 'mC8JW_aG2EM']
];

more.addEventListener('click', () => {
  const videosWrapper = document.querySelector('.videos__wrapper');
  more.remove();

  for (let i = 0; i < data[0].length; i++) { //перебираем массив выше через цикл for
    let card = document.createElement('a'); //создаем элемент- ссылку
    card.classList.add('videos__item', 'videos__item-active'); //доб класс
    card.setAttribute('data-url', data[3][i]); // доб дата атрибут
    card.innerHTML = `
      <img src="${data[0][i]}" alt="thumb"> 
            <div class="videos__item-descr">
            ${data[1][i]}
            </div>
            <div class="videos__item-views">
               ${data[2][i]}
            </div>
    `; // добавляем содержание, кот. нах-ся внутри html-ссылки в index.html
    // и  потом берем создержимое из массива data и добавляем в html c помощью интерполяции
    videosWrapper.appendChild(card);
    setTimeout( () => {
      card.classList.remove('videos__item-active');
    }, 10);
    // до конца не понял что тут происходит, но тут вводится небольшой
    // таймаут для того, чтобы функции работали асинхронно и анимация
    // отображалась

  }
});