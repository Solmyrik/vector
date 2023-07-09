const quizElements = document.querySelectorAll('.quiz__item');
const percentItem = document.querySelector('.quiz__progres');
const quizNumber = document.querySelector('.quiz__number span');
let index = 1;

const stepMibile = () => {
  const body = document.querySelector('.quiz__body');
  const mobile = document.querySelector('.quiz__mobile');

  body.style.display = 'none';
  mobile.style.display = 'block';
};

const percent = () => {
  const heightItems = quizElements.length;
  let current = parseInt((100 / heightItems) * (index + 1));
  percentItem.style.width = current + '%';
  index = index + 1;
  quizNumber.textContent = index;
};

const quizStep = (e) => {
  let currentAnswer = '';
  let currentQuestion = '';
  const current = e.target;

  currentQuestion = e.currentTarget.querySelector('.quiz__name');

  if (index <= 8) {
    if (current.classList.contains('quiz__value')) {
      currentQuestion = current.textContent;
    }

    if (current.classList.contains('quiz__radio')) {
      currentQuestion = current.nextElementSibling.textContent;
    }

    if (current.classList.contains('quiz__element')) {
      const currentValue = current.querySelector('.quiz__value');
      currentQuestion = currentValue.textContent;
    }

    e.currentTarget.classList.remove('active');
    e.currentTarget.nextElementSibling.classList.add('active');
    percent();
  } else {
    stepMibile();
  }
};

quizElements.forEach((quizContainer) => {
  quizContainer.addEventListener('click', quizStep);
});
