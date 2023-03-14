//Metodo para validar una cedula por el modulo 10
function ValidaCedula(ced) {
  var status = false;
  var c = ced.replace(/-/g, "");
  var Cedula = c.substr(0, c.length - 1);
  var Verificador = c.substr(c.length - 1, 1);
  var suma = 0;
  if (ced.length < 11) {
      return false;
  }
  for (i = 0; i < Cedula.length; i++) {
    mod = "";
    if (i % 2 == 0) {
      mod = 1;
    } else {
      mod = 2;
    }
    res = Cedula.substr(i, 1) * mod;
    if (res > 9) {
      res = res.toString();
      uno = res.substr(0, 1);
      dos = res.substr(1, 1);
      res = eval(uno) + eval(dos);
    }
    suma += eval(res);
  }
  el_numero = (10 - (suma % 10)) % 10;
  if (el_numero == Verificador && Cedula.substr(0, 3) != "000") {
    status = true;
  } else {
    status = false;
  }
  //if (Excepciones.indexOf(ced) != -1) {
  //  status = true;
  //}
  return status;
}
