import styled from "styled-components";

export const ContentMainWrapper = styled.div`
  display: grid;
  row-gap: 20px;

  .content-grid-one {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
  }

  .content-grid-two {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
  }

  .subgrid-two {
    display: grid;
    row-gap: 20px;
    height: 100%;
  }
  
  @media screen and (max-width: 1200px) {
    .content-grid-one, .content-grid-two {
      column-gap: 12px;
    }

    .subgrid-two {
      row-gap: 12px;
    }
  }

  @media screen and (max-width: 992px) {
    .content-grid-one, .content-grid-two {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 12px;
    }

    .content-grid-two .grid-two-item:nth-child(3) {
      grid-column-start: 1;
      grid-column-end: 3;

      .subgrid-two {
        grid-template-columns: repeat(2, 1fr);
        height: 220px;
        column-gap: 12px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .content-grid-one, .content-grid-two {
      grid-template-columns: repeat(1, 1fr);
      column-gap: 0;
    }

    .content-grid-two .grid-two-item:nth-child(1) {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    .content-grid-two .grid-two-item:nth-child(3) {
      .subgrid-two {
        grid-template-columns: repeat(1, 1fr);
        height: auto;

        .subgrid-two-item {
          height: 220px;
        }
      }


    } 
    
  }
`