$(document).ready(function () {
    var videoCarousel = '';
    $.ajax({
        type: 'GET',
        url: 'https://xboxapi.com/v2/2533275034521564/game-clips',
        dataType: 'json',
        headers: {
            "X-Auth": "525f0da8ce67604e07ce1ee4fbf3303356e4347c",
            "Content-Type": "application/json"
        },
        success: function (data) {
            var i;
            console.log(data);

            videoCarousel += '<div id="gameCarousel" class="carousel slide" data-ride="carousel" data-interval="false">';
            videoCarousel += '<ol class="carousel-indicators" style="bottom: -50px;">';
            videoCarousel += '<li data-target="#gameCarousel" data-slide-to="0" class="active"></li>';
            videoCarousel += '<li data-target="#gameCarousel" data-slide-to="1"></li>';
            videoCarousel += '<li data-target="#gameCarousel" data-slide-to="2"></li>';
            videoCarousel += '<li data-target="#gameCarousel" data-slide-to="3"></li>';
            videoCarousel += '</ol>';

            for (i = 0; i < data.length; i++) {
                while (i < 1) {
                    videoCarousel += '<div class="carousel-inner" role="listbox">';
                    videoCarousel += '<div class="item active">';
                    videoCarousel += '<video autoplay id="video" width="100%" height="100%" controls poster=' + data[i].thumbnails[0].uri + '>';
                    videoCarousel += '<source src=' + data[i].gameClipUris[0].uri + '></video>';
                    videoCarousel += '<div class="carousel-caption">';
                    videoCarousel += '<h3>' + data[i].titleName + '</h3>';
                    videoCarousel += '</div></div>';
                    i++;
                }
                while (i < 4) {
                    videoCarousel += '<div class="item">';
                    videoCarousel += '<video id="video1" width="100%" height="100%" controls poster=' + data[i].thumbnails[0].uri + '>';
                    videoCarousel += '<source src=' + data[i].gameClipUris[0].uri + '></video>';
                    videoCarousel += '<div class="carousel-caption">';
                    videoCarousel += '<h3>' + data[i].titleName + '</h3></div>';
                    videoCarousel += '</div>';
                    i++;
                }
            }

            videoCarousel += '</div>';
            videoCarousel += '<a class="left carousel-control" href="#gameCarousel" data-slide="prev">';
            videoCarousel += '<span class="glyphicon glyphicon-step-backward"></span>';
            videoCarousel += '</a>';
            videoCarousel += '<a class="right carousel-control" href="#gameCarousel" data-slide="next">';
            videoCarousel += '<span class="glyphicon glyphicon-step-forward"></span>';
            videoCarousel += '</a>';
            videoCarousel += '</div>';

            $('#test1').append(videoCarousel);
            $("#gameCarousel").on('slid.bs.carousel', function () {
                document.getElementById('video').pause();
            });
            $("#gameCarousel").on('slid.bs.carousel', function () {
                document.getElementById('video1').pause();
            });
        }
    });
    $("#gameCarousel").on('slid.bs.carousel', function () {
        document.getElementById('video').pause();
    });
});

$("#gameCarousel").on('slid.bs.carousel', function () {
    document.getElementById('video').pause();
});