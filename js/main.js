$('#next-slide').click(function() {
    var slide = $('#slideshow .slide').first();
    $(slide).animate({
        left: '-50%'
    }, 500, function() {
        $(slide).css('left', '150%');
        $(slide).appendTo('#slideshow');
    });

    slide.next().animate({
        left: '50%'
    }, 500);
});