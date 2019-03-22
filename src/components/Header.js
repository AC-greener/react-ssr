import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <Link to='/'>我要去home</Link>
      <Link to='/login'>我要去login</Link>
    </div>
  )
}
export default Header