$(document).ready(function(){
						   
						    window.buttonSequence = 0;
							window.bp1=0;
							window.bp2=0;
							
							window.extra301=0
								        window.extra302=0
										window.extra303=0
								        window.extra304=0
										window.extra305=0
								        window.extra306=0
										window.extra307=0
								        window.extra308=0
										window.extra309=0
										window.extra310=0
								        window.extra311=0
										window.extra312=0
								        window.extra313=0
										window.extra314=0
								        window.extra315=0
										window.extra316=0
								        window.extra317=0

						     					 
							 $(".hand1").show();
							 
							 $(".first_button").click(function(){
															   buttonSequence =1;
															   ContentCount = 14;
															    $(".handA,.whole,.ContentContainer").hide();
																
															   $(".ContentSecondButton,.ContentThirdButton,.ContentFourthButton").hide();
																
															  
															   $(".tick1,.ContentFirstButton,.handA hand2,.first_button,.middle1").show().css("display","inline-block");	
															   SpaceAndAutorunSpeed = 500; 
															   
																 });
							
							 
							  $(".second_button").click(function(){
																  buttonSequence=2;
																  ContentCount=0;
																  
									 $(".handA,.whole,.ContentContainer,.con_second_button1,.con_second_button2").hide();
									  $(".ContentFirstButton,.ContentThirdButton,.ContentFourthButton").hide();
									
											 
										        $(".tick3,.tick4").hide();
												$(".handA hand3").show();
											   
											    $(".tick2,.ContentSecondButton,.handA hand3").show().css("display","inline-block");
													
													 $(".second_button1").css("color", "#000000");
													 $(".second_button2").css("color", "#000000");
													 $(".second_button").css("color", "#CC0000");
															 	
																 });
							   
							 $(".second_button1").click(function(){
															    buttonSequence=3;
																ContentCount =6;   
																
							     $(".con_second_button2,.ContentContainer,.handA").hide();
								
								 $(".tick4").hide();
			                     $(".tick3,.tick2,.con_second_button1,.ContentSecondButton,.handA hand4,.middle2").show().css("display","inline-block");	
															  
														
													 $(".second_button1").css("color", "#CC0000");
													 $(".second_button2").css("color", "#000000");
													 $(".second_button").css("color", "#CC0000");	
													 
																 });
							  
							  
							  
							 $(".second_button2").click(function(){
															     buttonSequence=4;
																 ContentCount = 4;
																 
																  clearTimeout(extra312)
																 extra312 = null;
																 
																  clearTimeout(extra313)
																 extra313 = null;
																 
																 clearTimeout(extra314)
																 extra314 = null;
																 
																 clearTimeout(extra315)
																 extra315 = null;
																 
																 clearTimeout(extra316)
																 extra316 = null;
																 
																 clearTimeout(extra317)
																 extra317 = null;
																 
							       $(".con_second_button1,.ContentContainer,.handA").hide();
				                
								  
							       $(".tick4,.tick3,.tick2,.con_second_button2,.ContentSecondButton,.handA hand5,.middle3").show().css("display","inline-block");	
																  
													 $(".second_button1").css("color", "#000000");
													 $(".second_button2").css("color", "#CC0000");
													  $(".second_button").css("color", "#CC0000");
													  $(".bgcolor6,.bgcolor7,.bgcolor8").css("color","black")
													  $(".opac1,.opac2,.opac3,.opac4,.opac5,.opac6,.opac7,.opac8").css("opacity","0")
													   $(".result,.plus").css("opacity","0")
																 });
							  
							  
          $(".third_button").click(function(){
																  buttonSequence = 5;
																  ContentCount =8;
																  
								    $(".whole,.ContentContainer,.handA").hide();
									
									 $(".ContentFirstButton,.ContentSecondButton,.ContentFourthButton").hide();
									
									
					               $(".tick5,.ContentThirdButton,.handA hand6,.middle4").show().css("display","inline-block");
								    
								   
								   SpaceAndAutorunSpeed = 500; 
								   
																 });
							    
	            $(".fourth_button").click(function(){
												   
																   buttonSequence = 6;
																   ContentCount =0;
															   $(".whole,.hand,.ContentContainer").hide();
															   
															    $(".ContentFirstButton,.ContentSecondButton,.ContentThirdButton,.handA").hide();
																
						
						                                     $(".tick7,.tick8").hide();
						  
															 $(".tick6,.ContentFourthButton,.handA hand7").show().css("display","inline-block");
							          
																  
													 $(".Fourth_button1").css("color", "#000000");
											      $(".Fourth_button2").css("color", "#000000");
													  $(".Fourth_button").css("color", "#CC0000");
															   
															   
																 });
							   
							    $(".Fourth_button1").click(function(){
															    buttonSequence=7;
																ContentCount =1;  
																
																
							                                  $(".whole,.ContentContainer").hide();
															  
															   $(".ContentFirstButton,.ContentSecondButton,.ContentThirdButton,.Con_Fourth_button2,.handA").hide();
															  
						
															  $(".tick8").hide();
										  $(".tick7,.tick6,.ContentFourthButton,.handA hand8,.Con_Fourth_button1,.middle5").show().css("display","inline-block");
															 
						  
														
													 $(".Fourth_button").css("color", "#000000");			  
													 $(".Fourth_button1").css("color", "#CC0000");
													 $(".Fourth_button2").css("color", "#000000");
												      
																 });
							  
							  
							  
							   $(".Fourth_button2").click(function(){
															     buttonSequence=8;
																 ContentCount = 7;
																  clearTimeout(extra301)
																 extra301 = null;
																 
																  clearTimeout(extra302)
																 extra302 = null;
																 
																 clearTimeout(extra303)
																 extra303 = null;
																 
																 clearTimeout(extra304)
																 extra304 = null;
																 
																 clearTimeout(extra305)
																 extra305 = null;
																 
																 clearTimeout(extra306)
																 extra306 = null;
																 
																 clearTimeout(extra307)
																 extra307 = null;
																 
																  clearTimeout(extra308)
																 extra308 = null;
																 
																  clearTimeout(extra309)
																 extra309 = null;
																 
																  clearTimeout(extra310)
																 extra310 = null;
																  clearTimeout(extra311)
																 extra311 = null;
																
																 
																 
							              $(".ContentContainer").hide();
										   
										  $(".ContentFirstButton,.ContentSecondButton,.ContentThirdButton,.Con_Fourth_button1,.whole,.handA").hide();
										   
										
										
									    
										  $(".tick7,.tick6,.tick8,.ContentFourthButton,.Con_Fourth_button2,.FourthButtonCon2,.FourthButtonCon3,.middle6").show().css("display","inline-block");
										  $(".FourthButtonCon2,.FourthButtonCon3").css({"visibility":"visible"});
															 
						  
														
																  
													  $(".Fourth_button1").css("color", "#000000");
													  $(".Fourth_button2").css("color", "#CC0000");
												      $(".Fourth_button").css("color", "#CC0000");
													   $(".bgcolor,.bgcolor1,.bgcolor2,.bgcolor3,.bgcolor4").css("color","black")
													   $(".opac1,.opac2,.opac3,.opac4,.opac5,.opac6,.opac7,.opac8").css("opacity","0")
													    $(".result,.plus").css("opacity","0")
																 });
							  
							   
							   
							   
							   
							   
							   	
							     $(".img2").click(function(){
							     $(".whole,.croosBM").show().css({"display":"inline-block"}); 
								 $(".FourthButtonCon2,.FourthButtonCon3").css({"visibility":"hidden"});
								 
								 
								 
						
						
							
							   });
							
							
							   $(".crossBM").click(function(){
															
							   $(".whole,.croosBM").hide();
							   $(".FourthButtonCon2,.FourthButtonCon3").css({"visibility":"visible"});
								
							   });
												   });
						