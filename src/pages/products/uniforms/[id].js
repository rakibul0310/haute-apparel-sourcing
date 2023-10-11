import React from "react";
import { useRouter } from "next/router";

const Uniform = () => {
  const router = useRouter();
  return (
    <div className="my-28">
      this is specific uniform page:<p>Post: {router.query.id}</p>
    </div>
  );
};

export default Uniform;
