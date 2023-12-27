import React, { memo, useContext, useState } from 'react'
import { SidebarWrapper } from './style'

import { personsImgs } from '@/utils/images'

import { navigationLinks } from '@/data/data'
import { SidebarContext } from '@/context/SidebarContext'
import classNames from 'classnames'

const Sidebar = memo(() => {
  const [activeLinkIdx] = useState(1)
  const {isSidebarOpen} = useContext(SidebarContext)

  return (
    <SidebarWrapper className={classNames('sidebar', {'sidebar-change': isSidebarOpen})}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={ personsImgs.person_two } alt="profile img" />
        </div>
        <span className="info-name">alice-doe</span>
      </div>

      <nav className='navigation'>
        <ul className="nav-list">
          {
            navigationLinks.map((item) => {
              return <li className="item" key={item.id}>
                <a href="#" className={classNames('nav-link', {'active': item.id === activeLinkIdx})}>
                  <img src={item.image} alt={item.title} className="nav-link-icon" />
                  <span className="nav-link-text">{item.title}</span>
                </a>
              </li>
            })
          }
        </ul>
      </nav>
    </SidebarWrapper>
  )
})

export default Sidebar;