
// Боковое меню
const aside_menu = document.querySelector('#user-aside_menu');
//Получение html
let html = document.querySelector('html');

// функция перепросчитывания высоты бокового меню
function changeHeightMenu(e){
aside_menu.style.height = html.offsetHeight+"px";
console.log(html.offsetHeight);
}

// Адаптив расположения кнопок у свипера
let btn_wrapper  = document.querySelectorAll(".btn-wrapper");
let Pagination_width= document.querySelector('.slider-pagination').clientWidth;

// Функция определения расположения кнопок у слайдеров
function resizeSliderBtns() {
Pagination_width= document.querySelector('.slider-pagination').clientWidth;
  btn_wrapper.forEach(element => {
    element.style.width = Pagination_width+"px";
  });
}


                                                // Инициализация слайдеров
                    // Главный слайдер
const swiper = new Swiper('.slider', {
    // Направление слайдера
    lazy: true,
    direction: 'horizontal',
    grabCursor: true,
    pagination: {
        el: ".slider-pagination",
        clickable: true,
      },
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.main-btn-prev',
        prevEl: '.main-btn-next',
      },
      centeredSlides: true,
      spaceBetween: 40,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });
                  // Слайдер типа товаров
  const swiper1 = new Swiper('#types-of-work_slider', {
    // Направление слайдера
    direction: 'horizontal',
    lazy: true,
    grabCursor: true,
      // Количество показываемых элементов
      slidesPerView: '7',

      // Количество слайдов в группе
      slidesPerGroup: 7,

      // Инициализация кнопок слайдера
      navigation: {
        nextEl: '.main-btn-prev',
        prevEl: '.main-btn-next',
      },
      // Ключевые точки
      breakpoints:{
        1600:{
          slidesPerView: '6',
          slidesPerGroup: 6,
        },
        1366:{
          slidesPerView: '5',
          slidesPerGroup: 5,
        },
        980:{
          slidesPerView: '4',
          slidesPerGroup: 4,
        },
         600:{
          slidesPerView: '3',
          slidesPerGroup: 3,
        },
      0:{
          slidesPerView: '2',
          slidesPerGroup: 2,
        },
      },
      // Отступ между слайдами
      spaceBetween: 20,

      // Авто переключение слайдов
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
  });

                    // Аукцион слайдер
  const swiper2 = new Swiper('#auction_slider', {
    // Направление слайдера
    direction: 'horizontal',
    lazy: true,
    grabCursor: true,
      // Количество показываемых элементов
      slidesPerView: '6',

      // Количество слайдов в группе
      slidesPerGroup: 6,

      // Инициализация кнопок слайдера
      navigation: {
        nextEl: '.main-btn-prev',
        prevEl: '.main-btn-next',
      },
      // Ключевые точки
      breakpoints:{
        1600:{
          slidesPerView: '5',
          slidesPerGroup: 4,
        },
        1366:{
          slidesPerView: '4',
          slidesPerGroup: 4,
        },
        980:{
          slidesPerView: '4',
          slidesPerGroup: 4,
        },
         900:{
          slidesPerView: '3',
          slidesPerGroup: 3,
        },
      0:{
          slidesPerView: '2',
          slidesPerGroup: 2,
        },
      },
      // Отступ между слайдами
      spaceBetween: 20,

      // Авто переключение слайдов
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
  });
  
                      // Супер цены
   const swiper3 = new Swiper('#super-price_slider', {
    // Направление слайдера
    direction: 'horizontal',
    lazy: true,
    grabCursor: true,
      // Количество показываемых элементов
      slidesPerView: '6',

      // Количество слайдов в группе
      slidesPerGroup: 6,

      // Инициализация кнопок слайдера
      navigation: {
        nextEl: '.main-btn-prev',
        prevEl: '.main-btn-next',
      },
      // Ключевые точки
      breakpoints:{
        1600:{
          slidesPerView: '5',
          slidesPerGroup: 4,
        },
        1366:{
          slidesPerView: '4',
          slidesPerGroup: 4,
        },
        980:{
          slidesPerView: '4',
          slidesPerGroup: 4,
        },
         900:{
          slidesPerView: '3',
          slidesPerGroup: 3,
        },
      0:{
          slidesPerView: '2',
          slidesPerGroup: 2,
        },
      },
      // Отступ между слайдами
      spaceBetween: 20,

      // Авто переключение слайдов
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
  });


                    // Что то новое - слайдер
  const swiper4 = new Swiper('#new-goods_slider', {
    // Направление слайдера
    direction: 'horizontal',
    lazy: true,
    grabCursor: true,
      // Количество показываемых элементов
      slidesPerView: '6',

      // Количество слайдов в группе
      slidesPerGroup: 6,

      // Инициализация кнопок слайдера
      navigation: {
        nextEl: '.main-btn-prev',
        prevEl: '.main-btn-next',
      },
      // Ключевые точки
      breakpoints:{
        1600:{
          slidesPerView: '5',
          slidesPerGroup: 5,
        },
        1366:{
          slidesPerView: '4',
          slidesPerGroup: 4,
        },
        980:{
          slidesPerView: '4',
          slidesPerGroup: 4,
        },
         900:{
          slidesPerView: '3',
          slidesPerGroup: 3,
        },
      0:{
          slidesPerView: '2',
          slidesPerGroup: 2,
        },
      },
      // Отступ между слайдами
      spaceBetween: 20,

      // Авто переключение слайдов
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
  });

                                               // Биржа заявок
  const swiper5 = new Swiper('.burse-slider', {
    // Направление слайдера
    direction: 'horizontal',
    lazy: true,
    grabCursor: true,
    freeMode: true,
    slidesPerView: '1',
    slidesPerGroup: 1,
    spaceBetween:20,
      // Инициализация кнопок слайдера
      navigation: {
        nextEl: '.main-btn-prev',
        prevEl: '.main-btn-next',
      },
      breakpoints:{
        1700:{
          slidesPerView: '3',
          slidesPerGroup: 3,
        },
        1050:{
          slidesPerView: '2',
          slidesPerGroup: 2,
        },
       
      },
      // Авто переключение слайдов
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
  });

                                               // Топ мастеров
  const swiper6 = new Swiper('.top-master_slider', {
    // Направление слайдера
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween:20,
    freeMode: true,
    grid: {
      rows: 2,
      fill: "row",
    },
    breakpoints:{
      1700:{
        slidesPerView: '3',
        slidesPerGroup: 3,
      },
      980:{
        slidesPerView: '2',
        slidesPerGroup: 2,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
    },
     // Инициализация кнопок слайдера
     navigation: {
      nextEl: '.main-btn-prev',
      prevEl: '.main-btn-next',
    },
  });


                                                        // Вызовы функций


// Вызовы функий определения ширины и высоты
document.addEventListener("DOMContentLoaded", function(){
  changeHeightMenu();
})
changeHeightMenu();
resizeSliderBtns()
// Вызов всех функций переопределения через resize 
window.addEventListener('resize',()=>{
  changeHeightMenu();
  resizeSliderBtns()
})


                                         // Добавление в избранное


let follow_container = document.querySelector('.follow-wrapper');
function addfollow(){
  follow_container.classList.toggle('active');
}
  follow_container.addEventListener('click',addfollow)




                                                     // Кастоммные Select


  // Получаем внутренние элементы у которых будем брать значения
  let custom_select_item = document.querySelector(".custom-filter_body__item");

  // Получаем все селекты
  let custom_select = document.querySelectorAll(".custom-filter_container");

    // Функция которая открывает либо закрывает селект
    function closeOrOpen_custom_select(e){
      e.target.closest('.custom-filter_container').classList.toggle('active');
    }

    // Фукнция изменения текста внутри селекта 
    function changetextinselect(e){
      // Забираем текст у Option по которому мы нажали
      let selected_item = e.target.innerText;
      // Находим текст внутри хедера
      let select_head_text = e.target.closest('.custom-filter_container').querySelector(".custom-filter__header-text");
      // Заменяем данный текст на текст Option который мы выбрали
      select_head_text.innerText = selected_item;
      // Закрывам все селекты
      close_custom_select(e);
    }


    // Функция которая закрывает все открытые селекты
    function close_custom_select(e){
      custom_select.forEach(element => {
        element.classList.remove('active');
      });
    }

    // Прослушиваем событие нажатия на экран, и если нажатие сделано вне селекта, то закрываем все селекты, иначе открываем либо закрываем селект
    window.addEventListener('click',(e)=>{
      // Если нажали вне селекта
      if(!e.target.closest('.custom-filter_container')){
        close_custom_select(e)
      }
      // Если нажали по хедеру cелекта
      else if(e.target.closest('.custom-filter__header')){
        
        // Если он селект был активен то просто закрываем его
        if(e.target.closest('.custom-filter_container.active')){
          closeOrOpen_custom_select(e);
        }
        // Иначе если он был не активен, закрываем все активные селекты, а выбранный открываем
        else{
          close_custom_select(e);
          closeOrOpen_custom_select(e); 
        }
      }
      // Если мы нажали по Option селекта
      else if(e.target.classList.contains("custom-filter_body__item")){
        changetextinselect(e);
      }
    })

