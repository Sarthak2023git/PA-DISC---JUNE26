// JavaScript Document
$(document).ready(function(){
						 
						//////////use "spaceclick" variable////////////////////////////////////////////////////////  
					  window.abc=99;
					  	$(".line0,.line1,.line0_2,.line2").hide();
						
	

			 Local1=function(){
				
				if(spaceclick==2 && buttonSequence==4){
							 //alert(spaceclick)
						//$(".step1").hide();
						//$(".line0_2").show();
						//$(".line0,.line1,.line0_2,.line2").hide();
						SpaceAndAutorunSpeed = 1200;
						 
							 $(".line0_2").delay(1000).fadeIn();
						 
				 } else{
					 SpaceAndAutorunSpeed = 500;
				 }
					 
					 
					 if(spaceclick==3&& buttonSequence==3){
							 //alert(spaceclick)
						//$(".step1").hide();
						$(".line0").show();
						 }
					 
					 
					if(spaceclick==3&& buttonSequence==4){
							 //alert(spaceclick)
						//$(".step1").hide();
						
						$(".line0_2").hide();
						$(".line2").show();
					 }
					
					if(spaceclick==4&& buttonSequence==3){
							 //alert(spaceclick)
						$(".line0").hide();
						$(".line1").show();
						
					 }
					 
					if(spaceclick==4&& buttonSequence==4){
							 //alert(spaceclick)
						$(".line0").hide();
						$(".line1").show();
						
					 }
					 
					
			 }	
			     	  Local2=function(){}
			    	  Local3=function(){}
				      Local4=function(){}
				      Local5=function(){}
							  
						
						   
						 
						   
				  
					
			
					
				window.SpaceAndAutorunSpeed = 500;

					  
						   });