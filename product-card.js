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
});