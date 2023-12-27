import styled from "styled-components";

export const ContentTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  .sidebar-toggler {
    display: flex;
    align-items: center;
    margin-right: 12px;
  }

  .sidebar-toggler img {
    width: 20px;
  }

  .content-top-title {
    color: var(--clr-white);
    font-size: 20px;
    font-weight: 600;
  }

  .content-top-btn {
    margin-left: 18px;
  }

  .content-top-btn img {
    width: 24px;
  }

  .content-top-btn img:hover {
    filter: brightness(0) invert(1);
  }

  .content-top-left {
    display: flex;
    align-items: center;
  }

`