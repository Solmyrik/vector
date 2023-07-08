const iconMenu = document.querySelector('.header__burger');
if (iconMenu) {
  const menuBody = document.querySelector('.header__body');
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

////////
function gallery() {
  const container = document.querySelector('.swiper-wrapper');
  const popup = document.querySelector('.gallery__popup');

  if (popup) {
    container.addEventListener('click', (e) => {
      if (e.target.classList.contains('ibg')) {
        popup.classList.add('active');
        document.querySelector('.gallery__popup img').src =
          e.target.childNodes[1].getAttribute('src');
      }
    });
    // container.forEach((img) => {
    //   img.onclick = () => {
    //     popup.classList.add('active');
    //     document.querySelector('.gallery__popup img').src = img.childNodes[1].getAttribute('src');
    //   };
    // });

    document.querySelector('.gallery__popup').onclick = (e) => {
      if (e.target.tagName !== 'IMG') {
        popup.classList.remove('active');
      }
    };
  }
}
gallery();
