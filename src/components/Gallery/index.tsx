import { useGetImagesQuery } from "@store/services/filmsApi";
import { FC } from "react";
import { GalleryProps } from "./interfaces";
import { GalleryContainer } from "./styled";

export const Gallery: FC<GalleryProps> = ({ kinopoiskId }) => {
  const { data: images } = useGetImagesQuery(kinopoiskId);
  const { items = [] } = images ?? {};

  return (
    <>
      {items.length > 0 && (
        <GalleryContainer className="wrapper">
          {items
            ?.slice(0, 5)
            .map(({ imageUrl }) => <img src={imageUrl} key={imageUrl} />)}
        </GalleryContainer>
      )}
    </>
  );
};
