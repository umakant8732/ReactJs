import React from 'react'
import { useParams } from 'react-router-dom'

function UserInfo() {

  const user = useParams();

  return (
    <div>
      <h3>user info {user.info}</h3>
    </div>
  )
}

export default UserInfo
