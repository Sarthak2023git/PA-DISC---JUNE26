$(document).ready(function(){
						   
						    window.buttonSequence = 0;
							window.bp1=0;
							window.bp2=0;
							 var showAns1 = 0;
						     					 
							 $(".hand1").show();
							 
							 $(".first_button").click(function(){
															   buttonSequence = 1;
															   ContentCount =0;
															     
															   $(".hand,.ContentContainer ").hide();
															   $(".tick1,.ContentFirstButton,.hand2").show().css("display","inline-block");	
															   $(".first_sub_button1,.second_sub_button2,.third_sub_button3").css('color','#000');
																
																 });
							 
							  $(".first_sub_button1").click(function(){
																	
															   buttonSequence = 2;
															   ContentCount =5;
															     
															   $(".hand,.ContentContainer,.hand2,.hand4,.hand3,.middle").hide();
															   $(".tick2,.ContentFirstButton,.middle1").show().css("display","inline-block");
															   $(".first_sub_button1").css('color','#C00');
															   $(".third_sub_button3,.second_sub_button2").css('color','#000');
																 
																 });
							  
							    $(".second_sub_button2").click(function(){
															   buttonSequence = 3;
															   ContentCount =5;
															     
															   $(".hand,.ContentContainer,.hand3,.hand2 ,.middle").hide();
															   $(".tick3,.ContentFirstButton,.middle2").show().css("display","inline-block");	
															   $(".second_sub_button2").css('color','#C00');
															   $(".first_sub_button1,.third_sub_button3").css('color','#000');
																 
																 });
							  
							  
							    $(".third_sub_button3").click(function(){
															   buttonSequence = 4;
															   ContentCount = 3;
															     
															   $(".hand,.ContentContainer,.hand4 ,.middle").hide();
															   $(".tick4,.ContentFirstButton,.middle3").show().css("display","inline-block");	
															   $(".third_sub_button3").css('color','#C00');
															   $(".first_sub_button1,.second_sub_button2").css('color','#000');
																
																});
							  
							  
							  
							 
							  $(".second_button").click(function(){
																  buttonSequence = 5;
																  ContentCount = 7;
																  showAns1 = 0;
															  $(".hand,.ContentContainer,.tbl").hide();
															  $(".tick5,.ContentSecondButton,.hand6,.middle4").show().css("display","inline-block");	
															  $(".AS").css({"visibility":"visible"});
																 
																 });
							  
							   $(".third_button").click(function(){
																  buttonSequence = 6;
																  ContentCount = 8;
															   $(".hand,.ContentContainer").hide();
															   $(".tick6,.ContentThirdButton,.hand7,.middle5").show().css("display","inline-block");	
																 
																 });
							   
							   
							   
							   
							
							  
							  
							   $(".fourth_button").click(function(){
																  	
																   buttonSequence = 7;
																   ContentCount =0;
															   $(".hand,.ContentContainer ,.hand9").hide();
													           $(".tick7,.ContentFourthButton,.hand8").show().css("display","inline-block");
															    $(".fourth_sub_button1,.fourth_sub_button2").css('color','#000');
																 });
							   
							   
							    $(".fourth_sub_button1").click(function(){
																		
															   buttonSequence = 8;
															   ContentCount =3;
															     
															   $(".hand,.hand8,.middle").hide();
															   $(".tick8,.FourthButtonCon1,.middle6").show().css("display","inline-block");	
															    $(".fourth_sub_button1").css('color','#C00');
																 $(".fourth_sub_button2").css('color','#000');
																 });
							  
							    $(".fourth_sub_button2").click(function(){
															   buttonSequence = 9;
															   ContentCount =6;
															     
															   $(".hand,.hand9,.hand8,.middle").hide();
															   $(".tick9,.FourthButtonCon2,.middle7").show().css("display","inline-block");	
															   $(".fourth_sub_button2").css('color','#C00');
															   $(".fourth_sub_button1").css('color','#000');
																
																 });
								
							  
							  $(".fifth_button").click(function(){
														
																   buttonSequence = 10;
																   ContentCount = 1;
															   $(".hand,.ContentContainer ,.hand12").hide();
													           $(".tick10,.ContentFifthButton,.hand11").show().css("display","inline-block");
															   $(".fifth_sub_button2,.fifth_sub_button1").css('color','#000');
																 });
							  
							  
							   $(".fifth_sub_button1").click(function(){
																		
															   buttonSequence = 11;
															   ContentCount = 4;
															     
															   $(".hand,.FifthButtonCon2,.hand11,.hand12,.middle").hide();
															   $(".tick11,.FifthButtonCon1,.middle8").show().css("display","inline-block");	
															    $(".fifth_sub_button1").css('color','#C00');
																$(".fifth_sub_button2").css('color','#000');
																 });
							  
							    $(".fifth_sub_button2").click(function(){
															   buttonSequence = 12;
															   ContentCount = 6;
															     
															   $(".hand,.FifthButtonCon1,.hand11,.hand12,.middle").hide();
															   $(".tick12,.FifthButtonCon2,.hand13,.middle9").show().css("display","inline-block");	
															   $(".fifth_sub_button2").css('color','#C00');
															    $(".fifth_sub_button1").css('color','#000');
																 });
							  
							  
							  
							 
							/*  $(".show").click(function(){
																  
															  // $(".hand,.ContentContainer").hide();
													           $(".tbl").show().css("display","inline-block");	
																 });*/
							 
							 
							
					 
							 $(".note").click(function(){
													   
													   if(showAns1%2 == 0){
														   
 														   $(".tbl").show().css('display', 'inline-block');	
														   $(".AS").css({"visibility":"hidden"});
														   
  													   }else{
														   
 														   $(".tbl").hide();
														   $(".AS").css({"visibility":"visible"});
 
 															}
															
													   showAns1++;
													   
  															   });
							 
							 
							 
							 
							    
							   $(".cross").click(function(){
															  
															   if(showAns1%2 == 0){
 														   $(".tbl").show().css('display', 'inline-block');	
														  $(".AS").css({"visibility":"hidden"});
														   
  													   }else{
 														   $(".tbl").hide();
														  $(".AS").css({"visibility":"visible"});
 
 															}
															
													   showAns1++; 
															   
															   
																 });
							 
							 
							 
							 
						    
						
												   });
						
