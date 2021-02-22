// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-burger").on("click", function(event) {
    var id = $(this).data("id");
    var newBites = $(this).data("newbites");

    var biteStatus = {
      wholeburger: newBites
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: biteStatus
    }).then(
      function() {
        console.log("changed burger to", newBites);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#newburberBtn").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#brgr").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {

    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
