window.onload = function() {
	TweenMax.from('#logo-wrapper', 2.5, { ease: Back.easeOut.config(1.7), scale: 0, y: 0 }); 
  
	TweenMax.from('#slogan', 3, {
		y: -200,
		scale: 1, 
		autoAlpha: 0,
		delay: 2,
	});
	// TweenMax.from('#slogan2', 3, {
	// 	y: -100,
	// 	scale: 1, 
	// 	autoAlpha: 0,
	// 	delay: 3,
	// });

	$('#fullPage').fullpage({
		// sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff']
		scrollingSpeed: 800,

		//options here
		// autoScrolling:true,
		// scrollHorizontally: true
	});

}
