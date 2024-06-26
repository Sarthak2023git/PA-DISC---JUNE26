$(document).ready(function(){
						   
						    window.buttonSequence = 0;
							window.bp1=0;
							window.bp2=0;
						     					 
							 $(".hand1").show();
							 
							 $(".first_button").click(function(){
															   buttonSequence = 1;
															   ContentCount = 2;
															   $(".hand,.ContentContainer").hide();
															   $(".tick1,.ContentFirstButton,.hand2").show().css("display","inline-block");	
																 });
							 
							  $(".second_button").click(function(){
																  buttonSequence = 2;
																  ContentCount = 7;
															  $(".hand,.ContentContainer").hide();
															  $(".tick2,.ContentSecondButton,.hand3").show().css("display","inline-block");	
																 });
							  
							   $(".third_button").click(function(){
																  buttonSequence = 3;
																  ContentCount = 3;
															   $(".hand,.ContentContainer").hide();
															   $(".tick3,.ContentThirdButton,.hand4").show().css("display","inline-block");	
																 });
							   
							   $(".fourth_button").click(function(){
																   buttonSequence = 4;
																   ContentCount =4;
															   $(".hand,.ContentContainer").hide();
															   $(".tick4,.ContentFourthButton,.hand5").show().css("display","inline-block");	
																 });
							    $(".fifth_button").click(function(){
																   buttonSequence = 5;
																   ContentCount =4;
															   $(".hand,.ContentContainer").hide();
													           $(".tick5,.ContentFifthButton").show().css("display","inline-block");	
																 });
								
								 $(".sixth_button").click(function(){
																   buttonSequence = 6;
																   ContentCount =2;
															   $(".hand,.ContentContainer,.content_note").hide();
													           $(".tick6,.ContentSixthButton").show().css("display","inline-block");	
																 });
							 
							 
							 
							 
							
							 
							 
						    
						
												   });
						
