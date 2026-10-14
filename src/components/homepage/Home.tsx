"use client";
import { ChevronLeft, ChevronRight, Video, VideoIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Heading from "../../constant/Heading";
import {
  homeCards,
  homeIcons,
  homeVideoCard,
  instagramImages,
  LatestCard,
  instagramPosts
} from "@/constant/HomeData";
import { InstaIcon } from "@/constant/Svg";
import { images } from "@/constant/HomeData";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const [instagramOpen, setInstagramOpen] = useState(false);
const [instagramIndex, setInstagramIndex] = useState(0);

  const changeImage = (dir: "next" | "prev") => {
    if (isAnimating) return;

    setDirection(dir);
    setPreviousIndex(currentIndex);

    setCurrentIndex((prev) => {
      if (dir === "next") {
        return (prev + 1) % images.length;
      }

      return prev === 0 ? images.length - 1 : prev - 1;
    });

    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeImage("next");
    }, 8000);

    return () => clearInterval(timer);
  }, [currentIndex, isAnimating]);

  const openInstagram = (index: number) => {
  setInstagramIndex(index);
  setInstagramOpen(true);
};


const instagramNext = () => {
  setInstagramIndex((prev) =>
    prev === instagramPosts.length - 1 ? 0 : prev + 1
  );
};
const instagramPrev = () => {
  setInstagramIndex((prev) =>
    prev === 0 ? instagramPosts.length - 1 : prev - 1
  );
};

