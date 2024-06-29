import supabase from "./supabase";

async function StudiesRegister(objData, IdUsuario) {
  try {
    const insertPromises = objData.map(async (element) => {
      const { titulo, institucion, fechaInicio, fechaFin, decripcion } =
        element;
        // console.log("elemento",element)
      const { data, error } = await supabase
        .from("educacion")
        .insert([
          {
            usuario_id: IdUsuario,
            institucion: institucion,
            titulo: titulo,
            fecha_inicio: fechaInicio,
            fecha_fin: fechaFin == ""  ? null : fechaFin,
          },
        ])
        .select();
    //   console.log("desdestudio",  data, error);
      return { data, error };
    });
    const results = await Promise.all(insertPromises);
    return results;
  } catch (error) {
    console.error("Error en SkillsRegister:", error.message);
    return { data: null, error: error.message };
  }
}
export default StudiesRegister;
