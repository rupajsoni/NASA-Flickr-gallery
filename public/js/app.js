$(document).ready(function() {

  console.log("DOM object loaded");
  var pageNo = 1;

  var flickr = new Flickr({
    api_key: "a5e95177da353f58113fd60296e1d250",
  });

  console.log(flickr);

  // get images as soon as the page loads
  $(document).ready(function() {
    sortedSet();
  });

  // fetch the result of the search query on click on "Search" button
  $('#search').on('click', function(){
    sortedSet();
  });

  //fetch the result of the search query on pressing "Enter" key
  $(document).on("keypress", "#searchInput", function(e) {
       if (e.which == 13) {
           sortedSet();
       }
  });

  // call sort whenever the dropdown value is changed
  $('#sortDropdown').change(function(){
    console.log("sortDropdown jquery called")
    sortedSet();
  });


  // previous page
	$(".previous").on("click", function(){
    console.log("current page: "+pageNo);
		if(pageNo != 1){
			pageNo--;
      console.log("current page: "+pageNo);
			sortedSet();
		}
	});

	// next page
	$(".next").on("click", function(){
		// if(pageNo < photos.photos.pages){
			pageNo++;
      console.log("current page: "+pageNo);
			sortedSet();
		// }
	});

  // sort the images based on the selection in the dropdown. If nothing is selected, sort the images based on default sorting
  var sortedSet = function(){
      var photos = flickr.photos.search({
        user_id: "24662369@N07",
    		extras: "description, tags",
        page: pageNo,
        per_page: 28,
        text: $('#searchInput').val(),
        sort: $('#sortDropdown').val()      //sort the result by the dropdown select option
    	}, function(err, result) {
    					console.log("photosSearch")
              console.log(result)
              globalResult = result;
    		      parseJSON(result);
    	});
      console.log(photos);
  }

  // get images from the JSON files
  var parseJSON = function(data){
    $("#flickr").empty();
    if(data.photos.photo.length == 0){
      $("#flickr").append('<h1>No results found!</h1>');
    }
  $.each( data.photos.photo, function( i, gp ) {

    var farmId = gp.farm;
    var serverId = gp.server;
    var id = gp.id;
    var secret = gp.secret;
    var title = gp.title;

    // add each anchor element to the flickr container
    $("#flickr").append('<a href ="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '_b.jpg title="' + title + '"><img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '_q.jpg" class="image-box"></a>');

    });
  }

  // jQuery for Magnific popup library
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,2], // Will preload 0 - before current, and 1 after the current image
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
      tPrev: 'Previous (Left arrow key)', // title for left button
      tNext: 'Next (Right arrow key)', // title for right button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter

    },
    image: {
      cursor: 'mfp-zoom-out-cur',
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    }
  });


});
