document.addEventListener("DOMContentLoaded", function () {
   
    var jsonValuesDiv = document.getElementById("valores");

   
    fetch("JSON/valores.json")
        .then(response => response.json())
        .then(valores => {
            
            var valoresArray = valores.valores;

           
            for (var i = 0; i < valoresArray.length; i++) {
                var paragraph = document.createElement("p");
                paragraph.innerHTML = valoresArray[i].valor;

               
                paragraph.style.fontSize = "30px";
                paragraph.style.fontFamily = "Arial, sans-serif"; 
                paragraph.style.color = "#00CED1"; 

                
                paragraph.style.textAlign = "center";

                
                paragraph.classList.add("aparicion-izquierda-derecha");

                jsonValuesDiv.appendChild(paragraph);
            }
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});
