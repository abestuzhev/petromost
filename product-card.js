$(function(){
    /*простые табы*/
    $(".product-card .tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });


    $('.catalog-filter__title').on('click', function(e){
        e.preventDefault();
        $(this).parents('.catalog-filter').toggleClass('active');
    })


    $('#pie-popup-form input').on('change', function() {
        var deliveryVAlue = $('input[name=pie-radio-delivery]:checked').val();
        // console.log(deliveryVAlue);
        if(deliveryVAlue == 'delivery-2'){
            $('.popup-pie-address').slideUp(300);
            $('.popup-pie-pickup').slideDown(300);
        }else{
            $('.popup-pie-pickup').slideUp(300);
            $('.popup-pie-address').slideDown(300);
        }
    });

    $('.c-select').SumoSelect();

    var $datepicker = $('.datepicker-custom');
    $datepicker.datepicker({
        autoClose: true
    });

    $(document).on('click', '.datepicker-layout__icon', function(e){
        e.preventDefault();
        $('.datepicker-custom').trigger('focus');
    });


    $('.js-input-phone').mask('+7(000)000-00-00');


    $(document).on('click', '.js-popup-close', function (e) {
        e.preventDefault();
        var $html = $('html');
        $(this).parents('.mfp-wrap').removeClass('is-visible');
        $('.mfp-bg').removeClass('is-visible');
        $html.css({
            'margin-right':'0'
        }).removeClass('lock-html');
        $('.wrapper').removeClass('fixed-input');
        $('.header.sticky').css({
            // 'right':'0'
        });
    });

    var windowWidth = (window.innerWidth ); // вся ширина окна
    var documentWidth = (document.documentElement.clientWidth );
    function showPopup(icon, popup) {
        $(document).on('click', icon, function (e) {
            var $html = $('html');
            e.preventDefault();
            $(popup).addClass('is-visible');
            $('.mfp-bg').addClass('is-visible');


            $html.addClass('lock-html');
            $('body').addClass('fixed-input');
            if(windowWidth > documentWidth){
                $html.css({
                    'margin-right':'17px'
                });
                $('.mfp-wrap').css({
                    'overflow-y':'scroll'
                });
                // console.log('Есть полоса прокрутки');
            }else {
                // console.log('Нет полосы прокрутки');
            }
        });
    }

    showPopup(".js-pie-popup", '.popup-pie-order');
});