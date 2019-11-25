// script for navigation

let icon = document.querySelector('.hamburger-icon');
let menu = document.querySelector('.mobile-navigation');
let links = document.querySelectorAll('.mobile-link');
let lineOne = document.querySelector('.hamburger-icon-line-1');
let lineTwo = document.querySelector('.hamburger-icon-line-2');
let lineThree = document.querySelector('.hamburger-icon-line-3');
let state = true;

function open() {
  menu.style.transitionDelay = '0s';
  menu.style.transform = 'translateX(0)';

  lineOne.style.transform = 'rotate(45deg) translateY(12.5px)';
  lineTwo.style.opacity = '0';
  lineThree.style.transform = 'rotate(-45deg) translateY(-12.5px)';
  lineThree.style.width = '100%';

  for (let i = 0; i < links.length; i++) {
    setTimeout(() => {
      links[i].style.opacity = '1';
    }, (i+1) * 100);
  }

  state = false;
}

function close() {
  menu.style.transitionDelay = '.8s';
  menu.style.transform = 'translateX(100%)';

  lineOne.style.transform = 'rotate(0deg) translateY(0)';
  lineOne.style.top = '0';
  lineTwo.style.opacity = '1';
  lineThree.style.transform = 'rotate(0deg) translateY(0)';
  lineThree.style.width = '75%';

  for (let i = 0; i < links.length; i++) {
    setTimeout(() => {
      links[i].style.opacity = '0';
    }, (i+1) * 100);
  }

  state = true;
}

function check () {
  if ( state === true ) {
    open();
  } else {
    close();
  }
}


icon.addEventListener('click', () => {
  check();
});

for (let i = 0; i < links.length; i++) { // loops over everything | otherwise addEventListener not working
  links[i].addEventListener("click", function() {
    check(); // needs to close directly because you cannot open menu directly from links
  });
}