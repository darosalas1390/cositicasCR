document.addEventListener('DOMContentLoaded', function () {
   
    fetch('https://tipodecambio.paginasweb.cr/api')
        .then(response => response.json())
        .then(data => {
            
            const tipoCambioInfo = document.getElementById('tipoCambioInfo');
            tipoCambioInfo.innerHTML = `Compra: ${data.compra} | Venta: ${data.venta} | Fecha: ${data.fecha}`;
        })
        .catch(error => {
            console.error('Error al obtener el tipo de cambio:', error);
        });
});
