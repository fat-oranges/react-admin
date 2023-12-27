import { createContext, useReducer } from "react";
import { sidebarReducer } from '@/reducer/sidebarReducer'
import PropTypes from 'prop-types'

const initialState = {
  isSidebarOpen: false
}

export const SidebarContext = createContext({})
export const SidebarProvide = ({children}) => {
  const [state, dispath] = useReducer(sidebarReducer, initialState)

  const toggleSidebar = () => {
    dispath({ type: 'TOGGLE_SIDEBAR' })
  }

  return (
    <SidebarContext.Provider value={
      {
        ...state,
        toggleSidebar
      }
    }>
      {children}
    </SidebarContext.Provider>
  )
}

SidebarProvide.propTypes = {
  children: PropTypes.node
}