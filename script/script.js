$(document).ready(
    function () {
        $('.grid').isotope({
            itemSelector: '.item',
        });
        $('.filterGroup').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $('.grid').isotope({ filter: filterValue });
            $('.filterGroup li').removeClass('active');
            $(this).addClass('active');
        });

    });
