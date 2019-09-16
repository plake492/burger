$(function() {
    $(".eat-burger").on("click", function(event) {
        const id = $(this).data("id");
        const newDevoured = $(this).data("devouredstate");

        const newDevouredState = {
            devoured: newDevoured
        };
        console.log(id)

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
              location.reload();
            }
        );
        $(".box").empty();
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        const newBurger = {
            burger_name: $("#burgerName").val().trim(),
            devoured: 0
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

    $(".delete-burger").on("click", function(event) {
        event.preventDefault(); 
        const id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
            }).then(
            function() {
                console.log(`deleted burger ${id}`);
                location.reload();
            }
        );
    });
});