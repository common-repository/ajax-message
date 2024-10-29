jQuery(document).ready(function($) {
	// form 1
	$('.ajax-form').on('submit', function(e) {
		e.preventDefault();
		$.ajax({
			type: 'post',
			url: ajax.url,
			//dataType: 'json',
			data: { 
				action:        'ae_action', 
				name:          $( '#name' ).val(), 
				message:       $( '#message' ).val(),
				captcha:       $( '#captcha' ).val(),
				captcha_value: $( '#captcha_value' ).val(),
				from:          $( '#from' ).val(),
				subject:       $( '#subject' ).val(),
				_ajax_nonce:   ajax.nonce
			},
			beforeSend: function() {
				$('#load').appendTo('#load').fadeIn('fast');
			},
			success: function(html){ 
				$('#load').appendTo('#load').fadeOut('slow'); 
				$('#response').html(html).show();
				$('.alert-close').click(function(e){
					e.preventDefault();
					$('#response').hide(); 
				}); 
			},
			error: function(xhr){
				console.log('Error: ' + xhr.responseCode);
			}	     
		}); //close jQuery.ajax
	});
	// form 2
	$('.ajax-form-widget').on('submit', function(e) {
		e.preventDefault();
		$.ajax({
			type: 'post',
			url: ajax.url,
			//dataType: 'json',
			data: { 
				action:        'ae_action', 
				name:          $( '#name2' ).val(), 
				message:       $( '#message2' ).val(),
				captcha:       $( '#captcha2' ).val(),
				captcha_value: $( '#captcha_value' ).val(),
				from:          $( '#from2' ).val(),
				subject:       $( '#subject2' ).val(),
				_ajax_nonce:    ajax.nonce
			},
			beforeSend: function() {
				$('#load2').appendTo('#load2').fadeIn('fast');
			},
			success: function(html){ 
				$('#load2').appendTo('#load2').fadeOut('slow'); 
				$('#response2').html(html).show();
				$('.alert-close').click(function(e){
					e.preventDefault();
					$('#response2').hide(); 
				}); 
			},
			error: function(xhr){
				console.log('Error: ' + xhr.responseCode);
			}	     
		}); //close jQuery.ajax
	});

});