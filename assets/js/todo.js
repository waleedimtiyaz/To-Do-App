// Clicking li
$("li").click(function (){
   $(this).toggleClass("clickedli")
});

// removing li
$("span").click(function(){
    $(this).parent().remove()
});

// adding li
$("input").keypress(function(){
    if(event.which === 13) {
        var newText = $(this).val()
        $(this).val("")
        $("ul").append( "<li><span> X </span>" + newText + "</li>")
    }
});



