import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className='center'>

      <Link to={"/Product/Mens"}>
      Men's collections
      </Link>
      <Link to={"/Product/Women"}>Women's collections</Link> 

        <Outlet/>
    </div>
  )
}

export default Product