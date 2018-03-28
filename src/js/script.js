const $filler = $('#filler');
const $clockSwitch = $('#clock-toggle');
const $tableHeader = $('#table_head');
const $tableBody = $('#table_body');

const $settingsIcon = $('#user-options');
const $settings = $('#settings');

const $optionsList = $('#options');
const $options = $("#options li:not('.current')");

const $selectAll = $('#total-select-all');
var selectAllState = false;

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

function selectAll() {
    selectAllState = !selectAllState;
    $('.checkbox input').prop('checked', selectAllState);
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

    $selectAll.click(selectAll);

    $optionsList.click(function (event) {
        event.stopPropagation();
        $(this).toggleClass('open-list');
    });

    $(document).click(function () {
        $optionsList.removeClass('open-list');
        $settings.removeClass('open-settings');
    });

    $options.click(function () {
        $('.active-link').removeClass('active-link');
        $(this).addClass('active-link');
        $('.current').text($(this).text());
    });
    
    $settingsIcon.click(function(event) {
        event.stopPropagation();
        $settings.toggleClass('open-settings');
    });
});