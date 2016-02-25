/*!
 * StrapComplete v1.0.0 (http://getbootstrap.com)
 * Copyright 2013-2016 Southoughts.
 * Licensed under the MIT license
 */
(function ($) {

    $.fn.strapcomplete = function (dataset, options) {
        // These are the defaults.
        var defaults = { 
            afterSelectionEvent: function (selection) { },
            updateDataSetFunction: function () { },
            loadingImageUrl: '',
        }

        var settings = $.extend(defaults, options);

        // Create Temporary Menu
        var controlId = this.attr("id");
        var menuName = controlId + '_menu'
        var jqmenuName = '#' + menuName;
        var jqmenuItemClassName = menuName + '_li';
        var html = '<ul id="' + menuName + '" class="dropdown-menu" style="left:0px">';
        $(html).appendTo(this.parent());
        // Behaviour
        this.keyup(function (ev) {
            // prepare elements
            var searchInput = this.value;
            if (searchInput && searchInput.length > 0) {
                $(jqmenuName).children('li').remove();
                var matches = findMatches(searchInput);
                $.each(matches, function (i, str) {
                    var menuItem = '<li class=' + jqmenuItemClassName + '><a href="#'+ controlId +'">' + str + '</a></li>'
                    $(menuItem).appendTo(jqmenuName);
                });
            }
            bindMenuItems();
            if (matches.length>0) {
                $(jqmenuName).fadeIn();
            } else {
                $(jqmenuName).fadeOut();
            }
        }).focusout(function (ev) {
            $(jqmenuName).fadeOut();
        });

        function bindMenuItems() {
            $('.' + jqmenuItemClassName).click(function () {
                var value = this.innerText;
                if (value && value.length > 0) {
                    $('#' + controlId).val(value);
                    settings.afterSelectionEvent(value);
                }
                $(jqmenuName).fadeOut();
            });
        };

        function findMatches(query) {
            var matches, substringRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring 'query'
            substrRegex = new RegExp(query, 'i');

            // check for if pull is wanted to populate dataset sync
            if (settings.updateDataSetFunction) {
                dataset = settings.updateDataSetFunction();
                // validate dataset
                if (!dataset) {
                    throw 'something went wrong with dataset sync call';
                }
            }
            
            // iterate through the pool of strings and for any string that
            // contains the substring 'query', add it to the 'matches' array
            $.each(dataset, function (i, str) {
                if (substrRegex.test(str)) {
                    if (matches.length < 4) {
                        matches.push(str);
                    }
                }
            });

            return matches;
        };
    };

})(jQuery);