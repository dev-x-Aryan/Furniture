import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";

const Category = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const handleProduct = () => {
    navigate("/product");
  };
  return (
    <>
      <div className="catalog-container border border-b-[1px] mb-5 pb-3 ">
        <div className="catalog w-[75%] m-auto ">
          <div className="p-5">
            <h1 className="text-[2rem]">{name}</h1>
            <hr />
          </div>
          <div className="w-full bg-slate-300 flex  p-3 text-center justify-center items-center">
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

      <div className="w-[75%] m-auto mb-[5rem] ">
        <div className="flex ">
          <div className="w-[40%]">
            <Sidebar />
          </div>
          <div className="flex flex-row flex-wrap gap-2">
            <ProductCard />

            <ProductCard />

            <ProductCard />

            <ProductCard />

            {/* <div className="items-center text-center m-5 hover:bg-slate-200 cursor-pointer transition-transform transform hover:-translate-y-2">
              <img
                src={
                  "https://www.istanbulfurniture.com/cdn/shop/collections/Cavalli-Black-Sofa_720x.jpg?v=1658408550"
                }
                alt="image"
                className="h-[150px] w-[150px] m-1"
              />

              <span className="font-semibold text-lg">Sofas</span>
            </div>

            */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
