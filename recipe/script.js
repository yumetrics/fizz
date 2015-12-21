/*
Users can mark an ingredient after they buy it.
Users can keep their place in the directions list as they cook.
Users can hide all photos.
*/

$(document).ready(function() {
	$('.checkBox').click(function() {
		var allPictures = $('.painsupp, .fruitcake, .supper');
        if ((allPictures.css('opacity')) == 1) {
        	$(allPictures).fadeTo('slow', 0);
        	$('.checkBox').css('background-color', '#ff5c33');
        } else if ((allPictures.css('opacity')) == 0) {
        	$(allPictures).fadeTo('slow', 1);
        	$('.checkBox').css('background-color', 'green');
        } else {
        	return;
		}
	});
	$('li').click(function() {
		var lineGlow = $('li');
		$(lineGlow).removeClass('glow');
		if (((lineGlow).hasClass('glow')) == 0) {
			$(this).addClass('glow');
		} else if ((lineGlow.hasClass('glow')) == 1) {
			$(this).removeClass('glow');
		}
	});
	$('.checkList').click(function() {
		var haveItem = $('li.div.div');
		if ($(haveItem).css('background-color', 'red')) {
			$(this).css('background-color', '#00ff00');
		} else {
			$(this).css('background-color', '#FF0000');
		}
	});
});