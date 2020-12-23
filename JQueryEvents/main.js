$("#hoverMe").hover(function (){
    $(this).hide()
});

$("#clickMe").click(function (){
    $(this).hide();
});

$("#doubleClickMe").dblclick(function (){
    $(this).hide();
});

$("#leaveMeAlone").mouseout(function () {
    $(this).hide();
});

$(document).keypress(function (e) {
    if(e.which == 13) {
        $("#enterMe").hide();
    }
});
