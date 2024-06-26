$(document).ready(function(){
						/*   
						  $(window).bind('resize', function() {
								 location.reload();
						 	 });*/
						  
						   window.onresize=function(){
							window.location=window.location;  
						  }
	
						  
						  
	
	window.h = $(window).innerHeight();
	window.width1 = $(window).width();
	window.w_Set = $(window).innerWidth();
	window.h_Set = $(window).innerHeight();
	
	//alert(width1)
 							 window.content_height=.81*h;
							 window.header_height=.07*h;
							 window.footer_height=.1*h;
							 
							 
							 window.button_count=2;
							 
							 
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
						   
							
							 
							
							
							
						 
						   
						  
						    $(".first_button").click(function(){
								$(".first_button").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".second_button,.third_button,.fourth_button,.fifth_button,.sixth_button,.seventh_button").css({'color':'black' ,'box-shadow':'0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
							 
								$(".hand1,.hand3,.hand4,.hand5,.hand6").hide();
								
							});
						 
						    $(".second_button").click(function(){
															    
								$(".second_button").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".first_button,.third_button,.fourth_button,.fifth_button,.sixth_button,.seventh_button").css({'color':'black' ,'box-shadow':'0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
								 
							});
							 $(".third_button").click(function(){
								$(".third_button").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".second_button,.first_button,.fourth_button,.fifth_button,.sixth_button,.seventh_button").css({'color':'black' ,'box-shadow':'0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
								 
							});
							  $(".fourth_button").click(function(){
								$(".fourth_button").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
								$(".second_button,.third_button,.first_button,.fifth_button,.sixth_button,.seventh_button").css({'color':'black' ,'box-shadow':'0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
								 
							});
							   $(".fifth_button").click(function(){
								$(".fifth_button").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".second_button,.third_button,.fourth_button,.first_button,.sixth_button,.seventh_button").css({'color':'black' ,'box-shadow':'0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
								 
							});
							    $(".sixth_button").click(function(){
								$(".sixth_button").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".second_button,.third_button,.fourth_button,.fifth_button,.first_button,.seventh_button").css({'color':'black' ,'box-shadow':'0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
							 
							});
								
								$(".seventh_button").click(function(){
								$(".seventh_button").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".second_button,.third_button,.fourth_button,.fifth_button,.first_button,.sixth_button").css({'color':'black' ,'box-shadow':'0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
								 
							});
						   

 			
			
			
 if(String(navigator.userAgent).indexOf("Edge") != -1){
					   
	if((window.width1 >= 450 && window.width1 <= 574)){  
	
	$(".handMainBtn").css("font-size", 17+"px");
	
	}else if((window.width1 >= 575 && window.width1 <= 675)){  
	
	$(".handMainBtn").css("font-size", 17+"px");
	
	}else if((window.width1 >= 676 && window.width1 <= 775)){  
	
	$(".handMainBtn").css("font-size", 20+"px");
	
	}else if((window.width1 >= 776 && window.width1 <= 876)){  
	
	$(".handMainBtn").css("font-size", 20+"px");
	
	}else if((window.width1 >= 877 && window.width1 <= 980)){  
	
	$(".handMainBtn").css("font-size", 25+"px");
	
	}else if((window.width1 >= 981 && window.width1 <= 1100)){  
	
	$(".handMainBtn").css("font-size", 30+"px");
	
	}else if((window.width1 >= 1101 && window.width1 <= 1300)){ 
	
	$(".handMainBtn").css({"font-size" : 30+"px" , "margin-top" : -60+"px"});
	
	}else if((window.width1 >= 1301 && window.width1 <= 1500)){  
	
	$(".handMainBtn").css({"font-size" : 30+"px" , "margin-top" : -55+"px"});
	
	}else if((window.width1 >= 1501 && window.width1 <= 1800)){  
	
	$(".handMainBtn").css({"font-size" : 45+"px" , "margin-top" : -90+"px"});
	
	}else if((window.width1 >= 1801 && window.width1 <= 2000)){ 
	
	$(".handMainBtn").css({"font-size" : 48+"px" , "margin-top" : -90+"px"});
	
	}else if((window.width1 >= 2000)){  
	
	$(".handMainBtn").css("font-size", 70+"px");
	
	}
}

			
			
		
		
		

					
 $(".print").click(function(){
							
   												 window.print();

																})
  $(".ButtonsForMasterQuery").click(function(){
											 
													  $(".middle").hide();	
											});
                            
						   }); 

