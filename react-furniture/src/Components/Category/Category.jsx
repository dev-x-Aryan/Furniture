import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";

const Category = () => {
  const { name } = useParams();

  return (
    <div className="w-full  bg-white p-4 rounded-lg shadow-md  ">
      {/* Top Section */}
      <div className="p-4   rounded-md">
        <div className="catalog-container border border-b-[1px] mb-5 pb-3">
          <div className="catalog w-[75%] m-auto">
            <div className="p-5">
              <h1 className="text-2xl">{name}</h1>
              <hr />
            </div>
            <div className="w-full bg-slate-300 flex p-3 text-center justify-center items-center">
              <p className="font-semibold m-2 text-3xl">
                0% Interest For 12 Months
              </p>
              <p className="m-2">Instant credit decision</p>
              <button className="bg-black text-white m-2 p-2">Apply Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex gap-2 mb-5 w-full  justify-center p-3">
        {/* Sidebar */}
        <div className="w-[30%] rounded-md p-4  ">
          <Sidebar />
        </div>
        {/* Product Cards */}
        <div className="w-[60%] bg-white  rounded-md p-4">
          <div className="flex flex-wrap gap-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
