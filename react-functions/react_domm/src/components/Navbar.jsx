import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {


    const useNavi = useNavigate()

  return (



    <div onClick={() =>{
        useNavi("/")}}>
        <button>
            Go to Home page
        </button>
        <button onClick={(e)=>{
            e.stopPropagation()
            useNavi(-1)
        }}>
            Go back
        </button>

        <button onClick={(e)=>{
            e.stopPropagation()
            useNavi(+1)
        }}>
            Next
        </button>
    </div>

  )
}

export default Navbar