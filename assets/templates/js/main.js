(function ($) {

    'use strict';

    // Слайдер для сертификатов

    var $sertificatesSlider = $('.education-block .sertificates-block .gallery-content');

    $sertificatesSlider.owlCarousel({
        items: 1,
        nav: true,
        navText: ['', ''],
        loop: true,
        mouseDrag: false
    });

    // Main Slider
    var $mainSlider = $('.main-slider');
    $mainSlider.owlCarousel({
        items: 1,
        autoplay: true
    });

    var $ourWorksSlider = $('.studio-slider');
    $ourWorksSlider.owlCarousel({
        items: 1,
        autoplay: true,
        nav: true,
        navText: ["", ""],
        loop: true
    });

    var $ourWorksItem = $('.main-works-slider');
    $ourWorksItem.owlCarousel({
        items: 3,
        margin: 13,
        nav: true,
        navText: ["", ""],
        loop: true
    });

    // Адативная всплывающая форма

    var $activateButtonCources = $('.callout-button'),
        $formPopupCources = $('.popup-cources'),
        $formFadeCources = $('.fade-cources'),
        $activateButtonCallout = $('.callout-button-inner'),
        $formPopupCallout = $('.popup-callout'),
        $formFadeCallout = $('.fade-callout'),
        $formPopup = $('.form-popup'),
        startFormWidth = $formPopup.width(),
        $formClose = $('.form-popup-close'),
        thisPlaceholder;

    var activatePopupForm = function (activateButton, formPopup, formFade) {
        activateButton.on('click', function () {
            formPopup.add(formFade).addClass('is-visible fade-in');
            setTimeout(function () {
                formPopup.add(formFade).removeClass('fade-in');
            }, 300);
        });

        formFade.add($formClose).on('click', function () {
            formPopup.add(formFade).addClass('fade-out');
            setTimeout(function () {
                formPopup.add(formFade).removeClass('is-visible fade-out');
            }, 300);
        });
    };

    activatePopupForm($activateButtonCources, $formPopupCources, $formFadeCources);
    activatePopupForm($activateButtonCallout, $formPopupCallout, $formFadeCallout);

    // Центрирование форм

    var formCentered = function () {

        var winWidth = $(window).width(),
            formWidth = $formPopup.width();

        $formPopup.css({
            left: winWidth / 2 - formWidth / 2
        });

        if (winWidth <= formWidth) {
            $formPopup.css({
                width: '100%',
                left: '0'
            });
        }

        if (winWidth > startFormWidth) {
            $formPopup.css({
                width: startFormWidth
            });
        }
    };

    formCentered();

    $(window).on('resize', function () {
        formCentered();
    });

    // Сменяющиеся плейсхолдеры для форм

    $formPopup.find('input').add($formPopup.add('textarea'))
        .focus(function () {
            thisPlaceholder = $(this).attr('placeholder');
            $(this).data('placeholder', thisPlaceholder);
            $(this).attr('placeholder', '');
        })
        .blur(function () {
            thisPlaceholder = $(this).data('placeholder');
            $(this).attr('placeholder', thisPlaceholder);
        });


    // Сменяющаяся большая картинка у слайдера Работы наших учеников

    var $mainWorksImg = $('.main-works-img');

    $ourWorksItem.find('.owl-next').on('click', function () {
        var tempSrc = $ourWorksItem.find('.owl-item.active').eq(1).find('a').attr('href');
        $mainWorksImg.find('a').attr('href', tempSrc).find('img').attr('src', tempSrc);
    });

    $ourWorksItem.find('.owl-prev').on('click', function () {
        var tempSrc = $ourWorksItem.find('.owl-item.active').eq(1).find('a').attr('href');
        $mainWorksImg.find('a').attr('href', tempSrc).find('img').attr('src', tempSrc);
    });

    var $contentVideo = $('.content-video');
    $contentVideo.owlCarousel({
        items: 2,
        margin: 10,
        nav: true,
        navText: ["", ""]
    });

    var $relativeProducts = $('.product-content-relative');
    $relativeProducts.find('.page-products-block').owlCarousel({
        items: 3,
        nav: true,
        navText: ["", ""],
        margin: 20,
        loop: true
    });

    var $fancyLink = $('.fancybox');

    $fancyLink.fancybox({
        maxWidth: '80%',
        maxHeight: '80%'
    });

    //Fancybox videos

    $(".fancybox-video").click(function () {
        $.fancybox({
            'padding': 0,
            'autoScale': false,
            'transitionIn': 'none',
            'transitionOut': 'none',
            'title': this.title,
            'width': 640,
            'height': 385,
            'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type': 'swf',
            'swf': {
                'wmode': 'transparent',
                'allowfullscreen': 'true'
            }
        });
        return false;
    });

    // Go up

    $.goup();

    //Left Menu

    var $leftMenuItem = $('.left-menu-list > li');

    $leftMenuItem.find('> a').on('click', function (event) {
        // event.preventDefault();
    });

    $leftMenuItem.on('click', function () {
        //$leftMenuItem.removeClass('active');
        $(this).toggleClass('active');
    });

    // Убираем левое меню если оно пустое

    var $leftMenu = $('.m-left-menu');

    if ($leftMenu.find('> *').size() === 0) {
        $leftMenu.addClass('is-hidden');
    }

    // Две картинки у плашки товара

    var $pageProductItem = $('.page-products-item');

    $pageProductItem.find('img').each(function () {
        if ($(this).attr('src') === '') {
            $(this).remove();
        }
    });

    $pageProductItem.each(function () {
        if ($(this).find('img').size() > 1) {
            $(this).find('.page-products-img').addClass('double-img');
        }
    });

    //Если в с этим товаром покупают пусто - то не выводим этот блок

    if ($relativeProducts.find('.page-products-block .page-products-item').size() === 0) {
        $relativeProducts.addClass('is-hidden');
    }

    //Отображение корзины в разных направлениях

    if ($('.ms2_total_count').text() !== "0") {
        $('#msMiniCart').addClass('not-empty');
    }

    // Делает одинаковую высоту у блоков

    function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.each(
            function () {
                var currentHeight = $(this).height();
                if (currentHeight > tallestcolumn) {
                    tallestcolumn = currentHeight;
                }
            }
        );
        columns.height(tallestcolumn);
    }

    setEqualHeight($(".product-content-relative .page-products-item"));

    // Всплывающая подсказка для салона красоты

    $(window).on('scroll', function () {
        var $helpPopup = $('.help-popup'),
            $helpClose = $('.help-close');

        if ($(window).scrollTop() >= 550 && $(window).scrollTop() <= 900) {
            $helpPopup.addClass('form-fade-in').removeClass('form-fade-out');

        } else {
            $helpPopup.removeClass('form-fade-in').addClass('form-fade-out');
        }

        $helpClose.on('click', function () {
            $(this).parents($helpPopup.selector).addClass('is-hidden');
        });
    });

    // Не выводим блок с опциями товара если их нет


    // Для цвета

    var $productOptions = $('.product-options'),
        productDataName = $productOptions.find('select > option').eq(0).data();

    if (productDataName) {
        if (productDataName.name === "undefined") {
            $productOptions.addClass('is-hidden');
            $('.product-options-text, .product-options-img').addClass('is-hidden');
        }
    }

    // Для изгиба, ширины, длины

    $productOptions.each(function () {
        if ($(this).find('.block > *').size() === 0) {
            $(this).addClass('is-hidden');
        }
    });

    // Для страницы корзины

    $('.product-cart-options .item').each(function () {
        if ($(this).find('.block').text() === '') {
            $(this).addClass('is-hidden');
        }

    });

    // Анимация флага

    var $headerFlag = $('.header-flag'),
        $actionPopup = $('.action-popup'),
        $actionClose = $('.action-close');

    $headerFlag.hover(function () {
        $actionPopup.addClass('is-visible');
    }, function () {
        $actionPopup.removeClass('is-visible');
    });

    $actionClose.on('click', function () {
        $actionPopup.removeClass('is-visible');
    });

    // Выпадающее меню специалисты

    var $specialLink = $('.special-link'),
        $menuFirstItem = $('.main-nav-list').find('li:first-child');

    $specialLink.appendTo($menuFirstItem);


    //------------------Кнопка купить----------------------


    //Всплывающее окно при клике в корзину в категории

    $('.page-products-item button').on('click', function () {
        $('.shop-page-popup, .shop-page-fade').addClass('is-visible');
    });

    $('.shop-page-popup-buttons div:nth-child(1)').on('click', function () {
        $('.shop-page-popup, .shop-page-fade').removeClass('is-visible');
    });

    $('.has-options button').addClass('is-disabled');
    $('.no-options button').addClass('is-active');


    var $buttonDisabled = $('#add-to-cart-button.is-disabled');


    $buttonDisabled.on('click', function (event) {
        event.preventDefault();
        $('.options-popup, .options-fade').addClass('is-visible');
    });

    $('body').on('click', '#add-to-cart-button.is-active', function () {
        $('.shop-page-popup, .shop-page-fade').addClass('is-visible');
    });

    $('.options-fade').on('click', function () {
        $('.options-popup, .options-fade').removeClass('is-visible');
    });

    //

    $('body').on('click', '.fancybox-buy-button', function () {

        $buttonDisabled.off('click');

        $('#add-to-cart-button').removeClass('is-disabled').addClass('is-active').trigger('click');
        $.fancybox.close();

        var currentColorName = $(this).data('buy');

        $galleryColorItem.each(function () {
            if ($(this).find('a').data('color-name') === currentColorName) {
                $(this).addClass('is-active');
            }
        });
    });


    // Изменение количества товара на старнице товара

    var $inputCount = $('.product-quantity input[name="count"]');

    $inputCount.spinner({
        change: function () {
            $('.product-button input[name="count"]').val($(this).val());
        }
    });

    // При клике на цвета товара - делаем текущий цвет опции minishop2

    var $galleryColorItem = $('.gallery-color-item'),
        $colorOptions = $('#color-option');

    $galleryColorItem.on('click', function () {

        var currentColorName = $(this).find('a').data('color-name');

        $colorOptions.find('option').each(function () {
            if ($(this).data('name') === currentColorName) {
                $(this).prop('selected', 'selected');
            }
        });

        var $fancyboxBuyButton = $('<div>Купить</div>').attr('class', 'fancybox-buy-button').attr('data-buy', $(this).find('a').data('color-name'));

        setTimeout(function () {
            $fancyboxBuyButton.appendTo('.fancybox-inner');
        }, 300);

    });


    // Школа - ссылки на посты
    var linkPrev = $('.neighbors .link-prev');
    var linkNext = $('.neighbors .link-next');
    if (linkPrev.length > 1 || linkNext > 1) {
        linkPrev.show();
        linkNext.show();
    } else {
        linkPrev.hide();
        linkNext.hide();
    }


    // Страница Школы - Категории

    //var $schoolCategory = $('.school-page-category');
    //
    //$schoolCategory.find('.first').addClass('active');
    //
    //var schoolCategoryActiveData = $schoolCategory.find('.active a').data('category');
    //var $schoolItem = $('.school-item');
    //
    //$schoolItem.removeClass('is-visible');
    //
    //var schoolCategoryActiveText = $schoolCategory.find('.active a').text();
    //$('.school-page-main-title').text(schoolCategoryActiveText);
    //
    //var checkActiveItems = function () {
    //    $schoolItem.each(function () {
    //        var schoolItemData = $(this).find('a').data('category');
    //        if (schoolItemData === schoolCategoryActiveData) {
    //            $(this).addClass('is-visible');
    //        }
    //    });
    //};
    //
    //checkActiveItems();
    //
    //
    //$schoolCategory.find('li a').on('click', function (event) {
    //    event.preventDefault();
    //});
    //$schoolCategory.find('li').on('click', function () {
    //    $schoolCategory.find('li').removeClass('active');
    //    $(this).addClass('active');
    //
    //    schoolCategoryActiveData = $schoolCategory.find('.active a').data('category');
    //    schoolCategoryActiveText = $schoolCategory.find('.active a').text();
    //    $('.school-page-main-title').text(schoolCategoryActiveText);
    //
    //    $schoolItem = $('.school-item');
    //
    //    $schoolItem.removeClass('is-visible');
    //    checkActiveItems();
    //});

    // Страница Школы - Категории

    //var $schoolCategory = $('.school-page-category');
    //
    //$schoolCategory.find('.first').addClass('active');
    //
    //var schoolCategoryActiveData = $schoolCategory.find('.active a').data('category');
    //var $schoolItem = $('.school-item');
    //
    //$schoolItem.removeClass('is-visible');
    //
    //var schoolCategoryActiveText = $schoolCategory.find('.active a').text();
    //$('.school-page-main-title').text(schoolCategoryActiveText);
    //
    //var checkActiveItems = function () {
    //    $schoolItem.each(function () {
    //        var schoolItemData = $(this).find('a').data('category');
    //        if (schoolItemData === schoolCategoryActiveData) {
    //            $(this).addClass('is-visible');
    //        }
    //    });
    //};
    //
    //checkActiveItems();
    //
    //
    //$schoolCategory.find('li a').on('click', function (event) {
    //    event.preventDefault();
    //});
    //$schoolCategory.find('li').on('click', function () {
    //    $schoolCategory.find('li').removeClass('active');
    //    $(this).addClass('active');
    //
    //    schoolCategoryActiveData = $schoolCategory.find('.active a').data('category');
    //    schoolCategoryActiveText = $schoolCategory.find('.active a').text();
    //    $('.school-page-main-title').text(schoolCategoryActiveText);
    //
    //    $schoolItem = $('.school-item');
    //
    //    $schoolItem.removeClass('is-visible');
    //    checkActiveItems();
    //});

    // Смена цветов у товара

    //$('.product-options-img').find('img').attr('src', $('.gallery-color-item').eq(0).find('.img').text());
    //
    //$('#color-option').on('change', function () {
    //    var $that = $(this);
    //
    //    $('.gallery-color-item').each(function () {
    //        if ($(this).find('.title').text() === $that.find(':selected').data().name) {
    //            $('.product-options-img').find('img').attr('src', $(this).find('.img').text());
    //        }
    //    });
    //});


})(jQuery);