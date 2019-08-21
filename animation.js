document.addEventListener('DOMContentLoaded', () => {

  anime.timeline({
  })
  .add({
      targets: '.heading',
      opacity: [0, 1],
      translateX: [-800, 0],
      duration: 3000})
  .add({
      targets: '.heading-two',
      translateY: [-800, 0],
      duration: 4000,
      offset: 200})
  .add({
      targets: '#iphone',
      translateX: [-520],
      duration: 4000,
      offset: 2400,
      scale: [0.5, 1]
  })
  .add({
    targets: '.section-two>.item>.apple-box>.apple-pic:first-child',
    translateX: [-520, 0],
    duration: 4000,
    offset: 400,
    scale: [0.5, 1]
})
.add({
    targets: '.item>h4',
    translateX: [700, 0],
    duration: 2000,
    offset: 1400,
})
.add({
    targets: '.item>p',
    easing: 'easeOutQuad',
    duration: 1000,
    offset: 1400,
})
})

function checkForVisibility() {
    var headers = document.querySelectorAll(".section-visible, .section invisible");
    headers.forEach(function(header) {
      isElementInViewport(header) ?
        header.classList.add('.section-visible') : 
        header.classList.remove('.section-invisible');
    });
  }
  
  function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
  }
  
  if (window.addEventListener) {
    addEventListener('DOMContentLoaded', checkForVisibility, false); 
    addEventListener('load', checkForVisibility, false);
    addEventListener('scroll', checkForVisibility, false);
    /* Lyssna pÃ¥ scroll-eventet, och kÃ¶r funktionen checkForVisibility */
  }
