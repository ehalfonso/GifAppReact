import { GifItem } from "./GifItem";
import { useFecthGigfs } from "../hooks/useFecthGigfs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFecthGigfs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
