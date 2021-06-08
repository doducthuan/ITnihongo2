import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>Ký tự vừa nhập trùng với ký tự đã nhập</p>
    </div>
  )
}

export default Notification