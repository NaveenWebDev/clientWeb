$(document).ready(function(){

  $("#flip").click(function(){
    $("#panel").slideToggle(300);
    $("#arrow").toggleClass("rotate");
  });
  $("#flipTwo").click(function(){
    $("#panelOne").slideToggle(300);
    $("#arrowOne").toggleClass("rotate");
  });
  $("#flipThree").click(function(){
    $("#panelTwo").slideToggle(300);
    $("#arrowTwo").toggleClass("rotate");
  });
  $("#flipFour").click(function(){
    $("#panelThree").slideToggle(300);
    $("#arrowThree").toggleClass("rotate");
  });
  $("#flipFive").click(function(){
    $("#panelFour").slideToggle(300);
    $("#arrowFour").toggleClass("rotate");
  });

});
