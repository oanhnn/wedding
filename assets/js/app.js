$(document).ready(function () {
    $('.countdown').each(function () {
        var due = $(this).data('due'), format = $(this).data('format'), expired = $(this).data('expired');
        $(this).countdown(new Date(due))
                .on('update.countdown', function (event) {
                    $(this).html(event.strftime(format));
                })
                .on('finish.countdown', function (event) {
                    $(this).html(expired).parent().addClass('disabled');
                });
    });

    $('.my-gallery a[data-photos]').on('click', function () {
        var photos = eval($(this).data('photos'));
        var baseUrl = $(this).data('baseUrl');
        var items = [];
        photos.forEach(function (photo) {
            items.push({
                src: baseUrl + photo.src,
                w: photo.width,
                h: photo.height
            });
        });

        var options = {
            // history & focus options are disabled on CodePen        
            history: false,
            focus: false,
            showAnimationDuration: 0,
            hideAnimationDuration: 0

        };

        var gallery = new PhotoSwipe($('.pswp').get(0), PhotoSwipeUI_Default, items, options);
        gallery.init();
    });
});