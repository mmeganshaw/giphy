

  var searches = ["dogs", "cats", "harry potter", "lions"]; 

  function displayGifInfo() {

      var searchfor = $(this).attr("data-name");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchfor + "&api_key=civx0SbZOudPUd2wINsO1BTGTpqYrJHe&limit=10";
      empty();
      
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


      function renderButtons() {

        $("#searches").empty();

        for (var i = 0; i < searches.length; i++) {

          var a = $("<button>");

          a.addClass("btn");

          a.attr("data-name", searches[i]);

          a.text(searches[i]);

          $("#searches").append(a);
        }
      }


      function empty () {

        $('#gifone').empty();
        $('#giftwo').empty();
        $('#gifthree').empty();
        $('#giffour').empty();
        $('#gifive').empty();
        $('#gifsix').empty();
        $('#gifseven').empty();
        $('#gifeight').empty();
        $('#gifnine').empty();
        $('#giften').empty();

      }



      $("#submit").on("click", function(event) {


        event.preventDefault();

        var searchfor = $("#input").val().trim();

        searches.push(searchfor);

        renderButtons();
      });
  

      $(document).on("click", ".btn", displayGifInfo);

  
      renderButtons();
