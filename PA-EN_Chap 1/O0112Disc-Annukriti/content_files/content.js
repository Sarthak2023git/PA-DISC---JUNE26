$(document).ready(function(){
						   
						    window.buttonSequence = 0;
							window.bp1=0;
							window.bp2=0;
						     					 
							 $(".hand1").show();
							 window.h=0;
							 
							 $(".first_button").click(function(){
															   buttonSequence = 1;
															   ContentCount = 5;
															   $(".hand,.ContentContainer").hide();
															   $(".tick1,.ContentFirstButton,.hand2,.middle1").show().css("display","inline-block");	
																 });
							 
							  $(".second_button").click(function(){
																  buttonSequence = 2;
																  ContentCount = 4;
															  $(".hand,.ContentContainer").hide();
															  $(".tick2,.ContentSecondButton,.hand3,.middle2").show().css("display","inline-block");	
																 });
							  
							   $(".third_button").click(function(){
																  buttonSequence = 3;
																  ContentCount = 6;
															   $(".hand,.ContentContainer").hide();
															   $(".tick3,.ContentThirdButton,.hand4,.middle3").show().css("display","inline-block");
															   
															   h = $(".div1").height();
															   mar = h/2;
															   $(".div2").css("margin-top", mar*0.8 + "px");

																 });
							   
							   $(".fourth_button").click(function(){
																   buttonSequence = 4;
																   ContentCount =5;
															   $(".hand,.ContentContainer").hide();
															   $(".tick4,.ContentFourthButton,.hand5,.middle4").show().css("display","inline-block");	
																 });
							   /* $(".fifth_button").click(function(){
																   buttonSequence = 5;
																   ContentCount =9;
															   $(".hand,.ContentContainer").hide();
													           $(".tick5,.ContentFifthButton").show().css("display","inline-block");	
																 });*/
							 
							 
							 
							 
							
							 
							 
						    
						
												   });
						
