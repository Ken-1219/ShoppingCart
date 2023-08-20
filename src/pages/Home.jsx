import React from 'react'
import Products from '../components/Products/Products';
import './Home.css';

function Home() {
  return (
    <div className='homeDiv'>
    <h2 className='heading'>Welcome to the Store!</h2>
    <section>
      <Products/>
    </section>
    </div>
  )
}

export default Home;