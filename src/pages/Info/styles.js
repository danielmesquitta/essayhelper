import styled from "styled-components";

import { colors } from "~/styles/variables";

export const Container = styled.div`
  a {
    color: ${colors.link};
  }

  p {
    margin: 1rem 0;
  }

  > div {
    margin-top: 5rem;
  }
`;
