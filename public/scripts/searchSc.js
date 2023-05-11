$('#searchButton').on("click", function() {
  const searchValue = $('#search').val();
  window.location = `/?search=${searchValue }`;
} 
);