$(document).ready(function () {
    $('.grid-mansory').masonry({
        percentPosition: true
    });
    if ($('.mySwiper2')) {
        var swiper2 = new Swiper(".mySwiper2", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }
        });
    }
    if ($('.form-control-select')) {
        $('.form-control-select').select2({
            minimumResultsForSearch: Infinity,
            width: 'resolve'
        });
    }
    if ($('#pronounce')) {
        $('#pronounce').select2({
        });
    }
    const filterViews = $('.filter-views');
    const filterSetting = $('.filter-settings');
    const shotFilters = $('.shot-filters');
    const btnDropdownOptions = $('.btn-dropdown-options');
    if (filterSetting) {
        filterSetting.on('click', function () {
            shotFilters.slideToggle('fast');
        });
    }

    if (filterViews) {
        filterViews.on('click', function () {
            btnDropdownOptions.toggle('fast');
        })
    }





    $('#menu-switch').on('click', function () {
        $('body').toggleClass('toggled');
    });
    $('.sidebar-menu__child, .sidebar-menu__parent').on('click', function () {
        $(this).toggleClass('open').next().slideToggle('fast');
    })
})
