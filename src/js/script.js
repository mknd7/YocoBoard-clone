const $filler = $('#filler');
const $clockSwitch = $('#clock-toggle');
const $tableHeader = $('#table_head');
const $tableBody = $('#table_body');

// sets height of filler td element (for background)
function setHeight() {
    var height = window.innerHeight;
    var offset = $filler.offset().top;
    var result = (offset < height) ? height - offset : 0;
    $filler.height(result);
}

// sets width of table header depending on scrollbar
function setWidth() {
    if ($tableBody[0].scrollHeight > $tableBody.height()) {
        $tableHeader.width('98.78%');
    }
    else {
        $tableHeader.width('100%');
    }
}

$(function () {

    setWidth();
    setHeight();

    $(window).resize(function() {
        setWidth();
        setHeight();
    });

    $clockSwitch.click(function() {
        $(this).toggleClass('clocked-in');
    });
});