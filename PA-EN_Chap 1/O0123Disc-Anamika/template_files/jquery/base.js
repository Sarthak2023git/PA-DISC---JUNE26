$(document).ready(function(){
						   
						  $(window).bind('resize', function() {
								 location.reload();
						 	 });
						  
						  
	
	window.h = $(window).innerHeight();
	window.width1 = $(window).width();
	window.w_Set = $(window).innerWidth();
	window.h_Set = $(window).innerHeight();
	
	//alert(width1);

/*if(w_Set==1280)
{
	$(".container-fluid").css("width", 1200 +"px")	
}*/
	/*if (h >= 768 && String(navigator.userAgent).indexOf("Mobile") == -1) {

		h = 768;
		

		$(".container-fluid").css("margin-top", (h_Set - h) / 2 + "px");
		//$(".container-fluid").css("width", w-300 +"px");

	}

	 $(".container-fluid").css("height", h +"px");*/
	 
							 window.content_height=.81*h;
							 window.header_height=.07*h;
							 window.footer_height=.1*h;
							 
							 
							 window.button_count=3;
							 
							 
							 b=content_height/button_count;
							 btn_height=.88*b;
							 window.btn_margin=.05*btn_height;
							 window.handCursor_fontSize = 0.6*btn_height;
							 window.hand_margin=.2*btn_height;
							 window.handCursor_fontSize = 0.6*btn_height;
							
						  
						  
						  
						  if(button_count==2)
						   {
							    btn_height=.4*b;
								btn_margin=.6*btn_height;
						   }
						   
	
						   $(".buttons").css("height", b +"px");
						   $(".MainBtns").css("height", btn_height +"px");
						   $(".MainBtns").css("margin-top", btn_margin +"px");
						   $(".MainBtns").css("padding", 1 +"px");
						   
						   
						  
						    $(".first_button").click(function(){
								$(".first_button").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".second_button,.third_button,.fourth_button,.fifth_button,.sixth_button").css({'color':'black' ,'box-shadow':'0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
								/*$(".hand2").show().css('display', 'inline-block');*/
								$(".hand1,.hand3,.hand4,.hand5,.hand6").hide();
								
							});
						 
						    $(".second_button").click(function(){
															    
								$(".second_button").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".first_button,.third_button,.fourth_button,.fifth_button,.sixth_button").css({'color':'black' ,'box-shadow':'0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
								/*$(".hand3").show().css('display', 'inline-block');
								$(".hand1,.hand2,.hand4,.hand5,.hand6").hide();
								$(".tick2").show().css('display', 'inline-block');
								$(".tick1,.tick3,.tick4,.tick5,.tick6").hide();*/
							});
							 $(".third_button").click(function(){
								$(".third_button").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".second_button,.first_button,.fourth_button,.fifth_button,.sixth_button").css({'color':'black' ,'box-shadow':'0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
								/*$(".hand4").show().css('display', 'inline-block');
								$(".hand2,.hand1,.hand3,.hand5,.hand6").hide();
								$(".tick3").show().css('display', 'inline-block');
								$(".tick1,.tick2,.tick4,.tick5,.tick6").hide();*/
							});
							  $(".fourth_button").click(function(){
								$(".fourth_button").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
								$(".second_button,.third_button,.first_button,.fifth_button,.sixth_button").css({'color':'black' ,'box-shadow':'0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
								/*$(".hand5").show().css('display', 'inline-block');
								$(".hand2,.hand3,.hand1,.hand4,.hand6").hide();
								$(".tick4").show().css('display', 'inline-block');
								$(".tick1,.tick2,.tick3,.tick5,.tick6").hide();*/
							});
							   $(".fifth_button").click(function(){
								$(".fifth_button").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".second_button,.third_button,.fourth_button,.first_button,.sixth_button").css({'color':'black' ,'box-shadow':'0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
								/*$(".hand6").show().css('display', 'inline-block');
								$(".hand2,.hand3,.hand4,.hand1,.hand5").hide();
								$(".tick5").show().css('display', 'inline-block');
								$(".tick1,.tick2,.tick3,.tick4,.tick6").hide();*/
							});
							    $(".sixth_button").click(function(){
								$(".sixth_button").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".second_button,.third_button,.fourth_button,.fifth_button,.first_button").css({'color':'black' ,'box-shadow':'0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
								/*$(".hand7").show().css('display', 'inline-block');
								$(".hand2,.hand3,.hand4,.hand5,.hand1").hide();
								$(".tick6").show().css('display', 'inline-block');
								$(".tick1,.tick2,.tick3,.tick4,.tick5").hide();*/
							});
						   

 

					
 $(".print").click(function(){
							
   												 window.print();

																})
                            
						   }); 

