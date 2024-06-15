import { Modal } from "@shared/Modal";
import { useGetImagesQuery } from "@store/services/filmsApi/filmsApi";
import { FC, memo, useState } from "react";
import { GalleryProps } from "./interfaces";
import { Container, GalleryContainer, ModalImg } from "./styled";

export const Gallery: FC<GalleryProps> = memo(({ kinopoiskId }) => {
  const [openedImageUrl, setOpenedImage] = useState("");
  const { data: images } = useGetImagesQuery(kinopoiskId);
  const { items = [] } = images ?? {};

  const closeImageModal = () => setOpenedImage("");

  if (items.length === 0) return <></>;

  return (
    <Container className="wrapper">
      <h5>Изображения</h5>
      <GalleryContainer>
        {items
          ?.slice(0, 5)
          .map(({ imageUrl }) => (
            <img
              src={imageUrl}
              key={imageUrl}
              onClick={() => setOpenedImage(imageUrl)}
            />
          ))}
      </GalleryContainer>
      <Modal isModalOpened={!!openedImageUrl} onClose={closeImageModal}>
        <ModalImg src={openedImageUrl} key={openedImageUrl} />
      </Modal>
    </Container>
  );
});
