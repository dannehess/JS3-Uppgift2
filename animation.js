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
  document.addEventListener('DOMContentLoaded',()=>{
      anime.timeline({loop:true})
      .add({
          targets:'.bigtext',
          
          translateX:[-300, 0],
          scale: [0.0, 1],
          duration: 700,
           easing:'easeOutExpo'
       }).add({
           targets:'.text1',
           translateX:[-200, 0],
           scale: [0.0, 1],
           duration: 700,
           easing:'easeOutExpo'
       }).add({
           targets:'.text2',
           translateX:[-200, 0],
           scale: [0.0, 1],    
           duration: 700,
           easing:'easeOutExpo'
       }).add({
          targets:'.text3',
          translateX:[-200, 0],
          scale: [0.0, 1],
          duration: 700,
           easing:'easeOutExpo'
      }).add({
          targets:'.text4',
          translateX:[-200, 0],
          scale: [0.0, 1],
          duration: 700,
          easing:'easeOutExpo'
      }).add({
          targets:'.text6',
          translateX:[-200, 0],
          scale: [0.0, 1],
          duration: 700,
           easing:'easeOutExpo'
      }).add({
          targets:'.text6,.text4,.text3,.text2,.text1,.bigtext',
          opacity:0,
          easing: 'linear',
          delay:3000
      }).add({
          duration:100
      })
  })
  
  
