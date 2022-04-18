import React from 'react'

export const NavComponent = () => {
  return (
    
    <div className="card text-center">
            
  <div className="card-header">
  <h3 className="headers">Virtual Cards</h3>
  <div className='main_link'>
    <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item ">
        <a  className="nav-link link " href="/">Yours</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link link " href="/all">All</a>
      </li>
      <li className="nav-item ">
        <a  className="nav-link link " href='/blocked'>Blocked</a>
      </li>
    </ul>
    </div>
  </div>
</div>
  )
}
