// Función para ver los detalles de un automóvil
function viewDetails(carId) {
    window.location.href = 'details.html?car=' + carId;
}

// Función para enviar un comentario
function submitComment() {
    var comment = document.getElementById('comment').value;
    if (comment) {
        var commentList = document.getElementById('comment-list');
        var newComment = document.createElement('div');
        newComment.textContent = comment;
        commentList.appendChild(newComment);
        document.getElementById('comment').value = '';
    }
}

// Función para cargar los detalles del automóvil
function loadCarDetails() {
    var urlParams = new URLSearchParams(window.location.search);
    var carId = urlParams.get('car');

    if (carId) {
        // Aquí se cargarían los detalles del automóvil basados en el carId
        document.getElementById('car-title').textContent = carId;
        document.getElementById('car-image').src = carId + '.jpg';
        document.getElementById('car-description').textContent = 'Descripción detallada de ' + carId + '.';
    }
}

// Llamar a la función de carga de detalles si estamos en la página de detalles
if (window.location.pathname.endsWith('details.html')) {
    loadCarDetails();
}
