export const sidebarReducer = (state, active) => {
  switch(active.type) {
    case 'TOGGLE_SIDEBAR':
      return { ...state, isSidebarOpen: !state.isSidebarOpen }
  }

  throw Error(`没有找到对应的 active.type：${active.type}`)
}