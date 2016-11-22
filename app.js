$(document).ready(function() {

    $("body").fadeIn(3000);

    $("p").mouseenter(function() {
        $(this).css("background-color", "yellow");

    });

    $("p").mouseleave(function() {
        $(this).css("background-color", "none");

    });

    $("h2").on("click", function() {
        $(this).css({
            "opacity": "-=25%",
            "margin-left": "20px"
        }, function() {
            $(".speech").fadeOut("opacity", "-50%");
        });

    });

});
