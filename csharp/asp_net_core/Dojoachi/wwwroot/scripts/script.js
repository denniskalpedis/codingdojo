$(document).ready(function(){
    function newAction(route){
        $.get(route, function(response){
            console.log (response.message == "lose");
            if (response.message == "lose"){
                $('#fullness').text(response.fullness);
                $('#happiness').text(response.happiness);
                $('#meals').text(response.meals);
                $('#energy').text(response.energy);
                $('#status').text("Your Dojoachi has passed away!");
                $('.button').toggleClass("d-none");
                $('#dojoachi-alive').toggleClass("d-none");
                $('#dojoachi-lose').toggleClass("d-none");
            }else if (response.message == "win"){
                $('#fullness').text(response.fullness);
                $('#happiness').text(response.happiness);
                $('#meals').text(response.meals);
                $('#energy').text(response.energy);
                $('#status').text("Congratulations! You won!");
                $('.button').toggleClass("d-none");
                $('#dojoachi-alive').toggleClass("d-none");
                $('#dojoachi-win').toggleClass("d-none");
            }else if (response.image == "happy") {
                $('#fullness').text(response.fullness);
                $('#happiness').text(response.happiness);
                $('#meals').text(response.meals);
                $('#energy').text(response.energy);
                $('#status').text(response.message);
                if (!$("#dojoachi-angry").hasClass("d-none")) {
                    $('#dojoachi-angry').addClass("d-none");
                    $('#dojoachi-alive').removeClass("d-none");
                }
            }else {
                $('#fullness').text(response.fullness);
                $('#happiness').text(response.happiness);
                $('#meals').text(response.meals);
                $('#energy').text(response.energy);
                $('#status').text(response.message);
                if (!$("#dojoachi-alive").hasClass("d-none")) {
                    $('#dojoachi-alive').addClass("d-none");
                    $('#dojoachi-angry').removeClass("d-none");
                }
            }
        });
    }
    $('#feed').click(function(){
        newAction('/feed');
    });
    $('#play').click(function(){
        newAction('/play');        
    });
    $('#work').click(function(){
        newAction('/work');
    });
    $('#sleep').click(function(){
        newAction('/sleep');
    });
    // $('#reset').click(function(){
    //     $('.button').toggleClass("d-none");
    // });
});