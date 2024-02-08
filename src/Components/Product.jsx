import React, { useEffect, useState } from 'react'
import { MdDiscount } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addcart } from '../slice/counterSlice';
import { useDispatch } from 'react-redux';

function Product() {

  const [pro,setproduct]=useState([])
  const [cate,setcate]= useState([])
  const dispatch = useDispatch()

    useEffect(()=>{
      fetch('https://dummyjson.com/products/categories')
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            setcate(data);
            // console.log(data);
        })
    },[])

    const demo=(catename)=>{
      fetch(`https://dummyjson.com/products/category/${catename}`)
      .then(response=>{
          return response.json();
      })
      .then(data=>{
            setproduct(data.products);
      })
    }

    useEffect(()=>{
      fetch('https://dummyjson.com/products')
        .then(response=>{
            return response.json();
        })
        .then(data=>{
              setproduct(data.products);
            // console.log(data);
        })
    },[])

  return (
    <>
      <section className='pro-main'>
        <div className='sidebar'>
            {
                cate.map((item)=>{
                    return (
                        <>
                            <h2 onClick={()=>{demo(item)}} style={{cursor:"pointer"}}>{item}</h2>
                            <br/>
                        </>
                    )
                })
            }
        </div>
        <div className="product">
            <div className='card-view'>
              {
                pro.map((item)=>{
                  return (
                    <>
                      <div className='card'>
                        <img src={item.thumbnail} height={230}/>
                        <h1>{item.title}</h1>
                        <h4><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />{item.rating}</h4>
                        <h2 className='discount'>{item.discountPercentage}% <MdDiscount /></h2>
                        <button className='btn' onClick={()=>dispatch(addcart(item))}><Link to={`/${item.id}`} className=' btn btn-primary stretched-link'>Veiw more</Link></button>
                        {console.log(item)}
                      </div>
                    </>
                  )
                })
              }
            </div>
        </div>
      </section>
    </>
  )
}

export default Product