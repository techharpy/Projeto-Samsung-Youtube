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


	$('.galaxy1,.galaxy2').click(function(e){
		let video1 = 'https://www.youtube.com/embed/ziQL-aM6U6M'
		let video2 = 'https://www.youtube.com/embed/aUC685bxlZ8'
		let modal = $(this).parent().parent().parent().find('section.modal-video')
		let verifica = $(this).attr("class").split(' ')[1];
		modal.show()		
		if(verifica == 'galaxy1'){
			modal.find('.video').append(`<iframe src="${video1}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`)
		}else if(verifica == 'galaxy2'){
			modal.find('.video').append(`<iframe src="${video2}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`)
		}		
		$('.fechar').click(function(){
			$('section.modal-video').hide()
		})
	})



})