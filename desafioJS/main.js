// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $("a").attr("target", "_blank");

    $( "li a" ).each(function( index, element ) {
            if (index === 0 || index === 4 || index === 8 || index === 12){
                $(element).prepend("<i class=\"fab fa-facebook-f\"></i> ");
            }else if (index === 1 || index === 5 || index === 9 || index === 13) {
                $(element).prepend("<i class=\"fab fa-instagram\"></i> ");
            }else if (index === 2 || index === 6 || index === 10 || index === 14) {
                $(element).prepend("<i class=\"fab fa-twitter\"></i> ");
            }else {
                $(element).prepend("<i class=\"fab fa-pinterest\"></i> ");
            }
      });
      
      $("h2").css("color", "blue");

});
