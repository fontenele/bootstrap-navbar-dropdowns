$(document).ready(function() {
    $('.navbar a.dropdown-toggle').on('click', function(e) {
        if (!$(this).parent().parent().hasClass('nav')) {
            var heightParent = parseInt($(this).parent().parent().css('height').replace('px', '')) / 2;
            var widthParent = parseInt($(this).parent().parent().css('width').replace('px', '')) - 10;
            $(this).parent().addClass('open');
            $(this).next().css('top', heightParent + 'px');
            $(this).next().css('left', widthParent + 'px');
            return false;
        }
    });
});