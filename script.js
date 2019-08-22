document.addEventListener('DOMContentLoaded', () => {

anime.timeline({
})
  .add({
    targets: '#appleicon-white',
    opacity: [0, 1],
    translateX: [-200, 0],
    duration: 5000
  })
  .add({
    targets: '.heading',
    opacity: [0, 1],
    translateX: [-800, 0],
    duration: 3000,
    offset: 0
  })
  .add({
    targets: '.heading-two',
    translateY: [-800, 0],
    duration: 4000,
    offset: 200
  })
  .add({
    targets: '#iphone',
    translateX: [-520],
    duration: 4000,
    offset: 2400,
    scale: [0.5, 1],
    offset: 0
  })
  .add({
    targets: '#buy-button, #price',
    opacity: [0, 1],
    duration: 8000,
    delay: 2400,
    offset: 0,
  })
})

/* Funktion som visar "back-to-top"-pilen när man är 200px från toppen */
let arrow = document.querySelector('#back-to-top');
let topsection = document.querySelector('.top-section');

window.addEventListener('scroll', () => {
  let rect = topsection.getBoundingClientRect();
  (window.innerHeight - rect.top) > (window.innerHeight + 200) ?
  arrow.style.display = 'flex' : arrow.style.display = 'none';
});