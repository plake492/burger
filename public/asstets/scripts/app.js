$(function() {
    $(".eat-burger").on("click", function(event) {
        const id = $(this).data("id");
        const newDevoured = $(this).data("devouredstate");

        const newDevouredState = {
            devoured: newDevoured
        };
        console.log(id)

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
              location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        const newBurger = {
            burger_name: $("#burgerName").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        console.log(newBurger)

        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                location.reload();
            }
        );
    });

})