﻿setTimeout(function () {

    $("#statusText").text("Done!");
    $(".cube, .sides *").css("animation-play-state", "paused");
    $(".cube, .sides").addClass("removeAnimation");
    $("#statusText").fadeOut(1000);

    $("#loadingAnimationContainer").fadeOut(1000);
    //Test comment for first Github commit!
    //$.getScript("3dCubeRotation.js", function () {});

}, 9800);