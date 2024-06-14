import { FC } from "react";
import { VideoFrameProps } from "./interfaces";
import { FrameStyled } from "./styled";

const VideoFrame: FC<VideoFrameProps> = ({ url }) => (
  <FrameStyled src={url} is="x-frame-bypass" key={url} width="100%" />
);
export default VideoFrame;
