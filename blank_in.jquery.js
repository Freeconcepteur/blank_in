// JavaScript Document


(function($)
{

    $.fn.blank_in=function(options){
		
		var defauts=
           {
               "sizeOpen": "90%",
               "direction": "left"
           };  
           
           //On fusionne nos deux objets ! =D
         var parametres=$.extend(defauts, options); 
		
		
		
		
		// ajout du html du conteneur de la blank
		if(jQuery('.blank_in_screen').length == 0){
		
			jQuery('body').prepend('<div class="blank_in_screen"><span class="closer close_action"></span></div>');
			jQuery('.blank_in_screen').prepend('<div class="blank_in_container"><iframe src="http://www.google.com"></div>');
			jQuery('.blank_in_container').prepend('<a class="close_blank_in_screen close_action"></a>');

		}

		jQuery('.close_action').on('click',function(){
			if(jQuery(this).hasClass('left')){ 
				jQuery(".blank_in_container").animate({ left: "100%" }, 600,function(){ jQuery('.blank_in_screen').fadeOut(); });
			}
			if(jQuery(this).hasClass('right')){
				leftBack = jQuery('.blank_in_container').width(); leftBack = leftBack*-1;
				jQuery(".blank_in_container").animate({ left: leftBack }, 600,function(){ jQuery('.blank_in_screen').fadeOut(); });
			}
			jQuery('body').css('overflow','auto');
		});

				
		
       return this.each(function(){
           $(this).on('click',function(){ 

           	jQuery('body').css('overflow','hidden');

           	WinWidth = jQuery(window).width();
           	res = parametres.sizeOpen.match(/%/gi); // si sizeOpen est en %
           	if(res=='%'){ 
           		sizeOpen = parametres.sizeOpen; sizeOpen = sizeOpen.replace('%','');
           		sizeOpen = sizeOpen/100;
           		sizeOpen = Math.round(WinWidth*sizeOpen);
           	}
           	else { 
           		sizeOpen = parametres.sizeOpen; sizeOpen = sizeOpen.replace('px',''); 
           	}
			jQuery('.blank_in_container').css('width',sizeOpen);

			ToHref = jQuery(this).attr('href');
			jQuery(".blank_in_container iframe").attr('src',ToHref);


			direction = parametres.direction;

		   	if (direction=='left') {
		   		newPos = WinWidth-sizeOpen;
		   		jQuery('.blank_in_screen').fadeIn(500, function(){
		   			jQuery(".blank_in_container").animate({ 
						left: newPos
				  	}, 600 );
		   		});
		   	jQuery('.close_action.right').removeClass('right');	
		   	jQuery('.close_action').addClass('left');
		   	}

		   	if (direction=='right') {
		   		newPos = WinWidth-sizeOpen; newPosStart = sizeOpen*-1;
		   		jQuery(".blank_in_container").css('left',newPosStart);
		   		jQuery('.blank_in_screen').fadeIn(800, function(){
		   			jQuery(".blank_in_container").animate({ 
						left: 0
				  	}, 1500 );
		   		});
		   	jQuery('.close_action.right').removeClass('left');	
		   	jQuery('.close_action').addClass('right');
		   	}
		   
			
			
		
			return false;
		   
		   
		   
		   }); // fin du click
		  
		  
		  
       }); // fin du return
    }; // fin du $.fn
})(jQuery);


