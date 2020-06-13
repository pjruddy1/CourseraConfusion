$(document).ready(function(){
    $('#loginModalButton').click(function(){
        $('#loginModal').modal('show');
    });
    $('#closeLoginModal').click(function(){
        $('#loginModal').modal('hide');
    });
    $('#cancelLoginModal').click(function(){
        $('#loginModal').modal('hide');
    });
    $('#reserveModalButton').click(function(){
        $('#reserveModal').modal('show');
    });
    $('#closeReserveModal').click(function(){
        $('#reserveModal').modal('hide');
    });
    $('#cancelReserveModal').click(function(){
        $('#reserveModal').modal('hide');
    });
    $('#mycarousel').carousel({interval:2000});
    $('#carouselButton').click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    
});