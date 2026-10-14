"use client";

import { useEffect, useState } from "react";
import { ArrowUpToLine } from "lucide-react";
import { RewardIcon } from "@/constant/Svg";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-28 right-10 z-50 w-18 h-18 px-3 bg-white text-black cursor-pointer flex items-center justify-center rounded-3xl shadow-xl hover:text-gray-500 transition-all duration-300"
        >
          <ArrowUpToLine size={21} strokeWidth={1.8} />
        </button>
      )}

      <button
        aria-label="Rewards"
        className="fixed bottom-13 right-7 z-50 w-28 h-12 cursor-pointer bg-orange-200 text-black flex items-center justify-center rounded-3xl shadow-xl hover:bg-orange-300 transition-all duration-300"
      >
        <span className="text-xs font-bold w-20 flex items-center text-gray-800  font-serif">
          <RewardIcon />
          Rewards
        </span>
      </button>
    </>
  );
};

export default BackToTop;
