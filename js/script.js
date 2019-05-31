$(document).ready(function() {
    
    $("p").click(function() {
        $(this).slideToggle("slow"); //ensures that only the element that is clicked toggles, and not all <p> elements
    });
    
    $("button").mouseenter(function() {
        $(this).removeClass("makeRed").addClass("makeBlue");
    });
    
    $("button").mouseleave(function() {
        $(this).removeClass("makeBlue").addClass("makeRed");
    });
    
    //When we click our elements, we want to identify which what number box it is (one, two or three)
    //When we determine that, we'll highlight all the boxes of the same number class
    //Elements have 2 classes, so this means the className variable is assigned to a string containing both classes, box and 1
    //In order for the function to work, we need to split the string "box 1" wherever we encounter the space
    //split() gives us an array containing the two strings
    $(".box").click(function () {
        /* This is the examples for the steps above
        var classNames = $(this).attr("class").split(" "); create a var called classNames and we're saying that we are splitting the class names by the space
        $("." + classNames[1]).css("background-color", "red");*/
        /*If we want only a certain class to change to red at any given time (When we click on an element with a .box class, this event will be fired
        */
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0]; //create a var for .box
        var className = classNames[1]; //create a var for .one, .two or .three
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            //if this object is already red, turn it black
            $("." + className).css("background-color", "#000");
        } else {
            //Else turn all elements with a box class black
            //and then change the color of all elements with the same class name as the clicked element to red
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color","red");
        }
    });
});
