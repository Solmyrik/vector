const popupButton = document.querySelector('.popup-form__button');

popupButton.addEventListener('click', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const phone = document.querySelector('.popup-phone');
  const name = document.querySelector('.popup-name');
  const checkBox = document.querySelector('.popup-form__checkbox');
  const validate = onValidate(phone.value, checkBox.checked);
  if (validate === true) {
    const oneBody = document.querySelector('.popup-form__body_one');
    const twoBody = document.querySelector('.popup-form__body_two');
    const number = document.querySelector('.popup-form__number');

    oneBody.style.display = 'none';
    number.textContent = phone.value;
    twoBody.style.display = 'block';
  }
}

function onValidate(phone, checkBox) {
  if (phone.length < 18 || checkBox === false) {
    alert('Заполните форму');
    return false;
  }
  return true;
}

const quizButton = document.querySelector('.mobile-quiz__button');

quizButton.addEventListener('click', onSubmitQuiz);

function onSubmitQuiz(e) {
  e.preventDefault();
  const phone = document.querySelector('.quiz-phone');
  const name = document.querySelector('.quiz-name');
  const checkBox = document.querySelector('.mobile-quiz__checkbox');
  const validate = onValidate(phone.value, checkBox.checked);
  if (validate === true) {
    const oneBody = document.querySelector('.mobile-quiz__body_one');
    const twoBody = document.querySelector('.mobile-quiz__body_two');
    const number = document.querySelector('.mobile-quiz__number');

    oneBody.style.display = 'none';
    number.textContent = phone.value;
    twoBody.style.display = 'block';
  }
}

/////

const quizeButton = document.querySelector('.mobile-quize__button');

quizeButton.addEventListener('click', onSubmitQuize);

function onSubmitQuize(e) {
  e.preventDefault();
  const phone = document.querySelector('.quize-phone');
  const name = document.querySelector('.quize-name');
  const checkBox = document.querySelector('.mobile-quize__checkbox');
  const validate = onValidate(phone.value, checkBox.checked);
  if (validate === true) {
    const oneBody = document.querySelector('.mobile-quize__body_one');
    const twoBody = document.querySelector('.mobile-quize__body_two');
    const number = document.querySelector('.mobile-quize__number');

    oneBody.style.display = 'none';
    number.textContent = phone.value;
    twoBody.style.display = 'block';
  }
}
