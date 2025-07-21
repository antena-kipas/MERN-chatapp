import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'

const HomePage = () => {
    const [selectedUser, setSelectedUser] = useState(false)
  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[15%]'>
      <div className={`backdrop-blur-sm border-2 border-green-600 overflow-hidden h-[100%] grid grid-cols-1
         relative ${selectedUser ? 'md:grid-cols-[1fr_1.5fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
        <Sidebar />
        <ChatContainer />
        <RightSidebar />
      </div>
    </div>
  )
}

export default HomePage