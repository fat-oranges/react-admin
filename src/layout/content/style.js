import styled from "styled-components";

export const ContentWrapper = styled.div`
  background-color: var(--clr-secondary);
  flex: 1;
  padding: 32px;

  @media screen and (max-width: 1400px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (max-width: 1200px){
    padding-left: 16px;
    padding-right: 16px;
  }
`