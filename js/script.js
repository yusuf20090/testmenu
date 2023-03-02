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
    h3: 'Tatlı Ekşi Soslu Tavuk',
    p: 'Baharatlı basmati pirinci, Sebzeli tavuk sote ve Brokoli ile',
    span: '175₺',
  },

  menu__item = {
    img: '../img/menu2.png',
    h3: 'Piliç Pikata',
    p: 'Limon soslu ve paneli tavuk göğüs, bakliyat salatası ile',
    span: '120₺',
  },
  menu__item = {
    img: '../img/menu3.jpeg',
    h3: 'Antrikot Izgara',
    p: 'Izgara Dana Antrikot, Fırın patates ve Demi glace sos ile',
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
    h3: 'Bitterballen',
    p: 'Tütsülenmiş dana brisket dolgulu, Hollanda usulü çıtır misket köfteler, ballı hardal sos ile',
    span: '100₺',
  },

  menu__item = {
    img: '../img/menuAperatif2.jpeg',
    h3: 'Soğan Halkası',
    p: 'burada açiklamasi bulunuyor',
    span: '20₺',
  },
  menu__item = {
    img: '../img/menuAperatif3.jpeg',
    h3: 'Peynir Mozarella Sticks',
    p: 'burada açiklamasi bulunuyor',
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
    h3: 'Orman Meyveli Limonata',
    p: 'burada açiklamasi bulunuyor',
    span: '60₺',
  },

  menu__item = {
    img: '../img/menuİçecek2.jpeg',
    h3: 'Bubblegum Milkshake',
    p: 'Bubblegum, dondurma',
    span: '45₺',
  },
  menu__item = {
    img: '../img/menuİçecek3.jpeg',
    h3: 'Blueberry Bubble Berry Punch Ice Tea',
    p: 'burada açiklamasi bulunuyor',
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