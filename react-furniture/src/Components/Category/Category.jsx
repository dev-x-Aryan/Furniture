import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";

const Category = () => {
  const { name } = useParams();
  // useEffect(() => {
  //   const sidebar = document.getElementById("sidebar");
  //   const sidebarOffsetTop = sidebar.offsetTop;
  //   const handleScroll = () => {
  //     if (window.scrollY >= sidebarOffsetTop) {
  //       sidebar.style.position = "fixed";
  //       // sidebar.style.top = "0";
  //     } else {
  //       sidebar.style.position = "relative";
  //       // sidebar.style.top = "auto";
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div className="catalog-container border border-b-[1px] mb-5 pb-3 ">
        <div className="catalog w-[75%] sm:w-full m-auto ">
          <div className="p-5">
            <h1 className="text-[2rem]">{name}</h1>
            <hr />
          </div>
          <div className="w-full bg-slate-300 flex  sm:flex-col p-3 text-center justify-center items-center">
            <p className="font-semibold m-2 text-3xl">
              0% Interest For 12 Months
            </p>
            <p className="m-2  align-middle">Instant credit decision</p>
            <button className="bg-black text-white m-2 p-2 align-middle">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-[75%] m-auto mb-[5rem] sm:w-full">
        <div className="flex ">
          <div id="sidebar" className="w-[40%] sm:hidden sticky top-0">
            <Sidebar />
          </div>

          <div className="flex-grow">
            <div className="flex flex-wrap justify-center mt-8">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="items-center text-center m-5 product-container hover:bg-slate-200 cursor-pointer transition-transform transform hover:-translate-y-2"
                >
                  <img
                    src={
                      "https://www.istanbulfurniture.com/cdn/shop/collections/Cavalli-Black-Sofa_720x.jpg?v=1658408550"
                    }
                    alt="image"
                    className="h-[150px] w-[150px] m-4"
                  />
                  <span className="font-semibold text-lg">Sofas</span>
                </div>
              ))}
            </div>

            <div className="ml-8 mt-10 border-t-[1px] p-5">
              <p className="font-bold text-3xl ">Products</p>
            </div>

            <div className="flex flex-row flex-wrap gap-2 m-5">
              <ProductCard />

              <ProductCard />

              <ProductCard />

              <ProductCard />
            </div>
          </div>
        </div>

        <div className="text-xl items-center mt-5 border-t-[1px]">
          <p className="ml-2 p-5">Recently viewed</p>
          <div className="product-container flex flex-col justify-between h-[300px] w-[250px]  cursor-pointer m-2">
            <div className="m-auto">
              <img
                src="https://www.istanbulfurniture.com/cdn/shop/collections/Cavalli-Black-Sofa_720x.jpg?v=1658408550"
                alt="#"
                className="bg-transparent h-[100px] w-[150px] mt-2"
              />
            </div>
            <div className="p-3 ">
              <div className="color ">
                <div className=" rounded-full border border-orange-200 flex justify-center items-center  w-[2rem] h-[2rem] ">
                  <div className="rounded-full bg-orange-200 hover:border hover:border-black w-[1.5rem] h-[1.5rem]"></div>
                </div>
              </div>
              <div className="title font-semibold pt-2 text-sm">
                Product Title
              </div>
              <div className="parent text-gray-600 pt-2 text-sm">
                Product Category
              </div>
              <div className="price font-semibold pt-2 text-sm">$9999</div>
            </div>
          </div>
        </div>
      </div>

      <div className="catalog-container border-b-[1px] mb-5 pb-3 ">
        <div className="catalog w-[75%] m-auto ">
          <div className="w-full bg-slate-300 flex  p-3 text-center justify-center items-center">
            <p className="font-semibold m-2 text-3xl">
              Something on your mind?
            </p>
            <p className="m-2  align-middle">
              Contact us for special orders with various options
            </p>
            <button className="bg-black text-white m-2 p-2 align-middle">
              Get in touch now
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row sm:flex-col justify-between catalog w-[75%] m-auto">
        <div className="border-[2px] flex flex-col justify-between h-[450px] w-[400px]  cursor-pointer m-2 product-container bg-white">
          <div className="m-6 mb-0">
            <img
              src="https://www.istanbulfurniture.com/cdn/shop/files/Melis_38869_540x.jpg?v=1652345618"
              alt="#"
              className="bg-transparent h-[250px] w-[350px]"
            />
          </div>
          <div className="flex flex-col items-center mt-0 mb-12">
            <div className="title font-bold pt-2 text-xl">Summer Savings</div>
            <div className="parent text-gray-600 pt-2">
              Clearing out! Shop now and save up to 40% off!
            </div>
            <button className="bg-black text-white border m-2 p-2 align-middle">
              Shop Clearance
            </button>
          </div>
        </div>

        <div className="border-[2px] flex flex-col justify-between h-[450px] w-[400px]  cursor-pointer m-2 bg-[#acc6c3]">
          <div className="m-6 mb-0">
            <img
              src="https://www.istanbulfurniture.com/cdn/shop/files/Gabba_Ornek_cadb45e1-cca6-4c9e-b8a9-62ba5f2b4d3b_540x.jpg?v=1651754126"
              alt="#"
              className="bg-transparent h-[250px] w-[350px]"
            />
          </div>
          <div className="flex flex-col items-center mt-0 mb-12">
            <div className="title font-bold pt-2 text-xl">
              Luxury From Istanbul Furniture
            </div>
            <div className="parent text-gray-600 pt-2">
              Our luxury collection is ready to enchant your home.
            </div>
            <button className="bg-white text-[#acc6c3] border m-2 p-2 align-middle">
              View Collections
            </button>
          </div>
        </div>

        <div className="border-[2px] flex flex-col justify-between h-[450px] w-[400px]  cursor-pointer m-2 mb-0 align-middle">
          <div className="m-6 mb-0">
            <img
              src="https://www.istanbulfurniture.com/cdn/shop/files/green-door-with-open-sign_540x.jpg?v=1652532193"
              alt="#"
              className="bg-transparent h-[250px] w-[350px] mb-0"
            />
          </div>
          <div className="flex flex-col items-center mt-0 mb-6">
            <div className="title font-bold pt-2 text-xl">Showroom Hours</div>
            <div className="parent text-gray-600 pt-2">
              Mon - Sat, 10:00am - 7:00pm
            </div>
            <div className="parent text-gray-600 pt-2">
              Sunday, 10:00am - 6:00pm
            </div>
            <button className="bg-white text-black border-[2px] m-2 p-2 align-middle">
              View Locations
            </button>
          </div>
        </div>
      </div>

      <div className="catalog-container border-b-[1px] border-t-[1px] mb-5 pb-3 mt-10 ">
        <div className="catalog w-[75%] m-auto ">
          <div className="w-full flex  p-3 text-center justify-center items-center">
            <p className="font-semibold m-2 text-xl">
              Subscribe today and get 10% off your first purchase
            </p>
            <form className="flex flex-row items-center  p-6 align-middle ml-10">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full max-w-md p-2 border border-gray-300 focus:outline-none focus:ring-2"
                placeholder="Email"
                required
              />
              <button
                type="submit"
                className="w-full max-w-md p-2 bg-black text-white font-bold focus:outline-none focus:ring-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
