$(document).ready(function() {
   
    //this challenge
    //Return to your cards page: When a stream is clicked in the nav, that stream’s cards will transition and change background-color.
    //When another stream is clicked, only that stream will transition and change background-color.
    $(".stream-nav").click(function() {
        // A selector to match all cards in all streams
        var allStreamsCardsSelector = ".card";
        // A selector to match just this stream's cards
        // for this, we use the class with the name of the stream,
        // which is the same as this nav link's id and then the "-card" suffix.
        var thisStreamCardsSelector = "." + this.id + "-card";

        // First remove the highlight from all of the cards
        $(allStreamsCardsSelector).removeClass("card-highlight");
        // Then apply the highlight to just this stream's cards
        $(thisStreamCardsSelector).addClass("card-highlight");
    });
});