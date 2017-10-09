$(window).scroll(function () {
    if ($(this).scrollTop() >= 400) {
        $('#header-scroll').slideDown(200,"linear");
    } else {
        $('#header-scroll').slideUp(200, "linear");
}});