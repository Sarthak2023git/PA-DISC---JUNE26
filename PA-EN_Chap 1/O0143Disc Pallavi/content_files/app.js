// JavaScript Document
$(document).ready(function(){
					//////////use "spaceclick" variable////////////////////////////////////////////////////////	  
						  
					  window.abc=99;
					  
					   window.SpaceAndAutorunSpeed = 500; 
					   
					   $(".opac1,.opac2,.opac3,.opac4,.opac5,.opac6,.opac7,.opac8").css("opacity","0")
					    $(".result,.plus").css("opacity","0")
					   
						   
				      Local1=function(){
						  
						  
						   if(buttonSequence == 8 && spaceclick == 2 )
						  {
							  SpaceAndAutorunSpeed = 2200; 
							
							 
							   extra301 =  setTimeout(function(){
		                	
									 $(".bgcolor").css("color","red")
								  },1000)
							   
							   
							   extra302 =  setTimeout(function(){
		                	
									 $(".opac1").css("opacity","1")
									 $(".opac1").css("color","red")
									 
								  },1500)
							   
							   
						  }
						  else
						   if(buttonSequence == 8 && spaceclick == 3 )
						  {
							  SpaceAndAutorunSpeed = 2200; 
							  
							 $(".bgcolor").css("color","black")
							 
							 
							   extra303 =  setTimeout(function(){
		                	
									 
									  $(".bgcolor1").css("color","red")
								  },1000)
							   
							   
							   extra304 =  setTimeout(function(){
		                	
									 $(".opac2").css("opacity","1")
									  $(".opac2").css("color","red")
								  },1500)
							   
							   
						  }else
						  
						    if(buttonSequence == 8 && spaceclick == 4 )
						  {
							  SpaceAndAutorunSpeed = 2200; 
							  
							 $(".bgcolor,.bgcolor1").css("color","black")
							 $(".opac1").css("color","black")
							   extra301 =  setTimeout(function(){
		                	
									 
									  $(".bgcolor2").css("color","red")
								  },1000)
							   
							   
							   extra305 =  setTimeout(function(){
		                	
									 $(".opac3").css("opacity","1")
									  $(".opac3").css("color","red")
								  },1500)
							   
							   
						  }else
						  
						  if(buttonSequence == 8 && spaceclick == 5)
						  {
							SpaceAndAutorunSpeed = 2200; 
							  $(".bgcolor,.bgcolor1,.bgcolor2").css("color","black")
							   $(".opac2").css("color","black")
							 
							   extra306 =  setTimeout(function(){
		                	
									 
									  $(".bgcolor3").css("color","red")
								  },1000)
							   
							   
							   extra307 =  setTimeout(function(){
		                	
									 $(".opac4").css("opacity","1")
									  $(".opac4").css("color","red")
								  },1500)
							   
							   
						  }else
						  if(buttonSequence == 8 && spaceclick == 6)
						  {
							  SpaceAndAutorunSpeed = 2200; 
							  
							 $(".bgcolor,.bgcolor1,.bgcolor2,.bgcolor3").css("color","black")
							  $(".opac3").css("color","black")
							   extra308 =  setTimeout(function(){
		                	
									 
									  $(".bgcolor4").css("color","red")
								  },1000)
							   
							   
							   extra309 =  setTimeout(function(){
		                	
									 $(".opac5").css("opacity","1")
									  $(".opac5").css("color","red")
								  },1500)
							   
							   
						  }else
						  if(buttonSequence == 8 && spaceclick ==7)
						  {
							 /// alert("hi")
							   SpaceAndAutorunSpeed = 2200; 
							  $(".bgcolor,.bgcolor1,.bgcolor2,.bgcolor3,.bgcolor4").css("color","black")
							 $(".bgcolor5").css("color","red")
							  $(".opac4").css("color","black")
							   extra310 =  setTimeout(function(){
		                	
									 
									  $(".bgcolor5").css("color","black")
									  $(".opac5").css("color","black")
									  $(".result").css("opacity","1")

								  },1000)
							   extra311 =  setTimeout(function(){
		                	
									 $(".bgcolor,.bgcolor1,.bgcolor2,.bgcolor3,.bgcolor4").css("color","black")
									  $(".bgcolor5").css("color","black")
									   $(".result").css("color","red")
									   
								  },1500)
							   
							   
						  }else if(buttonSequence == 8)
						  {
							   SpaceAndAutorunSpeed = 500; 
						  }
						  
						 
						  
						  
						  }	
			     	  Local2=function(){
						  
						   if(buttonSequence == 4 && spaceclick == 2 )
						  {
							  SpaceAndAutorunSpeed = 3200; 
							
							 
							   extra312 =  setTimeout(function(){
		                	
									 $(".bgcolor6").css("color","red")
								  },1000)
							   
							   
							   extra313 =  setTimeout(function(){
		                	
									 $(".opac6").css("opacity","1")
									 $(".opac6").css("color","red")
								  },1500)
							   
							     extra314 =  setTimeout(function(){
								$(".bgcolor6").css("color","black")
								 
								
								$(".bgcolor7").css("color","red")
		                	
									 
								  },2500)
								 
								  extra315 =  setTimeout(function(){
										
								$(".opac7").css("opacity","1")
								$(".opac7").css("color","red")
								$(".plus").css("opacity","1")
								  },3000)
							   
							   
						  }
						  else
						   if(buttonSequence == 4 && spaceclick == 3 )
						  {
							  SpaceAndAutorunSpeed = 2200; 
							  
							 $(".bgcolor6,.bgcolor7").css("color","black")
							 $(".opac7").css("color","black")
							   extra316 =  setTimeout(function(){
		                	
									 
							$(".bgcolor8").css("color","red")
								  },1000)
							   
							   
							   extra317 =  setTimeout(function(){
		                	
									 $(".opac8").css("opacity","1")
									 //$(".bgcolor8").css("color","black")
									 $(".opac8").css("color","red")
								  },1500)
							   
							   extra318 =  setTimeout(function(){
		                	
									 
									 $(".bgcolor8").css("color","black")
									 $(".opac6").css("color","black")
								  },2000)
							   
							   
						  }
						    else
						   if(buttonSequence == 4 && spaceclick == 4 )
						  {
							
							   $(".opac8").css("color","black")
						  }
						  
						  else if(buttonSequence == 4)
						  {
							   SpaceAndAutorunSpeed = 500; 
						  }
						  }
			    	  Local3=function(){}
				      Local4=function(){}
				      Local5=function(){}
							  
			
					  
						   });