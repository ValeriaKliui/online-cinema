import { devices } from "@providers/Theme/constants";
import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const StaffContainer = styled.div`
  margin-top: 10%;
`;
export const StaffItem = styled.div`
  ${flexColGap(1)};
  height: 100%;
  justify-content: space-between;
  background-color: ${({ theme: { colors } }) => colors.darkBlock};
  align-items: center;
  padding: 1em;
  text-align: center;
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  ${devices.md} {
    margin-bottom: 3em;
  }
`;
export const StaffImg = styled.img`
  height: 10em;
  width: 10em;
  object-fit: cover;
  border-radius: 100%;
  margin-top: -30%;
`;
