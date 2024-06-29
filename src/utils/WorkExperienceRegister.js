import supabase from "./supabase";

async function WorkExperienceRegister(objData, IdUsuario) {
  try {
    const insertPromises = objData.map(async (element) => {
      const { empresa, puesto, fechaInicio, fechaFin, descripcion } = element;
      const { data, error } = await supabase
        .from("experiencias")
        .insert([
          {
            usuario_id: IdUsuario,
            empresa: empresa,
            puesto: puesto,
            fecha_inicio: fechaInicio,
            fecha_fin: fechaFin == "" ? null : fechaFin,
            descripcion: descripcion == "" ? null : descripcion,
          },
        ])
        .select();
        return { data, error };
    });

    const results = await Promise.all(insertPromises);
    return results;
  } catch (error) {
    console.error("Error en WorkExperienceRegister:", error.message);
    return { data: null, error: error.message };
  }
}
export default WorkExperienceRegister;
