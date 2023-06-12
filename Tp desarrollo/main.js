
function validate (){
    if(document.primerform.nombre.value == "" ) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese su nombre!',
          })
        document.primerform.nombre.focus() ;
        return false;
    }
    if(document.primerform.email.value == "" ) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese su Email!',
          })
        document.primerform.email.focus() ;
        return false
    }
    if(document.primerform.contraseña.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese su contraseña!',
          })
        document.primerform.contraseña.focus() ;
        return false
    }
    if(document.primerform.trabajo.value == "Trabajo") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese su trabajo!',
          })
          document.primerform.trabajo.focus() ;
          return false
    }
    return( true )
}

const form1 = document.getElementById("form1")

form1?.addEventListener("submit", function(e){
  e.preventDefault()
  validate()
})

function validate2 (){
    if(document.segundoform.nombre.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese su nombre!',
          })
          document.segundoform.nombre.focus() ;
          return false
    }
    if(document.segundoform.apellido.value == "") {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingrese su apellido!',
      })
      document.segundoform.apellido.focus() ;
      return false
    }
    if(document.segundoform.profesion.value == "") {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingrese su profesion!',
      })
      document.segundoform.direc.focus() ;
      return false
    }
    if(document.segundoform.email.value == "") {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingrese su mail!',
      })
      document.segundoform.email.focus() ;
      return false
    }
    if(document.segundoform.telefono.value == "") {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingrese su numero!',
      })
      document.segundoform.telefono.focus() ;
      return false
    }
    return( true )
}

function guardarDatos() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var profesion = document.getElementById("profesion").value;
  var email = document.getElementById("email").value;

  var formData = {
    nombre: nombre,
    apellido: apellido,
    profesion: profesion,
    email: email
  };

  fetch('/formulario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      // Realiza alguna acción adicional si es necesario
    })
    .catch(error => {
      console.error(error);
      // Maneja el error si es necesario
    });
}


const segundoform = document.getElementById("segundoform");

const boton = document.getElementById("buton")

boton?.addEventListener('click', function(e){
  e.preventDefault();
  validate2();
  if (validate2(true)){
    guardarDatos();
    Swal.fire({
      icon: 'success',
      title: 'Formulario enviado ',
      text: 'Redirigiendo a la home',
    })
    setTimeout(function() {
      window.location.href = "index.html";
    }, 2000); 
  }
  else{
    return;
  }
});