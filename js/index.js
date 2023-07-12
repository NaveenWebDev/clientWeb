$(document).ready(function(){

  $("#flip").click(function(){
    $("#panel").slideToggle(300);
    $("#arrow").toggleClass("rotate");

    $("#panelOne").slideUp(300);
    $("#arrowOne").removeClass("rotate");

    $("#panelTwo").slideUp(300);
    $("#arrowTwo").removeClass("rotate");

    $("#panelThree").slideUp(300);
    $("#arrowThree").removeClass("rotate");

    $("#panelFour").slideUp(300);
    $("#arrowFour").toggleClass("rotate");

  });
  $("#flipTwo").click(function(){

    $("#panel").slideUp(300);
    $("#arrow").removeClass("rotate");
    
    $("#panelOne").slideToggle(300);
    $("#arrowOne").toggleClass("rotate");

    $("#panelTwo").slideUp(300);
    $("#arrowTwo").removeClass("rotate");

    $("#panelThree").slideUp(300);
    $("#arrowThree").removeClass("rotate");

    $("#panelFour").slideUp(300);
    $("#arrowFour").toggleClass("rotate");

  });
  $("#flipThree").click(function(){
    $("#panelTwo").slideToggle(300);
    $("#arrowTwo").toggleClass("rotate");

    $("#panel").slideUp(300);
    $("#arrow").removeClass("rotate");
    
    $("#panelOne").slideUp(300);
    $("#arrowOne").removeClass("rotate");


    $("#panelThree").slideUp(300);
    $("#arrowThree").removeClass("rotate");

    $("#panelFour").slideUp(300);
    $("#arrowFour").toggleClass("rotate");
  });
  $("#flipFour").click(function(){
    $("#panelThree").slideToggle(300);
    $("#arrowThree").toggleClass("rotate");

    $("#panelFour").slideUp(300);
    $("#arrowFour").toggleClass("rotate");

    $("#panelTwo").slideUp(300);
    $("#arrowTwo").removeClass("rotate");

    $("#panel").slideUp(300);
    $("#arrow").removeClass("rotate");
    
    $("#panelOne").slideUp(300);
    $("#arrowOne").removeClass("rotate");
  });
  $("#flipFive").click(function(){
    $("#panelFour").slideToggle(300);
    $("#arrowFour").toggleClass("rotate");

    $("#panelThree").slideUp(300);
    $("#arrowThree").removeClass("rotate");

    $("#panelTwo").slideUp(300);
    $("#arrowTwo").removeClass("rotate");

    $("#panel").slideUp(300);
    $("#arrow").removeClass("rotate");
    
    $("#panelOne").slideUp(300);
    $("#arrowOne").removeClass("rotate");
  });

});
