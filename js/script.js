$(document).ready(function(){
    $("#hidden").hover(function(){
        $(this).css("color","black");
    },
    function(){
        $(this).hide();
    });
    $("button").click(function(){
        alert("You can download each case study separately in PDF")
    });
});

