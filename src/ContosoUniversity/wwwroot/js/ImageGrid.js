$(document).ready(function () {

    var dashImages = [
        '/images/ResumeImg/Dash/accountQueueMain.png',
        '/images/ResumeImg/Dash/bbQueueAvgSumPaginationEx.PNG',
        '/images/ResumeImg/Dash/bbQueueFilterExample.PNG',
        '/images/ResumeImg/Dash/bbQueueTableConfig1.PNG',
        '/images/ResumeImg/Dash/bbQueueTableConfig2wContext.PNG',
        '/images/ResumeImg/Dash/bbQueueTablescript1.PNG',
        '/images/ResumeImg/Dash/bbQueueTop.PNG',
        '/images/ResumeImg/Dash/chartJSCircleGraphEx.png',
        '/images/ResumeImg/Dash/chartjsEx2.png',
        '/images/ResumeImg/Dash/circleMetricjs.png',
        '/images/ResumeImg/Dash/cssEx1.png',
        '/images/ResumeImg/Dash/dashMain.png',
        '/images/ResumeImg/Dash/dashScriptsMain.png',
        '/images/ResumeImg/Dash/enhancementQueueBottom.png',
        '/images/ResumeImg/Dash/enhancementQueueTop.png',
        '/images/ResumeImg/Dash/equipQueueMain.png',
        '/images/ResumeImg/Dash/mySQLbbQueue.png',
        '/images/ResumeImg/Dash/mySQLEx1.png',
        '/images/ResumeImg/Dash/overlayScript.png',
        '/images/ResumeImg/Dash/supportQueueBottom.png',
        '/images/ResumeImg/Dash/supportQueueTop.png',
        '/images/ResumeImg/Dash/toptenByBranchEx.png',
        '/images/ResumeImg/Dash/unobtrusiveEx2.png',
        '/images/ResumeImg/Dash/unobtrusiveTabShow.png',
        '/images/ResumeImg/Emailer/licensManagerpic1.PNG',
        '/images/ResumeImg/Emailer/licensManagerpic2.PNG',
        '/images/ResumeImg/TaskTracker/addeditTasksFormITTT.png',
        '/images/ResumeImg/TaskTracker/AEformBackEndITTT.png',
        '/images/ResumeImg/TaskTracker/appUsage1.png',
        '/images/ResumeImg/TaskTracker/appUsage2.png',
        '/images/ResumeImg/TaskTracker/appUsage3.png',
        '/images/ResumeImg/TaskTracker/comfPromptBackendITTT.png',
        '/images/ResumeImg/TaskTracker/comfPromptITTT.png',
        '/images/ResumeImg/TaskTracker/homeScreenITTT.png',
        '/images/ResumeImg/TaskTracker/keyupsearchFunctionITTT.png',
        '/images/ResumeImg/TaskTracker/mysqlTaskTableITTT.png',
        '/images/ResumeImg/TaskTracker/phpDataImportITTT.png',
        '/images/ResumeImg/TaskTracker/progressBar09ITTT.png',
        '/images/ResumeImg/TaskTracker/progressBar33ITTT.png',
        '/images/ResumeImg/TaskTracker/progressBar100ITTT.png',
        '/images/ResumeImg/TaskTracker/progressBarlogicBackEndITTT.png',
        '/images/ResumeImg/TaskTracker/updateNewRecordbackendASQL_ITTT.png',
        '/images/ResumeImg/TaskTracker/zoomOnTrITTT.png'
    ];

    var imgGallery = '';
    var i;

    imgGallery += '<div id="imgGallery" class="w3-container">';
    imgGallery += '<div class="w3-row-padding" style="margin:0 -16px">';


    for (i = 0; i < dashImages.length; i++) {
        while (i < 1) {
            imgGallery += '<div class="w3-col s4">';
            i++;
        }
        while (i < 43) {
            imgGallery += '<img src=' + dashImages[i] + ' style="width:100%;cursor:pointer" onclick="openModal();currentDiv(i)" class="w3-hover-shadow">';
            imgGallery += '</div>';
            imgGallery += '<div class="w3-col s4">';
            i++;
        }
    }

    imgGallery += '</div>';
    imgGallery += '</div>';

    $('#imgGalleryContainer').append(imgGallery);

    var modalGallery = '';
    var x;

    for (x = 0; x < dashImages.length; x++)
    {
        while (x < 43) {
            modalGallery += '<img class="mySlides" src=' + dashImages[x] + ' style = "width:100%; height:100%;">';
            x++;
        }
    }

    $('.w3-content').append(modalGallery);
});