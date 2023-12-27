import styled from "styled-components";

export const SubscriptionsWrapper = styled.div`
  .grid-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    :last-child {
      margin-bottom: 0;
    }

    .grid-item-l {
      display: flex;
      align-items: center;
      column-gap: 10px;

      .icon {
        background-color: rgba(254, 30, 0, .15);
        width: 32px;
        height: 32px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 16px;
        }
      }

      .text {
        color: var(--clr-silver-v1);

        span {
          color: #8a8587;
          font-size: 15px;
        }
      }
    }

    .grid-item-r {
      font-weight: 600;
    }

  }
`