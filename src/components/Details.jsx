import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdStar } from "react-icons/md";
function Details() {
  const [result, setResult] = useState({});
  const params = useParams();
  const getdata = async () => {
    const data = await fetch(
      `https://api.escuelajs.co/api/v1/products/${params.id}`
    );
    const response = await data.json();
    console.log(response);

    setResult(response);
  };
  useEffect(() => {
    getdata();
  }, [params.id]);

  return (
    <section>
      <div className=" flex flex-col items-center justify-center md:overflow-hidden gap-8 md:flex-row mt-20">
        <div className="flex  h-72 w-2/3 md:w-1/3 m-4">
          <img className="w-full rounded-lg" src={result.images} alt="product-Image" />
        </div>

        <div className="flex flex-col md:w-1/2 justify-center p-4 mx-4">
          <h1 className="text-2xl font-bold text-left">{result.title}</h1>
          <div className="flex items-center gap-x-2 text-orange-500 mt-2">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <p className="text-black">(111)</p>
          </div>
          <div className="flex items-center gap-x-4 my-2">
            <p>price : </p>
            <div className="font-medium text-gray-500 text-3xl">
              {result.price}/-
            </div>
          </div>
          <div className="mb-4">
            <p className="font-bold text-left">Select Size :</p>
            <div className="flex gap-4 my-3">
              <div className="ring-2 ring-slate-900 w-10 h-10 flex justify-center items-center cursor-pointer">
                S
              </div>
              <div className="ring-2 ring-slate-900/10 w-10 h-10 flex justify-center items-center cursor-pointer">
                M
              </div>
              <div className="ring-2 ring-slate-900/10 w-10 h-10 flex justify-center items-center cursor-pointer">
                L
              </div>
              <div className="ring-2 ring-slate-900/10 w-10 h-10 flex justify-center items-center cursor-pointer">
                XL
              </div>
            </div>
            <div className="flex mt-4">
              <button className="bg-slate-900 text-white hover:bg-slate-700  py-2 px-6 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
          <div className="mt-2 text-left">
            <div className="flex flex-col pb-16 md:max-w-[450px] lg:max-w-[900px] tracking-wider">
              <p className="font-bold text-lg">Details :</p>
              <p className="text-balance font-thin text-sm md:line-clamp-2 xl:line-clamp-none">
                {result.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Details;
