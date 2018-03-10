var topics = ["Arnold Schwarzenegger", "Samuel L Jackson", "Matt Damon", "Tom Hardy", "Natalie Portman", "Jamie Foxx", "Michael B Jordan", "Keira Knightley", "Amy Adams", "Emma Watson", 
"Mila Kunis", "Julia Roberts", "Justin Timberlake", "Joaquin Phoenix"];

for (var i = 0; i < topics.length; i++){
    var button = $("<button>");
    button.addClass("btn btn-primary act_btn");
    button.attr("data", topics[i]);
    button.text(topics[i]);
    $(".buttons").append(button);
}

$(".act_btn").on("click", function() {
    $(".GIFarea").empty();
    var topic = $(this).attr("data");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=basketball&q=" + topic + "&api_key=l9Q9Tlt8dhMcskV8VjemiCvm8rcyU8Fd&limit=10";
    $.get(queryURL).then(function(response) {
        console.log(response);
        var results = response.data;
        for (var i = 0; i < results.length; i++){
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var gifImage = $("<img class='gif'>");

            gifImage.attr("src", results[i].images.fixed_height_still.url);
            gifImage.attr("data-state", "still");
            gifImage.attr("data-still", results[i].images.fixed_height_still.url);
            gifImage.attr("data-animate", results[i].images.fixed_height.url);

            gifDiv.append(p);
            gifDiv.append(gifImage);

            $(".GIFarea").append(gifDiv);
            
        }
        $(".gif").on("click", function() {
            var state = $(this).attr("data-state");
        
            if (state === "still"){
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            }
            else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        });
    }); 
});

$(".add_topic").on("click", function(event) {
    event.preventDefault();

    var new_topic = $(".form-control").val().trim();
    topics.push(new_topic);

    var button = $("<button>");
    button.addClass("btn btn-primary act_btn");
    button.attr("data", new_topic);
    button.text(new_topic);
    $(".buttons").append(button);
    
    $(".act_btn").on("click", function() {
        $(".GIFarea").empty();
        var topic = $(this).attr("data");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=basketball&q=" + topic + "&api_key=l9Q9Tlt8dhMcskV8VjemiCvm8rcyU8Fd&limit=10";
        $.get(queryURL).then(function(response) {
            console.log(response);
            var results = response.data;
            for (var i = 0; i < results.length; i++){
                var gifDiv = $("<div class='item'>");
    
                var rating = results[i].rating;
    
                var p = $("<p>").text("Rating: " + rating);
    
                var gifImage = $("<img class='gif'>");
    
                gifImage.attr("src", results[i].images.fixed_height_still.url);
                gifImage.attr("data-state", "still");
                gifImage.attr("data-still", results[i].images.fixed_height_still.url);
                gifImage.attr("data-animate", results[i].images.fixed_height.url);
    
                gifDiv.append(p);
                gifDiv.append(gifImage);
    
                $(".GIFarea").append(gifDiv);
                
            }
            $(".gif").on("click", function() {
                var state = $(this).attr("data-state");
            
                if (state === "still"){
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                }
                else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });
        }); 
    });
});