const swiper = new Swiper('.menu-slider', {
    speed: 400,
    spaceBetween: 16,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.4,
        spaceBetween: 16
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2.3,
        spaceBetween: 16
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2.6,
        spaceBetween: 16
      }
    }
  });
  let menuListAnayemek = [
  
    menu__item = {
      img: '../img/menu1.jpeg',
      h3: 'Курица с кисло-сладким соусом',
      p: 'Острый рис басмати, обжаренная курица с овощами и брокколи',
      span: '175₺',
    },
  
    menu__item = {
      img: '../img/menu2.png',
      h3: 'Куриная пиката',
      p: 'Куриная грудка с лимонным соусом и панно, с салатом из бобовых',
      span: '120₺',
    },
    menu__item = {
      img: '../img/menu3.jpeg',
      h3: 'Стейк на гриле',
      p: 'Жареная говяжья стейк с печеным картофелем и соусом Деми Глас',
      span: '150₺',
    },
  ]
  let divMenuList = document.querySelector('.menu__list');
  let divMenuItem = divMenuList.querySelector('.menu__item');
  for (let i = 0; i < menuListAnayemek.length; i++) {
    let divMenuItemClone = divMenuItem.cloneNode(true);
    divMenuItemClone.classList.remove('simple');
    divMenuItemClone.querySelector('img').setAttribute('src', menuListAnayemek[i].img)
    divMenuItemClone.querySelector('h3').innerText = menuListAnayemek[i].h3;
    divMenuItemClone.querySelector('p').innerText = menuListAnayemek[i].p;
    divMenuItemClone.querySelector('span').innerText = menuListAnayemek[i].span;
    divMenuList.appendChild(divMenuItemClone);
  }
  let AnayemekButton=document.querySelector('#Anayemek');
  AnayemekButton.onclick=function(){
    divMenuList.innerHTML='';
    for (let i = 0; i < menuListAnayemek.length; i++) {
      let divMenuItemClone = divMenuItem.cloneNode(true);
      divMenuItemClone.classList.remove('simple');
      divMenuItemClone.querySelector('img').setAttribute('src', menuListAnayemek[i].img)
      divMenuItemClone.querySelector('h3').innerText = menuListAnayemek[i].h3;
      divMenuItemClone.querySelector('p').innerText = menuListAnayemek[i].p;
      divMenuItemClone.querySelector('span').innerText = menuListAnayemek[i].span;
      divMenuList.appendChild(divMenuItemClone);
    }
  }
  
  
  
  let menuListAperatif = [
  
    menu__item = {
      img: '../img/menuAperatif1.jpeg',
      h3: 'Биттербален',
      p: 'Хрустящие фрикадельки по-голландски с начинкой из копченой говяжьей грудинки, с медово-горчичным соусом',
      span: '100₺',
    },
  
    menu__item = {
      img: '../img/menuAperatif2.jpeg',
      h3: 'Кольца лука',
      p: '-',
      span: '20₺',
    },
    menu__item = {
      img: '../img/menuAperatif3.jpeg',
      h3: 'Сырные палочки моцарелла',
      p: '-',
      span: '25₺',
    },
  ]
  let aperatifButton=document.querySelector('#aperatif');
  aperatifButton.onclick=function(){
    divMenuList.innerHTML='';
    for (let i = 0; i < menuListAperatif.length; i++) {
      let divMenuItemClone = divMenuItem.cloneNode(true);
      divMenuItemClone.classList.remove('simple');
      divMenuItemClone.querySelector('img').setAttribute('src', menuListAperatif[i].img)
      divMenuItemClone.querySelector('h3').innerText = menuListAperatif[i].h3;
      divMenuItemClone.querySelector('p').innerText = menuListAperatif[i].p;
      divMenuItemClone.querySelector('span').innerText = menuListAperatif[i].span;
      divMenuList.appendChild(divMenuItemClone);
    }
  }
  
  
  
  let menuListİçecekler = [
  
    menu__item = {
      img: '../img/menuİçecek1.jpeg',
      h3: 'Лимонад из лесных фруктов',
      p: '-',
      span: '60₺',
    },
  
    menu__item = {
      img: '../img/menuİçecek2.jpeg',
      h3: 'Молочный коктейль со вкусом жвачки',
      p: 'жевательная резинка, мороженое',
      span: '45₺',
    },
    menu__item = {
      img: '../img/menuİçecek3.jpeg',
      h3: 'Чай со льдом Blueberry Bubble Berry Punch',
      p: '-',
      span: '50₺',
    },
  ]
  let İçeceklerButton=document.querySelector('#İçecekler');
  İçeceklerButton.onclick=function(){
    divMenuList.innerHTML='';
    for (let i = 0; i < menuListAperatif.length; i++) {
      let divMenuItemClone = divMenuItem.cloneNode(true);
      divMenuItemClone.classList.remove('simple');
      divMenuItemClone.querySelector('img').setAttribute('src', menuListİçecekler[i].img)
      divMenuItemClone.querySelector('h3').innerText = menuListİçecekler[i].h3;
      divMenuItemClone.querySelector('p').innerText = menuListİçecekler[i].p;
      divMenuItemClone.querySelector('span').innerText = menuListİçecekler[i].span;
      divMenuList.appendChild(divMenuItemClone);
    }
  }