


function validarCorreo(){
    var correo = document.getElementById('correo').value;
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexCorreo.test(correo)) {
        alert('Email válido');
    }else{
        alert('Email inválido');
    }
    return false;

}