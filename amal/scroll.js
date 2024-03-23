let lastScroll = 0;
const defaultOffset = 200
const header = document.querySelector('.header');

const scrollPosition = () => window.scrollY || document.documentElement.scrollTop
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    // scroll down
    header.classList.add('hide');
    console.log('down');
  }
  else if (scrollPosition() < lastScroll && containHide()) {
    // scroll up
    header.classList.remove('hide')
    console.log('up')

  }
  lastScroll = scrollPosition();
})