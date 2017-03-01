var toggleHeads;
var windowHeight = $(window).height();

$(document).ready(() => {
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

    // store info_boxes and images into an array
    var arr = [...info_boxes, ...imgs];

    // set top position to data-top attribute
    setDOMArrayToPos(arr);
    //setDOMArrayToPos(imgs);
});

function setDOMArrayToPos(arr) {
    // loop through all array items
    arr.forEach((item) => {

        // convert DOM element to jQuery obj
        item = $(item);

        // get the data-top attribute
        var topPos = item.data('top') + 'px';

        // set the value to it's top attribute
        item.css('top', topPos);
    });
}

$(document).scroll(() => {
    var documentTop = $(document).scrollTop();

    console.log('documentTop', documentTop, 'windowHeight', windowHeight)
});
