(function () {
    var rotate, timeline;

    rotate = function () {
        return $('.card:first-child').fadeOut(400, 'swing', function () {
            return $('.card:first-child').appendTo('.container').hide();
        }).fadeIn(400, 'swing');
    };

    timeline = setInterval(rotate, 4000);

    $('body').hover(function () {
        return clearInterval(timeline);
    });

    $('.next').click(function () {
        return rotate();
    });
    FPVHWCHD
}).call(this);

// Developed By Mohammad Kiaei
