import React from 'react';



const online = true;

function Contact(){
  return(
    <div className="Contact">
      <img className="avatar" src="https://randomuser.me/api/portraits/women/93.jpg" alt="avatar"/>
      <div className="status">
        <h2 className="name">Anita Sutton</h2>
        <p className="status">
          <div className="status-online"></div>
          <p className="status-text">{online ? "Online" : 'Offline'}</p>
        </p>
      </div>
    </div>
  )
}

export default Contact;