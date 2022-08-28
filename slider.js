let counter = 1;
const images = document.querySelectorAll('img');
const slides = document.getElementById('slides');
slides.style.transform = 'translateX(0)';

const advanceSlide = (e) => {
  console.log('next');
  const indicator = document.getElementsByClassName('active')[0];
  indicator.classList.remove('active');
  let jump;
  if (counter < 5) {
    console.log(counter);
    jump = counter * -640;
    // slide.style.opacity = '0.5';
    slides.style.transform = 'translateX(' + jump + 'px)';
    counter++;
    slides.style.transition = 'transform 300ms ease-in';
    console.log('next:', counter, slides);
    console.log('jump:', jump);
  } else {
    counter = 1;
    jump = 0;
    slides.style.transform = 'translateX(0)';
    console.log('next else:', counter, jump);
  }
  const newInd = document.getElementsByClassName(counter)[1];
  console.log(newInd);
  newInd.classList.add('active');
};

const prevBtn = document.getElementById('prev');
prevBtn.addEventListener('click', () => {
  console.log('prev');
  let jump;
  const indicator = document.getElementsByClassName('active')[0];
  indicator.classList.remove('active');
  if (counter > 1) {
    counter--;
    jump = (counter - 1) * -640;
    slides.style.transform = 'translateX(' + jump + 'px)';
    // counter--;
    console.log('prev:', counter, slides);
    console.log('jump:', jump);
  } else {
    console.log('start else counter:', counter);
    counter = 5;
    jump = -2560;
    slides.style.transform = 'translateX(-2560px)';

    console.log('prev else:', counter, slides);
  }
  const newInd = document.getElementsByClassName(counter)[1];
  console.log(newInd);
  newInd.classList.add('active');
});

const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', advanceSlide);

const nav = document.querySelector('.indicators');
nav.addEventListener('click', (e) => {
  console.log(e.target);
  console.log(e.target.className);
  const prev = document.getElementsByClassName('active')[0];
  console.log(prev);
  prev.classList.remove('active');
  let indicator = parseInt(e.target.className);
  e.target.classList.add('active');
  console.log(indicator);
  counter = indicator - 1;
  let jump = counter * -640;
  slides.style.transform = 'translateX(' + jump + 'px)';
});

setInterval(advanceSlide, 5000);
