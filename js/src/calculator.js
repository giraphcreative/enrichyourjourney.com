

$(function(){
	
	$(".calculator").accrue({
		mode: "compare",
		response_output_div: ".result",
		response_compare:"%savings%",
		error_text:"0",
		callback: function( elem, data ){
			if ( data!==0 ) {
				// recalculate_total();
			}
		}
	});

});

