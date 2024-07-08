import supabase from "./supabase";

async function UserRegister(objData) {
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
      },
    ])
    .select();
  return { data, error };
}
export default UserRegister;
