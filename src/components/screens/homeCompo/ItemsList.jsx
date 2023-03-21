
import React from 'react'
import ItemsCard from './ItemsCard'
import "../../styles/ItemList.css"
function ItemsList() {
  return (
    <div className ='itemsContainer'>
      <h1 className ='itemsTitle'>Discounted Items</h1>
      <p className='itemDesc'>
        Lorem ipsum dolor sit, amet 
        consectetur adipisicing elit.
         Quas, repellendus iste quis totam a, doloremque animi dignissimos, 
         vel eius inventore facere quae eos tenetur saepe sapiente quam expedita sint! Praesentium!

      </p>
      <div className="itemWrapper">
        <ItemsCard/>
        <ItemsCard/>
        <ItemsCard/>
        <ItemsCard/>
        <ItemsCard/>
        <ItemsCard/>
        <ItemsCard/>

      </div>
    </div>
  )
}

export default ItemsList
