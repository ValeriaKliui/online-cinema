import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const Container = styled.div`
  ${flexColGap(2)};
  align-items: center;
`;

export const FormContainer = styled.form`
  ${flexColGap(1)};
  align-items: center;
  width: 100%;
`;
