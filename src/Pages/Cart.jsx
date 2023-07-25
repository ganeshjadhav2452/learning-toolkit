import React from 'react'
import { useSelector } from 'react-redux'


const Cart = () => {
  
  const {cartArray} = useSelector((storeData)=> storeData.cartData) 

  console.log(cartArray)
  const removeHandler=(id)=>{
 
  }
  return (
    <div className="container bg-warning">
      <div className="row">
        
          {cartArray.map((product)=>{
            return  <div className='card m-3 col-2' >
            <img style={{height:'80%'}} src={product.image}/>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className='btn-danger rounded' onClick={()=>{
              removeHandler(product.id)
            }}>
                remove
            </button>
        </div>
          })}
       
      </div>
    </div>
  )
}

export default Cart