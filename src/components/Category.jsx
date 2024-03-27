import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icons from "./Icons";

function Category() {
  const [category, setCategory] = useState([]);
  const [name, setName] = useState("");
  const params = useParams();
  const getdata = async () => {
    const data = await fetch(
      `https://api.escuelajs.co/api/v1/categories/${params.id}/products`
    );
    const result = await data.json();
    setName(result[0].category.name);
    setCategory(result);
  };

  useEffect(() => {
    getdata(params.id);
  }, [params.id]);
  return (
    <>
      {category.length > 0 ? (
        <div className="flex justify-center items-center flex-col mt-20 overflow-hidden">
          <h1 className="text-2xl font-thin text-black">{name}</h1>
          <div className="w-screen font-thin flex-col md:flex-row flex flex-wrap items-center justify-center">
            {category &&
              category.map((data) => {
                return (
                  <Card
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    price={data.price}
                    image={data.images}
                  ></Card>
                );
              })}
          </div>
        </div>
      ) : (
        <p className="mt-20">No products available</p>
      )}
    </>
  );
}

export default Category;
