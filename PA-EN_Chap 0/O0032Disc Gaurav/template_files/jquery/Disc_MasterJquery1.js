$(document).ready(function(){
						   window.spaceclick=0
						   window.autorunClicked = 0;
						   window.ContentCount = 0;
						   
					$(".ButtonsForMasterQuery").click(function(){
												    $(".hand").hide();
													autorunClicked=0;
													spaceclick=1	
											 
										
										$(".ButtonsForMasterQuery").blur();
										/*$(".spacebar").focus();*/
										
										$(".Content00").hide();
										
										//$(".Content0" + buttonSequence).first().show();
										$(".Content" + buttonSequence+"_"+"1").show();
										
										
										
										if(ContentCount == 0 || ContentCount == 1 )
										{var newnum = Number(buttonSequence)+1
											$(".hand"+newnum).show().css('display', 'inline-block');
											$(".SpaceBarDiv").hide()
											$(".autorun").css('opacity','.4');
											$(".autorun").css('cursor','default');
										}
										else
										{
											$(".SpaceBarDiv").show().css({"display":"inline-block"});
											$(".autorun").css('opacity','1');
											$(".autorun").css('cursor','pointer');
										}
										clearTimeout(timeout1) //
										
															  });
					
					$(".autorun").click(function(){
												 
												if(spaceclick<ContentCount)
												{
									autorunClicked++;
									 	
												 if(autorunClicked%2==1)
												 {
													
										autorunFunction();	
										$(".autorun").css('opacity','.4');
										$(".autorun").css('cursor','default');
												 }
												 else
												 {
													$(".SpaceBarDiv").show();
													 clearTimeout(timeout1) 
													 $(".autorun").css('opacity','1');
													 $(".autorun").css('cursor','pointer');
												 }
												}
											 });
					
					$(".spacebar").click(function(){
										
												spacebarClickFunction();
												 
												  });
					
					
					
					spacebarClickFunction = function(){
						$(function () {
           $(".ContentContainer,.container-right").animate({
scrollTop: $('.ContentContainer,.container-right').get(0).scrollHeight}, 'slow');});
						$(".SpaceBarButton").show();
						
						
						spaceclick++;
										
										
										$(".Content" + buttonSequence+"_"+spaceclick).show();
										
										if(spaceclick >= ContentCount)
										{
											var newnum = Number(buttonSequence)+1
											$(".hand"+newnum).show().css('display', 'inline-block');
											
											
											$(".SpaceBarDiv").hide();
											$(".autorun").css('opacity','.4');
											$(".autorun").css('cursor','default');
											clearTimeout(timeout2)
										}
										else
										{
											$(".SpaceBarDiv").hide();
											window.timeout2=window.setTimeout(spaceBarShow,[500]);	
											
										}
										
										
						
					}
						   
					autorunFunction=function(){
						
						$(function () {
           $(".ContentContainer,.container-right").animate({
scrollTop: $('.ContentContainer,.container-right').get(0).scrollHeight}, 'slow');});
		spaceclick++;
	
		$(".SpaceBarDiv").hide();
		if(spaceclick<ContentCount+1){
			
			
				
				
	
	$(".Content" + buttonSequence+"_"+spaceclick).show();
	window.timeout1=window.setTimeout(autorunFunction,[1000])
	
	}
	 
	if(spaceclick == ContentCount)
										{
											var newnum = Number(buttonSequence)+1
											$(".hand"+newnum).show().css('display', 'inline-block');
											
											
											
											$(".autorun").css('opacity','.4');
											$(".autorun").css('cursor','default');
										}
	
	};	  
	
	
	
	
	
	$(document).keypress(function(e){
								  
								
								  if(e.which==32 ){
									
									  spacebarClickFunction();
 									  
											  }
											 
											  });
	
		if (String(navigator.userAgent).indexOf("Mobile") != -1) {
			if (window.innerHeight > window.innerWidth) {
				if ((screen.width == 768 && screen.height == 1024)||(screen.width == 1024 && screen.height == 1366)) {
					
					$(".OrientImage").css({"margin-top":25+"%"});
					
				}
				
				
			}
	}
	
	spaceBarShow=function(){
	
			$(".SpaceBarDiv").show()
			
				
		}
						   
						   });