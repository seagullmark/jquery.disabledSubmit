/*
 * jQuery DisabledSubmit Plugin v1.1.0
 * 
 *
 * Copyright (c) 2012 Masaki Nishino (http://www.seagullmark.com)     
 */
(function($){ 
	$.fn.disabledSubmit = function(){

		var form = $(this);

		form.find('input[type=submit]').removeAttr('disabled');
	
		form.find('input[type=submit]').click(function(){
			$(this).find('.disabled-Submit').remove();
			var name  = $(this).attr('name');
			var value = $(this).val();
			var input = $(document.createElement('input'));
			input.attr({ 
				type: 'hidden',
				name: name,
				value: value
			});
			input.addClass('disabled-Submit');
			form.append(input);
		});	

		form.submit(function(){$(this).find('input[type=submit]').attr('disabled','disabled');});
	};
})(jQuery);