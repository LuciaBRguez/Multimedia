window.addEventListener('load', () => {
    addTrailer();
});

function addTrailer() {
    var element = document.getElementsByTagName("trailer");
    var id = element[0].id;

    $.ajax({
        type: 'GET',
        url: 'https://vimeo.com/api/oembed.json?url=' + encodeURIComponent("https://vimeo.com/"+ id),
        dataType: 'json',
        success: function (data) {
            document.getElementById(id).innerHTML =
                '<iframe src="https://player.vimeo.com/video/'+id+'" ' +
                'width="320" height="240" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
        },
        error: function (data) {
            $.ajax({
                type: 'GET',
                url: 'https://api.dailymotion.com/video/' + id,
                dataType: 'json',
                success: function (data) {
                    document.getElementById(id).innerHTML =
                        '<iframe src="https://www.dailymotion.com/embed/video/'+id+'" ' +
                        'width="320" height="240" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
                },
                error: function (data) {
                    $.ajax({
                        type: 'GET',
                        url: 'https://www.googleapis.com/youtube/v3/videos?id=' + id,
                        dataType: 'jsonp',
                        crossDomain: true,
                        success: function (data) {
                            document.getElementById(id).innerHTML =
                                '<iframe src="http://www.youtube.com/embed/'+id+'" ' +
                                'width="320" height="240" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
                        },
                        error: function (data) {
                            document.getElementById(id).innerHTML =
                                '<p>El vídeo no pertenece a vimeo, dailymotion o youtube</p>'
                        }
                    });
                }
            });
        }
    });
}