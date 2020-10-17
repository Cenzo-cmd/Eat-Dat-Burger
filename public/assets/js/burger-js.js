$(function() {

    $('.devourButton').on('click', function() {
        const id = $(this).data('id');

        $.ajax('/devoured/' + id, {
            type: "PUT"
        }).then(function() {
            console.log('Burger has been updated');
            location.reload();
        });
    });







});