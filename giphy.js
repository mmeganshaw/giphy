

  var searches = ["dogs", "cats", "harry potter", "lions"]; 

  function displayGifInfo() {

      var searchfor = $(this).attr("data-name");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchfor + "&api_key=civx0SbZOudPUd2wINsO1BTGTpqYrJHe&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      var gifone = JSON.stringify(response.data[0].embed_url);
      var giftwo = JSON.stringify(response.data[1].embed_url);
      var gifthree = JSON.stringify(response.data[2].embed_url);
      var giffour = JSON.stringify(response.data[3].embed_url);
      var giffive = JSON.stringify(response.data[4].embed_url);
      var gifsix = JSON.stringify(response.data[5].embed_url);
      var gifseven = JSON.stringify(response.data[6].embed_url);
      var gifeight = JSON.stringify(response.data[7].embed_url);
      var gifnine = JSON.stringify(response.data[8].embed_url);
      var giften = JSON.stringify(response.data[9].embed_url);


      $('#gifone').append('<iframe src=' + gifone + 'width="480" height="270" frameBorder="0"></iframe>');
      $('#giftwo').append('<iframe src=' + giftwo + 'width="480" height="270" frameBorder="0"></iframe>');
      $('#gifthree').append('<iframe src=' + gifthree + 'width="480" height="270" frameBorder="0"></iframe>');
      $('#giffour').append('<iframe src=' + giffour + 'width="480" height="270" frameBorder="0"></iframe>');
      $('#gifive').append('<iframe src=' + giffive + 'width="480" height="270" frameBorder="0"></iframe>');
      $('#gifsix').append('<iframe src=' + gifsix + 'width="480" height="270" frameBorder="0"></iframe>');
      $('#gifseven').append('<iframe src=' + gifseven + 'width="480" height="270" frameBorder="0"></iframe>');
      $('#gifeight').append('<iframe src=' + gifeight + 'width="480" height="270" frameBorder="0"></iframe>');
      $('#gifnine').append('<iframe src=' + gifnine + 'width="480" height="270" frameBorder="0"></iframe>');
      $('#giften').append('<iframe src=' + giften + 'width="480" height="270" frameBorder="0"></iframe>');

  
  });

  }

// Function for displaying movie data
      function renderButtons() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#searches").empty();

        // Looping through the array of movies
        for (var i = 0; i < searches.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie-btn to our button
          a.addClass("gif-btn");
          // Adding a data-attribute
          a.attr("data-name", searches[i]);
          // Providing the initial button text
          a.text(searches[i]);
          // Adding the button to the buttons-view div
          $("#searches").append(a);
        }
      }

      // This function handles events where a movie button is clicked
      $("#submit").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var searchfor = $("#input").val().trim();

        // Adding movie from the textbox to our array
        searches.push(searchfor);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });
  

      // Adding a click event listener to all elements with a class of "movie-btn"
      $(document).on("click", ".gif-btn", displayGifInfo);

      // Calling the renderButtons function to display the intial buttons
  
      renderButtons();
