import React, { createContext,useEffect,useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import { addcart} from '../slice/counterSlice';

export const itemname=createContext();
function Singlepro() {
    const [singlep,setsinglepro]=useState([])
    const [img,setimg]= useState([])
    const {id} = useParams();

    useEffect(()=>{
        
        fetch(`https://dummyjson.com/products/${id}`)
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            setsinglepro(data);
            setimg(data.images);
        })
    },[])
    
  return (
    <>
        <div className='single-product'> 
            <div className='img-product-detail'>
                <img src={singlep.thumbnail} id="myImage"/>
                <br/>
                <br/>
                {
                    img.map((item)=>{
                        return <button><img src={item} className='thumbnail-btn' onClick={(e)=>{}}/></button>
                    })
                }
            </div>
            <div className='right-details'>
                <h1>{singlep.title}</h1>
                <h4>Details : {singlep.description}</h4>
                <h4>Price : ${singlep.price}</h4>
                <h4>Discount : {singlep.discountPercentage}%</h4>
                <span>Rating : <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />{singlep.rating}</span>
                <h3>Stock : {singlep.stock}</h3>
                <button className='btn'><Link to='/cart' className=' btn btn-primary stretched-link'>Add to Cart</Link></button>
            </div>
        </div>
    </> 
  )
}

export default Singlepro