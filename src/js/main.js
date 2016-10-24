$(document).ready(function() {
     

     
      // owlCarousel
      var i = 0;
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
      
});