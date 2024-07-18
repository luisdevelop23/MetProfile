import React, { useState } from "react";
import supabase from "../utils/supabase";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const fileName = `${Date.now()}-${selectedFile.name}`;
    const { data, error } = await supabase.storage
      .from("avatars") // Reemplaza con el nombre de tu bucket
      .upload(fileName, selectedFile);
    console.log("data", data);
    if (error) {
      console.error("Error uploading file:", error);
    } else {
      const { publicURL, error: publicUrlError } = supabase.storage
        .from("avatars") // Reemplaza con el nombre de tu bucket
        .getPublicUrl(fileName);

      if (publicUrlError) {
        console.error("Error getting public URL:", publicUrlError);
      } else {
        setImageUrl(publicURL);
        console.log("File uploaded successfully:", publicURL);
      }
    }
  };
  // console.log("url",imageUrl,"file", selectedFile)
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
      {imageUrl && (
        <div>
          <p>Image uploaded successfully!</p>
          <a href={imageUrl} target="_blank" rel="noopener noreferrer">
            View Image
          </a>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
