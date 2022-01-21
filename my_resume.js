$(document).ready(function(){
   $("#btnhide").click(function(){
      $("#mySidenav").hide()
      $("#main").css('margin-left',0);
   
   });
   $("#btnshow").click(function(){
    $("#mySidenav").show()
   //  $("#main").css('margin-left',250);
 });
});

const navSlide =() => {
   const burger = document.querySelector('.burger');
   const nav = document.querySelector('.nav-links');

   burger.addEventListener('click', ()=>{
       nav.classList.toggle('nav-active');
       burger.classList.toggle('bread');
   });
}

navSlide();