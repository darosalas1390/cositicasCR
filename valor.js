document.addEventListener("DOMContentLoaded", function () {
    // Obtén la referencia al div donde mostrarás los valores
    var jsonValuesDiv = document.getElementById("valores");

    // Realiza una solicitud fetch para obtener el contenido de valores.json
    fetch("JSON/valores.json")
        .then(response => response.json())
        .then(valores => {
            // Accede a la propiedad "valores" del JSON
            var valoresArray = valores.valores;

            // Recorre los elementos del array y crea elementos para mostrarlos
            for (var i = 0; i < valoresArray.length; i++) {
                var paragraph = document.createElement("p");
                paragraph.innerHTML = valoresArray[i].valor;

                // Agrega estilos y clase al párrafo
                paragraph.style.fontSize = "30px"; // Cambia el tamaño de la letra según tus preferencias
                paragraph.style.fontFamily = "Arial, sans-serif"; // Cambia la fuente según tus preferencias
                paragraph.style.color = "#00CED1"; // Cambia el color según tus preferencias (verde agua)

                // Centra el párrafo
                paragraph.style.textAlign = "center";

                // Agrega una clase para la animación
                paragraph.classList.add("aparicion-izquierda-derecha");

                jsonValuesDiv.appendChild(paragraph);
            }
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});