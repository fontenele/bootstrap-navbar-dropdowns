$(document).ready(function () {
    $('.navbar a.dropdown-toggle').on('click', function (e) {
        var $el = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');

        console.log(45, $parent.closest('.nav'));
        if (!$parent.parent().hasClass('nav')) {
            if ($parent.closest('.nav').hasClass('navbar-right')) {
                console.log('aaa');
                $el.next().css({"top": $el[0].offsetTop, "right": $parent.outerWidth() - 4});
            } else {
                console.log('bbb');
                $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
            }
        }

        $('.nav li.open').not($(this).parents("li")).removeClass("open");

        return false;
    });
});
