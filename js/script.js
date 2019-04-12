// Задаем переменные которые будут использоваться в коде
const switcher = document.querySelector('#cbx'),
  more = document.querySelector('.more'),
  modal = document.querySelector('.modal'),
  videos = document.querySelectorAll('.videos__item'),
  videosWrapper = document.querySelector('.videos__wrapper');

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

// const data = [
//   ['img/thumb_3.webp', 'img/thumb_4.webp', 'img/thumb_5.webp'],
//   ['#3 Верстка на flexbox CSS | Блок преимущества и галерея | Марафон верстки | Артем Исламов',
//     '#2 Установка spikmi и работа с ветками на Github | Марафон вёрстки Урок 2',
//     '#1 Верстка реального заказа landing Page | Марафон вёрстки | Артём Исламов'
//   ],
//   ['3,6​ тыс. просмотров', '4,2 тыс. просмотров', '28 тыс. просмотров'],
//   ['X9SmcY3lM-U', '7BvHoh0BrMw', 'mC8JW_aG2EM']
// ];

// more.addEventListener('click', () => {
//   const videosWrapper = document.querySelector('.videos__wrapper');
//   more.remove();

//   for (let i = 0; i < data[0].length; i++) { //перебираем массив выше через цикл for
//     let card = document.createElement('a'); //создаем элемент- ссылку
//     card.classList.add('videos__item', 'videos__item-active'); //доб класс
//     card.setAttribute('data-url', data[3][i]); // доб дата атрибут
//     card.innerHTML = `
//       <img src="${data[0][i]}" alt="thumb"> 
//             <div class="videos__item-descr">
//             ${data[1][i]}
//             </div>
//             <div class="videos__item-views">
//                ${data[2][i]}
//             </div>
//     `; // добавляем содержание, кот. нах-ся внутри html-ссылки в index.html
//     // и  потом берем создержимое из массива data и добавляем в html c помощью интерполяции
//     videosWrapper.appendChild(card);
//     setTimeout( () => {
//       card.classList.remove('videos__item-active');
//     }, 10);
//     // до конца не понял что тут происходит, но тут вводится небольшой
//     // таймаут для того, чтобы функции работали асинхронно и анимация
//     // отображалась
//     if(night === true) { //проверка, если ночной режим, то добавленные
//       //видео открываются тоже с белым цветом
//       card.querySelector('.videos__item-descr').style.color = '#fff';
//       card.querySelector('.videos__item-views').style.color = '#fff';
//     } 

//     bindNewModal(card); //за счет помещения сюда функции, которую мы создали
//     //позже, мы вешаем в этот цикл обработчик событий JS, который будет следить за тем
//     // чтобы когда на видео нажимают открывалось модальное окно
//   }
//   sliceTitle('.videos__item-descr', 70);
// });

