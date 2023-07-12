const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__body');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

const listMenu = document.querySelector('.menu__list');
listMenu.addEventListener('click', (e) => {
  if (e.target.className === 'menu__link') {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  }
});

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
        const index = e.target.childNodes[1].getAttribute('src').indexOf('.webp');
        const current =
          e.target.childNodes[1].getAttribute('src').slice(0, index) +
          'b' +
          e.target.childNodes[1].getAttribute('src').slice(index);
        console.log(current);
        document.querySelector('.gallery__popup img').src = current;
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
const policyLink = document.querySelectorAll('.policy-link');

policyLink.forEach((policy) => {
  policy.addEventListener('click', (e) => {
    policyBlock.classList.add('show');
    document.querySelector('.policy').onclick = (e) => {
      if (e.target.className === 'policy__wrapper' || e.target.className === 'policy__close') {
        policyBlock.classList.remove('show');
      }
    };
  });
});
