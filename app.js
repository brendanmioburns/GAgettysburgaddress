$(document).ready(function() {

    $("body").fadeIn();

    $("p").on("mouseenter", function() {
        $(this).css("background-color", "yellow");

    });

    $("p").on("mouseleave", function() {
        // $(this).css("background-color", "white");
        $(this).removeAttr("style");
    });

    $("h2").on("click", function() {
        $(this).animate({
            "opacity": ".25",
            "margin-left": "20px"
        }, 2000, function() {
            $(".speech").animate({
                "opacity": ".5"
            });
        });

    });

    $("#switcher-default").on("click", function() {
        $("body").css("font-size", "62.5%");

    });

    $("#switcher-large").on("click", function() {
        // $("body").css("font-size", "100%");
        $("body").css("font-size", "+=5%");
    });

    $("#switcher-small").on("click", function() {
        // $("body").css("font-size", "50%");
        $("body").css("font-size", "-=5%");
    });

    $(document).on("keydown", function(event) {
        console.log(event.which, "KEY PRESSED");

        var keyPressed = event.which;

        if (keyPressed === 37) {
            $("#switcher").stop().animate({
                "margin-left": "-=20px"
            });
        } else if (keyPressed === 38) {
            $("#switcher").stop().animate({
                "margin-top": "-=20px"
            });
        } else if (keyPressed === 39) {
            $("#switcher").stop().animate({
                "margin-left": "+=20px"
            });
        } else if (keyPressed === 40) {
            $("#switcher").stop().animate({
                "margin-top": "+=20px"
            });
        };
    });

});
