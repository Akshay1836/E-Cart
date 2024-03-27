import React from "react";

const Footer=()=> {
  return (
    <div className="w-full">
      <section className="relative overflow-hidden py-10 bg-cyan-950 text-white mt-10">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-4 ">
          <div className="m-6 flex flex-wrap">
            <div className="w-full p-6 md:w-1/2 lg:w-5/12">
              <div className="flex h-full flex-col justify-between">
                <div className="mb-4 text-left">
                  <span className="ml-4 text-lg font-bold">E-Cart</span>
                  <p className="ml-4  text-base font-medium">It’s all about you</p>
                </div>
              </div>
            </div>
            <div className="w-full p-3 md:w-1/2 lg:w-2/12 text-center md:text-left ">
              <div className="h-full ">
                <h3 className="tracking-px mb-4  text-xs font-semibold uppercase text-gray-400">
                  Company
                </h3>
                <ul>
                  <li className="mb-1">
                    <a
                      className=" text-base font-medium text-gray-300 hover:text-gray-600"
                      href="#"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className=" text-base font-medium text-gray-300 hover:text-gray-600"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className=" text-base font-medium text-gray-300 hover:text-gray-600"
                      href="#"
                    >
                      Affiliate Program
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-base font-medium text-gray-300 hover:text-gray-600"
                      href="#"
                    >
                      Press Kit
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-3 md:w-1/2 lg:w-2/12 text-center md:text-left">
              <div className="h-full">
                <h3 className="tracking-px mb-4  text-xs font-semibold uppercase text-gray-400">
                  Support
                </h3>
                <ul>
                  <li className="mb-1">
                    <a
                      className=" text-base font-medium text-gray-300 hover:text-gray-600"
                      href="#"
                    >
                      Account
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className=" text-base font-medium text-gray-300 hover:text-gray-600"
                      href="#"
                    >
                      Help
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className=" text-base font-medium text-gray-300 hover:text-gray-600"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-base font-medium text-gray-300 hover:text-gray-600"
                      href="#"
                    >
                      Customer Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-3 md:w-1/2 lg:w-3/12 text-center md:text-left">
              <div className="h-full">
                <h3 className="tracking-px mb-4  text-xs font-semibold uppercase text-gray-400">
                  Legals
                </h3>
                <ul>
                  <li className="mb-1">
                    <a
                      className=" text-base font-medium text-gray-300 hover:text-gray-600"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className=" text-base font-medium text-gray-300 hover:text-gray-600"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-base font-medium text-gray-300 hover:text-gray-600"
                      href="#"
                    >
                      Licensing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p className="text-sm text-gray-600 text-center bg-gray-950">
        &copy; Copyright {new Date().getFullYear()}. All Rights Reserved by E-Cart
      </p>
    </div>
  );
}

export default Footer;
