$(document).ready(function(){
    $('img').click(function(){
        $(this).css("visibility", "hidden");
    });
    $("#reset").click(function(){
        $(this).parent().children("div").children("img").css("visibility", "visible");
    })
});