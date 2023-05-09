const express = require("express");
const database = require("../db/getallposts");

const router = express.Router();

$(document).ready(function () {
  const $imagesSection = $('#images');

  const createImagesElement = function(post){

    /* code for creating the tweet element */
    const $gallery = $("<article>").addClass("gallery");
    const $contenedor = $("<div>").addClass("contenedor");
    const $figure = $("<figure>");
    const $gallery__img = $("<img>").addClass("gallery__img").attr("src", post.external_url );
    const $layer = $("<dic>").addClass("layer");
    const $a = $("<a>").attr("href", `/post/${post.id}`);
    const $h3 = $("<h3>").text(post.title);
    const $icons = $("<div>").addClass("icons");
    const $heart = $("<i>").addClass("fa-solid fa-heart").text(post.likes.length);
    const $comment = $("<i>").addClass("fa-solid fa-comment").text(post.comments.length);

    $icons.append($heart, $comment);
    $a.append($h3,$icons);
    $layer.append($a);
    $figure.append($layer, $gallery__img);
    $contenedor.append($figure);
    $gallery.append($contenedor);

    return $gallery;

  };

  const renderImages = function (posts){
    console.log(posts)
    for (let post of posts) {
      const $postElement = createImagesElement(post);
      $imagesSection.append($postElement);
      // $("#images").prepend($imagesSeccion);
    }
  };
  database.getAllPosts()
    .then(posts => {
      // Render the posts on the page
      console.log(posts)
      renderImages(posts);
    })
    .catch(error => {
      console.error(error);
    });
});

  // const loadImages = () =>
  // $.ajax ({
  //   method : "GET",
  //   url: "/",
  //  }).then((images) => {
  //   renderImages(images);
  //  });

  //  loadImages();


  // Selecciona todos los elementos con la clase "layer"
var layers = document.querySelectorAll('.layer');

// Agrega un evento de clic a cada capa
layers.forEach(function(layer) {
    layer.addEventListener('click', function(event) {
        // Previene el comportamiento predeterminado del enlace
        event.preventDefault();

        // Obtiene el ID de la imagen desde el atributo de datos personalizados "data-image-id"
        var imageId = this.closest('.contenedor').getAttribute('post_id');

        // Hace algo con el ID de la imagen, por ejemplo, envíalo al servidor o ábrelo en una ventana modal
        console.log('ID de la imagen:', imageId);
    });
});



