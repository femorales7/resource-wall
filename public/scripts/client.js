$(document.readyState(function () {
  const $imagesSeccion = $('#images');

  const createImagesElement = function(images){

    /* code for creating the tweet element */
    const $gallery = $("<article>").addClass("gallery");
    const $contenedor = $("<div>").addClass("contenedor");
    const $figure = $("<figure>");
    const $gallery__img = $("<img>").addClass("gallery__img");
    const $layer = $("<dic>").addClass("layer");
    const $a = $("<a>");
    const $h3 = $("<h3>").text(post.title);
    const $icons = $("<div>").addClass("icons");
    const $heart = $("<i>").addClass("fa-solid fa-heart").text(post.like);
    const $comment = $("<i>").addClass("fa-solid fa-comment").text(post.comment)

  }


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
}))


