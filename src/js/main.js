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
					var modWidthMax;
					var modWidthMin;
					var contatinerWidth = $('.container').width();
					
					if(contatinerWidth === 992){
						modWidthMax = 620;
						modWidthMin = 300; 
					}else if(contatinerWidth === 768){
						modWidthMax = 490;
						modWidthMin = 235; 
					}else{
						modWidthMax = 300;
						modWidthMin = 300; 
					}
					console.log($('.container').width());

				$.each(result.images, function( i, item){
					var img = new Image();     
					img.src = item.imageurl;

						img.onload = function(e){
							var imgWidth = e.target.width;
							var imgHeight = e.target.height;
							var portretCheck = imgWidth / imgHeight;

							if( portretCheck > 1.4){
								$('.idia-'+[i+1]).width(modWidthMax);
								$('.idia-'+[i+1]).height(modWidthMax/portretCheck);
							}
							else{
								$('.idia-'+[i+1]).width(modWidthMin);
								$('.idia-'+[i+1]).height(modWidthMin/portretCheck);
							};

							// masonry
							// need to start after setting 
							// width and height!!!!!
							$('.idias').masonry({
							  columnWidth: modWidthMin,
							  itemSelector: '.idia',
							  gutter: 20
							})

						}

					var text = item.word;
					var imgage = item.imageurl;
					document.getElementById('ajaxWord'+(i+1)).innerHTML = text;
					document.getElementById('ajaxWord'+(i+1)).setAttribute('href', imgage);
					document.getElementById('ajaxRequest'+(i+1)).setAttribute('src', imgage);
					$('#input').val('');
				});
			});
	}
	


})(jQuery);