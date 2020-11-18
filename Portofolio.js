$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
       var goal = $(this).attr('href');

       var elementGoal = $(goal);

       $('body').animate({
           scrollTop: elementGoal.offset().top
       });
    });
});