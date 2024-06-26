// JavaScript Document
$(document).ready(function(){
						  
						  
							 
						
						   $(".first_button").click(function(){
															 
															 
																 if(hk < hk1){
																	  $(".middle1").css("margin-top",0+"px")
																 }
																 else
																 {
																	 $(".middle1").css("margin-top",5+"px")
																 }
													
																  $(".Content00").show()
																
																 var hk=$(".middle1").height();
																 var hk1=$(".container-right").height();
																 
																 var mar = (hk1-hk)/2;
																 if(hk < hk1){
																 $(".middle1").css("margin-top",mar+"px")
																 }
															
						
						
						
						})
						   
						   
						   
						     $(".second_button").click(function(){
															 
															 
																 if(hk < hk1){
																	  $(".middle2").css("margin-top",0+"px")
																 }
																 else
																 {
																	 $(".middle2").css("margin-top",5+"px")
																 }
													
																  $(".Content00").show();
																 var hk=$(".middle2").height();
																 var hk1=$(".container-right").height();
																 
																 var mar = (hk1-hk)/2;
																 if(hk < hk1){
																 $(".middle2").css("margin-top",mar+"px")
																 }
																 $(".Content00").hide();
																 })
						 
					 $(".third_button").click(function(){
															 
															 
																 if(hk < hk1){
																	  $(".middle3").css("margin-top",0+"px")
																 }
																 else
																 {
																	 $(".middle3").css("margin-top",5+"px")
																 }
													
																  $(".Content00").show();
																 var hk=$(".middle3").height();
																 var hk1=$(".container-right").height();
																 
																 var mar = (hk1-hk)/2;
																 if(hk < hk1){
																 $(".middle3").css("margin-top",mar+"px")
																 }
																 $(".Content00").hide();
																 })
					 
			/*		
									 
					 $(".fourth_button ").click(function(){
															 
															 
																 if(hk < hk1){
																	  $(".middle4").css("margin-top",0+"px")
																 }
																 else
																 {
																	 $(".middle4").css("margin-top",5+"px")
																 }
													
																  $(".Content00").show();
																 var hk=$(".middle4").height();
																 var hk1=$(".container-right").height();
																 
																 var mar = (hk1-hk)/2;
																 if(hk < hk1){
																 $(".middle4").css("margin-top",mar+"px")
																 }
																 $(".Content00").hide();
																 })*/
					 
					 
					 
					  $(".fourth_button ").click(function(){
															 
															 
																 if(hk < hk1){
																	  $(".middle4").css("margin-top",0+"px")
																 }
																 else
																 {
																	 $(".middle4").css("margin-top",5+"px")
																 }
													
																  $(".Content00").show();
																 var hk=$(".middle5").height();
																 var hk1=$(".container-right").height();
																 
																 var mar = (hk1-hk)/2;
																 if(hk < hk1){
																 $(".middle5").css("margin-top",mar+"px")
																 }
																 $(".Content00").hide();
																 })
					 
					
																
																$(".fourth_button1").click(function(){
																
																if(hk < hk1){
																$(".middle41").css("margin-top",0+"px")
																} else {
																$(".middle41").css("margin-top",5+"px")
																}
																
																$(".Content00").show().css("inline-block");
																var hk=$(".middle41").height();
																var hk1=$(".container-right").height();
																var hk2 = $(".buttons1").height();
																var mar = (hk1-hk-hk2 )/2;
																mar = mar+hk2
																if(mar<=hk2){
																mar=hk2+5; 
																}
																
																if(hk < hk1){
																$(".middle41").css("margin-top",mar+"px")
																} else {
																$(".middle41").css("margin-top",hk2+5+"px")
																}
																$(".Content00").hide();
																});
																
																
																$(".fourth_button2").click(function(){
																
																if(hk < hk1){
																$(".middle42").css("margin-top",0+"px")
																} else {
																$(".middle42").css("margin-top",5+"px")
																}
																
																$(".Content00").show().css("inline-block");
																var hk=$(".middle42").height();
																var hk1=$(".container-right").height();
																var hk2 = $(".buttons1").height();
																var mar = (hk1-hk-hk2 )/2;
																mar = mar+hk2
																if(mar<=hk2){
																mar=hk2+5; 
																}
																
																if(hk < hk1){
																$(".middle42").css("margin-top",mar+"px")
																} else {
																$(".middle42").css("margin-top",hk2+5+"px")
																}
																$(".Content00").hide();
																});
																
																
																$(".fourth_button3").click(function(){
																
																if(hk < hk1){
																$(".middle43").css("margin-top",0+"px")
																} else {
																$(".middle43").css("margin-top",5+"px")
																}
																
																$(".Content00").show().css("inline-block");
																var hk=$(".middle43").height();
																var hk1=$(".container-right").height();
																var hk2 = $(".buttons1").height();
																var mar = (hk1-hk-hk2 )/2;
																mar = mar+hk2
																if(mar<=hk2){
																mar=hk2+5; 
																}
																
																if(hk < hk1){
																$(".middle43").css("margin-top",mar+"px")
																} else {
																$(".middle43").css("margin-top",hk2+5+"px")
																}
																$(".Content00").hide();
																});
																
																
																$(".fourth_button4").click(function(){
																
																if(hk < hk1){
																$(".middle44").css("margin-top",0+"px")
																} else {
																$(".middle44").css("margin-top",5+"px")
																}
																
																$(".Content00").show().css("inline-block");
																var hk=$(".middle44").height();
																var hk1=$(".container-right").height();
																var hk2 = $(".buttons1").height();
																var mar = (hk1-hk-hk2 )/2;
																mar = mar+hk2
																if(mar<=hk2){
																mar=hk2+5; 
																}
																
																if(hk < hk1){
																$(".middle44").css("margin-top",mar+"px")
																} else {
																$(".middle44").css("margin-top",hk2+5+"px")
																}
																$(".Content00").hide();
																});
																
																
																
										
																
				
																
																
																
																
																
																
																});