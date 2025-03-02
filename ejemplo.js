<script>
  document.getElementById("enviarBtn").addEventListener("click", function () {
    let valido = true;

    // Limpiar mensajes previos
    document.querySelectorAll(".error, .valido").forEach(span => span.innerHTML = "");
    document.querySelectorAll("input, textarea, select").forEach(campo => {
      campo.classList.remove("campo-invalido", "campo-valido");
    });

    // Validar nombre
    let nombre = document.getElementById("nombre");
    if (nombre.value.trim() === "") {
      document.getElementById("errorNombre").innerHTML = "El nombre es obligatorio.";
      nombre.classList.add("campo-invalido");
      valido = false;
    } else {
      document.getElementById("errorNombre").innerHTML = "✅ Nombre válido.";
      document.getElementById("errorNombre").classList.add("valido");
      nombre.classList.add("campo-valido");
    }

    // Validar email
    let email = document.getElementById("email");
    if (!email.checkValidity()) {
      document.getElementById("errorEmail").innerHTML = "Ingrese un email válido.";
      email.classList.add("campo-invalido");
      valido = false;
    } else {
      document.getElementById("errorEmail").innerHTML = "✅ Email válido.";
      document.getElementById("errorEmail").classList.add("valido");
      email.classList.add("campo-valido");
    }

    // Validar mensaje
    let mensaje = document.getElementById("mensaje");
    if (mensaje.value.trim() === "") {
      document.getElementById("errorMensaje").innerHTML = "El mensaje no puede estar vacío.";
      mensaje.classList.add("campo-invalido");
      valido = false;
    } else {
      document.getElementById("errorMensaje").innerHTML = "✅ Mensaje válido.";
      document.getElementById("errorMensaje").classList.add("valido");
      mensaje.classList.add("campo-valido");
    }

    // Validar select
    let pais = document.getElementById("pais");
    if (pais.value === "") {
      document.getElementById("errorPais").innerHTML = "Seleccione un país.";
      pais.classList.add("campo-invalido");
      valido = false;
    } else {
      document.getElementById("errorPais").innerHTML = "✅ País seleccionado.";
      document.getElementById("errorPais").classList.add("valido");
      pais.classList.add("campo-valido");
    }

    // Validar checkbox
    let terminos = document.getElementById("terminos");
    if (!terminos.checked) {
      document.getElementById("errorTerminos").innerHTML = "Debe aceptar los términos.";
      terminos.classList.add("campo-invalido");
      valido = false;
    } else {
      document.getElementById("errorTerminos").innerHTML = "✅ Términos aceptados.";
      document.getElementById("errorTerminos").classList.add("valido");
      terminos.classList.add("campo-valido");
    }

    // Si todo está validado, mostrar alert con los datos ingresados
    if (valido) {
      let resultado = `
        ✅ Formulario Enviado Correctamente ✅
        - Nombre: ${nombre.value}
        - Email: ${email.value}
        - Mensaje: ${mensaje.value}
        - País: ${pais.options[pais.selectedIndex].text}
        - Términos Aceptados: ${terminos.checked ? "Sí" : "No"}
      `;
      alert(resultado);
    }
  });
