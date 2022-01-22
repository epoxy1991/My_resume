$(document).ready(function(){
   $("#btnhide").click(function(){
      $("#mySidenav").hide(600)
      $("#btnshow").show(800);
      $("#main").css('margin-left',0);
   
   });
   $("#btnshow").click(function(){
    $("#mySidenav").show(600);
    $("#btnshow").hide();
   //  $("#main").css('margin-left',250);
 });
});

