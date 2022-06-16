//Переключение по tab начальный экран
$('.js-data-trigger').on('click', function(event) {
    event.preventDefault()

    let tabName = $(this).attr('data-tab');
    let tab = $('.js-photo[data-tab="'+tabName+'"]');

    $('.js-data-trigger.slider__subtitle_active').removeClass('slider__subtitle_active');
    $(this).addClass('slider__subtitle_active');

    $('.js-photo.slider__img_active').removeClass('slider__img_active');
    tab.addClass('slider__img_active');

    $('.js-header').removeAttr('data-tab');
    $('.js-header').attr('data-tab', tabName);

    $('.js-slider').removeAttr('data-tab');
    $('.js-slider').attr('data-tab', tabName);

    $('.js-format').removeAttr('data-tab');
    $('.js-format').attr('data-tab', tabName);

    $('.js-footer').removeAttr('data-tab');
    $('.js-footer').attr('data-tab', tabName);
})

//Открытие burger
$(() => {
    if($('.header__burger')) {
        $('.header__burger').click(() => {
            $('.header__burger').removeClass('header__burger_active');
            $('.header__cross').addClass('header__cross_active');
            $('.header__menu ').addClass('header__menu_active');
            $('.body').addClass('body_look');
        })

        $('.header__cross').click(() => {
            $('.header__cross').removeClass('header__cross_active');
            $('.header__burger').addClass('header__burger_active');
            $('.header__menu ').removeClass('header__menu_active');
            $('.body').removeClass('body_look');
        })

        $('.header__title').click(() => {
            $('.header__cross').removeClass('header__cross_active');
            $('.header__burger').addClass('header__burger_active');
            $('.header__menu ').removeClass('header__menu_active');
            $('.body').removeClass('body_look');
        })
    }
})

// Маска для телефона
jQuery(($) => {
    $(".js-phone").mask("+7 (999) 999-99-99");
});