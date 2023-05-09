$(document).ready(function() {
  $("#comment_text").on("input", function() {
    const charLimit = 300;
    const charCount = $(this).val().length;
    const charRemaining = charLimit - charCount;
    const counterElement = $(this).siblings(".botton").find(".counter");
    console.log(counterElement)

    counterElement.text(charRemaining);

    if (charRemaining < 0) {
      counterElement.addClass("counter-invalid");
    } else {
      counterElement.removeClass("counter-invalid");
    }
  });

});

