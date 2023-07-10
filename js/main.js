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

    document.querySelector('.gallery__popup').onclick = (e) => {
      if (e.target.tagName !== 'IMG') {
        popup.classList.remove('active');
      }
    };
  }
}
gallery();

// reviews
const reviewsAll = document.querySelector('.reviews__all');
const reviewsItems = document.querySelectorAll('.reviews__item');

reviewsAll.addEventListener('click', (e) => {
  reviewsItems.forEach((r) => {
    r.classList.remove('none');
  });
  reviewsAll.style.display = 'none';
});

//policy
const policyBlock = document.querySelector('.policy');
const policyLink = document.querySelector('.policy-link');

policyLink.addEventListener('click', (e) => {
  policyBlock.classList.add('show');
  document.querySelector('.policy').onclick = (e) => {
    if (e.target.className === 'policy__wrapper' || e.target.className === 'policy__close') {
      policyBlock.classList.remove('show');
    }
  };
});
