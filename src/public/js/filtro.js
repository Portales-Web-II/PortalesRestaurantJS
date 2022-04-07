$(document).ready(function(){
    $('.category_list .category_item[category="all"]').addClass('active');

    $('.category_item').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);

        $('.category_item').removeClass('active');
        $(this).addClass('active');

        $('.product_item').hide();
        $('.product_item[category="'+catProduct+'"]').show();
        
        $('.category_item[category="all"]').click(function(){
            $('.product_item').show();
        });
    });
})