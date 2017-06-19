$(".btn").click(function() {
    $(".container").append("<li><input type='checkbox' class='check'>"+ $(".task").val() +"<button class='del'>del</button></li>");

    $(".del").on("click", function(e) {
        // if ($($(e.target).parent()).children(".check").prop('checked')) {
            $(e.target).parent().remove();
        // }
    });
});

$(".show-all").click(function() {
    $(".container").children().removeClass("hide");
});

$(".show-check").click(function() {
    // if(!$($(".container")).children('.check').prop('checked')) {
        $("input:checkbox:not(:checked)").parent().addClass("hide");
        $("input:checkbox:checked").parent().removeClass("hide");
    // }
});

$(".show-no-check").click(function() {
    // if(!$($(".container")).children('.check').prop('checked')) {
        $("input:checkbox:checked").parent().addClass("hide");
        $("input:checkbox:not(:checked)").parent().removeClass("hide");
    // }
});
