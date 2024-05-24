import { GifItem } from "./GifItem";
import { useFecthGigfs } from "../hooks/useFecthGigfs";
import { useState } from "react";
import { PropTypes } from "prop-types";

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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
