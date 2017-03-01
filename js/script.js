$(document).ready(() => {
    // get all info_boxes
    var infoBoxes = $('.animation-container .info-box');

    // get all images
    var imgs = $('.animation-container > img');

    // store info_boxes and images into an array
    var arr = [...infoBoxes, ...imgs];

    // set top position to data-top attribute
    setTopPos(arr);


    $(document).scroll(() => {

    });

    function setTopPos(arr) {
        var pixels = pixels || 0;
        // loop through all array items
        arr.forEach((item) => {

            // convert DOM element to jQuery obj
            item = $(item);

            // get the data-top attribute
            // add the offset to it
            var topPos = item.data('top')

            // set the value to it's top attribute
            item.css('top', topPos + 'px');
        });
    }

});
