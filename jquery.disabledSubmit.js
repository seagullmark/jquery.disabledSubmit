/*
 * jQuery DisabledSubmit Plugin v1.0.2
 * 
 *
 * Copyright (c) 2012 Masaki Nishino (http://www.seagullmark.com)     
 */
(function($){ 
	$.fn.disabledSubmit = function(){

		var form = $(this);

		$(form).find('input[type=submit]').removeAttr('disabled');
	
		$(form).find('input[type=submit]').click(function(){
	
			var name  = $(this).attr('name');
			var flg;
		
			$(form).find('input[type=hidden]').each(function(){
			
				if($(this).attr('name') == name) return flg = false;
				return flg = true;
			});
						
			if(flg){
		
				var value = $(this).val();
				var input = $(document.createElement('input'));
			
				input.attr('type', 'hidden');
				input.attr('name', name);
				input.attr('value', value);
			
				$(form).append(input);
			}
		});	

		$(form).submit(function(){$(this).find('input[type=submit]').attr('disabled','disabled');});
	};
})(jQuery);