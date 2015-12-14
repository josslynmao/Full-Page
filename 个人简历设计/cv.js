$(document).ready(function(){
  $("#fullPage").fullpage({
    anchors: ['page1','page2','page3','page4'],
    navigation: true,
    verticalCentered: false,
    fixedElements: '#header',
    afterRender: function(){
      $('.section1 img').fadeIn(2000);
      $('.section1 img').fadeIn(2000);
    },
  });
});
