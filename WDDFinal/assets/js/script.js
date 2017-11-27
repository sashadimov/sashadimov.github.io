$(document).ready(function() {
	var prev = 0;
	var $window = $(window);
	var nav = $('#navbar');

	$window.on('scroll', function(){
		// jQuery Function Number 1 
  		var scrollTop = $window.scrollTop();
  		if (scrollTop > prev) {
  			// jQuery Function Number 2 
  			nav.addClass('hidden')
  		} else {
  			// jQuery Function Number 3
  			nav.removeClass('hidden') }
  		prev = scrollTop;
	});
	// jQuery Function Number 4
	$('a[href^="#"]').click(function() {
		// jQuery Function Number 5
      	var target = $(this).attr('href');
        $('html, body').animate({
       		// jQuery Function Number 6
          	scrollTop: $(target).offset().top
        }, 900);
        return false;
    });
 
    $('.goToTop').click(function() {

    	$('html, body').animate({
          	scrollTop: 0
        }, 900);
        return false;
    })

});