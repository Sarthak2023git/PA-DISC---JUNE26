$(document).ready(function(){
						   
						    window.buttonSequence = 0;
							window.bp1=0;
							window.bp2=0;
							 var showAns1 = 0;
							 $(".link1").css('color', 'black');
							$(".link2").css('color', 'red');
						     					 
							 $(".hand1").show();
							 
							 
							   $(".hid").css('visibility','hidden');
							   $(".ButtonsForMasterQuery").click(function(){
													   
													    $(".middle").hide();	
													   
  															   });
							 $(".first_button").click(function(){
															   buttonSequence = 4;
															   ContentCount =0;
															     
															   $(".handA,.ContentContainer  ,.observation1,.tickA").hide();
															   $(".tick4,.ContentFirstButton").show().css("display","inline-block");	
															   $(".first_button1,.first_button2,.first_button3,.first_button4").css('color','#000');
																
																 });
							 
							  $(".first_button1").click(function(){
																	
															   buttonSequence =5;
															   ContentCount =6;
															     
															   $(".handA,.ContentContainer,.hand5,.hand8,.hand7,.middle,.observation1").hide();
															   $(".tick5,.ContentFirstButton,.middle3,.content2_2_dup").show().css("display","inline-block");
															   $(".first_button1").css('color','#C00');
															   $(".first_button3,.first_button2,.first_button4").css('color','#000');
																 $(".hidd").css('visibility','hidden');
																 });
							  
							    $(".first_button2").click(function(){
															   buttonSequence = 6;
															   ContentCount =4;
															     
															   $(".handA,.ContentContainer,.hand6,.hand8,.hand5,.middle,.observation1  ").hide();
															   $(".tick6,.ContentFirstButton,.middle4").show().css("display","inline-block");	
															   $(".first_button2").css('color','#C00');
															   $(".first_button1,.first_button3,.first_button4").css('color','#000');
																 
																 });
							  
							  
							    $(".first_button3").click(function(){
															   buttonSequence = 7;
															   ContentCount = 5;
															     
															   $(".handA,.ContentContainer,.hand5,.hand7,.hand6,.middle,.observation1  ").hide();
															   $(".tick7,.ContentFirstButton,.middle5").show().css("display","inline-block");	
															   $(".first_button3").css('color','#C00');
															   $(".first_button1,.first_button2,.first_button4").css('color','#000');
																
																});
							  
							  
							  $(".first_button4").click(function(){
															   buttonSequence = 8;
															   ContentCount = 4;
															     
															   $(".handA,.ContentContainer,.middle,.observation1  ").hide();
															   $(".tick8,.ContentFirstButton,.middle6").show().css("display","inline-block");	
															   $(".first_button4").css('color','#C00');
															   $(".first_button1,.first_button2,.first_button3").css('color','#000');
																
																});
							 
							  $(".second_button").click(function(){
																  buttonSequence = 9;
																  ContentCount =0;
																  showAns1 = 0;
															  $(".handA,.ContentContainer,.tbl,.middle,.table_note,.Note1,.tickA").hide();
															  $(".tick9,.ContentSecondButton").show().css("display","inline-block");	
															  $(".AS").css({"visibility":"visible"});
																 $(".new_table").css("display","inline-table"); 
																  $(".second_button1,.second_button2,.second_button3,.second_button4").css('color','#000');
																 });
							  
							  
							   $(".second_button1").click(function(){
															   buttonSequence = 10;
															   ContentCount =5;
															     
															   $(".handA,.ContentContainer,.observation1,.handA,.hand41  ").hide();
															   $(".tick10,.ContentSecondButton,.middle7").show().css("display","inline-block");	
															   $(".second_button2,.second_button3,.second_button4").css('color','#000');
																$(".second_button1").css('color','#C00');
																 });
							  
							  
							   $(".second_button2").click(function(){
															   buttonSequence = 11;
															   ContentCount =4;
															     
															   $(".handA,.ContentContainer,.observation1,.handA,.hand42  ").hide();
															   $(".tick11,.ContentSecondButton,.middle8").show().css("display","inline-block");	
															   $(".second_button1,.second_button3,.second_button4").css('color','#000');
																$(".second_button2").css('color','#C00');
																 });
							  
							  
							     $(".second_button3").click(function(){
															   buttonSequence = 12;
															   ContentCount =6;
															     
															   $(".handA,.ContentContainer,.observation1,.table_note,.Note1,.handA,.hand43  ").hide();
															   $(".tick12,.ContentSecondButton,.middle9").show().css("display","inline-block");	
															   $(".second_button1,.second_button2,.second_button4").css('color','#000');
																$(".second_button3").css('color','#C00');
																 });
							  
							  
							     $(".second_button4").click(function(){
															   buttonSequence = 13;
															   ContentCount =4;
															     
															   $(".handA,.ContentContainer,.observation1,.handA,.hand44,.table_note  ").hide();
															   $(".tick13,.ContentSecondButton,.middle10").show().css("display","inline-block");	
															   $(".second_button1,.second_button3,.second_button2").css('color','#000');
																$(".second_button4").css('color','#C00');
																 });
							  
							  
							  
							  
							  
							  
							  
							  
							  
							   $(".third_button").click(function(){
																  buttonSequence =14;
																  ContentCount =6;
															   $(".handA,.ContentContainer,.middle,.Note1,.table_rule,.handA  ").hide();
															   $(".tick14,.ContentThirdButton,.middle11").show().css("display","inline-block");	
																 
																 });
							   
							   
							   
							   
							    
							  
							   $(".fourth_button").click(function(){
																  	
																   buttonSequence = 15;
																   ContentCount =0;
															   $(".handA,.ContentContainer  ,.middle,.handA,.tickA").hide();
													           $(".tick15,.ContentFourthButton,.hand16").show().css("display","inline-block");
															  $(".fourth_button2,.fourth_button3,.fourth_button4,.fourth_button5,.fourth_button1").css('color','#000');
																 });
							   
							    $(".fourth_button1").click(function(){
																	
															   buttonSequence = 16;
															   ContentCount =5;
															     
															   $(".handA,.ContentContainer,.hand13,.hand14,.hand15,.hand16,.hand17,.middle,.observation1,.Note1  ").hide();
															   $(".tick16,.ContentFourthButton,.middle12").show().css("display","inline-block");
															  
															   $(".fourth_button1").css('color','#C00');
															   $(".fourth_button2,.fourth_button3,.fourth_button4,.fourth_button5").css('color','#000');
																 
																 });
							  
							    $(".fourth_button2").click(function(){
															   buttonSequence = 17;
															   ContentCount =9;
															     
															   $(".handA,.ContentContainer,.hand13,.hand14,.hand15,.hand16,.hand17,.middle,.observation1,.Note1  ").hide();
															   $(".tick17,.ContentFourthButton,.middle13").show().css("display","inline-block");	
															   $(".fourth_button2").css('color','#C00');
															   $(".fourth_button1,.fourth_button3,.fourth_button4,.fourth_button5").css('color','#000'); 
																 });
								
								
							 
							 
							  $(".fourth_button3").click(function(){
																	
															   buttonSequence = 18;
															   ContentCount =5;
															     
															   $(".handA,.ContentContainer,.hand13,.hand14,.hand15,.hand16,.hand17,.middle,.observation1,.Note1  ").hide();
															   $(".tick18,.ContentFourthButton,.middle14").show().css("display","inline-block");
															    $(".fourth_button3").css('color','#C00');
															   $(".fourth_button2,.fourth_button1,.fourth_button4,.fourth_button5").css('color','#000');                                                                $(".table_id").css("display","inline-table");
																 });
							  
							    $(".fourth_button4").click(function(){
															   buttonSequence = 19;
															   ContentCount =3;
															     
															   $(".handA,.ContentContainer,.hand13,.hand14,.hand15,.hand16,.hand17,.middle,.observation1,.Note1  ").hide();
															   $(".tick19,.ContentFourthButton,.middle15").show().css("display","inline-block");	
															   $(".fourth_button4").css('color','#C00');
															   $(".fourth_button2,.fourth_button3,fourth_button1,.fourth_button5").css('color','#000');
																 });
								
								 $(".fourth_button5").click(function(){
																	
															   buttonSequence = 20;
															   ContentCount =4;
															     
															   $(".handA,.ContentContainer,.hand13,.hand14,.hand15,.hand16,.hand17,.middle,.observation1,.Note1  ").hide();
															   $(".tick20,.ContentFourthButton,.middle16").show().css("display","inline-block");
															   $(".fourth_button5").css('color','#C00');
															   $(".fourth_button2,.fourth_button3,.fourth_button4,.fourth_button1").css('color','#000');
																 });
							  
							   
							 
								
							  
							  $(".fifth_button").click(function(){
														
																   buttonSequence = 21;
																   ContentCount =6;
															   $(".handA,.ContentContainer  ,.middle").hide();
													           $(".tick21,.ContentFifthButton,.middle17").show().css("display","inline-block");
															  $(".fifth_button").css('color','#C00');
																 });
							  
							  
							  
							  
							  
							  
							  
							  
							  
							  
							  
							  
							    $(".sixth_button").click(function(){
														
																   buttonSequence = 1;
																   ContentCount = 1;
																
															   $(".handA,.ContentContainer  ,.hand1,.tick21A,.tick22A").hide();
													           $(".tick1,.ContentSixthtButton").show().css("display","inline-block");
															  $(".sixth_button1,.sixth_button2").css('color','#000');
															  
															   $(".sixth_button").css('color','#C00');
																 });
							  
							  
							 
							 
							 
							 
							 $(".sixth_button1").click(function(){
																	
															   buttonSequence = 2;
															   ContentCount =3;
															      
															   $(".handA,.ContentContainer,.hand13,.hand14,.hand15,.hand16,.hand17,.middle,.observation1,.Note1,.tick21A,.hand2,.middle2").hide();
															   $(".tick2,.ContentSixthtButton,.middle1").show().css("display","inline-block");
															  
															   $(".sixth_button1").css('color','#C00');
															   $(".sixth_button2").css('color','#000');
																 
																 });
							  
							    $(".sixth_button2").click(function(){
															   buttonSequence = 3;
															   ContentCount =3;
															     
															   $(".handA,.ContentContainer,.hand13,.hand14,.hand15,.hand16,.hand17,.middle,.observation1,.Note1,.tick22A,.handA,.middle1").hide();
															   $(".tick3,.ContentSixthtButton,.middle2").show().css("display","inline-block");	
															   $(".sixth_button2").css('color','#C00');
															   $(".sixth_button1").css('color','#000'); 
																 });
								
								
							 
							 
							  
							 
							 
							 
							
					 
							 $(".Note").click(function(){
													   
													    $(".Note1,.table_note,.Content8_1,.Content8_2,.Content8_3,.Content8_4").show().css('display', 'inline-block');	
													    // $(".middle7").hide();	
  															   });
							 
							  $(".Observation").click(function(){
												
			$(".observation1,.Observation,.ana1").show().css('display', 'inline-block');	
		
			 $(".step1_1,.step1_2,.step1,.step2").hide();	
			
$(".middle1,.Observation,.ana1,.content2_1").show().css('display', 'inline-block'); 
	                                         

  															   });
							 
							 
							    $(".cross_img2").click(function(){
												
			$(".middle1,.observation,.ana1,.Content2_1 ,.Content2_2,.Content2_3,.Content2_4,.Content2_5,.Content2_6,.Content2_7,.Content2_8").show().css('display', 'inline-block');	
														  $(".observation1,.middle2,.step1,.step2").hide();	
														
														
													   
  															   });
							 
							 
							 
							  $(".Rule10").click(function(){
													   
													    $(".table_rule,.middle12,.middle11").show().css('display', 'inline-block');	
													     
  															   });
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							  $(".cross_note").click(function(){
													   
													    $(".Content8_1,.Content8_2,.Content8_3,.Content8_4,.Content8_5,.middle7").show().css('display', 'inline-block');	
														  $(".Note1,.table_note,.middle8,.step8").hide();	
														
														
													   
  															   });
							 
							 
							 
							 $(".cross_rule").click(function(){
													   
													    $(".Content11_1,.Content11_2,.Content11_3,.Content11_4,.Content11_5,.Content11_6,.middle11").show().css('display', 'inline-block');	
														  $(".Rule1,.table_rule,.middle12").hide();	
														  
														  $(".table_Arrow , tr").css('display', 'table-row');
														
														
													   
  															   });
							 
							 
							
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							    
							  
							
							 
						    
						
												   });
						
