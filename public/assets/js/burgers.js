$(function () {

    $(".devour-btn").on("click", function (event) {
        event.preventDefault();
        let thisBurgerID = $(this).data("id");

        let newBurger = {
            id: thisBurgerID
        };

        $.ajax("/api/burgers/" + thisBurgerID, {
            type: "PUT",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });
});