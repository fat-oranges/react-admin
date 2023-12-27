import { SidebarContext } from "@/context/SidebarContext"
import { iconsImgs } from "@/utils/images"
import { useContext } from "react"
import { ContentTopWrapper } from "./style"

const ContentTop = () => {
  const {toggleSidebar} = useContext(SidebarContext)
  return (
    <ContentTopWrapper className="main-content-top">
      <div className="content-top-left">
        <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar()}>
          <img src={iconsImgs.menu} alt="menu" />
        </button>
        <h3 className="content-top-title">home</h3>
      </div>

      <div className="content-top-btns">
        <button className="search-btn content-top-btn">
          <img src={iconsImgs.search} alt="search" />
        </button>

        <button className="notification content-top-btn">
          <img src={iconsImgs.bell} alt="bell" />
          <span className="notification-btn-dot"></span>
        </button>
      </div>
    </ContentTopWrapper>
  )
}

export default ContentTop