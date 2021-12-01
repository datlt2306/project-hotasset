$(document).ready(function () {


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
    if ($('#tags')) {
        $('#tags').select2({
        });
    }
    const filterViews = $('.filter-views');
    const filterSetting = $('.filter-settings');
    const shotFilters = $('.shot-filters');
    const btnDropdownOptions = $('.btn-dropdown-options');
    const headerUserSetting = $('#header-user-setting');
    const dropdownUserSetting = $('.dropdown-user-setting');
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
    if (headerUserSetting) {
        headerUserSetting.on('click', function () {
            console.log('1')
            dropdownUserSetting.toggle('fast');
        })
    }





    $('#menu-switch').on('click', function () {
        $('body').toggleClass('toggled');
    });
    $('.sidebar-menu__child, .sidebar-menu__parent').on('click', function () {
        $(this).toggleClass('open').next().slideToggle('fast');
    })

    if ($('.grid-mansory')) {
        $('.grid-mansory').masonry({
            percentPosition: true
        });
    }
})
