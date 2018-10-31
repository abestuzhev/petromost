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
});