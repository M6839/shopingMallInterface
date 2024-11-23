import React from 'react'


const Header = () => {
  return (
    <div className='HeaderSection'>
        <div className="left">
          <div className='title'>
            <h2>SHOPING MALL</h2>
          </div>
          <div className='items'>
            <h3>Men</h3>
            <h3>woman</h3>
            <h3>Children</h3>
            <h3>Beauty</h3>
          </div>
        </div>
        <div className='search'>
          <input type='search' placeholder='search..'/>
        </div>
        <div className='right'>
          <div>
            Signin/signup
          </div>
          <div>
            CART
          </div>
        </div>
    </div>
  )
}

export default Header