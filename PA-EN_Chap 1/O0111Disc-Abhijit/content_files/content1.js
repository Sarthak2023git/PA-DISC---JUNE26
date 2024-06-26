$(document).ready(function(){
						   
						    window.buttonSequence = 0;
							window.bp1=0;
							window.bp2=0;
							
							
												 $(".link1").css('color', 'black');
							$(".link2").css('color', 'red');
							
						     					 
							 $(".hand1").show();
							 
							 $(".first_button").click(function(){
															   buttonSequence = 1;
															   ContentCount = 9;
															   
															    
																 
															   $(".hand,.ContentContainer").hide();
															   $(".tick1,.ContentFirstButton,.hand2").show().css("display","inline-block");	
																 });
							 
							  $(".second_button").click(function(){
																  buttonSequence = 2;
																  ContentCount =0;
																  showAns1 = 0;
															  $(".hand,.ContentContainer,.tick21,.tick22,.hand4").hide();
															  $(".tick2,.ContentSecondButton").show().css("display","inline-block");	
															   $(".second_button1,.second_button2").css('color','#000');
															  });
							  
							  
							  $(".second_button1").click(function(){
																  buttonSequence = 3;
																  ContentCount =6;
																 
															  $(".hand3,.ContentContainer").hide();
															  $(".tick21,.ContentSecondButton").show().css("display","inline-block");	
															  $(".second_button1").css('color','#C00');
															  $(".second_button2").css('color','#000');
							  
															  });
							  						
							   
							  $(".second_button2").click(function(){
																  buttonSequence = 4;
																  ContentCount =7;
																  
															  $(".hand,.ContentContainer,.hand3,.hand4").hide();
															  $(".tick22,.ContentSecondButton,.hand5").show().css("display","inline-block");
															  $(".second_button2").css('color','#C00');
															  $(".second_button1").css('color','#000');
															  });
							  
							   $(".third_button").click(function(){
																  buttonSequence = 3;
																  ContentCount =6;
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
																   ContentCount =6;
																   
																   
																 
															   $(".hand,.ContentContainer").hide();
															   $(".tick5,.ContentFifthButton,.hand6").show().css("display","inline-block");	
							   });
								
								
								 $(".sixth_button").click(function(){
																   buttonSequence = 6;
																   ContentCount =9;
																   
																   
																 
															   $(".hand,.ContentContainer").hide();
															   $(".tick6,.ContentSixthButton").show().css("display","inline-block");	
							   });
							   
							   });
						
