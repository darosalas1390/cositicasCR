document.addEventListener('DOMContentLoaded', function () {
    // Hacer una solicitud a la API de tipo de cambio
    fetch('https://tipodecambio.paginasweb.cr/api')
        .then(response => response.json())
        .then(data => {
            // Manejar la respuesta y mostrar el tipo de cambio en el elemento con id 'tipoCambioInfo'
            const tipoCambioInfo = document.getElementById('tipoCambioInfo');
            tipoCambioInfo.innerHTML = `Compra: ${data.compra} | Venta: ${data.venta} | Fecha: ${data.fecha}`;
        })
        .catch(error => {
            console.error('Error al obtener el tipo de cambio:', error);
        });
});