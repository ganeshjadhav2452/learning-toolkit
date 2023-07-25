import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { add } from '../reduxStore/slices/cartSlice'

const Home = () => {
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  const fetchProducts =async()=>{

    try{
      const response = await axios('https://fakestoreapi.com/products')

      setData(response.data)
    }catch(err){
      console.log(err)
    }

  }



    const addtoCartHandler = (product)=>{
      dispatch(add(product))
    }

    useEffect(()=>{
        fetchProducts()
    },[])

   
  return (
    <div className='container-fluid' >
        <div className='row'>

      
        {
              
              data.map((product)=>{
          

              return  <div className='card m-3 col-2' >
                    <img style={{height:'80%'}} src={product.image}/>
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className='btn-warning rounded' onClick={()=>{
                      addtoCartHandler(product)
                    }}>
                        Add
                    </button>
                </div>
            })
        }
          </div>
    </div>
  )
}

export default Home