import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const Container = styled.div`
  ${flexColGap(1)}
`;
export const ImgContainer = styled.div`
  height: 300px;
`;
export const FilmImg = styled.img`
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  height: 100%;
  display: block;
  object-fit: cover;
`;
export const Description = styled.div`
  ${flexColGap(0.5)}
`;
