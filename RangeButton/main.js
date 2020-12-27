$(".buttonResizer").on('input', function () {
    let newRad = this.value * 1;
    $(".resizingButton").css({
        borderRadius: newRad
    });

    $("h2").text(newRad);
});