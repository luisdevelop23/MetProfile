import supabase from "./supabase";

async function UserRegister(objData) {
  const {
    IdUsuario,
    Contrasena,
    PNombre,
    SNombre,
    PApellido,
    SApellido,
    Correo,
    Telefono,
    Direccion,
    FechaNacimiento,
  } = objData;
  const { data, error } = await supabase
    .from("usuarios")
    .insert([
      {
        UserName: IdUsuario,
        contraseña: Contrasena,
        primerNombre: PNombre,
        segundoNombre: SNombre,
        apellidoPaterno: PApellido,
        apellidoMaterno: SApellido,
        email: Correo,
        telefono: Telefono,
        direccion: Direccion,
        fecha_nacimiento: FechaNacimiento,
      },
    ])
    .select();
  return { data, error };
}
export default UserRegister;
