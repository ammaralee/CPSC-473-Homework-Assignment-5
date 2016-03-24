// Homework Assignment 04
// Ammar Yasir Ali & Megan Bond

$(document).ready(function FlipResult() {

  $(document).on("click", ":submit", function(event) {

    if ($(this).val() != " ") {
      $("#Form").attr("action", "/play/" + $(this).val());
      $("#Form").submit();
    }
  });
  $.ajax({
    url: "/output",
    dataType: "json",
    success: function(data) {

      $("#result").empty();
      $("#result").append("<h3> Outcome: " + data.outcome + "</h3>");
      $("#result").append("<br><h4>Wins:" + data.wins + "<br><br>  Losses:" + data.losses + "<br></h4>");
    },
    type: "POST"
  });
});
