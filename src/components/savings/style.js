import styled from "styled-components";

export const SavingsWrapper = styled.div`
  .grid-item {
    .grid-item-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      .grid-item-top-l {
        display: flex;
        align-items: center;
        column-gap: 10px;
      }

      .avatar {
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 100%;
      }

      .grid-item-top-r {
        font-weight: 600;
      }
    }

    .grid-item-badges {
      display: flex;
      flex-wrap: wrap;

      .grid-item-badge {
        color: #8a8587;
        background-color: var(--clr-jet);
        display: inline-block;
        border-radius: 16px;
        padding: 4px 6px;
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 14px;
        margin-right: 6px;
      }
    }

    .grid-item-progress {
      background-color: var(--clr-primary-light);
      height: 10px;
      border-radius: 100vh;
      margin-top: 8px;

      .grid-item-fill {
        width: 60%;
        height: 10px;
        background-color: var(--clr-pumpkin);
        border-radius: 100vh;
      }
    }
  }
`