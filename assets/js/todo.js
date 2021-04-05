// Clicking li
$("ul").on("click","li", function (){
   $(this).toggleClass("clickedli")
});

// removing li
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(369, function (){
        $(this).remove()
    })
    event.stopPropagation();
});

// adding li
$("input").keypress(function(event){
    if(event.which === 13) {
        var newText = $(this).val()
        $(this).val("")
        $("ul").append( "<li><span> X </span>" + newText + "</li>")
    }
});



