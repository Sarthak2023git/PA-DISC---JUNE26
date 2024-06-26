   $(document).ready(function(){
						   
						   
						   window.abc=0;
						   
					  Local1=function(){}	
			     	  Local2=function(){}
			    	  Local3=function(){}
				      Local4=function(){}
				      Local5=function(){}
					  
						    window.buttonSequence = 0;
							window.bp1=0;
							window.bp2=0;
							window.SpaceAndAutorunSpeed = 500;
						     					 
							 $(".hand1").show();
							 $(".on,.tw").delay("slow").fadeIn();
							 
							  $(".ButtonsForMasterQuery").click(function(){
																$(".middle").hide();
																});
							 $(".first_button").click(function(){
															   buttonSequence = 1;
															   ContentCount = 0;
															   $(".hand,.croosBM,.ContentContainer,.content1_5,.tick2,.tick3,.tick4").hide();
															   $(".tick1,.ContentFirstButton").show().css("display","inline-block");	
															   
						
										 $(".first_button2").css("color","#000000");
										 				 $(".first_button1").css("color","#000000");
										 $(".first_button3").css("color","#000000");
															   
															   
																 });
							 
							 
							 
							  $(".first_button1").click(function(){
															   buttonSequence = 2;
															   ContentCount = 7;
															   $(".hand2,.tick3,.tick4").hide();
															   $(".tick2,.middle1").show().css("display","inline-block");	
															    $(".first_button1").css("color","#cc0000");
										 $(".first_button2").css("color","#000000");
										 $(".first_button3").css("color","#000000");
															   
															   
															   
															   
																 });
							  
							  $(".first_button2").click(function(){
															   buttonSequence = 3;
															   ContentCount = 5;
															   $(".hand3,.tick4").hide();
															   
															   $(".tick3,.middle2").show().css("display","inline-block");	
															   
															   $(".first_button2").css("color","#cc0000");
										 $(".first_button1").css("color","#000000");
										 $(".first_button3").css("color","#000000");
															   
															   
																 });
							  
							  $(".first_button3").click(function(){
															   buttonSequence = 4;
															   ContentCount = 4;
															   $(".line0,.line1,.line0_2,.line2").hide();
															   $(".hand4,.hand5").hide();
															   $(".tick4,.middle3").show().css("display","inline-block");	
															   
															   $(".first_button3").css("color","#cc0000");
										 $(".first_button2").css("color","#000000");
										 $(".first_button1").css("color","#000000");
															   
															   
																 });
							  
							  
							 
							  $(".second_button").click(function(){
																  buttonSequence = 5;
																  ContentCount =0;
															  $(".hand,.ContentContainer,.tick211A,.tick221A").hide();
															  $(".tick5,.ContentSecondButton,.middle4").show().css("display","inline-block");	
															   $(".SecondButton1").css("color","#000000");
															    $(".SecondButton2").css("color","#000000");
																 });
							  
							  
							  
							     $(".SecondButton1").click(function(){
															   buttonSequence = 10;
															   ContentCount =3;
															   $(".handA").hide();
															   $(".tick211A,.middle10").show().css("display","inline-block");	
															   
															     $(".SecondButton1").css("color","#cc0000");
										 $(".SecondButton2").css("color","#000000");
															  
																 });
							  
							  $(".SecondButton2").click(function(){
															   buttonSequence = 11;
															   ContentCount = 3;
															   $(".handA").hide();
															   $(".tick221A,.middle11").show().css("display","inline-block");	
															  
															   
															   
															     $(".SecondButton2").css("color","#cc0000");
										 $(".SecondButton1").css("color","#000000");
																 });
							  
							  
							  
							  
							   $(".third_button").click(function(){
																  buttonSequence = 6;
																  ContentCount =0;
															   $(".hand,.ContentContainer").hide();//
															   $(".tick6,.ContentThirdButton,.hand7").show().css("display","inline-block");
															  
										 $(".third_button1").css("color","#000000");
										 										 $(".third_button2").css("color","#000000");
																 });
							   
							   
							     $(".third_button1").click(function(){
															   buttonSequence = 7;
															   ContentCount = 4;
															   $(".hand7,.content7_2 ").hide();
															   $(".tick212A,.middle6").show().css("display","inline-block");	
															   
															     $(".third_button1").css("color","#cc0000");
										 $(".third_button2").css("color","#000000");
															  
																 });
							  
							  $(".third_button2").click(function(){
															   buttonSequence = 8;
															   ContentCount = 4;
															   $(".hand8,.content8_2").hide();
															   $(".tick222A,.middle7").show().css("display","inline-block");	
															  
															   
															   
															     $(".third_button2").css("color","#cc0000");
										 $(".third_button1").css("color","#000000");
																 });
							   
							   
							   
							   $(".fourth_button").click(function(){
																   buttonSequence = 9;
																   ContentCount =5;
															   $(".hand,.ContentContainer").hide();
															   $(".tick9,.ContentFourthButton,.hand5,.middle8").show().css("display","inline-block");	
																 });
							    $(".fifth_button").click(function(){
																   buttonSequence = 10;
																   ContentCount =3;
															   $(".hand,.ContentContainer").hide();
													           $(".tick5,.ContentFifthButton").show().css("display","inline-block");
															    	
																 });
							 
							
							
							
							
							 
							  $(".rule1").click(function(){
														 
								                 $(".content7_2,.bnr2").show();
												// $(".ex01,.ex1,.ex2,.ex3").fadeIn();
												 //$(".ex04,.ex4,.ex5,.ex6").hide();
												 $(".bnr02,.bnr4,.bnr5,.Exp2").hide();
												    
										 
																		});
									 
									  $(".rule2").click(function(){
														 
								                 $(".content8_2").show();
												// $(".ex04,.ex4,.ex5,.ex6,.ex02").fadeIn();
												 //$(".ex01,.ex1,.ex2,.ex3").hide();
												 $(".bnr01,.bnr2,.bnr3,.Exp1").hide();
												 	   
										
																		});
									  
									   $(".cross3").click(function(){
																   $(".content7_3").css("visibility","visible");
									   $(".content7_2").hide();
									   $(".bnr01,.bnr2,.bnr3,.bnr02,.Exp1,.bnr4,.bnr5,.Exp2").show();
									
									
									
									});
									
									 $(".cross4").click(function(){
																 $(".content8_3").css("visibility","visible");
									   $(".content8_2").hide();
									   $(".bnr01,.bnr2,.bnr3,.bnr02,.bnr4,.bnr5,,.Exp1").show();
									   
									    
									
									
									
									});
									
							
							
							
							
							
							
							
							
							
							
							
							
							 
							 
							  $(".Exp1").click(function(){
													  $(".content2_5").css("visibility","visible");
								               $(".content2_5").show();
												// $(".ex01,.ex1,.ex2,.ex3").fadeIn();
												 //$(".ex04,.ex4,.ex5,.ex6").hide();
												// $(".bnr02,.bnr4,.bnr5,.Exp2").hide();
												 
												  $(".bnr02,.bnr4,.bnr5,.Exp2").css("visibility","hidden");
												  $(".content2_6").css("visibility","hidden");
																		});
									 
									  $(".Exp2").click(function(){
														 
								                 $(".content2_6").show();
												// $(".ex04,.ex4,.ex5,.ex6,.ex02").fadeIn();
												 //$(".ex01,.ex1,.ex2,.ex3").hide();
												 $(".bnr01,.bnr2,.bnr3,.Exp1").hide();
										$(".content2_5").css("visibility","hidden");
																		});
									  
									  
									   $(".cross1").click(function(){
									   $(".content2_5").hide();
									   $(".bnr01,.bnr2,.bnr3,.bnr02,.Exp1").show();
									  $(".content2_6").css("visibility","visible");
									 $(".bnr02,.bnr4,.bnr5,.Exp2").css("visibility","visible");
									
									});
									
									 $(".cross2").click(function(){
									   $(".content2_6").hide();
									   $(".bnr01,.bnr2,.bnr3,.bnr02,.bnr4,.bnr5,.Exp2,.Exp1").show();
									
									
									
									});
									
							 
							 
							 
							 
							 
							 
						
						
												   });
						
