$(document).ready(function(){
						   
						    window.buttonSequence = 0;
							window.bp1=0;
							window.bp2=0;
						     					 
							 $(".hand1").show();
							 $(".hid").css("visibility","hidden")
							 
							 $(".first_button").click(function(){
															   buttonSequence = 1;
															   ContentCount = 0;
															   $(".hand,.ContentContainer,.tick,.tickA,.handA").hide();
															   $(".tick1,.ContentFirstButton,.hand2,.middle1").show().css("display","inline-block");	
															    $(".first_button2").css("color","#000000");
										 $(".first_button1").css("color","#000000");
										 $(".first_button3").css("color","#000000");
										 
																 });
							 
							 
							/* $(".first_button1").click(function(){
															   buttonSequence = 2;
															   ContentCount = 1;
															   $(".hand2,.hand3,.hand4,.hand5,.hand6,.hand7").hide();
															   $(".tick2,.middle2").show().css("display","inline-block");	
															    $(".first_button1").css("color","#cc0000");
										 $(".first_button2").css("color","#000000");
										 $(".first_button3").css("color","#000000");
										 $(".first_button4").css("color","#cc0000");
										 $(".first_button5").css("color","#000000");
										 $(".first_button6").css("color","#000000");
										 });*/
							
							
							$(".first_button1").click(function(){
															   buttonSequence = 2;
															   ContentCount = 5;
															   $(".hand2,.hand3,.hand4,.hand5,.hand6,.hand7").hide();
															   $(".tick2,.middle2").show().css("display","inline-block");	
															    $(".first_button1").css("color","#cc0000");
										 $(".first_button2").css("color","#000000");
										 $(".first_button3").css("color","#000000");
										 $(".first_button4").css("color","#000000");
										 $(".first_button5").css("color","#000000");
										 $(".first_button6").css("color","#000000");
										 });
							 
						
						 $(".first_button2").click(function(){
															   buttonSequence = 3;
															   ContentCount = 7;
															   $(".hand2,.hand3,.hand4,.hand5,.hand6,.hand7").hide();
															   $(".tick3,.middle3").show().css("display","inline-block");	
															    $(".first_button1").css("color","#000000");
										 $(".first_button4").css("color","#000000");
										 $(".first_button3").css("color","#000000");
										 $(".first_button2").css("color","#cc0000");
										 $(".first_button5").css("color","#000000");
										 $(".first_button6").css("color","#000000");
										 });
							 
							 
					 $(".first_button3").click(function(){
															   buttonSequence = 4;
															   ContentCount = 8;
															   $(".hand2,.hand3,.hand4,.hand5,.hand6,.hand7").hide();
															   $(".tick4,.middle4").show().css("display","inline-block");	
															    $(".first_button1").css("color","#000000");
										 $(".first_button2").css("color","#000000");
										 $(".first_button4").css("color","#000000");
										 $(".first_button3").css("color","#cc0000");
										 $(".first_button5").css("color","#000000");
										 $(".first_button6").css("color","#000000");
										 });
							 
							 
					/* $(".first_button5").click(function(){
															   buttonSequence =6;
															   ContentCount = 5;
															   $(".hand2,.hand3,.hand4,.hand5,.hand6,.hand7").hide();
															   $(".tick6,.middle6").show().css("display","inline-block");	
															    $(".first_button1").css("color","#cc0000");
										 $(".first_button2").css("color","#000000");
										 $(".first_button3").css("color","#000000");
										 $(".first_button4").css("color","#cc0000");
										 $(".first_button5").css("color","#000000");
										 $(".first_button6").css("color","#000000");
										 });
							 
							 
					 $(".first_button6").click(function(){
															   buttonSequence = 7;
															   ContentCount = 4;
															   $(".hand2,.hand3,.hand4,.hand5,.hand6,.hand7").hide();
															   $(".tick7,.middle7").show().css("display","inline-block");	
															    $(".first_button1").css("color","#cc0000");
										 $(".first_button2").css("color","#000000");
										 $(".first_button3").css("color","#000000");
										 $(".first_button4").css("color","#cc0000");
										 $(".first_button5").css("color","#000000");
										 $(".first_button6").css("color","#000000");
										 });*/
							 
							 
					 
							 
							 
							  $(".second_button").click(function(){
																  buttonSequence = 5;
																  ContentCount = 2;
															  $(".hand,.ContentContainer").hide();
															  $(".tick5,.ContentSecondButton,.hand5,.middle5").show().css("display","inline-block");	
																 });
							  
							   $(".third_button").click(function(){
																  buttonSequence = 6;
																  ContentCount = 0;
															   $(".hand,.ContentContainer,.hand1A,.tickA").hide();
															   $(".tick6,.ContentThirdButton,.hand6,.middle6").show().css("display","inline-block");
															   
															   $(".third_button1").css("color","#000000");
										 $(".third_button2").css("color","#000000");
																 });
							   
							   $(".third_button1").click(function(){
																  buttonSequence = 7;
																  ContentCount = 3;
															   $(".hand1A,.ContentContainer,.hand7,.hand8").hide();
															   $(".tick7,.ContentThirdButton,.middle7").show().css("display","inline-block");
															   $(".third_button1").css("color","#cc0000");
										 $(".third_button2").css("color","#000000");
																 });
							   
							      $(".third_button2").click(function(){
																  buttonSequence = 8;
																  ContentCount = 4;
															   $(".hand1A,.ContentContainer,.hand7,.hand8").hide();
															   $(".tick8,.ContentThirdButton,.middle8").show().css("display","inline-block");
															   $(".third_button2").css("color","#cc0000");
										 $(".third_button1").css("color","#000000");
																 });
							   
							   
							   
							   $(".fourth_button").click(function(){
																   buttonSequence = 9;
																   ContentCount =2;
															   $(".hand,.ContentContainer").hide();
															   $(".tick9,.ContentFourthButton,.hand9,.middle9").show().css("display","inline-block");	
																 });
							    $(".fifth_button").click(function(){
																   buttonSequence = 10;
																   ContentCount =4;
															   $(".hand,.ContentContainer").hide();
													           $(".tick10,.ContentFifthButton,.hand10,.middle10").show().css("display","inline-block");	
																 });
								
								 $(".sixth_button").click(function(){
																   buttonSequence = 11;
																   ContentCount =4;
															   $(".hand,.ContentContainer").hide();
													           $(".tick11,.ContentSixthButton,.hand11,.middle11").show().css("display","inline-block");	
																 });
								 
								  $(".seventh_button").click(function(){
																   buttonSequence = 12;
																   ContentCount =3;
															   $(".hand,.ContentContainer").hide();
													           $(".tick12,.ContentSeventhButton,.hand12,.middle12").show().css("display","inline-block");	
																 });
							 
							 
							 
							 
							
							 
							 
						    
						
												   });
						
