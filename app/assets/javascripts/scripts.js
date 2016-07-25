$( document ).ready(function() {
    $('#customer-accordion').on('click', function (event) {
      event.preventDefault();
      $('#add-new-customer').toggle();
    });
});
