import styled from "styled-components";

export const LoansWrapper = styled.div`
  .grid-c7-content {
    margin-top: -42px;
    margin-bottom: -128px;
    display: flex;
    justify-self: flex-start;
    align-items: center;

    .progress-bar {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: -46px;

      .percent {
        position: relative;

        svg {
          position: relative;
          width: 210px;
          height: 210px;
          transform: rotate(-90deg);

          circle {
            width: 100%;
            height: 100%;
            fill: none;
            stroke: var(--clr-jet);
            stroke-width: 20;
            stroke-linecap: round;
          }
        }
      }

      .percent svg circle:last-of-type {
        stroke-dasharray: 600px;
        stroke-dashoffset: calc(625px - (600px * var(--percent)) / 168);
        stroke: var(--clr-pumpkin);
      }

      .number {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        h3 {
          font-weight: 500;
          font-size: 20px;

          span {
            font-size: 14px;
          }
        }
      }
    }

    .data-list {
      margin-left: -20px;

      .data-item {
        margin-bottom: 20px;
      }

      .data-item-value {
        margin-top: 8px;
        display: block;
        font-weight: 600;
      }
    }
  }
`