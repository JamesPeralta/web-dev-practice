$(".products > li").click(function () {
    console.log(this);
    let currPress = $(this).find('.modal');
    let otherModals = $(".modal")
    for (const element of otherModals) {
        let otherPress = $(".products").find('#' + element.id);
        if (currPress.attr('id') !== otherPress.attr('id') && otherPress.is(':visible')){
            otherPress.toggle();
        }
    }

    currPress.toggle();
});

$(".modal").click(function (e) {
    e.stopPropagation();
});
