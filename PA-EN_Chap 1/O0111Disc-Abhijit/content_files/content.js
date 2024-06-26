$(document).ready(function(){
						   
						    window.buttonSequence = 0;
							window.bp1=0;
							window.bp2=0;
						     					 
							 $(".hand1").show();
							 
						   $(".link2").css('color', 'red');
							$(".link1").css('color', 'black');
							 	 
                      							 
							   $(".ButtonsForMasterQuery").click(function(){
																		$(".middle").hide();
																		})
							   
							   $(".handA,.tickA").hide();
							 
							 $(".first_button").click(function(){
															   buttonSequence = 1;
															   ContentCount = 0;
															   $(".hand,.ContentContainer,.handA,.tickA").hide();
															   $(".tick1,.ContentFirstButton").show().css("display","inline-block");	
															   
														$(".first_button1").css("color", "#000000");
														$(".first_button2").css("color", "#000000");
														$(".first_button3").css("color", "#000000");
														$(".first_button4").css("color", "#000000");
																 });
							 
							 
							 
							     $(".first_button1").click(function(){
																	  
															    buttonSequence=2;
																ContentCount =2;   
															
																
							     $(".con_first_btn_2,.con_first_btn_3,.con_first_btn_4,.hand,.handA").hide();
			                     $(".tick41,.con_first_btn_1,.ContentFirstButton,.middle11").show().css("display","inline-block");	
														  
								 //$(".hand43,.hand41,.hand44,.tick42,.tick43,.tick44,.middle42,.middle43,.middle44").hide()				
													 $(".first_button1").css("color", "#CC0000");
													 $(".first_button2").css("color", "#000000");
													 $(".first_button3").css("color", "#000000");
													 $(".first_button4").css("color", "#000000");
													 $(".first_button").css("color", "#CC0000");	
													 
																 });
						
							   $(".first_button2").click(function(){
																	  
															    buttonSequence=3;
																ContentCount =5;   
															
																
							     $(".con_first_btn_1,.con_first_btn_3,.con_first_btn_4,.hand,.handA").hide();
								 
								
			                     $(".tick42,.con_first_btn_2,.ContentFirstButton,.middle12").show().css("display","inline-block");	
														  
								 //$(".hand43,.hand41,.hand44,.tick42,.tick43,.tick44,.middle42,.middle43,.middle44").hide()				
													 $(".first_button1").css("color", "#000000");
													 $(".first_button2").css("color", "#CC0000");
													 $(".first_button3").css("color", "#000000");
													 $(".first_button4").css("color", "#000000");
													 $(".first_button").css("color", "#CC0000");	
													 
																 });
							   
							   
							     $(".first_button3").click(function(){
																	  
															    buttonSequence=4;
																ContentCount =4;   
															
																
							     $(".con_first_btn_1,.con_first_btn_2,.con_first_btn_4,.hand,.handA").hide();
								
								
			                     $(".tick11,.con_first_btn_3,.ContentFirstButton,.middle13,.tick43").show().css("display","inline-block");	
														  
								 //$(".hand43,.hand41,.hand44,.tick42,.tick43,.tick44,.middle42,.middle43,.middle44").hide()				
													 $(".first_button1").css("color", "#000000");
													 $(".first_button2").css("color", "#000000");
													 $(".first_button3").css("color", "#CC0000");
													 $(".first_button4").css("color", "#000000");
													 $(".first_button").css("color", "#CC0000");	
													 
																 });
								 
								 
								   $(".first_button4").click(function(){
																	  
															    buttonSequence=5;
																ContentCount =3 ;   
															
																
							     $(".con_first_btn_1,.con_first_btn_2,.con_first_btn_3,.hand,.handA").hide();
								
			                     $(".tick11,.con_first_btn_4,.ContentFirstButton,.middle14,.tick44").show().css("display","inline-block");	
														  
								 //$(".hand43,.hand41,.hand44,.tick42,.tick43,.tick44,.middle42,.middle43,.middle44").hide()				
													 $(".first_button1").css("color", "#000000");
													 $(".first_button2").css("color", "#000000");
													 $(".first_button3").css("color", "#000000");
													 $(".first_button4").css("color", "#CC0000");
													 $(".first_button").css("color", "#CC0000");	
													 
																 });
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							  $(".second_button,.tickA").click(function(){
															   buttonSequence = 6;
															   ContentCount = 0;
															   $(".hand,.ContentContainer,.handA").hide();
															   $(".ContentSecondButton,.tick2").show().css("display","inline-block");	
																
																$(".second_button1").css("color", "#000000");
																$(".second_button2").css("color", "#000000");
																$(".second_button3").css("color", "#000000");
																 });
							
							  
							  
							     $(".second_button1").click(function(){
																	  
															    buttonSequence=7;
																ContentCount =8 ;   
															
																
							     $(".con_sec_btn_2,.con_sec_btn_3,.hand,.handA").hide();
								
								
			                     $(".con_sec_btn_1,.ContentSecondButton,.middle21,.tick31").show().css("display","inline-block");	
														  
								 //$(".hand43,.hand41,.hand44,.tick42,.tick43,.tick44,.middle42,.middle43,.middle44").hide()				
													 $(".second_button1").css("color", "#CC0000");
													 $(".second_button2").css("color", "#000000");
													 $(".second_button3").css("color", "#000000");
													 
													 $(".second_button").css("color", "#CC0000");	
													 
																 });
							  
							  
							   $(".second_button2").click(function(){
																	  	//alert("aa");
															    buttonSequence=8;
																ContentCount =8;   
															
																
							     $(".con_sec_btn_1,.con_sec_btn_3,.hand,.handA").hide();
								
			                     $(".tick22,.con_sec_btn_2,.ContentSecondButton,.middle22,.tick32").show().css("display","inline-block");	
                      											
													 $(".second_button1").css("color", "#000000");
													 $(".second_button3").css("color", "#000000");
													 $(".second_button2").css("color", "#CC0000");
													 $(".second_button").css("color", "#CC0000");		
													 
																 });
							   
							   
							   
							    $(".second_button3").click(function(){
																	  	//alert("aa");
															    buttonSequence=9;
																ContentCount =6;   
															
																
							     $(".con_sec_btn_1,.con_sec_btn_2,.hand,.handA").hide();
								
			                     $(".tick22,.con_sec_btn_3,.ContentSecondButton,.middle23,.tick33").show().css("display","inline-block");	
                      											
													 $(".second_button1").css("color", "#000000");
													 $(".second_button2").css("color", "#000000");
													 $(".second_button3").css("color", "#CC0000");
													 $(".second_button").css("color", "#CC0000");		
													 
																 });
							  
							  
							   $(".third_button").click(function(){
																  buttonSequence = 10;
																  ContentCount = 6;
															   $(".hand,.ContentContainer,.hand,.handA,.tickA").hide();
															   $(".tick3,.ContentThirdButton,.hand6,.middle3").show().css("display","inline-block");	
															     $(".hello_1,.hello_2,.hello_3,.hello_4").hide();
																 });
							   
							   $(".fourth_button").click(function(){
																   buttonSequence = 11;
																   ContentCount =7;
															   $(".hand,.ContentContainer,.note_1,.hand,.handA,.tickA").hide();
															   $(".tick4,.ContentFourthButton,.hand7,.middle4").show().css("display","inline-block");	
																 });
							    $(".fifth_button").click(function(){
																   buttonSequence = 12;
																   ContentCount =11;
															   $(".handA,.ContentContainer,.hand,.tickA").hide();
													           $(".tick5,.ContentFifthButton,.hand8,.middle5").show().css("display","inline-block");	
																 });
								
								 $(".sixth_button").click(function(){
																   buttonSequence = 13;
																   ContentCount =0;
																$(".handA,.ContentContainer,.hand,.handA,.tickA").hide();
																$(".tick6,.ContentSixthButton").show().css("display","inline-block");
																$(".sixth_button1").css("color", "#000000");
																$(".sixth_button2").css("color", "#000000");
																
																
																
															   
																 });
								 
								 
								 
								 
								 
							   $(".sixth_button1").click(function(){
																	  
															    buttonSequence=14;
																ContentCount =5;   
															
																
							     $(".con_sixth_btn_2,.handA,.hand").hide();
			                     $(".con_sixth_btn_1,.SixthButtonCon,.middle61,.SixthButtonCon7,.tick21,.SubBtnDiv").show().css("display","inline-block");	
														  
								
													 $(".sixth_button1").css("color", "#CC0000");
													 $(".sixth_button2").css("color", "#000000");
													 
													 $(".sixth_button").css("color", "#CC0000");	
													 
																 });
							  
							  
							   $(".sixth_button2").click(function(){
																	  	//alert("aa");
															    buttonSequence=15;
																ContentCount =7;   
															
																
							     $(".con_sixth_btn_1,.handA,.hand").hide();
								
			                     $(".con_sixth_btn_2,.SixthButtonCon,.tick22,.SubBtnDiv,.middle62").show().css("display","inline-block");	
                      											
													 $(".sixth_button1").css("color", "#000000");
													 $(".sixth_button2").css("color", "#CC0000");
													 
													 $(".sixth_button").css("color", "#CC0000");
																 });
							 
								 
								
								 
								 
								 
								 
								 $(".seventh_button").click(function(){
																   buttonSequence = 16;
																   ContentCount =11;
																   
															   $(".hand,.ContentContainer,.note_2,.img_1,.img_2,.img_3,.handA,.tickA").hide();
													           $(".tick7,.ContentSeventhButton,.middle7").show().css("display","inline-block");	
															     $(".image_2,.image_1,.image_3").hide();
																 });
							 
							 
							 
							
							  $(".note_click").click(function(){
																   
															   $(".FourthButtonCon1,.FourthButtonCon2,.FourthButtonCon3,.FourthButtonCon4,.FourthButtonCon5,.FourthButtonCon6,.FourthButtonCon7,.FourthButtonCon8,.FourthButtonCon9,.FourthButtonCon10").show();
													           $(".note_1").show().css("display","inline-block");	
																 });
							 
							 
							 
							
							 
							  $(".click_img").click(function(){
																   
															   $(".note_1").hide();
													           $(".FourthButtonCon1,.FourthButtonCon2,.FourthButtonCon3,.FourthButtonCon4,.FourthButtonCon5,.FourthButtonCon5,.FourthButtonCon6,.FourthButtonCon7,.FourthButtonCon8,.FourthButtonCon9,.FourthButtonCon10").show().css("display","inline-block");	
																 });
							   
							  $(".note_click_event").click(function(){
																   
															   $(".SeventhButtonCon1,.SeventhButtonCon2,.SeventhButtonCon3,.SeventhButtonCon4,.SeventhButtonCon5,.SeventhButtonCon6,.SeventhButtonCon7,.SeventhButtonCon8,.SeventhButtonCon9,.SeventhButtonCon10,.SeventhButtonCon11,.SeventhButtonCon12,.SeventhButtonCon13,.SeventhButtonCon14").show();
													           $(".note_2").show().css("display","inline-block");	
																 });
							
							 
							  
							  $(".click_img1").click(function(){
																   
															   $(".note_2").hide();
													           $(".SeventhButtonCon1,.SeventhButtonCon2,.SeventhButtonCon3,.SeventhButtonCon4,.SeventhButtonCon5,.SeventhButtonCon6,.SeventhButtonCon7,.SeventhButtonCon8,.SeventhButtonCon9,.SeventhButtonCon10,.SeventhButtonCon11,.SeventhButtonCon12,.SeventhButtonCon13,.SeventhButtonCon14").show().css("display","inline-block");	
																 });
							   
						    
						
												   });
						





                           
							  
							  
							  
							  
							  
							  