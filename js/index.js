// Configuració JS per validar el Formulari
function validarFormulari() {
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var nombreValid = /^[A-Za-z]+$/;
    var emailValid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!nombre.match(nombreValid)) {
      alert("Siusplau, introdueix un nom vàlid (només lletres de la A-Z).");
      return false;
    }

    if (!email.match(emailValid)) {
      alert("Siusplau, introdueix un email vàlid.");
      return false;
    }

    alert("Moltes Gràcies! Formulari enviat per " +nombre)
    return true;
  }