function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'AIzaSyBfrw-mq3Jcuhcpoy7tZKPA-jiT1KfMikE',
    // Your API key will be automatically added to the Discovery Document URLs.
    'discoveryDocs': ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"]

  }).then(function () {
    return gapi.client.youtube.playlistItems.list({
      "part": "snippet,contentDetails",
      "maxResults": '6',
      "playlistId": "PL_48a05FlkczvGDRA5FAMGpbMhI0mX6ZJ"
    })
  // 3. Initialize and make the API request.
  }).then(function(response) {
    console.log(response.result);

    response.result.items.forEach(item => {
      let card = document.createElement('a'); //создаем элемент- ссылку

      card.classList.add('videos__item', 'videos__item-active'); //доб класс
      card.setAttribute('data-url', item.contentDetails.videoId); // теперь меням источник атрибута
      
      card.innerHTML = `
        <img src="${item.snippet.thumbnails.high.url}" alt="thumb"> 
              <div class="videos__item-descr">
              ${item.snippet.title}
              </div>
              <div class="videos__item-views">
                 2.7 млрд просмотров
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
      if(night === true) { //проверка, если ночной режим, то добавленные
        //видео открываются тоже с белым цветом
        card.querySelector('.videos__item-descr').style.color = '#fff';
        card.querySelector('.videos__item-views').style.color = '#fff';
      } 

    });

    sliceTitle('.videos__item-descr', 50);
    bindModal(document.querySelectorAll('.videos__item'));

  }).catch( e => {
    console.log(e);
  });
}

more.addEventListener('click', () => {
  more.remove();
  gapi.load('client', start);
});
//Загрузили реальный плейлист с ЮТ используя гугл API

function search(target) {
  gapi.client.init({
    'apiKey': 'AIzaSyBfrw-mq3Jcuhcpoy7tZKPA-jiT1KfMikE',
    // Your API key will be automatically added to the Discovery Document URLs.
    'discoveryDocs': ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"]

  }).then(function () {
    return gapi.client.youtube.search.list({
      'maxResults': '10',
      'part': 'snippet',
      'q': `${target}`,
      'type': ''
    });
  }).then(function(response) {
    console.log(response.result);
    // videosWrapper.innerHTML = '';
    while (videosWrapper.firstChild) {
      videosWrapper.removeChild(videosWrapper.firstChild);
    }
    //этот способ очиСТКИ СТРАНИЦЫ РАБОТАЕТ ЛУЧШЕ И БЫСТРЕЕ innerHTML

    response.result.items.forEach(item => {
      let card = document.createElement('a'); //создаем элемент- ссылку

      card.classList.add('videos__item', 'videos__item-active'); //доб класс
      card.setAttribute('data-url', item.id.videoId); // теперь меням источник атрибута

      card.innerHTML = `
        <img src="${item.snippet.thumbnails.high.url}" alt="thumb"> 
              <div class="videos__item-descr">
              ${item.snippet.title}
              </div>
              <div class="videos__item-views">
                 2.7 млрд просмотров
              </div>
      `; // добавляем содержание, кот. нах-ся внутри html-ссылки в index.html
      // и  потом берем создержимое из массива data и добавляем в html c помощью интерполяции
      videosWrapper.appendChild(card);
      setTimeout(() => {
        card.classList.remove('videos__item-active');
      }, 10);
      // до конца не понял что тут происходит, но тут вводится небольшой
      // таймаут для того, чтобы функции работали асинхронно и анимация
      // отображалась
      if (night === true) { //проверка, если ночной режим, то добавленные
        //видео открываются тоже с белым цветом
        card.querySelector('.videos__item-descr').style.color = '#fff';
        card.querySelector('.videos__item-views').style.color = '#fff';
      }
    });
    sliceTitle('.videos__item-descr', 50);
    bindModal(document.querySelectorAll('.videos__item'));
  })
}

document.querySelector('.search').addEventListener('submit', (e) => {
  e.preventDefault();
  gapi.load('client', () => {
    search(document.querySelector('.search > input').value)
  });
  document.querySelector('.search > input').value = '';//очищение строки поиска после
  //нажатия запроса
});



//создаем функцию для обрезания заголовка
function sliceTitle(selector, count) {
  document.querySelectorAll(selector).forEach( item => {
    item.textContent.trim();
    
    if(item.textContent.length < count){
      return;
    } else {
      const str = item.textContent.slice(0, count + 1) + "...";
      item.textContent = str;
    }
  });
}

sliceTitle('.videos__item-descr', 70);


// функции открытия/закртытия модального окна
function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
   modal.style.display = 'none';
   player.stopVideo();
}

function bindModal(cards) {
  cards.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const id = item.getAttribute('data-url'); //задана переменняid, ее
      // значение - это атрибут, спец дата атрибут для айди видео
      loadVideo(id); //загружаем этот id в loadVideo
      openModal();
    });
  });
}
// bindModal(videos);

function bindNewModal(cards) {
  cards.addEventListener('click', (e) => {
    e.preventDefault();
    const id = cards.getAttribute('data-url'); //задана переменняid, ее
    // значение - это атрибут, спец дата атрибут для айди видео
    loadVideo(id); //загружаем этот id в loadVideo
    openModal();
  });
}

modal.addEventListener('click', (e) => {
  if (!e.target.classList.contains('modal__body')) {
    closeModal();
  }
});

//Закрытие модального окна при нажатии клавиши Эскейп
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    closeModal();
  } 
});

function createVideoPlayer() {
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  setTimeout(() => {
    player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: 'M7lc1UVf-VE'
    });
  }, 300);
  
}

createVideoPlayer();

function loadVideo(id) {
  player.loadVideoById({'videoId': `${id}`});
}
