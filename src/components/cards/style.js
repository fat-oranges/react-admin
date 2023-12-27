import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .grid-c1-content {
    background: linear-gradient(114.04deg, rgba(66, 59, 55, .6) 3.49%,
    rgba(66, 59, 55, 0) 34.7%), linear-gradient(138.58deg, rgba(59, 43, 30, .37) 43.56%, 
    #fea767 112.68%);
    flex: 1;
    border-radius: 10px;
    padding: 16px;

    .lg-value {
      margin-top: 8px;
      margin-bottom: 16px;
      color: #c7c4c6;
    }

    .card-wrapper {
      display: flex;
    }

    .card-pin-hidden {
      font-size: 32px;
      margin-right: 8px;

      span {
        color: #8a8587;
      }
    }
  }

  .card-logo-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .card-logo {
      display: flex;

      .logo-shape1, 
      .logo-shape2 {
        width: 36px;
        height: 36px;
        border-radius: 100%;
      }

      .logo-shape1 {
        background-color: var(--clr-scarlet-v1);
        margin-right: -15px;
        z-index: 0;
      }

      .logo-shape2 {
        background-color: var(--clr-yellow);
      }
    }
  }

  @media screen and (max-width: 768px){
    grid-column-start: 1;
    grid-column-end: 3;
  }
`