async function ImageRegister(id, url) {
    const { data, error } = await supabase
        .from("fotos")
        .insert({ usuario_id: id, url: url });
    return { data, error };
}