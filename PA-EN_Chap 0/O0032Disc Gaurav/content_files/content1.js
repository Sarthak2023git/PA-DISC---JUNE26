$(document).ready(function(){
						   
						    window.buttonSequence = 0;
							window.bp1=0;
							window.bp2=0;
							
								 $(".link1").css('color', 'black');
							$(".link2").css('color', 'red');
						     					 
							 $(".hand1").show();
							 $(".hid").css("visibility","hidden")
							 
							 
							 $(".first_button").click(function(){
															   buttonSequence = 1;
															   ContentCount = 0;
															   
															    
																 
															   $(".hand,.ContentContainer,.tickA,.handA").hide();
															   $(".tick19,.ContentFirstButton").show().css("display","inline-block");
															   
															   $(".first_button1").css("color","#000000");
										 $(".first_button2").css("color","#000000");
										 
																 });
							 
							 $(".first_button1").click(function(){
															   buttonSequence = 2;
															   ContentCount = 5;
															   $(".tick2,.hand2").hide();
															   $(".tick2,.middle2").show().css("display","inline-block");	
															    $(".first_button1").css("color","#cc0000");
										 $(".first_button2").css("color","#000000");
										 $(".first_button3").css("color","#000000");
															   
															   
															   
															   
																 });
							  
							  $(".first_button2").click(function(){
															   buttonSequence = 3;
															   ContentCount = 3;
															   $(".hand2,.hand3,.tick3").hide();
															   $(".tick3,.middle3").show().css("display","inline-block");	
															   
															   $(".first_button2").css("color","#cc0000");
										 $(".first_button1").css("color","#000000");
										 $(".first_button3").css("color","#000000");
															   
															   
																 });

							 
							 
							 
							 
							 
							  $(".second_button").click(function(){
																  buttonSequence = 4;
																  ContentCount =6;
															  $(".hand3,.ContentContainer").hide();
															  $(".tick4,.ContentSecondButton,.middle").show().css("display","inline-block");	
																 });
							  
							   $(".third_button").click(function(){
																  buttonSequence = 5;
																  ContentCount =0;
															   $(".handA,.ContentContainer,.tick6,.tick7,.tick8").hide();
															   $(".tick5,.ContentThirdButton").show().css("display","inline-block");
															    $(".third_button2").css("color","#000000");
										 $(".third_button1").css("color","#000000");
										 $(".third_button3").css("color","#000000");
										 
																 });
							   
							
							  $(".third_button1").click(function(){
															   buttonSequence = 6;
															   ContentCount = 3;
															   $(".hand6,.hand7,.hand8").hide();
															   $(".tick6,.middle6").show().css("display","inline-block");	
															    $(".third_button1").css("color","#cc0000");
										 $(".third_button2").css("color","#000000");
										 $(".third_button3").css("color","#000000");
															   
															   
															   
															   
																 });
							  
							  $(".third_button2").click(function(){
															   buttonSequence = 7;
															   ContentCount = 5;
															   $(".hand6,.hand7,.hand8").hide();
															   $(".tick7,.middle7").show().css("display","inline-block");	
															   
															   $(".third_button2").css("color","#cc0000");
										 $(".third_button1").css("color","#000000");
										 $(".third_button3").css("color","#000000");
															   
															   
																 });
							  
							  $(".third_button3").click(function(){
															   buttonSequence = 8;
															   ContentCount = 8;
															   $(".hand6,.hand7,.hand8").hide();
															   $(".tick8,.middle8").show().css("display","inline-block");	
															   
															   $(".third_button3").css("color","#cc0000");
										 $(".third_button2").css("color","#000000");
										 $(".third_button1").css("color","#000000");
															   
															   
																 });   
							   
							   
							   
							   $(".fourth_button").click(function(){
																   buttonSequence = 9;
																   ContentCount =0;
																   
																   
																 
															   $(".hand8,.ContentContainer,.tick10,.tick11,.tick12,.tick13").hide();
															   $(".tick9,.ContentFourthButton").show().css("display","inline-block");
															   $(".fourth_button1").css("color","#000000");
															    $(".fourth_button2").css("color","#000000");
										 $(".fourth_button3").css("color","#000000");
											 $(".fourth_button4").css("color","#000000");		
							   });
							   
							   
							     $(".fourth_button1").click(function(){
															   buttonSequence = 10;
															   ContentCount =7;
															   $(".hand10,.hand11,.hand12,.hand13").hide();
															   $(".tick10,.middle10").show().css("display","inline-block");	
															    $(".fourth_button1").css("color","#cc0000");
										 $(".fourth_button2").css("color","#000000");
										 $(".fourth_button3").css("color","#000000");
											 $(".fourth_button4").css("color","#000000");				   
															   
															   
															   
																 });
							  
							  $(".fourth_button2").click(function(){
															   buttonSequence = 11;
															   ContentCount = 5;
															   $(".hand10,.hand11,.hand12,.hand13").hide();
															   $(".tick11,.middle11").show().css("display","inline-block");	
															   
															   $(".fourth_button2").css("color","#cc0000");
										 $(".fourth_button1").css("color","#000000");
										 $(".fourth_button3").css("color","#000000");
											 $(".fourth_button4").css("color","#000000");	
															   
																 });
							  
							  $(".fourth_button3").click(function(){
															   buttonSequence = 12;
															   ContentCount = 7;
															   $(".hand10,.hand11,.hand12,.hand13").hide();
															   $(".tick12,.middle12").show().css("display","inline-block");	
															   
															    $(".fourth_button3").css("color","#cc0000");
										 $(".fourth_button1").css("color","#000000");
										 $(".fourth_button2").css("color","#000000");
											 $(".fourth_button4").css("color","#000000");
															   
																 });  
							  
							  
							  	  $(".fourth_button4").click(function(){
															   buttonSequence = 13;
															   ContentCount = 8;
															   $(".hand10,.hand11,.hand12,.hand13").hide();
															   $(".tick13,.middle13").show().css("display","inline-block");	
															   
															   $(".fourth_button4").css("color","#cc0000");
										 $(".fourth_button1").css("color","#000000");
										 $(".fourth_button2").css("color","#000000");
											 $(".fourth_button3").css("color","#000000");
															   
															   
																 });
							   
							   
							    $(".fifth_button").click(function(){
																   buttonSequence = 14;
																   ContentCount =6;
																   
																   
																 
															   $(".hand13,.ContentContainer").hide();
															   $(".tick14,.ContentFifthButton,.middle").show().css("display","inline-block");	
							   });
								
								
								 $(".sixth_button").click(function(){
																   buttonSequence = 15;
																   ContentCount =5;
																   
																   
																 
															   $(".hand14,.ContentContainer").hide();
															   $(".tick15,.ContentSixthButton,.middle").show().css("display","inline-block");	
							   });
							   
							   
							   
							   
							    $(".seventh_button").click(function(){
																   buttonSequence = 16;
																   ContentCount =1;
																   
																   
																 
															   $(".hand1,.ContentContainer,.tick17,.tick18").hide();
															   $(".tick1,.ContentSeventhButton").show().css("display","inline-block");
															    $(".seventh_button1").css("color","#000000");
										 $(".seventh_button2").css("color","#000000");
										 $(".seventh_button3").css("color","#000000");
							   });
								
								 $(".seventh_button1").click(function(){
															   buttonSequence = 17;
															   ContentCount = 5;
															   $(".hand17").hide();
															   $(".tick17,.middle17").show().css("display","inline-block");	
															    $(".seventh_button1").css("color","#cc0000");
										 $(".seventh_button2").css("color","#000000");
										 $(".seventh_button3").css("color","#000000");
															   
															   
															   
															   
																 });
							  
							  $(".seventh_button2").click(function(){
															   buttonSequence = 18;
															   ContentCount = 8;
															   $(".hand18").hide();
															   $(".tick18,.middle18").show().css("display","inline-block");	
															   
															   $(".seventh_button2").css("color","#cc0000");
										 $(".seventh_button1").css("color","#000000");
										 $(".seventh_button3").css("color","#000000");
															   
															   
																 });
							   
							   
							   
							    $(".table3").click(function(){
														 
								                 $(".content3_19,.content3_20,.content3_21").show();
												// $(".ex01,.ex1,.ex2,.ex3").fadeIn();
												 //$(".ex04,.ex4,.ex5,.ex6").hide();
												 $(".content3_22,.content3_23,.content3_26,.content3_27,.content15_28,.content15_42").hide();
												    	
										 
																		});
							   
							   
							      $(".table3_1").click(function(){
														 
								                 $(".content3_22").show();
												// $(".ex01,.ex1,.ex2,.ex3").fadeIn();
												 //$(".ex04,.ex4,.ex5,.ex6").hide();
												 $(".content3_19,.content3_23,.content3_26,.content3_27,.content15_28,.content15_42").hide();
												    	
										 
																		});
							   
							    $(".table4").click(function(){
														 
								                 $(".content3_23,.content3_25").show();
												// $(".ex01,.ex1,.ex2,.ex3").fadeIn();
												 //$(".ex04,.ex4,.ex5,.ex6").hide();
												 $(".content3_22,.content3_19,.content3_26,.content3_27,.content15_28,.content15_42").hide();
												    	
										 
																		});
							   
							   
							      $(".table4_1").click(function(){
														 
								                 $(".content3_26").show();
												// $(".ex01,.ex1,.ex2,.ex3").fadeIn();
												 //$(".ex04,.ex4,.ex5,.ex6").hide();
												 $(".content3_19,.content3_23,.content3_19,.content3_27,.content15_28,.content15_42").hide();
												    	
										 
																		});
							   
							    $(".observ").click(function(){
														 
								                 $(".content3_27").show();
												// $(".ex01,.ex1,.ex2,.ex3").fadeIn();
												 //$(".ex04,.ex4,.ex5,.ex6").hide();
												 $(".content3_19,.content3_23,.content3_19,.content3_26,.content15_28,.content15_42").hide();
												    	
										 
																		});
							    
							    $(".note1").click(function(){
														 
								                 $(".content15_28").show();
												// $(".ex01,.ex1,.ex2,.ex3").fadeIn();
												 //$(".ex04,.ex4,.ex5,.ex6").hide();
												 $(".content3_19,.content3_23,.content3_19,.content3_26,.content3_27,.content15_42").hide();
												 
												    	/*$(".content15_1,.content15_2,.content15_3,.content15_5,.content15_6").css("visibility","hidden");*/
										 
																		});
								
								
								
								    $(".cross_img").click(function(){
														 
								                 $("").show();
												// $(".ex01,.ex1,.ex2,.ex3").fadeIn();
												 //$(".ex04,.ex4,.ex5,.ex6").hide();
												 $(".content15_28").hide();
												     /*$(".content15_1,.content15_2,.content15_3,.content15_5,.content15_6").css("visibility","visible");	*/
										 	
																		});
									
									
									 $(".observ1").click(function(){
														 
								                 $(".content15_42").show();
												// $(".ex01,.ex1,.ex2,.ex3").fadeIn();
												 //$(".ex04,.ex4,.ex5,.ex6").hide();
												 $(".content3_19,.content3_23,.content3_19,.content3_26,.content3_27,.content15_28").hide();
												    	
										/* $(".content15_1,.content15_2,.content15_3,.content15_5,.content15_6").css("visibility","hidden");*/
																		});
									 
									    $(".cross_img1").click(function(){
														 
								                 $("").show();
												// $(".ex01,.ex1,.ex2,.ex3").fadeIn();
												 //$(".ex04,.ex4,.ex5,.ex6").hide();
												 $(".content15_42").hide();
												  /* $(".content15_1,.content15_2,.content15_3,.content15_5,.content15_6").css("visibility","visible")*/; 	
										 
																		});
										
										$(".cross_img2").click(function(){
														 
								                 $("").show();
												// $(".ex01,.ex1,.ex2,.ex3").fadeIn();
												 //$(".ex04,.ex4,.ex5,.ex6").hide();
												 $(".content3_27").hide();
												    	
										
																		});
									
							   });
						
