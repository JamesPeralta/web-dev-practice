$('input:checkbox').change(function() {
    // this will contain a reference to the checkbox
    if (this.checked) {
        let myLabel = $("label[for='" + $(this).attr('id') + "']");
        myLabel.css({
            color: "green"
        });
    } else {
        let myLabel = $("label[for='" + $(this).attr('id') + "']");
        myLabel.css({
            color: "white"
        });
    }
});

$('.slider').on('input', function () {
    let name = $(this).data("val");
    $("#" + name).text($(this).val());
});

$(document).keypress(
    function(event){
        if (event.which == '13') {
            event.preventDefault();
        }
    });

$("#submitButton").hover(function () {
    $(this).css({
        backgroundColor: "blue"
    })},function (){
    $(this).css({
        backgroundColor: "green"
    })});

$(".otherPages li").click(function (){
    let foundit = $(this).find("a").attr("href");
    if (!(foundit === "#")) {
        $("location").attr("href", foundit);
    }
});
