import SearchInput from "@/components/SearchInput/SearchInput";
import SelectOption from "@/components/SelectOption/SelectOption";
import React from "react";

const ProductTop = ({ title, values }) => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        <div>{title}</div>
        <SelectOption defValue={"All"} values={["pants", "shirt"]} />
        <SearchInput cls={"hidden lg:block"} />
      </div>
      <SearchInput cls={"lg:hidden block"} />
    </>
  );
};

export default ProductTop;
