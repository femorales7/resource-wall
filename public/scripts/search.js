$('#searchButton').on("click", function() {
  const searchValue = $('#search').val().toLowerCase();
  window.location = `/?search=${searchValue }`;
  }
);
