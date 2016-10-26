(function($) {
     
     
	// owlCarousel
	var i = 1;
	for( i; i < 4; i++ ){

	$("#owl-example"+i).owlCarousel(
		{
			singleItem:true,
			autoPlay: 4000,
			navigation: true,
			navigationText: false,
			pagination: false
		});
	}


	// masonry
	$('.idias').masonry({
		// options
		itemSelector: '.idia',
		columnWidth: '.idia',
		gutter: 20
	});




	// ajax
	findImg();

	// event
	$('#search').click(findImg);
	
	// press enter key
	$('body').keyup(function(e){
	    if(e.keyCode==13){
	        findImg();
	        return false;
	    }
	});

	function findImg(){
		var searchTarget = $('#input').val();
		var imgAPI = "http://api.pixplorer.co.uk/image?word="+searchTarget+"&amount=7&size=tb";
		$.getJSON(imgAPI, {
			format: "json"
		}, 
			function(result){
				$.each(result.images, function( i, item){
					var text = item.word;
					var img = item.imageurl;
					document.getElementById('ajaxWord'+(i+1)).innerHTML = text;
					document.getElementById('ajaxWord'+(i+1)).setAttribute('href', img);
					document.getElementById('ajaxRequest'+(i+1)).setAttribute('src', img);
				});
			});
	}
	


})(jQuery);