import React, { useState } from "react";
import Card from "./Card";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Icons from "./Icons";


function Hero() {
 
  const [items, setItems] = useState([]);
  

      useEffect(() => {
        fetchdata();
      }, [])

    const fetchdata = async () => {
      const api=await fetch(`https://api.escuelajs.co/api/v1/products`)
      const result = await api.json();
      const datas=result.slice(0,12)
      setItems(datas);
      console.log(result);
    };
  return (
    <div className=" flex justify-center items-center flex-col overflow-hidden ">
      
      <h1 className="text-2xl font-thin mt-20">
        Popular products
      </h1>
      <div className="w-screen font-thin flex-col md:flex-row flex flex-wrap items-center justify-center">
      
          {items && items.map((data) => {
            return (
                <Card key={data.id}
                  id={data.id}
                  title={data.title}
                  image={data.images[0]}
                  price={data.price}
                />
            );
          })}
      </div>
    </div>
  );
}

export default Hero;