const closeInstagram = () => {
  setInstagramOpen(false);
};

  return (
    <div className="bg-[#f7f7f8] overflow-x-hidden">
      <div className="bg-[#f7f7f8] relative">
        <div className="relative w-full">
          <div className="relative w-full h-75 sm:h-95 md:h-115 lg:h-112.5 overflow-hidden">
            {isAnimating && (
              <img
                src={images[previousIndex]}
                alt="Previous"
                className={`absolute top-0 left-0 w-full h-full object-cover z-10 ${
                  direction === "next" ? "animate-oldLeft" : "animate-oldRight"
                }`}
              />
            )}

            <img
              src={images[currentIndex]}
              alt="Slider"
              className={`absolute top-0 left-0 w-full h-full object-cover z-0 ${
                isAnimating
                  ? direction === "next"
                    ? "animate-newRight"
                    : "animate-newLeft"
                  : ""
              }`}
            />
          </div>

          <div className="absolute right-5 sm:right-9 lg:right-9 bottom-4 sm:bottom-5 lg:-bottom-4 flex gap-1 z-10">
            <button
              onClick={() => changeImage("prev")}
              className="flex justify-center items-center bg-white cursor-pointer w-9 h-9 sm:w-10 sm:h-10 rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => changeImage("next")}
              className="flex justify-center items-center bg-white cursor-pointer w-9 h-9 sm:w-10 sm:h-10 rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-auto text-center">
        <Heading
          heading="SCALE FUN FOR EVERYONE"
          para="UK’s Favourite RC Models | Top RC Airplanes, Vehicles &amp; Accessories"
        />

        <div className="mx-auto mt-8 sm:mt-10 lg:mt-12 grid w-full max-w-259.5 grid-cols-1 gap-2 px-4 md:grid-cols-2 md:auto-rows-70">
          {homeCards.map((card) => (
            <div
              key={card.id}
              className={`group cursor-pointer relative h-60 sm:h-65 md:h-70 overflow-hidden rounded-xl ${card.position}`}
            >
              <img
                src={card.src}
                alt={card.title}
                className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute top-5 left-5 right-5 sm:top-8 sm:left-8 sm:right-8 text-left text-white drop-shadow-md">
                <h2 className="text-2xl sm:text-3xl font-extrabold">
                  {card.title}
                </h2>

                <p className="mt-1 text-[12px] sm:text-[13px] font-bold tracking-tight">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}

          <div className="relative h-75 sm:h-100 md:h-142 cursor-pointer overflow-hidden rounded-xl bg-gray-500 md:col-start-1 md:row-start-2 md:row-span-2">
            <video
              src={homeVideoCard.src}
              className="block h-full w-full rounded-xl object-cover"
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="absolute top-5 left-4 right-4 sm:top-6 text-left text-white drop-shadow-md">
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                {homeVideoCard.title}
              </h2>

              <p className="mt-2 text-[12px] sm:text-[13px] font-bold">
                {homeVideoCard.desc}
              </p>

              <button className="group relative mt-4 overflow-hidden rounded-3xl border-2 border-white px-4 sm:px-5 py-2 text-xs font-bold text-white">
                <span className="absolute top-0 left-[120%] h-full w-1/20 skew-x-[-20deg] bg-white/30 opacity-90 transition-all duration-600 group-hover:left-[-50%]" />

                <span className="relative z-10">{homeVideoCard.button}</span>
              </button>
            </div>
          </div>
        </div>

        <Heading
          heading="LATEST NEWS"
          para="Stay informed with the latest updates and trends."
        />
      </div>

      <div className="w-full h-auto px-4 sm:px-6 md:px-10 flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap lg:justify-between gap-8 lg:gap-0">
        {LatestCard.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-full md:w-full lg:w-72 h-auto mt-8 lg:mt-16"
          >
            <img
              className="w-full h-60 sm:h-72 cursor-pointer object-cover"
              src={item.src}
              alt=""
            />

            <h2 className="text-xl sm:text-2xl text-gray-900 font-sens mt-4">
              {item.heading}
            </h2>

            <p className="mt-1 text-gray-800 font-bold leading-7">
              {item.para}
            </p>

            <button className="mt-4 flex items-center gap-3 text-base sm:text-lg text-gray-900 hover:text-black cursor-pointer">
              {item.Button}
              <ChevronRight />
            </button>
          </div>
        ))}
      </div>

      <Heading
        heading="GET TO KNOW FMS"
        para="FMS is your trusted choice in the RC industry."
        style={{ marginTop: "80px" }}
      />

      <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between gap-4 lg:gap-0 mt-8 sm:mt-10 lg:mt-12 px-4 sm:px-6 lg:px-8">
        {homeIcons.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-full lg:w-60 bg-white pl-4 pt-3 pb-5"
          >
            <img className="w-14 h-14" src={item.src} alt="" />

            <h1 className="text-xl sm:text-2xl text-gray-800 mt-3">
              {item.heading}
            </h1>

            <p className="text-base sm:text-xl mt-2 text-gray-700">
              {item.para}
            </p>
          </div>
        ))}
      </div>

      <Heading heading="HOW OTHERS ENJOY FMS MODELS" />

      <h2 className="text-center cursor-default mt-6 sm:mt-8 px-4 text-base sm:text-xl text-gray-800">
        Tag @fmsmodel_uk on Instagram to share your RC fun
      </h2>

      <section className="px-4 sm:px-6 mt-12 sm:mt-20 lg:mt-30">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
          {instagramImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openInstagram(index)}
              className="group cursor-pointer relative aspect-square sm:aspect-[4/5] lg:aspect-auto lg:h-70 bg-cover bg-center bg-no-repeat overflow-hidden"
              style={{
                backgroundImage: `url("${image}")`,
              }}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <InstaIcon />
                </div>
              </div>

              <div className="absolute right-2 top-2 sm:right-4 sm:top-4 z-8 bg-gray-700 rounded-2xl p-1">
                <VideoIcon className="fill-[#bfbfc9] text-[#bfbfc9] w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {instagramOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-3 sm:p-5"
          onClick={closeInstagram}
        >
          <div className="relative w-full max-w-225 h-auto max-h-[90dvh] sm:max-h-[85dvh]">

            {/* LEFT ARROW */}
            <button
              onClick={(e) => {
                e.stopPropagation();

                if (instagramIndex > 0) {
                  instagramPrev();
                }
              }}
              disabled={instagramIndex === 0}
              className={`absolute left-1 sm:-left-5 lg:-left-14 top-1/2 -translate-y-1/2 z-[110] w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center shadow-md
                ${
                  instagramIndex === 0
                    ? "opacity-30 cursor-not-allowed"
                    : "cursor-pointer hover:bg-gray-100"
                }`}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </button>

            {/* MAIN MODAL */}
            <div
              className="relative w-full max-h-[90dvh] sm:max-h-[85dvh] bg-white flex flex-col md:flex-row overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={closeInstagram}
                className="absolute right-2 top-2 sm:right-3 sm:top-3 z-50 text-gray-500 hover:text-black cursor-pointer"
              >
                <span className="text-3xl leading-none">×</span>
              </button>

              {/* VIDEO / IMAGE */}
              <div className="w-full md:w-[58%] h-[38vh] sm:h-[45vh] md:h-[min(85dvh,560px)] md:min-h-0 shrink-0 bg-black flex items-center justify-center overflow-hidden">
                {instagramPosts[instagramIndex].type === "video" ? (
                  <video
                    key={instagramPosts[instagramIndex].src}
                    src={instagramPosts[instagramIndex].src}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={instagramPosts[instagramIndex].src}
                    alt="Instagram post"
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* TEXT */}
              <div className="w-full md:w-[42%] md:flex-1 md:min-h-0 bg-white p-4 sm:p-5 overflow-y-auto">
                <div className="border-b border-gray-200 pb-4 pr-8">
                  <p className="text-sm">
                    View on{" "}
                    <span className="text-blue-600">
                      Instagram
                    </span>
                  </p>
                </div>

                <div className="pt-5">
                  <p className="text-xs text-blue-500 mb-4">
                    {instagramPosts[instagramIndex].date}
                  </p>

                  <p className="text-sm leading-6 mb-5">
                    {instagramPosts[instagramIndex].title}
                  </p>

                  <p className="text-sm leading-6 mb-5">
                    {instagramPosts[instagramIndex].description}
                  </p>

                  <p className="text-sm leading-6 mb-1">
                    {instagramPosts[instagramIndex].challenge}
                  </p>

                  <p className="text-sm leading-6 mb-5">
                    {instagramPosts[instagramIndex].challengeText}
                  </p>

                  <p className="text-sm leading-6 mb-5">
                    🔗 Learn more & enter here:
                    <br />

                    <span className="text-blue-600 break-all">
                      {instagramPosts[instagramIndex].link}
                    </span>
                  </p>

                  <p className="text-sm leading-6 text-gray-600">
                    {instagramPosts[instagramIndex].hashtags}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={(e) => {
                e.stopPropagation();

                if (instagramIndex < instagramPosts.length - 1) {
                  instagramNext();
                }
              }}
              disabled={instagramIndex === instagramPosts.length - 1}
              className={`absolute right-1 sm:-right-5 lg:-right-14 top-1/2 -translate-y-1/2 z-[110] w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center shadow-md
                ${
                  instagramIndex === instagramPosts.length - 1
                    ? "opacity-30 cursor-not-allowed"
                    : "cursor-pointer hover:bg-gray-100"
                }`}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </button>
          </div>
        </div>
      )}
{instagramOpen && (
  <div
    className="fixed inset-0 z-100 bg-black/70 flex items-center justify-center"
    onClick={closeInstagram}
  >
    <div className="relative w-225 max-w-[90vw] h-140">

      {/* LEFT ARROW */}
      <button
        onClick={(e) => {
          e.stopPropagation();

          if (instagramIndex > 0) {
            instagramPrev();
          }
        }}
        disabled={instagramIndex === 0}
        className={`absolute -left-14 top-1/2 -translate-y-1/2 z-110 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md
          ${
            instagramIndex === 0
              ? "opacity-30 cursor-not-allowed"
              : "cursor-pointer hover:bg-gray-100"
          }`}
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>

      {/* MAIN MODAL */}
      <div
        className="relative w-full h-full bg-white flex"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={closeInstagram}
          className="absolute right-3 top-3 z-50 text-gray-500 hover:text-black cursor-pointer"
        >
          <span className="text-3xl leading-none">×</span>
        </button>

        {/* VIDEO / IMAGE */}
        <div className="w-[58%] h-full bg-black flex items-center justify-center overflow-hidden">
          {instagramPosts[instagramIndex].type === "video" ? (
            <video
              key={instagramPosts[instagramIndex].src}
              src={instagramPosts[instagramIndex].src}
              className="w-full h-full object-contain"
              controls
              autoPlay
              muted
              playsInline
            />
          ) : (
            <img
              src={instagramPosts[instagramIndex].src}
              alt="Instagram post"
              className="w-full h-full object-contain"
            />
          )}
        </div>

        {/* TEXT */}
        <div className="w-[42%] h-full bg-white p-5 overflow-y-auto">
          <div className="border-b border-gray-200 pb-4 pr-8">
            <p className="text-sm">
              View on{" "}
              <span className="text-blue-600">
                Instagram
              </span>
            </p>
          </div>

          <div className="pt-5">
            <p className="text-xs text-blue-500 mb-4">
              {instagramPosts[instagramIndex].date}
            </p>

            <p className="text-sm leading-6 mb-5">
              {instagramPosts[instagramIndex].title}
            </p>

            <p className="text-sm leading-6 mb-5">
              {instagramPosts[instagramIndex].description}
            </p>

            <p className="text-sm leading-6 mb-1">
              {instagramPosts[instagramIndex].challenge}
            </p>

            <p className="text-sm leading-6 mb-5">
              {instagramPosts[instagramIndex].challengeText}
            </p>

            <p className="text-sm leading-6 mb-5">
              🔗 Learn more & enter here:
              <br />

              <span className="text-blue-600 break-all">
                {instagramPosts[instagramIndex].link}
              </span>
            </p>

            <p className="text-sm leading-6 text-gray-600">
              {instagramPosts[instagramIndex].hashtags}
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT ARROW */}
      <button
        onClick={(e) => {
          e.stopPropagation();

          if (instagramIndex < instagramPosts.length - 1) {
            instagramNext();
          }
        }}
        disabled={instagramIndex === instagramPosts.length - 1}
        className={`absolute -right-14 top-1/2 -translate-y-1/2 z-110 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md
          ${
            instagramIndex === instagramPosts.length - 1
              ? "opacity-30 cursor-not-allowed"
              : "cursor-pointer hover:bg-gray-100"
          }`}
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
    </div>
  </div>
)}
    </div>
  );
}

export default Home;
