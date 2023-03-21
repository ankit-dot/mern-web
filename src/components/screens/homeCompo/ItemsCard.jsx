import React from 'react'
import "../../styles/ItemsCard.css"
function ItemsCard() {
  return (
    <div>
      <div className="cardContainer">
      <img src='https://thumbs.dreamstime.com/b/shopping-cart-supermarket-empty-shelves-40320116.jpg' alt="" width="250" height="250"/>
      <h1 className="cardTitle">THE BEST PIZZA</h1>
      <span className="price">$5</span>
      <p className="cardDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, porro</p>
    </div>
    </div>
  )
}

export default ItemsCard
