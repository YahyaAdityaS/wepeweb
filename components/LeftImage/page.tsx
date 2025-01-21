import React from "react";
import Image from "next/image";
import loginkiri from "../../public/images/leftlog.png"

const LeftImage: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-F6F7F9">
      <Image src={loginkiri} alt="fotoKiri" className="w-3/5 h-auto rounded-lg"/>
    </div>
  );
};
export default LeftImage