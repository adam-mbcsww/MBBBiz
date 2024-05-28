jQuery(document).ready(function() {
    jQuery("#carouselMBBmain").swipe({
    swipe: function(event, direction, distance, duration, fingerCount) {
      if (direction == "left") $(this).carousel("next");
      if (direction == "right") $(this).carousel("prev");
    },
    allowPageScroll: "vertical"
  });
});