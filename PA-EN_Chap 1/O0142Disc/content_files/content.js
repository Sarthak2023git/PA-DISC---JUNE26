$(document).ready(function(){
						   
						    window.buttonSequence = 0;
							window.bp1=0;
							window.bp2=0;
						     					 
							 $(".hand1").show();
							 
							 $(".first_button").click(function(){
															   buttonSequence = 1;
															   ContentCount = 9;
															   $(".hand,.ContentContainer").hide();
															   $(".tick1,.ContentFirstButton,.hand2,.middle1").show().css("display","inline-block");	
																 });
							 
							  $(".second_button").click(function(){
																  buttonSequence = 2;
																  ContentCount = 9;
															  $(".hand,.ContentContainer").hide();
															  $(".tick2,.ContentSecondButton,.hand3,.middle2").show().css("display","inline-block");	
																 });
							  
							   $(".third_button").click(function(){
																  buttonSequence = 3;
																  ContentCount = 5;
															    $(".hand,.ContentContainer").hide();
															   $(".tick3,.ContentThirdButton,.hand4,.middle3").show().css("display","inline-block");		
																 });
							   
							   $(".fourth_button").click(function(){
																   buttonSequence = 4;
																   ContentCount =7;
															   $(".hand,.ContentContainer").hide();
															   $(".tick4,.ContentFourthButton,.hand5,.middle4").show().css("display","inline-block");
															   $(".hide").css('visibility','hidden');
															    
																 });
							    
							 
							  $(".third_button1").click(function(){
																  buttonSequence = 5;
																  ContentCount = 5;
															   $(".hand,.ContentContainer,.handA").hide();
															    $(".tick4,.ContentFourthButton,.middle4").show().css("display","inline-block");
															   $(".SubBtn").css("color", "#000000");
															    $(".third_button1").css("color", "#CC0000");
															    $(".third_button2").css("color", "#000");
															     $(".hide1").css("visibility","hidden");
															     $(".hide2").hide();
																//$(".move2").removeClass("move3");
																 });
							  
							  
							  $(".third_button2").click(function(){
																 buttonSequence = 6;
																 ContentCount = 6;
															    $(".hand,.ContentContainer,.handA").hide();
															    $(".tick5,.ContentFourthButton,.middle5").show().css("display","inline-block");
															   $(".SubBtn").css("color", "#000000");
															    $(".third_button2").css("color", "#CC0000");
															   $(".third_button1").css("color", "#000");
															     $(".hide1").css("visibility","hidden");
															    $(".hide2").hide();
															   $(".img3_11,.img3_12,.img3_13,.img3_14,.img3_15").css('visibility', 'hidden');
															   $(".text3_5,.text3_6").css('visibility', 'hidden');
															   $(".img3_00").css('visibility', 'visible');
																 });
							 
							 
							
							 
							 
						    
						
												   });
						
