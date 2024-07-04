function validarFormulario(
  OBJDTPERSONAL,
  OBJDTHABILIDADES,
  OBJDTESTUDIANTILES,
  OBJDTEXPERIENCIA,
) {
  //?validacion de Datos personales
  if (OBJDTPERSONAL.IdUsuario == "") {
    return "Porfavor coloque su ID con cual desea ser identificador";
  }
  if (OBJDTPERSONAL.IdUsuario.length <= 5) {
    return "El ID tiene que tener mas de 5 caracteres";
  }
  if (OBJDTPERSONAL.Contraseña == "") {
    return "No ingreso Contrasena";
  }
  if (OBJDTPERSONAL.Contraseña <= 5) {
    return "La contraseña tiene que tener mas de 5 caracteres";
  }

  if (OBJDTPERSONAL.Pnombre == "") {
    return "No ingreso Primer Nombre";
  }
  if (OBJDTPERSONAL.PApellido == "") {
    return "Porfavor Ingrese su Apellido Paterno";
  }
  if (OBJDTPERSONAL.SApellido == "") {
    return "Porfavor Ingrese su Apellido Materno";
  }
  if (OBJDTPERSONAL.Direccion == "") {
    return "Porfavor Ingrese su Direccion";
  }
  if (OBJDTPERSONAL.Telefono == "") {
    return "No ingreso Telefono";
  }
  if (OBJDTPERSONAL.FechaNacimiento == "") {
    return "No ingreso Fecha de Nacimiento";
  }
  if (OBJDTPERSONAL.Correo == "") {
    return "No ingreso Correo";
  }
  //!Validacion de Habilidades
  if (OBJDTHABILIDADES.length > 0) {
    OBJDTHABILIDADES.forEach((element) => {
      if (element.Habilidad == "") {
        return "Porfavor Ingresar Habilidad";
      }
      if (element.Puntaje == "") {
        return "Porfavor Ingresar Puntaje";
      }
    });
  }
  //!Validacion de Estudios
  if (OBJDTESTUDIANTILES.length > 0) {
    OBJDTESTUDIANTILES.forEach((element) => {
      if (element.institucion == "") {
        return "Porfavor Ingresar Instit";
      }
      if (element.titulo == "") {
        return "Porfavor Ingresar Titulo";
      }
      if (element.fechaInicio == "") {
        return "Porfavor Ingresar Fecha de Inicio";
      }
    });
  }
  //!Validacion de Experiencia
  if (OBJDTEXPERIENCIA.length > 0) {
    OBJDTEXPERIENCIA.forEach((element) => {
      if (element.empresa == "") {
        return "Porfavor Ingresar Nombre de la Empresa";
      }
      if (element.puesto == "") {
        return "Porfavor Ingresar Puesto";
      }
      if (element.Descripcion == "") {
        return "Porfavor Ingresar Descripcion";
      }
      if (element.fechaInicio == "") {
        return "Porfavor Ingresar Fecha de Inicio";
      }
    });
  }
  return "";
}

export default validarFormulario;
