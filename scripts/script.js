//image zoom script
$(document).ready(function () {
    $(".slider-for .card").mousemove(function (e) {
        const container = $(this);
        const img = container.find("img");

        const x = (e.pageX - container.offset().left) / container.width();
        const y = (e.pageY - container.offset().top) / container.height();

        img.css("transform-origin", `${x * 100}% ${y * 100}%`);
    });
});