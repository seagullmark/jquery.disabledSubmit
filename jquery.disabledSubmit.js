/*
 * jQuery DisabledSubmit Plugin v1.0.0
 * 
 *
 * Copyright (c) 2012 Masaki Nishino (http://www.seagullmark.com)     
 */
(function($){ 
	$.fn.disabledSubmit = function(){

		$(this).find('input[type=submit]').removeAttr('disabled');
	
		$(this).find('input[type=submit]').click(function(){
			var name  = $(this).attr('name');
			var value = $(this).val();
			var input = $(document.createElement('input'));
			input.attr('type', 'hidden');
			input.attr('name', name);
			input.attr('value', value);
			$('form').append(input);
		});	
	
		$(this).submit(function(){$(this).find('input[type=submit]').attr('disabled','disabled');});
	};
})(jQuery);