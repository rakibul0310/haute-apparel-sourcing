import React from "react";

const SelectOption = ({ defValue, values, product, setCurrentProducts }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    const selectedProducts = product?.filter((u) =>
      value === "All" ? u?.category !== value : u?.category === value
    );
    setCurrentProducts(selectedProducts);
  };

  return (
    <div className="w-1/2 ps-[5rem] lg:ps-[14rem]">
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900"
      >
        Category
      </label>
      <select
        id="countries"
        class="bg-gray-100 border shadow-md border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        onChange={(e) => handleChange(e)}
      >
        <option defaultValue={defValue}>{defValue}</option>
        {values?.length > 0 &&
          values?.map((v, i) => (
            <option key={i} value={v}>
              {v}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectOption;
