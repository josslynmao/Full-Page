$(document).ready(function(){
  $("#fullpage").fullpage({
    sectionsColor: ['#82E6D5','#F7559F','#82E6D5','#F7559F','#82E6D5'],
    //controlArrows: false,
    //verticalCentered: false,
    scrollSpeed: 700,
    anchors: ['page1','page2','page3','page4'],
    fixedElements: '#header',
    navigation: true,
    navigationColor: 'white',
    navigationTooltips: ['page1','page2','page3','page4'],
    scrollOverflow: true,
    onLeave: function(index,nextIndex,direction){
      console.log("index:"+index+",nextIndex:"+nextIndex+",direction:"+direction);
    },
    afterRender: function(){
      console.log("afterRender");
    }
  });
});
