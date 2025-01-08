import React from 'react'
import './index.css'

 const ContentItem = props => {
    const {detailItems} = props 
    const {name, category, price, image, rating} = detailItems
  return (
    <li className='list-item'>
        <div className="content-item">
          <img src={image} alt={name} className='image' />
          <h3 className='heading-product'>{name}</h3>
          <p className='category'>{category}</p>
          <p className='price'>${price}</p>
          <div className="rating">
            <p>{rating}</p>
            <button className='add-to-cart'>Add to Cart</button>
            
          </div>
        </div>

        {/* Add your additional content items here */}
        {/*... */}

    </li>
  )
}

export default ContentItem;
