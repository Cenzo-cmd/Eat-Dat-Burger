$(function() {

    $('.devourButton').on('click', function() {
        const id = $(this).data('id');

        $.ajax('/api/burgers/' + id, {
            type: "PUT"
        }).then(function() {
            console.log(`Burger with id ${id} been updated`);
            location.reload();
        });
    });

    $('#submitButton').on('click', function(event) {
        event.preventDefault();
        const burgerName = {
            name: $('#burgerText').val().trim()
        };

        if (burgerName.name === '') {
            $('#burgerText').val("");
            return;
        };

        $.ajax('/api/burgers', {
            type: "POST",
            data: burgerName
        }).then(function() {
            console.log(`Your burger ${burgerName} was created!`);
            location.reload();
        });
    });

    $('.deleteButton').on('click', function(event) {
        event.preventDefault();
        const id = $(this).data('id');
        $.ajax('/api/burgers/' + id, {
            type: 'DELETE'
        }).then(function() {
            console.log(`Burger with id ${id} deleted!`)
            location.reload();
        });
    });
});