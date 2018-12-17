$(document).ready(function(){


	$("nav div").click(function(){
		$("ul ul").slideUp();
		$(this).find(ul).slideToggle();
	});

	$(window).resize(function(){
		if($(window).width() > 768){
			$("ul").removeAttr
		}
	})
})