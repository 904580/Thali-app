import React from 'react';
import { useSelector } from 'react-redux';  
import Product from './Product';




function Item() {

  // @ts-ignore
  const productData=useSelector(state=>state.counter.products)

  return(
    <div className='container item_item'>
     <h1 className='text-center text-success' 
// @ts-ignore
     align="center" style={{color: "red" ,backgroundColor: "black"}}><marquee> MENU CARDS </marquee></h1>
    <div className='row my-3' > 

      {
        productData.map((element,i)=>(

          <Product key={i} data={element}/>

        ))
      }

    </div>

  </div>

  )

}

export default Item;