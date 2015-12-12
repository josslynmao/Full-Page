$(document).ready(function(){
  $("#fullpage").fullpage({
    sectionsColor: ['#59DFCE','#F7559F','#59DFCE','#F7559F'],
    //controlArrows: false,
    //verticalCentered: false,
    scrollSpeed: 700,
    anchors: ['page1','page2','page3','page4'],
    fixedElements: '#header',
    navigation: true,
    navigationTooltips: ['page1','page2','page3','page4']
  });
});
