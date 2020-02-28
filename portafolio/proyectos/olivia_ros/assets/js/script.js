<<<<<<< HEAD

$(document).ready(function(){


    $(function(){
        $("a").click(function(event) {
            if (this.hash !== ""){
                event.preventDefault();
                var gato = this.hash;
                console.log(gato);
                $('html, body').animate({
                    scrollTop: $(gato).offset().top
                }, 800, function(){
                    window.location.hash = gato;
                });
            }
        });
    });


    
});
=======

$(document).ready(function(){


    $(function(){
        $("a").click(function(event) {
            if (this.hash !== ""){
                event.preventDefault();
                var gato = this.hash;
                console.log(gato);
                $('html, body').animate({
                    scrollTop: $(gato).offset().top
                }, 800, function(){
                    window.location.hash = gato;
                });
            }
        });
    });


});
>>>>>>> 84fb90846a4433896be1286075798e7f68b70842
    