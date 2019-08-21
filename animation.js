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
})