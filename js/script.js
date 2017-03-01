var toggleHeads;

$(document).ready(function(){
    var head1 = $('.driver-head-1');
    var head2 = $('.driver-head-2');

    toggleHeads = function() {
        head1.toggleClass('hide');
        head2.toggleClass('hide');
    }
});
