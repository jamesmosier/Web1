$( document ).ready(function() {
          $("[data-toggle='tooltip']").tooltip();
});

$(".navbar-scroll-to a").click(function(event) {
    event.preventDefault();

    var dest = 0;
    if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
      dest = $(document).height() - $(window).height();
    } else {
      dest = $(this.hash).offset().top - 50;
    }

    $('html,body').animate({
      scrollTop: dest
    }, 500, 'swing');
});