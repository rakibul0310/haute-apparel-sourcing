import React from "react";

const SelectOption = ({ defValue, values }) => {
  return (
    <div>
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900"
      >
        Category
      </label>
      <select
        id="countries"
        class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
      >
        <option defaultValue={defValue}>{defValue}</option>
        {values?.map((v, i) => (
          <option key={i} value={v}>
            {v}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
