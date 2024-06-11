import { Modal } from "@shared/Modal";
import { Slider } from "@shared/Slider";
import { Video } from "@store/services/entities";
import { useLazyGetVideosQuery } from "@store/services/filmsApi/filmsApi";
import { getVideoUrl } from "@utils/getVideoUrl";
import { FC, useEffect, useState } from "react";
import { VideosProps } from "./interfaces";

export const Videos: FC<VideosProps> = ({ kinopoiskId }) => {
  const [openedVideoUrl, openVideo] = useState("");
  const [fetchVideos, { data }] = useLazyGetVideosQuery();

  const { items = [] } = data ?? {};

  useEffect(() => {
    fetchVideos(kinopoiskId);
  }, [kinopoiskId, fetchVideos]);

  console.log(openedVideoUrl);

  const onVideoClick = (url) => openVideo(url);

  const renderItem = ({ url, site }: Video) => {
    const videoUrl = getVideoUrl({ url, site });

    return <div onClick={() => onVideoClick(url)}>{videoUrl}</div>;
    // <iframe src={videoUrl} key={videoUrl} is="x-frame-bypass" />
  };
  const closeVideoModal = () => openVideo("");

  return (
    <div className="wrapper">
      <Slider items={items} renderItem={renderItem} itemsAmount={3} />
      <Modal isModalOpened={!!openedVideoUrl} onClose={closeVideoModal}>
        <div>{openedVideoUrl}</div>
      </Modal>
    </div>
  );
};
