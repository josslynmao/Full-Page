$(document).ready(function(){
  $("#fullpage").fullpage({
    verticalCentered: false,
    scrollSpeed: 700,
    anchors: ['page1','page2','page3','page4','page5'],
    navigation: true,
    navigationColor: 'white',
    navigationTooltips: ['page1','page2','page3','page4','page5'],

    afterRender: function(){
        move('.section1 h1').scale(1.5).duration('3s').end();
        move('.section1 p').set('margin-top','5%').duration('3s').end();
      },

    afterLoad: function(anchorLink,index){
        switch (index) {
          case 1:

            break;
          case 2:
          move('.section2 h1').scale(0.5).duration('3s').end();
          break;
          case 3:
          break;
          case 4:
          break;
          case 5:
          break;
          default:
          break;
        }
      },

    onLeave: function(index,nextIndex,direction){
        switch (index) {
          case 1:
          move('.section1 h1').scale(1.5).duration('3s').end();
          move('.section1 p').set('margin-top','5%').duration('3s').end();
            break;
          case 2:
          break;
          case 3:
          break;
          case 4:
          break;
          case 5:
          break;
          default:
          break;
        }
      }

  });
});
