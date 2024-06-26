// JavaScript Document
$(document).ready(function(){
						  
						  
			///////////////////////////*for container-left button middle*/ /////////////////////////////////
						
						   $(".first_button").click(function(){
									$(".middle1").css("margin-top",0+"px")					
								    $(".Content00").show();
									 var hk=$(".middle1").height();
									 var hk1=$(".container-right").height();
								
									 var mar = (hk1-hk)/2;
									 if(hk < hk1){
									 $(".middle1").css("margin-top",mar+"px")
									 }else
									 {
										 $(".middle1").css("margin-top",5+"px")
									 }
									 $(".Content00").hide();
							})
						   
						    $(".second_button").click(function(){
									$(".middle2").css("margin-top",0+"px")					
								    $(".Content00").show();
									 var hk=$(".middle2").height();
									 var hk1=$(".container-right").height();
								
									 var mar = (hk1-hk)/2;
									 if(hk < hk1){
									 $(".middle2").css("margin-top",mar+"px")
									 }else
									 {
										 $(".middle2").css("margin-top",5+"px")
									 }
									 $(".Content00").hide();
							})
							
							$(".third_button").click(function(){
									$(".middle3").css("margin-top",0+"px")					
								    $(".Content00").show();
									 var hk=$(".middle3").height();
									 var hk1=$(".container-right").height();
								
									 var mar = (hk1-hk)/2;
									 if(hk < hk1){
									 $(".middle3").css("margin-top",mar+"px")
									 }else
									 {
										 $(".middle3").css("margin-top",5+"px")
									 }
									 $(".Content00").hide();
							})
							
							$(".fourth_button").click(function(){
									$(".middle4").css("margin-top",0+"px")					
								    $(".Content00").show();
									 var hk=$(".middle4").height();
									 var hk1=$(".container-right").height();
								
									 var mar = (hk1-hk)/2;
									 if(hk < hk1){
									 $(".middle4").css("margin-top",mar+"px")
									 }else
									 {
										 $(".middle4").css("margin-top",5+"px")
									 }
									 $(".Content00").hide();
							})
						   
						  
							  
							   
			
			//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////					   
							   
		//////////////////////////////////////*for Sub-button middle	*/ /////////////////////////////////
							   
							   
							   
							   
							$(".fifth_button1").click(function(){
								$(".middle5").css("margin-top",0+"px")					 
							   $(".Content00").show().css("inline-block");
								 var hk=$(".middle5").height();
								 var hk1=$(".container-right").height();
								 var hk2 = $(".buttons1").height();
								
								 var mar = (hk1-hk-hk2)/2;
								 mar = mar+hk2;
								 
								 if(mar<=hk2){
									 mar=hk2+5; 
								 }
								
								 if((hk2+hk) < hk1){
								 $(".middle5").css("margin-top",mar+"px")
								 }
								 else
								 {
									 $(".middle5").css("margin-top",hk2+5+"px")
								 }
								 $(".Content00").hide();
								 
						})
							
							
							$(".third_button1").click(function(){
								$(".middle4").css("margin-top",0+"px")					 
							   $(".Content00").show().css("inline-block");
								 var hk=$(".middle4").height();
								 var hk1=$(".container-right").height();
								 var hk2 = $(".buttons1").height();
								
								 var mar = (hk1-hk-hk2)/2;
								 mar = mar+hk2;
								 
								 if(mar<=hk2){
									 mar=hk2+5; 
								 }
								
								 if((hk2+hk) < hk1){
								 $(".middle4").css("margin-top",mar+"px")
								 }
								 else
								 {
									 $(".middle4").css("margin-top",hk2+5+"px")
								 }
								 $(".Content00").hide();
								 
						   })
								
								$(".third_button2").click(function(){
								$(".middle5").css("margin-top",0+"px")					 
							   $(".Content00").show().css("inline-block");
								 var hk=$(".middle5").height();
								 var hk1=$(".container-right").height();
								 var hk2 = $(".buttons1").height();
								
								 var mar = (hk1-hk-hk2)/2;
								 mar = mar+hk2;
								 
								 if(mar<=hk2){
									 mar=hk2+5; 
								 }
								
								 if((hk2+hk) < hk1){
								 $(".middle5").css("margin-top",mar+"px")
								 }
								 else
								 {
									 $(".middle5").css("margin-top",hk2+5+"px")
								 }
								 $(".Content00").hide();
								 
						   })
				
					////////////////////////////////////////////////////////////////////////////////////////////////////////	 
						 
						 
					
							
  });