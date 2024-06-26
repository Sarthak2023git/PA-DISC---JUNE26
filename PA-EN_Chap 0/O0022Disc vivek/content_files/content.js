$(document).ready(function(){
						   
						    window.buttonSequence = 0;
							window.bp1=0;
							window.bp2=0;
						     					 
							 $(".hand1").show();
							 
							 $(".first_button").click(function(){
															   buttonSequence = 1;
															   ContentCount = 6;
															   $(".hand,.ContentContainer").hide();
															   $(".img0,.img1").hide();
															   $(".tick1,.ContentFirstButton,.hand2,.middle1").show().css("display","inline-block");	
																 });
							 
							  $(".second_button").click(function(){
																  buttonSequence = 2;
																  ContentCount = 6;
															  $(".hand,.ContentContainer").hide();
															  $(".tick2,.ContentSecondButton,.hand3,.middle2").show().css("display","inline-block");	
																 });
							  
							   $(".third_button").click(function(){
																  buttonSequence = 3;
																  ContentCount = 0;
															   $(".hand5,.tickA,.ContentContainer,.handA").hide();
															   $(".tick3,.ContentThirdButton,.hand4").show().css("display","inline-block");	
															     $(".third_button1").css("color","#000000");
										 $(".third_button2").css("color","#000000");
																 });
							   
							   
							   
							    $(".third_button1").click(function(){
															   buttonSequence = 4;
															   ContentCount = 6;
															   $(".hand4,.tick22A,.middle4").hide();
															   $(".tick21A,.middle3").show().css("display","inline-block");	
															   
															     $(".third_button1").css("color","#cc0000");
										 $(".third_button2").css("color","#000000");
															  
																 });
							  
							  $(".third_button2").click(function(){
															   buttonSequence = 5;
															   ContentCount = 6;
															   $(".hand4,.middle3,.handA").hide();
															   $(".tick22A,.middle4").show().css("display","inline-block");	
															    $(".content8_3").css("visibility","visible");
															   
															   
															   
															     $(".third_button2").css("color","#cc0000");
										 $(".third_button1").css("color","#000000");
																 });
							   
							   
							   
							   
							   $(".fourth_button").click(function(){
																   buttonSequence = 4;
																   ContentCount =8;
															   $(".hand,.ContentContainer").hide();
															   $(".tick4,.ContentFourthButton,.hand5").show().css("display","inline-block");	
																 });
							    $(".fifth_button").click(function(){
																   buttonSequence = 5;
																   ContentCount =9;
															   $(".hand,.ContentContainer").hide();
													           $(".tick5,.ContentFifthButton").show().css("display","inline-block");	
																 });
							 
							 
							 
							 
							
							 
							 
						    
						
												   });
						
