import React from 'react'
import { useParams } from 'react-router-dom'

const Product_detail = () => {

    const param = useParams()
    console.log(param);
    

  return (
    <div>
        {param.id}
        <h1>This is the product detail</h1>
    </div>
  )
}

export default Product_detail