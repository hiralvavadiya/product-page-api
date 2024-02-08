import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addcart} from '../slice/counterSlice';

function Cart() {
  
    const cart = useSelector((state)=>state.counter.add);
    const dispatch = useDispatch();
    const [addcart, setaddcart] = useState([]);
    console.log(cart);

  return (
    <>

      <center><h1>Your cart</h1></center>
      <section className='container'>
        <table className='cart-table'>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          
          <tr>
                  <td>
                    <div>
                      <div>
                        <img />
                      </div>
                      <div>
                        {/* <h3>{data.title}</h3> */}
                      </div>
                    </div>
                  </td>
                  <td>
                    {/* $<span>{data.price}</span>.00 */}
                  </td>
                  <td>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </td>
                  <td>
                    {/* $<span>{data.price}</span>.00 */}
                  </td>
          </tr>
           
        </table> 
      </section>
    </>
  )
}

export default Cart