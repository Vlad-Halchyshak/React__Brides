import React from 'react'
import heart_load from '../../images/heart_load.png'




const Loading: React.FC = (props) => {
  return <div className="Loading_container">
    <div className="Loading_content">
      <img src={heart_load} />
      Please wait...
    </div>
  </div>
}

export default Loading