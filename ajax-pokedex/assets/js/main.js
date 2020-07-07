$("#pokedex__btn").click(function(){
    $("#pokedex__image").empty();
    $("#pokedex__name").empty();
    $("#pokedex__number").empty();
    $("#pokedex__element").empty();
    var idPokemon = $("#pokedex__input").val();
    
    $.ajax({
        method: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/" + idPokemon + "/",


    }).done(function(data){
        var pokestats = {name:"", value:0};
        var pokestats2= data.types[0].type.name;
        if (data.types[1] !=undefined){
            pokestats2 += ', ' + data.types[1].type.name;
        }
        $("#pokedex__image").append("<img src='" + data.sprites.front_default + "'>");
        $("#pokedex__name").append("Pokémon: " + data.name);
        $("#pokedex__number").append("Número: " + idPokemon);
        $("#pokedex__element").append("Elemento: " + pokestats2);

        for (i=0; i<data.stats.length;i++){
            pokestats[i] = {name: data.stats[i].stat.name, value: data.stats[i].base_stat};
        }


        var chart = new CanvasJS.Chart("chartContainer", {
            title:{
                text: "Stats del Pokémon"              
            },
            data: [              
            {
                type: "column",
                dataPoints: [
                    { label: pokestats[0].name,  y: pokestats[0].value},
                    { label: pokestats[1].name,  y: pokestats[1].value},
                    { label: pokestats[2].name,  y: pokestats[2].value},
                    { label: pokestats[3].name,  y: pokestats[3].value},
                    { label: pokestats[4].name,  y: pokestats[4].value},
                    { label: pokestats[5].name,  y: pokestats[5].value},
                ]
            }
        ]
    });
    chart.render();

    });    
});
