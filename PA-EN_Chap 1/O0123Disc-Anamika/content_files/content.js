$(document).ready(function(){
						   
						    window.buttonSequence = 0;
							window.bp1=0;
							window.bp2=0;
							 var showAns1 = 0;
						     					 
							 $(".hand1").show();
							 
							 $(".first_button").click(function(){
															   buttonSequence = 1;
															   ContentCount = 7;
															     
															   $(".hand,.ContentContainer").hide();
															   $(".tick1,.ContentFirstButton,.hand2").show().css("display","inline-block");	
																 });
							 
							 
							 
							  $(".second_button").click(function(){
																  buttonSequence = 2;
																  ContentCount =13;
																  showAns1 = 0;
															  $(".hand,.ContentContainer,.tbl").hide();
															  $(".tick2,.ContentSecondButton,.hand3").show().css("display","inline-block");	
															  $(".AS").css({"visibility":"visible"});
																 });
							  
							   $(".third_button").click(function(){
																  buttonSequence = 3;
																  ContentCount = 8;
															   $(".hand,.ContentContainer").hide();
															   $(".tick3,.ContentThirdButton,.hand4").show().css("display","inline-block");
															   $(".hidd").css({"visibility":"hidden"});
																 });
							   
							   
							   
							   
							
							 /*   $(".fifth_button").click(function(){
																   buttonSequence = 5;
																   ContentCount =10;
															   $(".hand,.ContentContainer").hide();
													           $(".tick5,.ContentFifthButton").show().css("display","inline-block");	
																 });*/
							 
							 
							/*  $(".show").click(function(){
																  
															  // $(".hand,.ContentContainer").hide();
													           $(".tbl").show().css("display","inline-block");	
																 });*/
							 
							 
							
					 
							 $(".note").click(function(){
													   
													   if(showAns1%2 == 0){
														   
 														   $(".tbl").show().css('display', 'inline-block');	
														   $(".AS").css({"visibility":"hidden"});
														   
  													   }else{
														   
 														  //$(".tbl").hide();
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
						
