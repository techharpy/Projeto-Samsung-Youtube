$(function(){
	$('#mobile').find('i').click(function(){
		$('#bars').toggleClass('fa-times');
		if($('#mobile').find('ul.mobileM').is(':visible')){
			$('#mobile').find('ul.mobileM').hide();
			$('body').css('background','#fff')
		}else{
			$('#mobile').find('ul.mobileM').show();
			$('body').css('background','#ccc')
		}
	})

	$('.aWrapper,.aWrapperTroca').click(function(){
		if($(this).parent().find('.submenu-mobile').is(':visible')){
			$(this).parent().find('.submenu-mobile').hide();
			$(this).parent().find('.aWrapperTroca').hide();
			$(this).parent().find('.aWrapper').show();
		}else{
			$(this).parent().find('.submenu-mobile').show();
			$(this).hide();
			$(this).parent().find('.aWrapperTroca').css("display","flex");
		}
	})
})