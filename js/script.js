$(document).ready(() => {
    var toggleHeads;
    var windowHeight = $(window).height();

    var initialOffset = 100;
    var animSpeed = 0.3;

    var head1 = $('.driver-head-1');
    var head2 = $('.driver-head-2');

    toggleHeads = function() {
        head1.toggleClass('hide');
        head2.toggleClass('hide');
    }

    // get the animation container div
    var animationContainer = $('#animationContainer');

    // get it's top value
    var animTop = animationContainer.offset().top;

    // get all info_boxes
    var infoBoxes = $('.animation-container .info-box');

    // get all images
    var imgs = $('.animation-container > img');

    // store info_boxes and images into an array
    var arr = [...infoBoxes, ...imgs];

    // set top position to data-top attribute
    setTopPos(arr, initialOffset);





    $(window).resize(() => {
        windowHeight = $(window).height();
    });

    $(document).scroll(() => {
        var documentTop = $(document).scrollTop();

        // if document's top scroll position + the window height
        // is bigger than the animation container top offset
        // start animating things around
        if(documentTop + windowHeight > animTop){
            var newTopOffset = initialOffset - (((documentTop + windowHeight) - animTop) * animSpeed);
            setTopPos(arr, newTopOffset);
        }
    });

    function setTopPos(arr, offset) {
        // loop through all array items
        arr.forEach((item) => {

            // convert DOM element to jQuery obj
            item = $(item);

            // get the data-top attribute
            // add the offset to it
            var topPos = item.data('top') + offset + 'px';

            // set the value to it's top attribute
            item.css('top', topPos);
        });
    }

});
