import { helppagedata } from "@/constant/HelpData";
import { ChevronsRight } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <img
        src="/images/helppageimages/image1.webp"
        alt=""
        className="w-full h-auto"
      />

      <div className="text-center px-4 sm:px-6 lg:px-0">
        <h2 className="text-xl font-bold mt-10 lg:mt-16">
          Have any question?
        </h2>

        <p className="mt-6 lg:mt-10">
          Send us an email at support@fmshobby.uk, we would be glad to help!
        </p>

        <div className="mt-8 lg:mt-0">
          {helppagedata.map((item, index) => (
            <div
              className="flex flex-col items-center px-4 py-6 gap-5 sm:flex-row sm:items-center sm:justify-center sm:gap-6 sm:px-6 lg:flex-row lg:items-center lg:gap-0 lg:pl-55 lg:py-0"
              key={index}
            >
              <img
                src={item.image}
                alt=""
                className="w-full max-w-55 h-auto object-contain sm:w-40 sm:shrink-0 lg:w-auto lg:max-w-none"
              />

              <div className="w-full min-w-0 text-left text-gray-800 sm:pl-2 lg:pl-10">
                <h2 className="text-xl font-extrabold sm:text-2xl lg:text-2xl">
                  {item.heading}
                </h2>

                {Array.isArray(item.para) ? (
                  <>
                    <p className="font-bold mt-4">{item.para[0]}</p>
                    <p className="mt-2">{item.para[1]}</p>
                  </>
                ) : (
                  <p className="mt-3 w-full lg:w-190">{item.para}</p>
                )}

                {index !== 0 && (
                  <button className="mt-4 flex items-center gap-3 sm:gap-6 border-b text-base sm:text-lg">
                    {item.button}
                    <ChevronsRight className="w-4 h-4 shrink-0" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;