$(document).ready(function() {
    // Video popUP
    const vdeoSrc = $("#player-1").attr("src");
    $(".video-play-btn").on("click", function() {
        if($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src", "");
        } else {
            $(".video-popup").addClass("open");
            if($("#player-1"))
        }
    });
});