import { useGetImagesQuery } from "@store/services/filmsApi";
import { FC } from "react";
import { GalleryProps } from "./interfaces";

export const Gallery: FC<GalleryProps> = ({ kinopoiskId }) => {
  const { data: images } = useGetImagesQuery(kinopoiskId);
  return (
    <div className="wrapper">
      {images?.items.map(({ imageUrl }) => (
        <img src={imageUrl} key={imageUrl} />
      ))}
    </div>
  );
};
