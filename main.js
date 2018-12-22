

$(".toggleButton").hover(function () {

    $(this).addClass("highLightedButton");

}, function () {

    $(this).removeClass("highLightedButton");

});

$(".toggleButton").click(function () {

    $(this).toggleClass("active");

    $(this).removeClass("highLightedButton");

});