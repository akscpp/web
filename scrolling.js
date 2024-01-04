$(document).ready(function () {
    var currentIndex = 0;
    var $services = $(".services");
    var $indicatorDots = $(".services-indicator").children();

    // Update the indicator when scrolling
    function updateIndicator() {
        $indicatorDots.removeClass("active");
        $indicatorDots.eq(currentIndex).addClass("active");
    }

    // Handle swipe left/right to scroll
    $services.on("swipeleft", function () {
        if (currentIndex < $services.children().length - 1) {
            currentIndex++;
            var translateX = -currentIndex * 100 + "%";
            $services.css("transform", "translateX(" + translateX + ")");
            updateIndicator();
        }
    });

    $services.on("swiperight", function () {
        if (currentIndex > 0) {
            currentIndex--;
            var translateX = -currentIndex * 100 + "%";
            $services.css("transform", "translateX(" + translateX + ")");
            updateIndicator();
        }
    });
});
