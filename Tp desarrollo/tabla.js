window.addEventListener('DOMContentLoaded', mostrarDatos);

function mostrarDatos() {
    fetch('/formulario')
      .then(response => response.json())
      .then(data => {
        var tabla = document.getElementById("tablaDatos");
  
        data.forEach(datos => {
          var fila = tabla.insertRow();
          var celdaNombre = fila.insertCell();
          var celdaApellido = fila.insertCell();
          var celdaProfesion = fila.insertCell();
          var celdaEmail = fila.insertCell();
  
          celdaNombre.innerHTML = datos.nombre;
          celdaApellido.innerHTML = datos.apellido;
          celdaProfesion.innerHTML = datos.profesion;
          celdaEmail.innerHTML = datos.email;
        });
      })
      .catch(error => {
        console.error(error);
        // Maneja el error si es necesario
      });
  }