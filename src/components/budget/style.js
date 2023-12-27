import styled from "styled-components";

export const BudgetWrapper = styled.div`
  .grid-c-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .grid-c4-content {
    margin-top: 20px;
    border-radius: 16px;
    padding: 12px;

    .grid-item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 24px;

      .grid-item-l {
        display: flex;
        align-items: flex-start;
        column-gap: 16px;

        .icon {
          display: flex;
          align-items: flex-start;
          justify-content: center;

          img {
            width: 20px;
          }
        }

        .text {
          font-weight: 600;

          span {
            font-weight: 300;
            font-size: 15px;
            display: block;
            margin-top: 5px;
            opacity: 0.9;
          }
        }
      }
    }
  }
`