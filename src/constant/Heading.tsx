import React, { CSSProperties } from "react";

const Heading = ({ heading,para,style }: { heading: string,para?:string,style?:CSSProperties }) => {
  return (
    <div className="text-center">
      <h1 className="mt-14 font-sens font-bold text-[50px]" style={style}>
        {heading}
      </h1>

      <p>
       {para}
      </p>
    </div>
  );
};

export default Heading;