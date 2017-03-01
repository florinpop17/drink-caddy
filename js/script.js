var toggleHeads;

$(document).ready(function(){
    var head1 = $('.driver-head-1');
    var head2 = $('.driver-head-2');

    toggleHeads = function() {
        head1.toggleClass('hide');
        head2.toggleClass('hide');
    }

    // get all info_boxes
    var info_boxes = $('.animation-container .info-box');

    // get all images
    var imgs = $('.animation-container > img');

    // set top position to data-top attribute
    setDOMArrayToPos(info_boxes);
    setDOMArrayToPos(imgs);
});

function setDOMArrayToPos(arr) {
    // loop through all boxes
    arr.each((idx, item) => {

        // convert DOM element to jQuery obj
        item = $(item);

        // get the data-top attribute
        var topPos = item.data('top') + 'px';

        // set the value to it's top attribute
        item.css('top', topPos);
    });
}
