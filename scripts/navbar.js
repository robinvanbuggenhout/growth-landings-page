// Sticky navbar

let navbar = document.querySelector('.header-top');
let hamburger = document.querySelector('.hamburger-icon');
let hamburgerLine1 = document.querySelector('.hamburger-icon-line-1');
let hamburgerLine2 = document.querySelector('.hamburger-icon-line-2');
let hamburgerLine3 = document.querySelector('.hamburger-icon-line-3');

window.addEventListener('scroll', () => {
  if ( state === true ) {
    scroll();
  }
});

function scroll() {
  if ( window.pageYOffset >= 50 ) {
    scrollOpen();
  } else {
    scrollClose();
  }
}

function scrollClose() {
  navbar.style.background = 'transparent';
  navbar.style.paddingTop = '30px';
  navbar.style.paddingBottom = '0';
  hamburgerLine1.style.background = '#EFEFEF';
  hamburgerLine2.style.background = '#EFEFEF';
  hamburgerLine3.style.background = '#EFEFEF';
}

function scrollOpen() {
  navbar.style.background = '#EFEFEF';
  navbar.style.paddingTop = '15px';
  navbar.style.paddingBottom = '15px';
  hamburgerLine1.style.background = '#E34B1E';
  hamburgerLine2.style.background = '#E34B1E';
  hamburgerLine3.style.background = '#E34B1E';
}

hamburger.addEventListener('click', () => {
  if ( state === false ) {
    scrollClose();
  } else {
    scroll();
  }
});

scroll();

