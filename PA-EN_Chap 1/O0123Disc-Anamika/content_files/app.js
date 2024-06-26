// JavaScript Document
$(document).ready(function(){
						//////////use "spaceclick" variable////////////////////////////////////////////////////////  
					 window.abc=99;
						   
				      Local1=function(){
					  if(buttonSequence==3 && spaceclick==3){
					  $(".content3_3").css({"visibility":"visible"});
					  }
					  else
					  if(buttonSequence==3 && spaceclick==5){
					  $(".content3_5").css({"visibility":"visible"});
					  }
					  else
					  if(buttonSequence==3 && spaceclick==8){
					  $(".content3_8").css({"visibility":"visible"});
					  }
					  
					  
					  }	
			     	  Local2=function(){}
			    	  Local3=function(){}
				      Local4=function(){}
				      Local5=function(){}
							  	  
						
								 /*******************************************************For word meaning*****************************************************************************/	
	$(".underline").mouseover(function() {
	var offset_pop = $(this).position();
	
        //$(".float").css({'left':260, 'top':9}); 
		
		//alert(offset_pop.left)
		
		var word = $(this).text()
		
		//alert(word)
		
		
		if(word=="front-end rounding"){
			$(".floatText").html("rounding a number to its largest place value")
			}
		else if(word=="lettuce"){
			$(".floatText").html("a vegetable eaten in salads")
			}
		else if(word=="bolster"){
			$(".floatText").html("support")
			}
		/*else if(word=="merely"){
			$(".floatText").html("simply")
			}
		else if(word=="particular"){
			$(".floatText").html("specific, exact")
			}
		else if(word=="moment"){
			$(".floatText").html("instant")
			}
		else if(word=="molecules"){
			$(".floatText").html("smallest part of chemical compound, tiny amount")
			}
		else if(word=="produces"){
			$(".floatText").html("creates")
			}	
		else if(word=="impurities"){
			$(".floatText").html("pollutions")
			}
		else if(word=="scatters"){
			$(".floatText").html("spread out")
			}
		else if(word=="particles"){
			$(".floatText").html("tiny pieces, bits")
			}*/

		
		var mainDivWidth = $(".floatingDiv").width();
		
		  mainDivWidth = Number(mainDivWidth)
		 
		 var leftMargin = offset_pop.left-(mainDivWidth);
		 
		
		if(leftMargin<0){
			        $(".floatingDiv").css({'left':offset_pop.left, 'top': offset_pop.top+30});

			
			}else{
				        $(".floatingDiv").css({'left':leftMargin, 'top': offset_pop.top+30});

				}
		
           $(".floatingDiv").show();
		 //alert()
	
	})


$(".underline").mouseleave(function() {
           $(".floatingDiv").hide();
		   
    });
/************************************************************************************************************************************/


						  
						   });