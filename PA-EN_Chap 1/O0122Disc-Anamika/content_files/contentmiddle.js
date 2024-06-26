$(document).ready(function(){
						   
						  
							 
							$(".first_button").click(function(){
														
																  $(".Content00").show();
																 var hk=$(".middle1").height();
																 var hk1=$(".container-right").height();
																 //alert(hk)
																 //alert(hk1)
																 var mar = (hk1-hk)/2;
																 if(hk < hk1){
																 $(".Content1_1").css("margin-top",mar+"px")
																 }
																 $(".Content00").hide();
																 })  
							 $(".second_button").click(function(){
														
																  $(".Content00").show();
																 var hk=$(".middle2").height();
																 var hk1=$(".container-right").height();
																// alert(hk)
																 //alert(hk1)
																 var mar = (hk1-hk)/2;
																 if(hk < hk1){
																 $(".Content2_1").css("margin-top",mar+"px")
																 }
																 $(".Content00").hide();
																 }) 
							
							$(".third_button").click(function(){
														
																  $(".Content00").show();
																 var hk=$(".middle3").height();
																 var hk1=$(".container-right").height();
																 //alert(hk)
																 //alert(hk1)
																 var mar = (hk1-hk)/2;
																 if(hk < hk1){
																 $(".Content3_1").css("margin-top",mar+"px")
																 }
																 $(".Content00").hide();
																 }) 
							/*$(".fourth_button").click(function(){
														
																  $(".Content00").show();
																 var hk=$(".middle4").height();
																 var hk1=$(".container-right").height();
																 alert(hk)
																 alert(hk1)
																 var mar = (hk1-hk)/2;
																 if(hk < hk1){
																 $(".Content4_1").css("margin-top",mar+"px")
																 }
																 $(".Content00").hide();
																 }) 
							
							
						*/
						   });



                           
						
						
						  