$(".otherPages li").click(function (){
    let foundit = $(this).find("a").attr("href");
    if (!(foundit === "#")) {
        $("location").attr("href", foundit);
    }
});
