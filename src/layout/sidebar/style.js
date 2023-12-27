import styled from "styled-components";

const sidebarClassChangeStyle = (className, style) => {
  const changeName = 'sidebar-change'
  return className.includes(changeName) ? style : null
}

export const SidebarWrapper = styled.div`
  background-color: var(--clr-primary);
  width: 260px;
  padding: 36px 20px;
  transition: var(--transition-default);

  /*  */
  ${ props => sidebarClassChangeStyle(props?.className, { marginLeft: '-260px' }) }

  .user-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 16px;
  }

  .info-name {
    font-weight: 500;
    font-size: 20px;
    color: var(--clr-white);
    text-transform: uppercase;
  }

  .info-img {
    width: 48px;
    height: 48px;
    overflow: hidden;
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .navigation {
    margin-top: 28px;
    height: 600px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-slider-thumb {
      background-color: var(--clr-pumpkin);
      border-radius: 18px;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
      border-radius: 18px;
    }
  }

  .nav-item {
    margin-bottom: 10px;
    margin-right: 4px;
  }

  .nav-link {
    height: 44px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 6px 14px;
    column-gap: 12px;
    letter-spacing: 0.03em;
    border: 1px solid transparent;
    transition: var(--transition-default);
  }

  .nav-link:hover {
    border: 1px solid var(--clr-primary-light);
  }

  .nav-link.active {
    background-color: var(--clr-pumpkin);
    box-shadow: rgba(0, 0, 0, .1) 0 20px 25px -5px, rgba(0, 0, 0, .04) 0 10px 10px -5px;
  }

  .nav-link-icon {
    width: 22px;
  }

  .nav-link-text {
    text-transform: capitalize;
  }

  @media screen and (max-width: 1400px){
    padding: 24px 16px;
  }

  @media screen and (max-width: 1200px) {
    width: 72px;
    padding: 0 12px;

    ${props => sidebarClassChangeStyle(props?.className, { marginLeft: '-72px' }) }

    .info-name {
      display: none;
    }

    .nav-item {
      display: flex;
      justify-content: center;
      margin-bottom: 18px;
    }

    .nav-link {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
    }

    .nav-link-text {
      display: none;
    }

    .nav-link.active {
      border-radius: 100%;
    }

    .nav-link:hover {
      border-radius: 100%;
    }
  }

  @media screen and (max-width: 420px) {
    margin-left: -72px;

    ${props => sidebarClassChangeStyle(props?.className, { marginLeft: '0' })}
  }
`