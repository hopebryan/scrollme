
jQuery(document).ready(function(){
	/*jQuery.fn.center = function(parent) {
    if (parent) {
        parent = this.parent();
    } else {
        parent = window;
    }
    
    var x = (((jQuery(window).width() - this.outerWidth()) / 2) + jQuery(window).scrollLeft());
    console.log("center left: " + x);
    var a = jQuery(this).offset().left;
    console.log("offset left: " + a);
    var z = x - a;
    console.log("left: " + x);
    console.log("final:" + z);
    this.parent().css({
    	"left": z, 
    	"position": "absolute"
    })
    this.css({
        "position": "absolute",
        //"top": (((jQuery(parent).height() - this.outerHeight()) / 2) + jQuery(parent).scrollTop() + "px"),
        "left": (((jQuery(parent).width() - this.outerWidth()) / 2) + jQuery(parent).scrollLeft() + "px")
    });
  
	return this;
	}*/

	jQuery('#menu li').each(function(){
		jQuery(this).click(function(){
			jQuery(this).toggleClass('selected');
			var intWidth = $(window).innerWidth() / 2;
			var x = (((jQuery(window).width() - jQuery(this).outerWidth()) / 2) + jQuery(window).scrollLeft());
			console.log("browser center: " + intWidth);
		    console.log("x: " + x);
		    var a = jQuery(this).offset().left;
		    console.log("a: " + a);

		    if( a > intWidth) {
		    	var z = a - x;
		    	var z = "-"+z;
		    } else {
		    	 var z = x - a;
		    }
		    
		    console.log("z:" + z);

		    jQuery(this).parent().css({
		    	"left": z + "px", 
		    	"position": "absolute"
		    })
		});
	});
	jQuery(".facemocion").faceMocion({
             emociones:[
         {"emocion":"amo","TextoEmocion":"I love"},
         {"emocion":"molesto","TextoEmocion":"It bothers me"},
         {"emocion":"asusta","TextoEmocion":"it scares"},
         {"emocion":"divierte","TextoEmocion":"I enjoy"},
         {"emocion":"gusta","TextoEmocion":"I like"}
         
         ]
       });
});
