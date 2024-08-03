// import React from 'react'
import Searchinput from '../Sidebar/Searchinput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
function Sidebar() {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <Searchinput/>
        <div className="divider px-3">
        </div>
        <Conversations/>
        <LogoutButton/> 

    </div>
  )
}

export default Sidebar