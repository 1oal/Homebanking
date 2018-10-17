//Declaración de variables
var nombreUsuario = "Juan Garcia";
var saldoCuenta = 15000;
var limiteExtraccion = 5000;
var valorAgua = 350;
var valorTelefono = 425;
var valorLuz = 210;
var valorInternet = 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var codigoSeguridad = 0000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var stringLimiteExtraccion =  prompt ("Ingrese el nuevo límite de extracción que desea");
    var limiteActExtraccion = parseInt(stringLimiteExtraccion);
    if (validarEsNumero(limiteActExtraccion)){
        limiteExtraccion = limiteActExtraccion;
        actualizarLimiteEnPantalla();
        alert ("Su nuevo límite de extracción es de "+limiteExtraccion)
    }
    else{
        alert("Debe ingresar un valor numérico");
    }
}

function extraerDinero() {
    var stringCantExtraccion = prompt("Ingrese la cantidad de dinero que desea extraer");
    var cantExtraccion = parseInt(stringCantExtraccion);

    if ((validarEsNumero(cantExtraccion))&&(validarSaldoCuenta(cantExtraccion))&&(validarLimiteExtraccion(cantExtraccion))&&(validarMonto(cantExtraccion))){      
        var saldoCuentaAnt = saldoCuenta;
        restarDinero (cantExtraccion);
        actualizarSaldoEnPantalla();
        alert ("Has retirado: "+ cantExtraccion+ "\nSaldo anterior: "+saldoCuentaAnt +"\nSaldo actual: "+ saldoCuenta);
    
    } else { 
            if((validarEsNumero(cantExtraccion))==false){
                alert("Debe ingresar un valor numérico");
            }
            else if ((cantExtraccion <= saldoCuenta)==false){
                alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.")
            }
            else if ((cantExtraccion <= limiteExtraccion)==false){
                alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extracción.");
            }
            else if (validarMonto(cantExtraccion)==false){
                alert("Solo puedes extraer billetes de 100.");
            }
           
    }
}

function depositarDinero() {
    var stringCantDeposito = prompt("Ingrese la suma de dinero a depósitar");
    var cantDeposito = parseInt(stringCantDeposito);
    if (validarEsNumero(cantDeposito)){
        var saldoCuentaAnt = saldoCuenta;
        sumarDinero (cantDeposito);
        actualizarSaldoEnPantalla();
        alert ("Has depositado: "+ cantDeposito + "\nSaldo anterior: "+saldoCuentaAnt +"\nSaldo actual: "+ saldoCuenta);
    }else{
        alert("Debe ingresar un valor numérico");
    }
}

function pagarServicio() {
    var stringServicio = prompt ("Ingrese el número que corresponda con el servicio que queres pagar:\n 1- Agua\n 2- Luz\n 3- Internet\n 4-Teléfono\n");
    var nroServicio = parseInt(stringServicio);
    switch (nroServicio) {  

        case 1:
            if (validarSaldoCuenta(valorAgua)){
                saldoCuentaAnt = saldoCuenta;
                restarDinero(valorAgua);
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio Agua.\nSaldo anterior: $"+saldoCuentaAnt+"\nDinero descontado: $"+valorAgua+"\nSaldo actual $"+saldoCuenta);
            }
            else{
                alert("No hay suficiente saldo en tu cuenta para pagar el servicio Agua.");
            }
            break;

        case 2: 
            if (validarSaldoCuenta(valorLuz)){
                saldoCuentaAnt = saldoCuenta;
                restarDinero(valorLuz);
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio Luz.\nSaldo anterior: $"+saldoCuentaAnt+"\nDinero descontado: $"+valorLuz+"\nSaldo actual $"+saldoCuenta);
            }
            else{
                alert("No hay suficiente saldo en tu cuenta para pagar el servicio luz.");
            }
            break;

        case 3: 
            if (validarSaldoCuenta(valorInternet)){
                saldoCuentaAnt = saldoCuenta;
                restarDinero(valorInternet);
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio Internet.\nSaldo anterior: $"+saldoCuentaAnt+"\nDinero descontado: $"+valorInternet+"\nSaldo actual $"+saldoCuenta);
            }
            else{
                alert("No hay suficiente saldo en tu cuenta para pagar el servicio internet.");
            }
            break;

        case 4: 
            if (validarSaldoCuenta(valorTelefono)){
                saldoCuentaAnt = saldoCuenta;
                restarDinero(valorTelefono);
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio Teléfono.\nSaldo anterior: $"+saldoCuentaAnt+"\nDinero descontado: $"+valorTelefono+"\nSaldo actual $"+saldoCuenta);
            }
            else{
                alert("No hay suficiente saldo en tu cuenta para pagar el servicio teléfono.");
            }
            break;

        default:
            alert("El servicio seleccionado no existe");
    }
}

function transferirDinero() {
    var stringCantTransferir = prompt ("Ingrese el monto que desea transferir.");
    var cantTransferir = parseInt(stringCantTransferir);

    if(validarSaldoCuenta(cantTransferir)){
        var stringCuentaTransferir = prompt ("Ingrese la cuenta a la que desea transferir");
        var cuentaTransferir = parseInt(stringCuentaTransferir);
        
        if(validarCuentaAmiga(cuentaTransferir)){
            restarDinero(cantTransferir); 
            actualizarSaldoEnPantalla();
            alert("Se han transferido: $"+cantTransferir+"\nCuenta destino: "+cuentaTransferir);
        }
        else{
            alert("Solo puede transferir dinero a una cuenta amiga");
        }

    }else{
        alert("No posee la cantidad de dinero necesaria para realizar la tranferencia");
    }
    
}

function iniciarSesion() {
    var stringCodigoSeguridad = prompt("Ingrese el código de seguridad de su cuenta.")
    var codigoSeguridad = parseInt(stringCodigoSeguridad);
    if (validarCodigoSeguridad(codigoSeguridad)){
        alert("Bienvenido/a "+nombreUsuario+" ya puedes comenzar a realizar operaciones.");
        actualizarSaldoEnPantalla();
    }
    else{
        alert("Para acceder a la aplicación debe ingresar su código de usuario correctamente.");
        iniciarSesion();
    }
}

var sumarDinero = function (monto){
    saldoCuenta += monto;
    return saldoCuenta;
}

var restarDinero = function (monto){
    saldoCuenta -= monto;
    return saldoCuenta;
}

var validarSaldoCuenta = function (monto){
    if ( monto <= saldoCuenta){
        return true;
    } else {
        return false;
    }   
}

var validarLimiteExtraccion = function (monto){
    if ( monto <= limiteExtraccion){
        return true;
    } else {
        return false;
    }   
}

var validarMonto = function (monto){
    if ((monto%100)===0){
        return true;
    } else {
        return false;
    }
}

var validarCuentaAmiga = function (nroCuenta){
    if(nroCuenta === cuentaAmiga1){
        return true;

    }else if(nroCuenta === cuentaAmiga2){
        return true;

    }else{
        return false;
    }
}

var validarCodigoSeguridad = function (nro){
    if(codigoSeguridad === nro){
        return true;
    }else{
        return false;
    }
}

var validarEsNumero = function (nro){
    if(!isNaN(nro)){
        return true;
    }else{
        return false;
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}