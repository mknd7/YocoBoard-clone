const $filler = $('#filler');

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
});