"use client";

import axios from "axios";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

const Main = () => {
  const [data, setData] = useState({});
  const productData = { data };
  const products = productData.data.products;
  console.log(products);

  useEffect(() => {
    const res = axios
      .get("https://dummyjson.com/products?limit=12")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <Suspense fallback={<h1>Loading.....</h1>}>
      <div>
        {/* <!-- Product section start --> */}
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
            {/* <!-- Product 1 Start --> */}
            {products &&
              products.map((item, i) => (
                <div key={i}>
                  <div className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('/products/iphone.jpg')] bg-cover bg-center transition-all duration-3000 ease-in-out transform"></div>
                  <p className="text-sm lg:text-base mt-2">
                    <Link className="text-base font-bold" href="samsung">
                      {item?.title}
                    </Link>
                    <span className="text-[#919090]">
                      <Link href="./category">{item?.category}</Link>
                    </span>
                  </p>
                  <p className="text-[#919090] text-sm">{item?.description}</p>

                  <p className="text-rose-600 text-sm mt-4">
                    <span className="text-[#919090] line-through">$205.00</span>{" "}
                    {`"$"${item.price}`}
                  </p>
                </div>
              ))}
          </div>
        </section>
        {/* <!-- Product section start --> */}
        <section className="bg-[#ced3ca] py-5 lg:py-16">
          <div className="w-10/12 lg:w-4/12 mx-auto">
            <h1 className="italic text-xl lg:text-3xl font-serif my-5 text-center">
              Get the inside scoop
            </h1>
            <p className="text-center text-sm lg:text-base">
              Sign up for new product drops, behind-the-scenes content, and
              monthly 5 Things I,m Digging emails
            </p>
            <form action="#" className="mb-5">
              <input
                type="text"
                className="p-3 mt-10 border border-black focus:outline-none w-full"
                placeholder="Enter your email"
              />
              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-2 mt-2 text-white">
                See what we re doing
              </button>
            </form>
          </div>
        </section>
      </div>
    </Suspense>
  );
};

export default Main;
