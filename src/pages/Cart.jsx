import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { actions } from '../store/cartSlice';
import './Cart.css'

function Cart() {
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleRemove = (productId)=>{
      dispatch(actions.remove(productId));
  }

  return (
    <div className='cartDiv'>
      <h3 className='cartHeading'>Cart Items</h3>
      <div className="cartWrapper">
      {products.map((product=>(
        <div className="cartCard" key={product.id}>
          <img src={product.image} alt="cartImage" />
          <h5>{product.title}</h5>
          <h5>${product.price}</h5>
          <button className='btn' onClick={()=>handleRemove(product.id)}>Remove Item</button>
        </div>
        )))}
      </div>
    </div>
  )
}
export default Cart;

