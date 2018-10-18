// This is where it all goes :)

//= require jquery-3.3.1.slim.min/index.js
//= require popper.min/index.js
//= require boostrap/dist/js/bootstrap.js

$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('.top-section');
    var offset = startchange.offset();
    if (startchange.length){
        $(document).scroll(function() {
            scroll_start = $(document).scrollTop();
            if(scroll_start > offset.top) {
                $(".navbar").addClass("navbar-light bg-light").removeClass("navbar-dark");
            } else {
                $(".navbar").addClass("navbar-dark").removeClass("navbar-light bg-light");
            }
        });
    }
 });
