import SearchInput from "@/components/SearchInput/SearchInput";
import SelectOption from "@/components/SelectOption/SelectOption";
import React from "react";

const ProductTop = ({ title, values, setCurrentProducts, currentProducts }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-1/2 text-3xl text-start text-[#57c3a6] font-bold">
          {title}
        </div>
        <SelectOption defValue={"All"} values={[...values]} />
        {/* <SearchInput
          cls={"hidden lg:block h-[30px]"}
          setCurrentProducts={setCurrentProducts}
          currentProducts={currentProducts}
        /> */}
      </div>
      {/* <SearchInput
        cls={"lg:hidden block mt-5"}
        setCurrentProducts={setCurrentProducts}
        currentProducts={currentProducts}
      /> */}
    </>
  );
};

export default ProductTop;
