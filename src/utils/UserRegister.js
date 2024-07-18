import supabase from "./supabase";

async function UserRegister(objData, urlImage) {
  const {
    IdUsuario,
    Contraseña,
    PNombre,
    SNombre,
    PApellido,
    SApellido,
    Correo,
    Telefono,
    Direccion,
    FechaNacimiento,
    Presentacion
  } = objData;
  const { data, error } = await supabase
    .from("usuarios")
    .insert([
      {
        UserName: IdUsuario,
        contraseña: Contraseña,
        primerNombre: PNombre,
        segundoNombre: SNombre,
        apellidoPaterno: PApellido,
        apellidoMaterno: SApellido,
        email: Correo,
        telefono: Telefono,
        direccion: Direccion,
        fecha_nacimiento: FechaNacimiento,
        presentacion: Presentacion,
        Image: urlImage? urlImage : null
      },
    ])
    .select();
  return { data, error };
}
export default UserRegister;
