import React, { useEffect } from 'react';
import { actions } from '../../store/cartSlice';
import './Products.css';
import { useDispatch, useSelector } from 'react-redux';
import { STATUS, fetchProducts } from '../../store/productSlice';

function Products() {
  // const [products, setProducts] = useState([]);
  
  
  const dispatch = useDispatch(); //with this we can dispatch our action
  const {data: products, status} = useSelector((state)=>state.product);         //  --> used when using thunks
  
  useEffect(() => {
    dispatch(fetchProducts());


    // const fetchProdcuts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // }
    // fetchProdcuts();
  }, [dispatch]);

  const handleAdd = (product) => {
    // Create a new object with only the relevant properties from the product object
    //we have to store this product in our redux store so that it gets added in the cart properly
    
    const productData = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image
    };
    
    // Dispatch the add action with the productData object as the payload
    dispatch(actions.add(productData));
  }
  
  if(status === STATUS.LOADING){
    return <h2>Loading...</h2>
  }
  if(status === STATUS.ERROR){
    return <h2>Something went wrong</h2>
  }

  return (
    <div className='productsWrapper'>
      {
        products.map(product => (
          <div className="card" key={product.id}>
            <img src={product.image} alt="product_image" className='product_img' />
            <h4>{product.title}</h4>
            <h5>${product.price}</h5>
            <button className='btn' onClick={()=>handleAdd(product)}>Add to cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default Products;