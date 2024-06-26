import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFecthGigfs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };
  const handleDelete = (values) => {
    setImages(values);
  };
  useEffect(() => {
    getImages();
  }, []);
  return {
    images,
    handleDelete,
    isLoading,
  };
};
