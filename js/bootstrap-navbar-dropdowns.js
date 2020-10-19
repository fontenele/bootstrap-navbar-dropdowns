(function ($) {
    $.fn.navbarDropdown = function (pluginOptions) {
        const options = Object.assign({
            theme: 'bs4', // bs3 | bs4 | bs5
            trigger: 'click', // click | mouseover
            dropdownSelector: null
        }, pluginOptions);

        if (!options.dropdownSelector) {
            switch (options.theme) {
                case 'bs3':
                    options.dropdownSelector = '.dropdown';
                    break;
                case 'bs4':
                    options.dropdownSelector = '.dropdown-item.dropdown';
                    break;
                case 'bs5':
                    options.dropdownSelector = '.dropdown';
                    break;
            }
        }

        $(this).addClass(`nv-dropdown-${options.theme}`);
        $(this).find(options.dropdownSelector).on(options.trigger, function (e) {
            const $el = $(this).children('.dropdown-toggle');
            if ($el.length > 0 && $(e.target).hasClass('dropdown-toggle')) {
                var $parent = $el.offsetParent(".dropdown-menu");
                $(this).parent("li").toggleClass('open');

                if (!$parent.parent().hasClass('navbar-nav')) {
                    if ($parent.hasClass('show')) {
                        $parent.removeClass('show');
                        $el.next().removeClass('show');
                        $el.next().css({"top": -999, "left": -999});
                    } else {
                        $parent.parent().find('.show').removeClass('show');
                        $parent.addClass('show');
                        $el.next().addClass('show');
                        $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
                    }
                    e.preventDefault();
                    e.stopPropagation();
                }
                return this;
            }
        });

        $(this).find(options.dropdownSelector).on('hidden.bs.dropdown', function () {
            $(this).find('li.dropdown').removeClass('show open');
            $(this).find('ul.dropdown-menu').removeClass('show open');
        });

        return this;
    };
}(jQuery));
