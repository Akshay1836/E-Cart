import React from 'react'
import { NavLink } from 'react-router-dom'

function CategoryItems(props) {
  return (
    <>
    
    <NavLink to={`category/${props.id}`} className="flex flex-col w-40 mx-4 text-sm justify-center bg-gray-200 hover:bg-gray-400 h-16 rounded-md    hover:text-gray-700 m-2">
        <p className='px-4 py-4'>{props.name}</p> 
      </NavLink>
    </>
  )
}

export default CategoryItems