import { useGetImagesQuery } from "@store/services/filmsApi";

export const Gallery = ({ filmID }) => {
  const { data: images } = useGetImagesQuery(filmID);
  return (
    <div>{images?.items.map(({ imageUrl }) => <img src={imageUrl} />)}</div>
  );
};
