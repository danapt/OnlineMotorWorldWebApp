// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
$(document).ready(function () {

    var x = 0;
    var s = "";
    //alert("hello God! ");
    console.log("Whats up lad? ");


    var theForm = $("#theForm");
    theForm.hide();


    var button =$("#buyButton");
    button.on("click", function () {
        console.log("Buying Motorbikes");
    })

    var productInfo = $(".product-p li");
    productInfo.on("click", function () {
        console.log("You clicked on" + $
            (this).text());

    });



    var $loginToggle = $("#logginToggle");
    var $popupForm = $(".popup-form");

    $loginToggle.on("click", function () {
        $popupForm.slideToggle(1000);
    });

});