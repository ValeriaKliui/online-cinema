import { FC, useEffect } from "react";
import { VideoFrameProps } from "./interfaces";
import { FrameStyled } from "./styled";

const VideoFrame: FC<VideoFrameProps> = ({ url }) => {
  useEffect(() => {
    console.log("Mounted!");
  }, []);
  console.log("Render");

  return <FrameStyled src={url} is="x-frame-bypass" key={url} width="100%" />;
};
export default VideoFrame;
