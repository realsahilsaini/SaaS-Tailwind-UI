const navDialog = document.querySelector('#nav-dialog');

function handelMenu(){
  navDialog.classList.toggle('hidden');
}


// --------------------------------------------


const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;

function setupIntersectionObserver(element, isLeftToRight, speed) {
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    
    if (isIntersecting) {
      document.addEventListener('scroll', scrollHandler);
    } else {
      document.removeEventListener('scroll', scrollHandler);
    }
  }

  const intersectionObserver = new IntersectionObserver(intersectionCallback);

  intersectionObserver.observe(element);


  function scrollHandler(){
    const translateX = (window.innerHeight - element.getBoundingClientRect().top) *speed;

    let totalTranslate = 0;

    if (isLeftToRight) {
      totalTranslate = translateX + initialTranslateLTR;
    }
    else {
      totalTranslate = -(translateX + initialTranslateRTL);
    }

    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');


setupIntersectionObserver(line1, true, 0.2);
setupIntersectionObserver(line2, false, 0.2);
setupIntersectionObserver(line3, true, 0.2);