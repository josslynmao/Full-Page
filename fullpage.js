$(document).ready(function(){
  $("#fullpage").fullpage({
    sectionsColor: ['#59DFCE','#F7559F','#59DFCE','#F7559F'],
    //controlArrows: false,
    //verticalCentered: false,
    scrollSpeed: 1000,
    anchors: ['page1','page2','page3','page4'],
    fixedElements: '#header'
  });
});
