import { Video, VideoSite } from "@store/services/entities";

export const getVideoUrl = ({
  url,
  site,
}: Pick<Video, "site" | "url">): string => {
  if (site === VideoSite.YOUTUBE) {
    if (url.includes("/v/")) return url.replace("/v/", "/embed/");
    return url.replace("watch?v=", "embed/");
  }
  if (site === VideoSite.KINOPOISK_WIDGET)
    return url.replace("autoplay=1", "autoplay=0");
  return url;
};
