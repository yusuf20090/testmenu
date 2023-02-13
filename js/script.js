const swiper = new Swiper('.menu-slider', {
  speed: 400,
  spaceBetween: 30,
});
let menuList = [

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
console.log(
  menuList[0]
)
let divMenuList = document.querySelector('.menu__list');

let divMenuItem = divMenuList.querySelector('.menu__item');
for (let i = 0; i < menuList.length; i++) {
  let divMenuItemClone = divMenuItem.cloneNode(true);
  divMenuItemClone.classList.remove('simple');
  divMenuItemClone.querySelector('img').setAttribute('src', menuList[i].img)
  divMenuItemClone.querySelector('h3').innerText = menuList[i].h3;
  divMenuItemClone.querySelector('p').innerText = menuList[i].p;
  divMenuItemClone.querySelector('span').innerText = menuList[i].span;
  divMenuList.appendChild(divMenuItemClone);
}
// divMenuItem.setAttribute('class','menu__item');
// let img = divMenuItem.createElement('img');
// img.setAttribute('src','');
// let divMenuInfo =divMenuItem.createElement('div')
// divMenuInfo.setAttribute('class','menu__info');
// let h3 = divMenuInfo.createElement('h3');
// let p = divMenuInfo.createElement('p');
// let span = divMenuInfo.createElement('span');