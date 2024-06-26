$(document).ready(function(){
						   
						    window.buttonSequence = 0;
							window.bp1=0;
							window.bp2=0;
							
							
												 $(".link1").css('color', 'black');
							$(".link2").css('color', 'red');
							
						     					 
							 $(".hand1").show();
							 
							 $(".first_button").click(function(){
															   buttonSequence = 1;
															   ContentCount = 6;
															   
															    
																 
															   $(".hand,.ContentContainer").hide();
															   $(".tick1,.ContentFirstButton,.hand2").show().css("display","inline-block");	
																 });
							 
							  $(".second_button").click(function(){
																  buttonSequence = 2;
																  ContentCount =7;
															  $(".hand,.ContentContainer").hide();
															  $(".tick2,.ContentSecondButton,.hand3").show().css("display","inline-block");	
																 });
							  
							   $(".third_button").click(function(){
																  buttonSequence = 3;
																  ContentCount =6;
															   $(".hand,.ContentContainer").hide();
															   $(".tick3,.ContentThirdButton,.hand4").show().css("display","inline-block");
															   
																 });
							   
							   $(".fourth_button").click(function(){
																   buttonSequence = 4;
																   ContentCount =3;
																   
																   
																 
															   $(".hand,.ContentContainer").hide();
															   $(".tick4,.ContentFourthButton,.hand5").show().css("display","inline-block");	
							   });
							   
							    $(".fifth_button").click(function(){
																   buttonSequence = 5;
																   ContentCount =4;
																   
																   
																 
															   $(".hand,.ContentContainer").hide();
															   $(".tick5,.ContentFifthButton,.hand6").show().css("display","inline-block");	
							   });
								
								
								 $(".sixth_button").click(function(){
																   buttonSequence = 6;
																   ContentCount =4;
																   
																   
																 
															   $(".hand,.ContentContainer").hide();
															   $(".tick6,.ContentSixthButton").show().css("display","inline-block");	
							   });
								 
								 
								 
								  $(".Cross_BM").click(function(){ 
							 		 $(".content_note,.Cross_BM").hide();
 $(".content3_3,.content3_4,.content3_5").css("visibility", "visible");

							 });
							 
							  $(".note").click(function(){ 
									
							 		 $(".content_note,.Cross_BM").show();
									 //$(".content_note").scrollView();

									 $(".content3_3,.content3_4,.content3_5").css("visibility", "hidden");

							 });
							  
							  
							
							 
							 
							   
							   });
						
