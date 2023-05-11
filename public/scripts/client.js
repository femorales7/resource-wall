const express = require("express");
const database = require("../../db/queries/getallposts");

const router = express.Router();

$(document).ready(function () {
  console.log("here");
  const $imagesSection = $("#images");

  const createImagesElement = function (post) {
    /* code for creating the Comment element */
    const $gallery = $("<article>").addClass("gallery");
    const $contenedor = $("<div>")
      .addClass("contenedor")
      .attr("data-post_id", post.id);
    const $figure = $("<figure>");
    const $gallery__img = $("<img>")
      .addClass("gallery__img")
      .attr("src", post.external_url);
    const $layer = $("<dic>").addClass("layer");
    const $a = $("<a>").attr("href", `/post/${post.id}`);
    const $h3 = $("<h3>").text(post.title);
    const $icons = $("<div>").addClass("icons");
    const $heart = $("<i>")
      .addClass("fa-solid fa-heart")
      .text(post.likes.length);
    const $comment = $("<i>")
      .addClass("fa-solid fa-comment")
      .text(post.comments.length);

    $icons.append($heart, $comment);
    $a.append($h3, $icons);
    $layer.append($a);
    $figure.append($layer, $gallery__img);
    $contenedor.append($figure);
    $gallery.append($contenedor);

    return $gallery;
  };

  const renderImages = function (posts) {
    console.log(posts);
    for (let post of posts) {
      const $postElement = createImagesElement(post);
      // $imagesSection.append($postElement);
      $("#images").prepend($postElement);
    }
  };

  router.get("/", (req, res) => {
    database.getAllPosts();
    console.log("here").then((posts) => {
      console.log(posts);
      renderImages(posts);
    });
  });

  // database.getAllPosts()
  //   .then(posts => {
  //     // Render the posts on the page
  //     console.log(posts)
  //     renderImages(posts);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });

  // const loadImages = () =>
  // $.ajax ({
  //   method : "GET",
  //   url: "/",
  //  }).then((images) => {
  //   renderImages(images);
  //  });

  //  loadImages();

  // Selecciona todos los elementos con la clase "layer"
  var layers = document.querySelectorAll(".layer");

  // Agrega un evento de clic a cada capa
  layers.forEach(function (layer) {
    layer.addEventListener("click", function (event) {
      // Previene el comportamiento predeterminado del enlace
      event.preventDefault();

      // Obtiene el ID de la imagen desde el atributo de datos personalizados "data-image-id"
      var imageId = this.closest(".contenedor").getAttribute("post_id");

      // Hace algo con el ID de la imagen, por ejemplo, envíalo al servidor o ábrelo en una ventana modal
      console.log("ID de la imagen:", imageId);
    });
  });
  const $comentsSeccion = $("#comments-container");
  const createTweetElement = function (comment) {
    const $comment = $("<p>").addClass("old_comment");
    return $comment;
  };

  const renderComments = function (comments) {
    $commentsSeccion.empty();
    // loops through tweets
    for (const comment of comments) {
      const $comment = createTweetElement(comment); // calls createTweetElement for each tweet
      $("#comments-container").prepend($comment); // takes return value and appends it to the tweets container
    }
  };

  const loadComments = () =>
    $.ajax({
      method: "GET",
      url: "/post",
    }).then((comments) => {
      renderComments(comments);
    });

  loadComments();

  // const $form = $("#new-Comment-form");
  const $textArea = $form.find("textarea");
  const errorMessage = $("#error-message");

  // Moved event listeners for the textarea and form outside the submit event listener
  $textArea.on("input", function () {
    errorMessage.hide();
  });

  $form.on("submit", (event) => {
    event.preventDefault();
    const $textArea = $form.find("textarea");
    const textComment = $textArea.val().trim();
    //validation of comment empty
    if (!textComment) {
      const $errorEmpty = $("<h2>").text("Comment is empty");
      errorMessage.empty().append($errorEmpty);
      errorMessage.show(); // Show the error message
      return;
    }

    //validation Comment longer than 140 characters
    if (textComment.length > 300) {
      const $errorLonger = $("<h2>").text(
        "The comments is longer than 300 characters."
      );
      errorMessage.empty().append($errorLonger);
      errorMessage.show(); // Show the error message
      return;
    }

    const dataComment = $form.serialize();
    console.log(dataComment);

    $.ajax({
      method: "POST",
      url: "/post",
      data: dataComment,
    }).then(() => {
      console.log("request right");
      loadComments();
      $textArea.val("");
    });

    $textArea.on("input", () => {
      $("#errorMessage").empty();
    });
  });
  errorMessage.hide(); // Hide the error message after successful submission
});
