$(document).ready(function(){
  $("#fullpage").fullpage({
    verticalCentered: false,
    scrollSpeed: 700,
    anchors: ['page1','page2','page3','page4','page5'],
    navigation: true,
    navigationColor: 'white',
    navigationTooltips: ['page1','page2','page3','page4','page5'],
  });
});
