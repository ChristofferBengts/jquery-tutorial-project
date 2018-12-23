
function updateOutput(params) {

    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");

    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
    
}

$(".toggleButton").hover(function () {

    $(this).addClass("highLightedButton");

}, function () {

    $(this).removeClass("highLightedButton");

});

$(".toggleButton").click(function () {

    $(this).toggleClass("active");

    $(this).removeClass("highLightedButton");

    var panelId = $(this).attr("id") + "Panel";

    $("#" + panelId).toggleClass("hidden");

    var numberOfActivePanels = 4 - $(".hidden").length;

    $(".panel").width(($(window).width() / numberOfActivePanels) - 5);

});

$(".panel").height($(window).height() - $("#header").height() - 15);

$(".panel").width(($(window).width() / 2) - 5);

updateOutput();

$("textarea").on("change keyup paste", function (params) {
    
    updateOutput();

});