$(document).ready(function() {
    $('.navbar a.dropdown-toggle').on('click', function(e) {

        var elmnt = $(this).offsetParent(".dropdown-menu");
        var heightParent = (elmnt.outerHeight() / 2);
        var widthParent = (elmnt.outerWidth() - 10);

        $(this).next().css({ "top": heightParent, "left": widthParent });
        $(this).parent("li").toggleClass('open');

        $('.navbar li.open').not($(this).parents("li")).removeClass("open");

        return false;
    });
});
