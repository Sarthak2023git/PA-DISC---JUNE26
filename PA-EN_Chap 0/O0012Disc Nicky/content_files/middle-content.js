// JavaScript Document
$(document).ready(function(){
						  
						  
			///////////////////////////*for container-left button middle*/ /////////////////////////////////
						
						   $(".first_button").click(function(){
									$(".middle1").css("margin-top",0+"px")					
								    $(".Content00").show();
									 var hk=$(".middle1").height();
									 var hk1=$(".container-right").height();
									 var con1 = $(".content1_5").height();
									 hk = hk-con1;
								
									 var mar = (hk1-hk)/2;
									 if(hk < hk1){
									 	$(".middle1").css("margin-top",mar+"px");
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
							
						
				 
			//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////					   
							   
		//////////////////////////////////////*for Sub-button middle	*/ /////////////////////////////////
							   
							   
							   
							   
						
				
					////////////////////////////////////////////////////////////////////////////////////////////////////////	 
						 
						 
					
							
  });