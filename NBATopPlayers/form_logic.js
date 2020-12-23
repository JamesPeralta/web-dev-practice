

$('.slider').on('input', function () {
    console.log($(this).data("yooo"));
    let name = $(this).data("val");
    $("#" + name).text($(this).val());
});
