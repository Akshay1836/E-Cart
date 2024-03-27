import React from 'react'
import { MdCurrencyRupee } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <div className="relative h-80 w-2/3 object-cover md:w-1/4 m-4 overflow-hidden bg-gray-200 transition rounded-md border p-1">
<Link to={'item/'+props.id}>
  <img
   src={props.image}
    alt="Laptop"
    className="h-[200px] w-full rounded-md object-cover"
  />
  <div className="p-4 text-left">
    <h1 className="text-lg">{props.title}</h1>
    <p className='rounded-sm bg-gray-300  px-2.5 py-2 text-[11px] inline font-semibold'><MdCurrencyRupee className='inline-block'/>{props.price}</p>
    <button
      type="button"
      className="mt-4 mx-4 rounded-sm bg-black px-2.5 py-2 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Add to Cart
    </button>
  </div>
</Link>
</div>
  )
}



export default Card