$(document).ready(function () {
    $("#mobile-nav").hide();
    $("#sidebar-btn").hide();
    $("#sidebar-btn").click(function () {
        $("#mobile-nav").show(280);
        $("#sidebar-btn").hide();
        $("#head-sec").addClass("bio-head");
        $("#head-img").addClass("bio-head");
    });
    var MAX_WIDTH = 720, $window = $(window), oter_width = 830, toggleEnabled = true;
    $window.on('resize', function () {


        if ($window.width() > MAX_WIDTH) {
            $("#sidebar-btn").hide();
            $("#mobile-nav").hide();
            $("#desktop-nav").show();
        } else {

            $("#sidebar-btn").show();
            $('#desktop-nav').hide();
            $("#mobile.div").hide();
            toggleEnabled = true;
        }
        if ($window.width < oter_width) {
            $(".empty-div").hide();
        }
    });
    $window.trigger('resize');
    $("#hide-nav").click(function () {
        $("#mobile-nav").hide(280);
        $("#sidebar-btn").show();
        $("#head-sec").removeClass("bio-head");
        $("#head-img").removeClass("bio-head");
    });
    $("#show-more").click(function () {
        $("#view-all").show();
        $("#show-more").hide();
        $("#show-less").show();
    });
    $("#show-less").click(function () {
        $("#view-all").hide();
        $("#show-less").hide();
        $("#show-more").show();
    });
});