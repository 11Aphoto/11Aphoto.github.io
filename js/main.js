
$(document).ready(function(){

    var delayInMilliseconds = 1200;
    var shortDelay = 100;
    
    // for all
    $('.info__card1').on('click', function(event){
        $('.more').toggleClass('active');
    });
    $('.info__card2').on('click', function(event){
        $('.more').toggleClass('active');
    });
    $('.info__card3').on('click', function(event){
        $('.more').toggleClass('active');
    });
    $('.info__card5').on('click', function(event){
        $('.more').toggleClass('active');
    });
    $('.info__card7').on('click', function(event){
        $('.more').toggleClass('active');
    });
    $('.info__card6').on('click', function(event){
        $('.more').toggleClass('active');
    });

    // 111111
     $('.info__card1').on('click', function(event){
         $('.more-info__1').toggleClass('big');
     });

    // 222222
    $('.info__card2').on('click', function(event){
        $('.more-info__2').toggleClass('big');
    });

    // 333333
    $('.info__card3').on('click', function(event){
        $('.more-info__3').toggleClass('big');
    });

    //4444444
    $('.info__card4').on('click', function(event){
        $('.more-info__4').toggleClass('big');
    });

    // 555555
    $('.info__card5').on('click', function(event){
        $('.more-info__5').toggleClass('big');
    });

    // 666666
    $('.info__card6').on('click', function(event){
        $('.more-info__6').toggleClass('big6');
    });

    // 777777
    $('.info__card7').on('click', function(event){
        $('.more-info__7').toggleClass('big');
    });

    // 888888
    $('.info__card8').on('click', function(event){
        $('.more-info__8').toggleClass('big');
    });



    
    // for all
    //  $('.more-info__card').on('click', function(event){
    //      $('.more').toggleClass('removed');
    //      $('.more').removeClass('active');
    //      $('.more-info__card').removeClass('big');
         
    //     setTimeout(function() {
    //         $('.more').removeClass('removed');

    //     }, delayInMilliseconds);
    //  });


    $('.more-info__1').on('click', function(event){
        $('.more').toggleClass('removed');
        $('.more').removeClass('active');
        $('.more-info__card').removeClass('big');
        $('.more-info__1').toggleClass('small1');
        setTimeout(function() {
            $('.more').removeClass('removed');
            $('.more-info__1').removeClass('small1');
        }, delayInMilliseconds);
    });

    $('.more-info__2').on('click', function(event){
        $('.more').toggleClass('removed');
        $('.more').removeClass('active');
        $('.more-info__card').removeClass('big');
        $('.more-info__2').toggleClass('small2');
        setTimeout(function() {
            $('.more').removeClass('removed');
            $('.more-info__2').removeClass('small2');
        }, delayInMilliseconds);
    });

    $('.more-info__3').on('click', function(event){
        $('.more').toggleClass('removed');
        $('.more').removeClass('active');
        $('.more-info__card').removeClass('big');
        $('.more-info__3').toggleClass('small3');
        setTimeout(function() {
            $('.more').removeClass('removed');
            $('.more-info__3').removeClass('small3');
        }, delayInMilliseconds);
    });

    $('.more-info__4').on('click', function(event){
        $('.more').toggleClass('removed');
        $('.more').removeClass('active');
        $('.more-info__card').removeClass('big');
        $('.more-info__4').toggleClass('small4');
        setTimeout(function() {
            $('.more').removeClass('removed');
            $('.more-info__4').removeClass('small4');
        }, delayInMilliseconds);
    });

    $('.more-info__5').on('click', function(event){
        $('.more').toggleClass('removed');
        $('.more').removeClass('active');
        $('.more-info__card').removeClass('big');
        $('.more-info__5').toggleClass('small5');
        setTimeout(function() {
            $('.more').removeClass('removed');
            $('.more-info__5').removeClass('small5');
        }, delayInMilliseconds);
    });

    $('.more-info__6').on('click', function(event){
        $('.more').toggleClass('removed');
        $('.more').removeClass('active');
        $('.more-info__card').removeClass('big6');
        $('.more-info__6').toggleClass('small6');
        setTimeout(function() {
            $('.more').removeClass('removed');
            $('.more-info__6').removeClass('small6');
        }, delayInMilliseconds);
    });

    $('.more-info__7').on('click', function(event){
        $('.more').toggleClass('removed');
        $('.more').removeClass('active');
        $('.more-info__card').removeClass('big');
        $('.more-info__7').toggleClass('small7');
        setTimeout(function() {
            $('.more').removeClass('removed');
            $('.more-info__7').removeClass('small7');
        }, delayInMilliseconds);
    });

    $('.more-info__8').on('click', function(event){
        $('.more').toggleClass('removed');
        $('.more').removeClass('active');
        $('.more-info__card').removeClass('big');
        $('.more-info__8').toggleClass('small8');
        setTimeout(function() {
            $('.more').removeClass('removed');
            $('.more-info__8').removeClass('small8');
        }, delayInMilliseconds);
    });

    
});