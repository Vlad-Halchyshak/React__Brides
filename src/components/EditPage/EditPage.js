import React from 'react'
import {ProgressBar} from 'react-bootstrap'
import {editPage} from './editPage.scss'
import { NavLink } from 'react-router-dom'




const EditPage = (props) => {
  
  
  return <div className="edit_page">
    
    <MenuAccount/>
    <ProgressBarInfo/>
  </div> 
}


const ProgressBarInfo = () => {
  return <div className="Edit_info"><h3>Edit profile</h3>
  <p>Please complete your profile</p>
<div className="progress_bar">
  <p> completed 45%</p>
<ProgressBar animated now={45}/> 
</div>
<div className="ladies_info"><h3>See how ladies see your profile</h3>
<p>To attract more ladies attention to your account - it need`s to be complete. You can check how does it look like now.</p>

<div className="View_profile"><NavLink to="/profile">View My Profile</NavLink></div>
</div>
</div>
}

const MenuAccount = () => {
  
  return <div className="menu_drop">
    
    <ul className="menu_account">
      <li className="Correspondence">Correspondence</li>
      <li><a href="#0">Ladies<span className="badge"><b>5</b>/24</span></a></li>
      <li><a href="#0">Administration<span className="badge"><b>1</b>/24</span></a></li>
      <li><a href="#0">Draft</a></li>
      <li><a href="#0">Deleted Mail<span className="badge"><b>54</b></span></a></li>
      <li><a href="#0">Chat History</a></li>
      </ul>

      <ul className="menu_account">
      <li className="Ladies">Ladies</li>
      <li><a href="#0">My favourite Ladies<span className="badge">50</span></a></li>
      <li><a href="#0">My favourite photos<span className="badge">20</span></a></li>
      <li><a href="#0">My favourite videos<span className="badge">5</span></a></li>
      <li><a href="#0">My contact list<span className="badge">10</span></a></li>
      <li><a href="#0">Online ladies<span className="badge">50</span></a></li>
      </ul>

      <ul className="menu_account">
      <li className="Menu_Services">Services</li>
      <li><a href="#0">Phone Calls</a></li>
      <li><a href="#0">Live Chats</a></li>
      </ul>
       
      <ul className="menu_account"> 
      <li className="Finances">Finances</li>
      <li><a href="#0">My Credits<span className="badge">150</span></a></li>
      <li><a href="#0">Buy Credits</a></li>
      <li><a href="#0">Expenses History</a></li>
      </ul>

  
      <ul className="menu_account"> 
      <li className="My_Profile">My Profile</li> 
      <li><a href="#0">View profile</a></li>
      <li><a href="#0">My photos<span className="badge">150</span></a></li>
      <li><a href="#0">Edit profile</a></li>
      <li><a href="#0">Change password</a></li>
      <li><a href="#0">Log Out</a></li>
      </ul>
    </div>
}


export default EditPage