import Container from "@/components/Container/Container";
import React from "react";

const ItemTop = ({ itemName, currentPath }) => {
  return (
    <>
      <Container cls={"mt-28"}>
        <div className="flex justify-between items-center py-4 mb-6 border border-b-2 border-t-0 border-e-0 border-s-0 border-gray-200">
          <h2 className="w-1/2 text-lg font-bold text-gray-500">
            {itemName?.toUpperCase()}
          </h2>
          <h4 className="w-1/2 text-end text-lg font-bold text-gray-500">
            {currentPath}
          </h4>
        </div>
      </Container>
    </>
  );
};

export default ItemTop;
