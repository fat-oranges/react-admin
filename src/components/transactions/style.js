import styled from "styled-components";

export const TransactionsWrapper = styled.div`
  .grid-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;

    p {
      color: var(--clr-silver-v1);
    }

    .grid-item-l {
      display: flex;
      align-items: center;
      column-gap: 10px;

      .text {
        font-weight: 60;
      }

      span {
        display: block;
        font-weight: 400;
        margin-top: 4px;
        font-size: 15px;
        color: #8a8587;
      }
    }

    .grid-item-l .avatar {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      overflow: hidden;
    }

    .grid-item-r {
      span {
        font-weight: 500;
      }
    }
  }

  .grid-item:last-child {
    margin-bottom: 0;
  }
`