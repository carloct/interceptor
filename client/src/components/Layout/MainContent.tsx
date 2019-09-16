import React from 'react'

const MainContent = (props: any) => {
  return (
    <div className="main-content-wrap d-flex flex-column">
      <div className="inbox-main-sidebar-container sidebar-container">
        {props.children}
      </div>
    </div>
  )
}

export default MainContent
