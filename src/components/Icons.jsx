import { FaHeadphones, FaShoppingBag } from "react-icons/fa";
import { GiClothes, GiConverseShoe } from "react-icons/gi";

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


import { MdChair } from "react-icons/md";
import CategoryItems from "./CategoryItems";
function Icons() {
  const [item, setItem] = useState([]);
  

  useEffect(() => {
    fetchdata();
  }, [])

const fetchdata = async () => {
  const api=await fetch(`https://api.escuelajs.co/api/v1/categories`)
  const result = await api.json();
  setItem(result);
  console.log(result);
};
  return (
    <>
    
      <div className="flex justify-center items-center flex-row mt-20">
        
      <h1 className="mb-2  text-3xl font-bold   md:text-5xl lg:text-3xl">Select Category</h1>
      </div>    
      <div className="flex flex-wrap flex-row justify-center text-xs sm:text-sm  my-4 font-serif">
      {item && item.map((data) => {
        return (
            <CategoryItems key={data.id}
              id={data.id}
              name={data.name}
            />
        );
      })}
      
     
    </div>
   
    </>
  );
}

export default Icons;
