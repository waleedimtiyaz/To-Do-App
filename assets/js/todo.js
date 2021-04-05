// Clicking li
$("li").click(function (){
   $(this).toggleClass("clickedli")
});

// removing li
$("span").click(function(){
    $(this).parent().remove()
})



