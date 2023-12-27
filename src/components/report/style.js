import styled from "styled-components";

export const ReportWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .grid-c3-content {
    flex: 1;

    .grid-chart {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      align-items: stretch;
      height: 100%;

      .chart-vert-value {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 28px;
      }
    }

    .grid-chart-bar {
      display: flex;
      flex-direction: column;
      text-align: center;

      .bar-wrapper {
        flex: 1;
        width: 32px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 10px;
        background-color: var(--clr-primary-light);
        position: relative;
        overflow: hidden;
      }

      .grid-hortz-value {
        margin-top: 12px;
      }

      .bar-item1 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: var(--clr-pumpkin);
        border-radius: 10px;
      }

      .bar-item2 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        background-color: var(--clr-peach);
        border-radius: 10px;
      }

      :nth-child(3) .bar-wrapper .bar-item1 {
        z-index: 1;
      }
    }
  }

  @media screen and (max-width: 992px) {
    grid-column-start: 1;
    grid-column-end: 3;
    height: 240px;
  }

`