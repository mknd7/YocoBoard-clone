const $filler = $('#filler');
const $clockSwitch = $('#clock-toggle');

function getHeight() {
    var height = window.innerHeight;
    var offset = $filler.offset().top;
    return (offset < height) ? height - offset : 0;
}

$(function () {

    $filler.height(getHeight());

    $(window).resize(function() {
        $filler.height(getHeight());
    });

    $clockSwitch.click(function() {
        $(this).toggleClass('clocked-in');
    });
});