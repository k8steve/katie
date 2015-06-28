$(document).ready(function(){

	if($('body').attr('id')==="index"){
		window.setTimeout(function(){
			$('#katieIntro').fadeOut(1500);
		}, 500);
		
	};

	if($('html').hasClass('touch')){
		var menu = $('ul');

		menu.click(function(){
			menu.toggleClass('open');
		});
	};

	$('.playbutton').click(function(){
		var button = $(this);

		button.parent().find('img').remove();
		button.remove();
	});
});