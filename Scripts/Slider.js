const sliderWrapper = document.querySelector('.slider-wrapper');
  const slides = document.querySelectorAll('.slide');
  const leftButton = document.querySelector('.left-button');
  const rightButton = document.querySelector('.right-button');

  let currentIndex = 0;

  const updateButtons = () => {
    leftButton.classList.toggle('disabled', currentIndex === 0);
    rightButton.classList.toggle('disabled', currentIndex === slides.length - 1);
  };

  const scrollToSlide = (index) => {
    console.log('index', index)
    const targetSlide = slides[index];
    targetSlide.scrollIntoView({behavior: 'smooth'});
    currentIndex = index;
    updateButtons();
  };

  leftButton.addEventListener('click', () => {
    console.log('leftButton', currentIndex)
    if (currentIndex > 0) {
      scrollToSlide(currentIndex - 1);
    }
  });

  rightButton.addEventListener('click', () => {
    console.log('rightButton', currentIndex)
    if (currentIndex < slides.length - 1) {
      scrollToSlide(currentIndex + 1);
    }
  });


  // Initialize buttons
  updateButtons();