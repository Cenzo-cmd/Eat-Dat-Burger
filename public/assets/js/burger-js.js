$(function() {

    $('.devourButton').on('click', function() {
        const id = $(this).data('id');

        $.ajax('/api/burgers/' + id, {
            type: "PUT"
        }).then(function() {
            console.log('Burger has been updated');
            location.reload();
        });
    });

    $('#submitButton').on('click', function(event) {
        event.preventDefault();
        const burgerName = {
            name: $('#burgerText').val().trim()
        };

        $.ajax('/api/burgers', {
            type: "POST",
            data: burgerName
        }).then(function() {
            console.log(`Your burger ${burgerName} was created!`);
            location.reload();
        });
    });


});