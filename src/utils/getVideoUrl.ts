import { Video, VideoSite } from "@store/services/entities";

export const getVideoUrl = ({
  url,
  site,
}: Pick<Video, "site" | "url">): string => {
  if (site === VideoSite.YOUTUBE) return url.replace("/v/", "/embed/");
  if (site === VideoSite.KINOPOISK_WIDGET)
    return url.replace("autoplay=1", "autoplay=0");
  return url;
};
