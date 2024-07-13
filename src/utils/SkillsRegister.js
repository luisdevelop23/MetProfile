import supabase from "./supabase";

async function SkillsRegister(objData, IdUsuario) {
  try {
    const insertPromises = objData.map(async (element) => {
      const { habilidad, puntaje } = element;
      const { data, error } = await supabase
        .from("habilidades")
        .insert([
          {
            usuario_id: IdUsuario,
            habilidad: habilidad,
            // nivel: puntaje,
          },
        ])
        .select();

      return { data, error };
    });

    const results = await Promise.all(insertPromises);
    return results;
  } catch (error) {
    console.error("Error en SkillsRegister:", error.message);
    return { data: null, error: error.message };
  }
}
export default SkillsRegister;
