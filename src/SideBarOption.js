import React from 'react'
import "./SideBarOption.css"
const SideBarOption = ({active,active1,text,Icon}) => {
    return (
        <div className={`sidebarOption ${active1 && "sidebarOption--active1" || active && "sidebarOption--active" }`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SideBarOption
