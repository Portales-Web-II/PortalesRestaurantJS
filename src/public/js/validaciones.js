function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 &&
        (charCode < 48 || charCode > 57))
        return false;
    return true;
}


function isNumericKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 &&
        (charCode < 48 || charCode > 57))
        return true;
    return false;
}

function validateModalFactura() {

    var nom = document.forms["facturaForm"]["nombreCli"].value;
    var apell = document.forms["facturaForm"]["apellidoCli"].value;
    var tel = document.forms["facturaForm"]["telefonoCli"].value;
    var dir = document.forms["facturaForm"]["direccionCli"].value;

    var cam = document.forms["facturaForm"]["cambio"].value;

    var rV = document.getElementById('radioVisa');
    var rM = document.getElementById('radioMc');
    var numT = document.forms["facturaForm"]["numeroTar"].value;
    var cvc = document.forms["facturaForm"]["cvc"].value;
    var ven = document.forms["facturaForm"]["vencimiento"].value;

    if (nom != "" && apell != "" && tel != "" && dir != "" && cam != "") {
        $('#exampleModal').modal('show');
    }
    else if (rV.checked == true || rM.checked == true && numT != "" && cvc != "" && ven != ""){
        $('#exampleModal').modal('show');
    }
    else{
        $('#ErrorModal').modal('show');
    }
    // $('#exampleModal').modal('toggle');
    //$('#exampleModal').modal('hide');
}