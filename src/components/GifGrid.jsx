import { GifItem } from "./GifItem";
import { useFecthGigfs } from "../hooks/useFecthGigfs";
import { useState } from "react";

export const GifGrid = ({ category }) => {
  const { images, isLoading, handleDelete } = useFecthGigfs(category);
  const removeSelect = (id) => {
    const newImges = images.filter((img) => id !== img.id);
    handleDelete(newImges);
  };
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} remove={removeSelect} />
        ))}
      </div>
    </>
  );
};
