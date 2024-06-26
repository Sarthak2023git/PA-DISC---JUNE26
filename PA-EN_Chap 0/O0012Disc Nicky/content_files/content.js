$(document).ready(function(){
						   
						    window.buttonSequence = 0;
							window.bp1=0;
							window.bp2=0;
						     					 
							 $(".hand1").show();
							 
							 $(".first_button").click(function(){
															   buttonSequence = 1;
															   ContentCount = 4;
															   $(".hand,.croosBM,.ContentContainer,.content1_5").hide();
															   $(".tick1,.ContentFirstButton,.hand2").show().css("display","inline-block");	
															   
															    $(".content1_3").css("visibility","visible");
															   
															   
																 });
							 
							  $(".second_button").click(function(){
																  buttonSequence = 2;
																  ContentCount =6;
															  $(".hand,.ContentContainer").hide();
															  $(".tick2,.ContentSecondButton,.hand3").show().css("display","inline-block");	
																 });
							  
							   $(".third_button").click(function(){
																  buttonSequence = 3;
																  ContentCount =4;
															   $(".hand,.ContentContainer").hide();
															   $(".tick3,.ContentThirdButton,.hand4").show().css("display","inline-block");	
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
							 
							 
							 $(".croosBM").click(function(){
							    $(".content1_5,.croosBM").hide()
								$(".content1_1,.content1_2,.content1_3,.content1_4").show()
								 $(".content1_3").css("visibility","visible");
							   });
							 
							 
								
							$(".caution").click(function(){
							    $(".content1_5,.croosBM").show()
								
								
							   });
							 
							 
						    
						
												   });
						
