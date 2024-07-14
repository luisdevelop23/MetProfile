import supabase from "./supabase";

async function SkillsRegister(objData, IdUsuario) {
  try {
    const insertPromises = objData.map(async (element) => {
      console.log("Elemento antes de insertar:", element, "ID Usuario:", IdUsuario);
      const { habilidad } = element;

      // Verifica que 'habilidad' y 'IdUsuario' no sean nulos o undefined
      if (!habilidad || !IdUsuario) {
        throw new Error("Habilidad o ID de usuario faltantes");
      }

      const { data, error } = await supabase
        .from("habilidades")
        .insert([
          {
            usuario_id: IdUsuario,
            habilidad: habilidad,
            nivel:"0"
          },
        ])
        .select();

      if (error) {
        console.error("Error al insertar habilidad:", error);
        throw error;
      }

      console.log("Respuesta desde Supabase:", data);
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
