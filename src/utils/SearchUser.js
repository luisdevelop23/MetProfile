import supabase from "./supabase";


// Funciones de búsqueda para cada tabla
async function searchUsers(id) {
  const { data, error } = await supabase
    .from("usuarios")
    .select("*")
    .eq("UserName", id);
  return { data, error };
}

async function searchSkills(id) {
  const { data, error } = await supabase
    .from("habilidades")
    .select("*")
    .eq("usuario_id", id);
  return { data, error };
}

async function searchJobs(id) {
  const { data, error } = await supabase
    .from("experiencias")
    .select("*")
    .eq("usuario_id", id);
  return { data, error };
}
async function searchLearn(id) {
    const { data, error } = await supabase
      .from("educacion")
      .select("*")
      .eq("usuario_id", id);
    return { data, error };
  }

// Función principal que busca en todas las tablas
// Función principal que busca en todas las tablas
async function searchUserData(userName) {
    const { data: userData, error: userError } = await searchUsers(userName);
    
    if (userError) {
      return { error: userError };
    }
    
    const userId = userData.id; // Suponiendo que la columna ID del usuario es 'id'
  
    const [skills, jobs, learn] = await Promise.all([
      searchSkills(userId),
      searchJobs(userId),
      searchLearn(userId),
    ]);

    return {
        user: userData,
        skills: skills.data,
        jobs: jobs.data,
        learn: learn.data,
        errors: {
          skills: skills.error,
          jobs: jobs.error,
          learn: learn.error,
        },
      };
}

export default searchUserData;
