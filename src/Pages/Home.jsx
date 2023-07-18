import React ,{useState,useEffect} from 'react'

const Home = () => {
    const [products , setProducts] = useState([])
 
    useEffect(()=>{
        const fetchProduct = async()=>{
            const res = await fetch('https://fakestoreapi.com/products');

            const data = await res.json();

            setProducts(data)
        }
        fetchProduct()
    },[])
  return (
    <div className='container-fluid' >
        <div className='row'>

      
        {
              
            products.map((product)=>{
              {  console.log(product)}

              return  <div className='card  col-2' >
                    <img src={product.image}/>
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className='btn-warning rounded'>
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