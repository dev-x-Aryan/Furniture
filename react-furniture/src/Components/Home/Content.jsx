import React from "react";
import ImageSlider from "../Content/ImageSlider.jsx";

const Content = () => {
  const slider1 =
    "https://www.istanbulfurniture.com/cdn/shop/files/Massimo-Shawl-Turkish-Luxury-Furniture-Set-5_b856b289-db9c-465b-8787-b9a7e8bddffb_900x.jpg?v=1719919826";

  const slider2 =
    "https://www.istanbulfurniture.com/cdn/shop/files/Vavilion-Turkish-Furniture-Sectional-3_a9d9b235-4452-49fa-9e8a-db9d7641f44e_900x.jpg?v=1719922023";

  const slider3 =
    "https://www.istanbulfurniture.com/cdn/shop/files/Ist-Showroom_900x.jpg?v=1685460202";

  const slider4 =
    "https://www.istanbulfurniture.com/cdn/shop/files/financing2_-_Copy_-_Copy_900x.png?v=1661184724";
  const imageUrls = [slider1, slider2, slider3, slider4];
  const content = (
    <div className="flex flex-col">
      <div className="flex justify-between mb-4 ">
        <div className="h-[500px] w-[60%]">
          <ImageSlider imageUrls={imageUrls} />
        </div>
        <div className="w-[40%] max-h-[500px] p-10 flex flex-col justify-evenly items-center">
          <div>
            <h1 className="text-[4rem] text-wrap text-center">
              Prizma MyL Collection
            </h1>
          </div>
          <div className="border p-3 text-wrap">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            nisi minima soluta esse recusandae iusto mollitia, odit, veritatis
            animi in vero repudiandae accusantium.
          </div>
          <button className="bg-black text-white p-2">Shop Now</button>
        </div>
      </div>
      <div className="w-[70%] m-auto mb-[5rem]">
        <div className="catalog">
          <div className="p-5">
            <h1 className="text-[2rem]">Catalog</h1>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img
                  src="src\assets\catalogImg.webp"
                  alt="#"
                  className="h-[100px] w-[100px]"
                />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img
                  src="src\assets\catalogImg.webp"
                  alt="#"
                  className="h-[100px] w-[100px]"
                />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img
                  src="src\assets\catalogImg.webp"
                  alt="#"
                  className="h-[100px] w-[100px]"
                />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img
                  src="src\assets\catalogImg.webp"
                  alt="#"
                  className="h-[100px] w-[100px]"
                />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img
                  src="src\assets\catalogImg.webp"
                  alt="#"
                  className="h-[100px] w-[100px]"
                />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>
          </div>
        </div>

        <div className="new-arrivals">
          <div className="p-5">
            <h1 className="text-[2rem]">New Arrivals</h1>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img
                  src="src\assets\newArrivals.avif"
                  alt="#"
                  className="h-[100px] w-[100px]"
                />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img
                  src="src\assets\newArrivals.avif"
                  alt="#"
                  className="h-[100px] w-[100px]"
                />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img
                  src="src\assets\newArrivals.avif"
                  alt="#"
                  className="h-[100px] w-[100px]"
                />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img
                  src="src\assets\newArrivals.avif"
                  alt="#"
                  className="h-[100px] w-[100px]"
                />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img
                  src="src\assets\newArrivals.avif"
                  alt="#"
                  className="h-[100px] w-[100px]"
                />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>
          </div>
        </div>

        <div className="brands">
          <div className="p-5">
            <h1 className="text-[2rem]">Our Brands</h1>
          </div>
          <div>
            <img src="src\assets\brands.png" />
          </div>
        </div>

        <div className="new-arrivals mt-10 mb-10">
          <div className="p-5">
            <h1 className="text-[2rem]">Luxary Collections</h1>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img
                  src="src\assets\newArrivals.avif"
                  alt="#"
                  className="h-[100px] w-[100px]"
                />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img
                  src="src\assets\newArrivals.avif"
                  alt="#"
                  className="h-[100px] w-[100px]"
                />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img
                  src="src\assets\newArrivals.avif"
                  alt="#"
                  className="h-[100px] w-[100px]"
                />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img
                  src="src\assets\newArrivals.avif"
                  alt="#"
                  className="h-[100px] w-[100px]"
                />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img
                  src="src\assets\newArrivals.avif"
                  alt="#"
                  className="h-[100px] w-[100px]"
                />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>
          </div>
        </div>

        <div className="login mt-20 opacity-90">
          <h1 className="text-[2rem] pt-2">SignUp and Save</h1>
          <p>
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </p>
          <div className="">
            <input type="email" className="login-input" />
            <button className="bg-emerald-500 p-3 rounded-xl"> Email</button>
          </div>
        </div>

        <div className="clearence mt-20">
          <div className="p-5">
            <h1 className="text-[2rem]">Clearence</h1>
          </div>
          <div>
            <img src="src\assets\clearence.png" alt="#" />
          </div>
        </div>
      </div>
      <div className="imageSlider w-[80%] m-auto"></div>
    </div>
  );
  return content;
};

export default Content;
