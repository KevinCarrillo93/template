import React from "react";

export const Home = () => {
  return (
    <div>
      <div className=" text-primary p-5">
        {/* Brand Name */}
        <div className="font-serif text-2xl">NIEVADOS</div>

        {/* Tabbar */}
        <div className="flex justify-between py-3 items-center">
          <div id="Hamburguer_Menu">
            <i className="Large material-icons">menu</i>
          </div>
          {/* Search bar with expands transition */}
          <form className="relative mx-auto w-max">
            <input
              type="search"
              className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border focus:pl-10 focus:pr-4"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-y-0 my-auto h-8 w-12  border-transparent stroke-primary px-3.5"
              fill="none"
              viewBox="0 0 18 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </form>
          <div id="Shopping_Cart relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <p className="absolute translate-x-4 -translate-y-5 bg-secondary rounded-full w-2 h-2 border-1 border-white"></p>
          </div>
        </div>

        {/* Categories filter buttons slider */}
        <div
          id="Categories"
          className="flex py-4 w-auto overflow-x-auto overscroll-x-contain space-x-4"
        >
          <div className="w-auto h-auto bg-primary text-secondary border-solid border-gray-500 border-2 rounded-lg px-4 py-1">
            Cream
          </div>
          <div className="w-auto h-auto bg-white border-solid border-gray-500 border-2 rounded-lg px-4 py-1">
            Lipstick
          </div>
          <div className="w-auto h-auto bg-white border-solid border-gray-500 border-2 rounded-lg px-4 py-1">
            Eyes
          </div>
          <div className="w-auto h-auto bg-white border-solid border-gray-500 border-2 rounded-lg px-4 py-1">
            Blush
          </div>
          <div className="w-auto h-auto bg-white border-solid border-gray-500 border-2 rounded-lg px-4 py-1">
            Cream
          </div>
          <div className="w-auto h-auto bg-white border-solid border-gray-500 border-2 rounded-lg px-4 py-1">
            Lipstick
          </div>
          <div className="w-auto h-auto bg-white border-solid border-gray-500 border-2 rounded-lg px-4 py-1">
            Eyes
          </div>
          <div className="w-auto h-auto bg-white border-solid border-gray-500 border-2 rounded-lg px-4 py-1">
            Blush
          </div>
        </div>

        {/* Special Offers cards slider */}
        <div className="flex justify-between pt-4">
          <h3 className="text-2xl">Special Offers</h3>
          <p>See all</p>
        </div>
        <div
          id="offers_container"
          className="w-auto h-80 items-center overflow-x-auto overscroll-x-contain space-x-5 flex"
        >
          <div id="offer_Card_1" className="flex flex-col items-start">
            <div className="Card">
              <p className="absolute top-0 -translate-y-1/2 translate-x-28 bg-secondary text-white text-xs px-3 py-2 rounded-full">
                20% off
              </p>
            </div>
            <p className="pt-3">M-A-C</p>
            <p className="text-secondary">$12.99</p>
          </div>
          <div id="offer_Card_2" className="flex flex-col items-start">
            <div className="Card">
              <p className="absolute top-0 -translate-y-1/2 translate-x-28 bg-secondary text-white text-xs px-3 py-2 rounded-full">
                20% off
              </p>
            </div>
            <p className="pt-3">M-A-C</p>
            <p className="text-secondary">$12.99</p>
          </div>
          <div id="offer_Card_3" className="flex flex-col items-start">
            <div className="Card">
              <p className="absolute top-0 -translate-y-1/2 translate-x-28 bg-secondary text-white text-xs px-3 py-2 rounded-full">
                20% off
              </p>
            </div>
            <p className="pt-3">M-A-C</p>
            <p className="text-secondary">$12.99</p>
          </div>
        </div>

        {/* Popular products */}
        <div className="flex justify-between pt-4">
          <h3 className="text-2xl">Popular</h3>
          <p>See all</p>
        </div>
        <div
          id="offers_container"
          className="w-auto h-80 items-center overflow-x-auto overscroll-x-contain space-x-5 flex"
        >
          <div id="offer_Card_1" className="flex flex-col items-start">
            <div className="Card2"></div>
            <p className="pt-3">M-A-C</p>
            <p className="text-secondary">$12.99</p>
          </div>
          <div id="offer_Card_2" className="flex flex-col items-start">
            <div className="Card2"></div>
            <p className="pt-3">M-A-C</p>
            <p className="text-secondary">$12.99</p>
          </div>
          <div id="offer_Card_3" className="flex flex-col items-start">
            <div className="Card2"></div>
            <p className="pt-3">M-A-C</p>
            <p className="text-secondary">$12.99</p>
          </div>
        </div>

        {/*New Arrivals*/}
        <div className="flex justify-between pt-4">
          <h3 className="text-2xl">New Arrivals</h3>
          <p>See all</p>
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          <div id="newArrival_1" className=" flex-wrap">
            <div className="shadow-md w-80 h-40 bg-terceary rounded-2xl flex justify-center items-center space-x-1">
              <div className="w-32 h-32 bg-eye bg-cover rounded-lg"></div>
              <div className="h-32 w-40 px-4 flex flex-col items-start justify-between">
                <div className="flex flex-col items-center">
                  <p className="self-start pt-3 text-xs font-semibold">
                    Skin protection
                  </p>
                  <p className="text-xs flex items-center">
                    <i className="material-icons text-secondary">star</i>
                    4.7 (312 reviews)
                  </p>
                </div>
                <div className="flex justify-between w-full">
                  <p className="text-secondary">$12.99</p>
                  <i className="material-icons">favorite_border</i>
                </div>
              </div>
            </div>
          </div>
          <div id="newArrival_2" className="flex-wrap">
            <div className="shadow-md w-80 h-40 bg-terceary rounded-2xl flex justify-center items-center space-x-1">
              <div className="w-32 h-32 bg-eye bg-cover rounded-lg"></div>
              <div className="h-32 w-40 px-4 flex flex-col items-start justify-between">
                <div className="flex flex-col items-center">
                  <p className="self-start pt-3 text-xs font-semibold">
                    Skin protection
                  </p>
                  <p className="text-xs flex items-center">
                    <i className="material-icons text-secondary">star</i>
                    4.7 (312 reviews)
                  </p>
                </div>
                <div className="flex justify-between w-full">
                  <p className="text-secondary">$12.99</p>
                  <i className="material-icons">favorite_border</i>
                </div>
              </div>
            </div>
          </div>
          <div id="newArrival_3" className="flex-wrap">
            <div className="shadow-md w-80 h-40 bg-terceary rounded-2xl flex justify-center items-center space-x-1">
              <div className="w-32 h-32 bg-eye bg-cover rounded-lg"></div>
              <div className="h-32 w-40 px-4 flex flex-col items-start justify-between">
                <div className="flex flex-col items-center">
                  <p className="self-start pt-3 text-xs font-semibold">
                    Skin protection
                  </p>
                  <p className="text-xs flex items-center">
                    <i className="material-icons text-secondary">star</i>
                    4.7 (312 reviews)
                  </p>
                </div>
                <div className="flex justify-between w-full">
                  <p className="text-secondary">$12.99</p>
                  <i className="material-icons">favorite_border</i>
                </div>
              </div>
            </div>
          </div>
          <div id="newArrival_4" className="flex-wrap">
            <div className="shadow-md w-80 h-40 bg-terceary rounded-2xl flex justify-center items-center space-x-1">
              <div className="w-32 h-32 bg-eye bg-cover rounded-lg"></div>
              <div className="h-32 w-40 px-4 flex flex-col items-start justify-between">
                <div className="flex flex-col items-center">
                  <p className="self-start pt-3 text-xs font-semibold">
                    Skin protection
                  </p>
                  <p className="text-xs flex items-center">
                    <i className="material-icons text-secondary">star</i>
                    4.7 (312 reviews)
                  </p>
                </div>
                <div className="flex justify-between w-full">
                  <p className="text-secondary">$12.99</p>
                  <i className="material-icons">favorite_border</i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Brands*/}
        <div className="text-start pt-4">
          <h3 className="text-2xl">Our Brands</h3>
        </div>
        <div
          id="offers_container"
          className="w-auto h-56 items-center overflow-x-auto overscroll-x-contain space-x-5 flex"
        >
          <div id="offer_Card_1" className="flex flex-col items-start">
            <div className="bg-terceary shadow-md bg-dior bg-contain bg-no-repeat bg-center w-36 h-44 rounded-2xl"></div>
          </div>
          <div id="offer_Card_2" className="flex flex-col items-start">
            <div className="bg-terceary shadow-md bg-avon bg-contain bg-no-repeat bg-center w-36 h-44 rounded-2xl"></div>
          </div>
          <div id="offer_Card_3" className="flex flex-col items-start">
            <div className="bg-terceary shadow-md bg-loreal bg-contain bg-no-repeat bg-center w-36 h-44 rounded-2xl"></div>
          </div>
          <div id="offer_Card_4" className="flex flex-col items-start">
            <div className="bg-terceary shadow-md bg-mac bg-contain bg-no-repeat bg-center w-36 h-44 rounded-2xl"></div>
          </div>
          <div id="offer_Card_4" className="flex flex-col items-start">
            <div className="bg-terceary shadow-md bg-clarins bg-contain bg-no-repeat bg-center w-36 h-44 rounded-2xl"></div>
          </div>
          <div id="offer_Card_4" className="flex flex-col items-start">
            <div className="bg-terceary shadow-md bg-kiehls bg-contain bg-no-repeat bg-center w-36 h-44 rounded-2xl"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full h-auto bg-primary py-12 mt-4 text-white text-xs">
        <div className="flex justify-between">
          <div className="text-start px-6 space-y-2">
            <p>CONTACT US</p>
            <p>support@niveados.com</p>
            <p>1-800-405-5047</p>
          </div>
          <div className="text-start px-6 space-y-2">
            <p>TERMS OF SERVICE</p>
            <p>RETURNS & EXCHANGES</p>
            <p>SHIPPING</p>
            <p>FAQs</p>
          </div>
        </div>
        <p className="pt-6">© 2022 Niveados. All rights reserved.</p>
      </footer>
    </div>
  );
};
