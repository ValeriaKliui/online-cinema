import { Modal } from "@shared/Modal";
import { Slider } from "@shared/Slider";
import { VideoSite, Video as VideoType } from "@store/services/entities";
import { useLazyGetVideosQuery } from "@store/services/filmsApi/filmsApi";
import { getVideoUrl } from "@utils/getVideoUrl";
import { FC, Suspense, useCallback, useEffect, useState } from "react";
import { VideosProps } from "./interfaces";
import { VideoContainer, VideoWrapper } from "./styled";
import { lazy } from "react";
import { Spinner } from "@shared/Spinner";
import { VideoFrameProps } from "./VideoFrame/interfaces";

const VideoFrame = lazy(() => import("./VideoFrame/index"));
const Video = ({ url }: VideoFrameProps) => (
  <Suspense fallback={<Spinner />}>
    <VideoFrame url={url} />
  </Suspense>
);

export const Videos: FC<VideosProps> = ({ kinopoiskId }) => {
  const [openedVideoUrl, openVideo] = useState<string>("");
  const [fetchVideos, { data }] = useLazyGetVideosQuery();

  const { items: videos = [] } = data ?? {};
  const onlyYTVideos = videos.filter(({ site }) => site === VideoSite.YOUTUBE);

  useEffect(() => {
    fetchVideos(kinopoiskId);
  }, [kinopoiskId, fetchVideos]);

  const onVideoClick = (url: string) => openVideo(url);
  const closeVideoModal = useCallback(() => openVideo(""), []);

  const renderVideo = ({ url, site }: VideoType) => {
    const videoUrl = getVideoUrl({ url, site });

    return (
      <VideoContainer>
        <VideoWrapper onClick={() => onVideoClick(videoUrl)} />
        <Video url={videoUrl} />
      </VideoContainer>
    );
  };

  return (
    <div className="wrapper">
      <Slider items={onlyYTVideos} renderItem={renderVideo} itemsAmount={3} />
      <Modal isModalOpened={!!openedVideoUrl} onClose={closeVideoModal}>
        <Video url={openedVideoUrl} />
      </Modal>
      <script src="https://unpkg.com/@ungap/custom-elements-builtin"></script>
      <script type="module" src="https://unpkg.com/x-frame-bypass"></script>
    </div>
  );
};
