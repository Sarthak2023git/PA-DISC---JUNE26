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
						     					 
							 $(".hand1").show();
							 
							 $(".ButtonsForMasterQuery").click(function(){
						 
								$(".middle").hide();
							
							});
							 $(".first_button").click(function(){
															   buttonSequence = 1;
															   ContentCount = 0;
															   $(".hand,.ContentContainer,.con_sub11_btn,.tickA").hide();
															   $(".tick1,.ContentFirstButton").show().css("display","inline-block");	
															   $(".SubBtn").css("color", "#000000");
																 });
							 $(".sub11_button").click(function(){
															  
															     buttonSequence=2;
																 ContentCount = 14;
																 
										$(".hand,.handA,.ContentContainer,.con_sub12_btn,.con_sub13_btn").hide();					
										$(".tick2,.ContentFirstButton,.con_sub11_btn,.middle1").show().css("display","inline-block");	
										$(".SubBtn").css("color", "#000000");
										$(".sub11_button").css("color", "#CC0000");
										
										
															});	
							 
							 $(".sub12_button").click(function(){
															     buttonSequence=3;
																 ContentCount = 6;
										$(".hand,.handA,.ContentContainer,.con_sub11_btn,.con_sub13_btn").hide();					
										$(".tick3,.ContentFirstButton,.con_sub12_btn,.middle2").show().css("display","inline-block");	
										$(".SubBtn").css("color", "#000000");
										$(".sub12_button").css("color", "#CC0000");
										
										
										
															});	
							 			
							 $(".sub13_button").click(function(){
															     buttonSequence=4;
																 ContentCount = 3;
										$(".hand,.handA,.ContentContainer,.con_sub12_btn,.con_sub11_btn").hide();					
										$(".tick4,.ContentFirstButton,.con_sub13_btn,.middle3").show().css("display","inline-block");	
										$(".SubBtn").css("color", "#000000");
										$(".sub13_button").css("color", "#CC0000");
										
										
										
															});	

							  $(".second_button").click(function(){
																  buttonSequence = 5;
																  ContentCount = 0;
															  $(".hand,.ContentContainer,.tickA,.handA").hide();
															  $(".tick5,.ContentSecondButton").show().css("display","inline-block");	
															  $(".SubBtn").css("color", "#000000");
																 });
							  
							  $(".sub21_button").click(function(){
															  
															     buttonSequence=6;
																 ContentCount = 18;
																 
										$(".hand,.handA,.ContentContainer,.con_sub22_btn,.con_sub23_btn").hide();					
										$(".tick6,.ContentSecondButton,.con_sub21_btn,.middle4").show().css("display","inline-block");	
										$(".SubBtn").css("color", "#000000");
										$(".sub21_button").css("color", "#CC0000");
										
										
															});	
							 
							 $(".sub22_button").click(function(){
															     buttonSequence=7;
																 ContentCount = 8;
										$(".hand,.handA,.ContentContainer,.con_sub21_btn,.con_sub23_btn").hide();					
										$(".tick7,.ContentSecondButton,.con_sub22_btn,.middle5").show().css("display","inline-block");	
										$(".SubBtn").css("color", "#000000");
										$(".sub22_button").css("color", "#CC0000");
										
										
										
															});	
							 			
							 $(".sub23_button").click(function(){
															     buttonSequence=8;
																 ContentCount = 4;
										$(".hand,.handA,.ContentContainer,.con_sub22_btn,.con_sub21_btn").hide();					
										$(".tick8,.ContentSecondButton,.con_sub23_btn,.middle6").show().css("display","inline-block");	
										$(".SubBtn").css("color", "#000000");
										$(".sub23_button").css("color", "#CC0000");
										
										
										
															});	
							  
							   $(".third_button").click(function(){
																  buttonSequence = 9;
																  ContentCount = 7;
															   $(".hand,.ContentContainer,.tickA").hide();
															   $(".tick9,.ContentThirdButton,.middle7").show().css("display","inline-block");
															   $(".SubBtn").css("color", "#000000");
																 });
							   
							   $(".fourth_button").click(function(){
																   buttonSequence = 10;
																   ContentCount =5;
															   $(".hand,.ContentContainer,.tickA").hide();
															   $(".tick10,.ContentFourthButton,.middle8").show().css("display","inline-block");	
															   $(".SubBtn").css("color", "#000000");
																 });
							    $(".fifth_button").click(function(){
																   buttonSequence = 11;
																   ContentCount =0;
															   $(".handA,.ContentContainer,.tickA").hide();
													           $(".tick11,.ContentFifthButton").show().css("display","inline-block");	
															   $(".SubBtn").css("color", "#000000");
																 });
								$(".sub51_button").click(function(){
															     buttonSequence=12;
																 ContentCount = 3;
										$(".handA,.ContentContainer,.con_sub55_btn,.con_sub52_btn,.con_sub53_btn,.con_sub54_btn").hide();					
										$(".tick51A,.ContentFifthButton,.con_sub51_btn,.middle9").show().css("display","inline-block");
										$(".SubBtn").css("color", "#000000");
										$(".sub51_button").css("color", "#CC0000");
										
										
										
															});	
								$(".sub52_button").click(function(){
															     buttonSequence=13;
																 ContentCount = 4;
										$(".handA,.ContentContainer,.con_sub51_btn,.con_sub55_btn,.con_sub53_btn,.con_sub54_btn").hide();					
										$(".tick52A,.ContentFifthButton,.con_sub52_btn,.middle10").show().css("display","inline-block");	
										$(".SubBtn").css("color", "#000000");
										$(".sub52_button").css("color", "#CC0000");
										
										
										
															});	
								$(".sub53_button").click(function(){
															     buttonSequence=14;
																 ContentCount = 4;
										$(".handA,.ContentContainer,.con_sub51_btn,.con_sub52_btn,.con_sub55_btn,.con_sub54_btn").hide();					
										$(".tick53A,.ContentFifthButton,.con_sub53_btn,.middle11").show().css("display","inline-block");	
										$(".SubBtn").css("color", "#000000");
										$(".sub53_button").css("color", "#CC0000");
										
										
										
															});	
								$(".sub54_button").click(function(){
															     buttonSequence=15;
																 ContentCount = 3;
										$(".handA,.ContentContainer,.con_sub51_btn,.con_sub52_btn,.con_sub53_btn,.con_sub55_btn").hide();					
										$(".tick54A,.ContentFifthButton,.con_sub54_btn,.middle12").show().css("display","inline-block");	
										$(".SubBtn").css("color", "#000000");
										$(".sub54_button").css("color", "#CC0000");
										
										
										
															});	
								$(".sub55_button").click(function(){
															     buttonSequence=16;
																 ContentCount = 4;
										$(".handA,.ContentContainer,.con_sub51_btn,.con_sub52_btn,.con_sub53_btn,.con_sub54_btn").hide();					
										$(".tick55A,.ContentFifthButton,.con_sub55_btn,.middle13").show().css("display","inline-block");	
										$(".SubBtn").css("color", "#000000");
										$(".sub55_button").css("color", "#CC0000");
										
										
										
															});	
							 
							 $(".sixth_button").click(function(){
																   buttonSequence = 17;
																   ContentCount =0;
															   $(".hand,.ContentContainer,.tickA,.handA").hide();
													           $(".tick12,.ContentSixthButton").show().css("display","inline-block");	
															   $(".SubBtn").css("color", "#000000");
																 });
							 
							 $(".sub61_button").click(function(){
															     buttonSequence=18;
																 ContentCount = 6;
										$(".hand,.handA,.ContentContainer,.con_sub62_btn").hide();					
										$(".tick61A,.ContentSixthButton,.con_sub61_btn,.middle14").show().css("display","inline-block");	
										$(".SubBtn").css("color", "#000000");
										$(".sub61_button").css("color", "#CC0000");
										
										
										
										
															});	
								$(".sub62_button").click(function(){
															     buttonSequence = 19;
																 ContentCount = 5;
										$(".hand,.handA,.ContentContainer,.con_sub61_btn").hide();					
										$(".tick62A,.ContentSixthButton,.con_sub62_btn,.middle15").show().css("display","inline-block");	
										$(".SubBtn").css("color", "#000000");
										$(".sub62_button").css("color", "#CC0000");
										
										
										
										
															});	
								
								$(".Sixth_button3").click(function(){
															     buttonSequence = 20;
																 ContentCount = 5;
										$(".hand,.handA,.ContentContainer,.con_sub61_btn,.con_sub62_btn").hide();					
										$(".tick63A,.ContentSixthButton,.middle16").show().css("display","inline-block");	
										$(".SubBtn").css("color", "#000000");
										$(".Sixth_button3").css("color", "#CC0000");

										
										
										
										
															});	
								
								
								
							 $(".content").hide();
							 $(".note").click(function(){
						 
							
								$(".content").show().css('display', 'inline-block');	
								$(".HD1").hide();
							
							});
							 
							  $(".Cross1").click(function(){
						 
								$(".HD1").show().css('display', 'inline-block');	
								 
								$(".content").hide();
							
							});
							  
							   
						
							 
						    
						
												   });
						
