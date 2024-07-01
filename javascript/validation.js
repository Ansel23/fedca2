
  
$(document).ready(function () {
    $('form').on('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Check form validity
        if (this.checkValidity()) {
            // If the form is valid
            $('#feedbackModal .modal-body').text('Thank you for submitting your feedback.');
            $('#feedbackModal').modal('show');
        } else {
            // If the form is invalid
            $('#feedbackModal .modal-body').text('Invalid data submitted. Please submit feedback with valid data');
            $('#feedbackModal').modal('show');
        }
    });

    // Hide the modal when it's closed
    $('#feedbackModal').on('hidden.bs.modal', function () {
        $('form')[0].reset(); // Reset the form
        $('form').removeClass('was-validated'); // Reset validation classes
    });
});
