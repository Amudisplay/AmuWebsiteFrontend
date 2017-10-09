$(document).ready(function() {
	setTimeout(function(){
        $('#main').addClass('loaded');
        $('.entry-header').css({
            'display':'none'
        });
        $('#leftSidenav').css({'display':'none'});
        $('#rightSidenav').css({'display':'none'});
        $('#filterSidenav').css({'display':'none'});
    }, 2000);
    
    $('#header-scroll').slideUp(200, "linear");


    var $window = $(window);
    var scrollTime = 0.5;
    var scrollDistance = 280;

    $window.on("mousewheel DOMMouseScroll", function (event) {

        event.preventDefault();

        var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta * scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo: {
                y: finalScroll,
                autoKill: true
            },
            ease: Power1.easeOut,
            overwrite: 5
        });

    });
});