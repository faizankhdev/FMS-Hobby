"use client";

import { LikeIcon } from "@/constant/Svg";
import Link from "next/link";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/Drawer";

import {
  Search,
  UserIcon,
  ChevronRight,
  ChevronDown,
  CarFront,
  Gift,
  ChevronLeft,
  Heart,
  Menu,
  X,
  Gamepad2,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

import { helpdata } from "@/constant/HelpData";
import { images } from "@/constant/CartImages";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [previousTextIndex, setPreviousTextIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">(
    "next",
  );

  const [isTextAnimating, setIsTextAnimating] = useState(false);

  const [activeProduct, setActiveProduct] = useState("rc");

  const [isFixed, setIsFixed] = useState(false);

  const texts = [
    "30-day postage paid returns",
    "Free shipping special for you",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 120) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const nextImages = () => {
    setCurrentIndex((prev) => (prev + 2) % images.length);
  };

  const previousImages = () => {
    setCurrentIndex((prev) => (prev - 2 + images.length) % images.length);
  };

  const nextText = () => {
    if (isTextAnimating) return;

    const nextIndex = (currentTextIndex + 1) % texts.length;

    setPreviousTextIndex(currentTextIndex);
    setCurrentTextIndex(nextIndex);
    setSlideDirection("next");
    setIsTextAnimating(true);

    setTimeout(() => {
      setIsTextAnimating(false);
    }, 500);
  };

  const previousText = () => {
    if (isTextAnimating) return;

    const previousIndex =
      (currentTextIndex - 1 + texts.length) % texts.length;

    setPreviousTextIndex(currentTextIndex);
    setCurrentTextIndex(previousIndex);
    setSlideDirection("prev");
    setIsTextAnimating(true);

    setTimeout(() => {
      setIsTextAnimating(false);
    }, 500);
  };

  return (
    <div className="bg-[#f7f7f8] border border-b-gray-200">
      {/* Orange Announcement Bar */}
      <div className="w-full h-9 bg-[#ff9900] text-gray-800 flex items-center px-2">
        <Carousel
          opts={{
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {texts.map((text, index) => (
              <CarouselItem key={index}>
                <div className="h-10 relative flex items-center justify-center">
                  <div className="absolute left-11.5 flex items-center gap-3.5">
                    <FaFacebookF size={13} />
                    <FaInstagram size={14} />
                    <FaTiktok size={14} />
                    <FaYoutube size={14} />
                    <Gamepad2 size={14} fill="black" />
                  </div>

                  <span className="text-[13px] font-semibold whitespace-nowrap">
                    {text}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2 h-6 w-6 border-0 bg-transparent hover:bg-transparent" />

          <CarouselNext className="right-2 h-6 w-6 border-0 bg-transparent hover:bg-transparent" />
        </Carousel>
      </div>

      {/* Main Header */}
      <div
        className={`w-full h-20 flex items-center gap-88 px-4 md:px-0 ${
          isFixed
            ? "fixed top-0 left-0 z-50 bg-[#f7f7f8] shadow-md"
            : ""
        }`}
      >
        <div className="flex h-full pl-0 md:pl-6.5 items-center gap-6 text-gray-800">
          <Link href="/">
          <img
            className="lg:w-34 md:w-38 lg:h-10.5  md:h-11"
            src="/images/fmslogo.webp"
            alt="FMS Hobby"
          /></Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ml-1">
            {/* SALE */}
            <div className="group">
              <Link
                className="text-[17.5px] font-bold hover:text-orange-400 hover:border-b hover:border-b-black py-3 z-20"
                href="/"
              >
                SALE
              </Link>

              <div
                className={`absolute left-0 ${
                  isFixed ? "top-16" : "top-28"
                } hidden w-full h-83.75 bg-white shadow-md z-40 group-hover:block`}
              >
                <div className="flex gap-20 px-14 pt-8">
                  <Link
                    href="/"
                    className="w-62.5 text-center hover:text-amber-500"
                  >
                    <img
                      src="/images/saleimage1.webp"
                      alt="RC Car Sale"
                      className="w-62.5 h-62.5 object-cover"
                    />

                    <p className="text-xl font-bold mt-1">
                      RC Car Sale
                    </p>
                  </Link>

                  <Link
                    href="/"
                    className="w-62.5 text-center hover:text-amber-500"
                  >
                    <img
                      src="/images/saleimage2.webp"
                      alt="Buy 1 Get 1 FREE"
                      className="w-62.5 h-62.5 object-cover"
                    />

                    <p className="text-xl font-bold mt-1">
                      Buy 1 Get 1 FREE
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* PRODUCTS */}
            <div className="group/products">
              <Link
                className="text-[16px] font-bold font-sans text-gray-800 hover:text-orange-400 hover:border-b hover:border-b-black z-20 py-4"
                href="/productpage"
              >
                PRODUCT
              </Link>

              <div
                className={`absolute left-0 ${
                  isFixed ? "top-16" : "top-28"
                } hidden w-full bg-white shadow-md z-50 group-hover/products:block`}
              >
                <div className="flex min-h-125 relative">
                  <div className="w-[18%] border-r border-r-gray-300 p-6 relative">
                    {/* RC Cars & Trucks */}
                    <div
                      className="group/rc relative"
                      onMouseEnter={() => setActiveProduct("rc")}
                    >
                      <div className="flex items-center justify-between mb-8 cursor-pointer group/item">
                        <div className="flex items-center gap-1">
                          <CarFront
                            size={21}
                            className={
                              activeProduct === "rc"
                                ? "text-orange-500"
                                : "text-gray-800"
                            }
                          />

                          <span
                            className={
                              activeProduct === "rc"
                                ? "text-orange-500"
                                : "text-gray-800"
                            }
                          >
                            RC Cars & Trucks
                          </span>
                        </div>

                        <div
                          className={
                            activeProduct === "rc"
                              ? "text-orange-500"
                              : "text-gray-700"
                          }
                        >
                          {activeProduct === "rc" ? (
                            <ChevronDown size={18} />
                          ) : (
                            <ChevronRight size={18} />
                          )}
                        </div>
                      </div>

                      {/* RC Mega Menu */}
                      <div
                        className={`${
                          activeProduct === "rc" ? "flex" : "hidden"
                        } absolute left-[calc(100%+1px)] -top-6 w-[calc(82vw-1px)] min-h-125 bg-white z-10`}
                      >
                        <div className="flex-1 grid grid-cols-2 gap-6 pl-14 pt-6">
                          <div>
                            <h3 className="font-bold text-lg border-b pb-2">
                              RC Vehicle Types
                            </h3>

                            <p className="mt-3">Rock Crawlers</p>
                            <p className="mt-3">Short Course Trucks</p>
                            <p className="mt-3">Monster Trucks</p>
                            <p className="mt-3">Scale Trucks</p>
                            <p className="mt-3">Mini/Micros Cars</p>

                            <button className="mt-4 bg-orange-400 text-white px-4 py-2 rounded-full">
                              View All RC Cars
                            </button>
                          </div>

                          <div>
                            <h3 className="font-bold text-lg border-b pb-2">
                              RC Vehicle Scales
                            </h3>

                            <p className="mt-3">1:24 Scale</p>
                            <p className="mt-3">1:18 Scale</p>
                            <p className="mt-3">1:10 Scale</p>
                            <p className="mt-3">1:6 Scale</p>

                            <h3 className="font-bold text-lg border-b pb-2 mt-8">
                              Realistic Collection
                            </h3>

                            <p className="mt-3">Land Rover</p>
                            <p className="mt-3">Toyota</p>
                            <p className="mt-3">Mercedes-Benz</p>
                            <p className="mt-3">Chevrolet</p>
                          </div>
                        </div>

                        <div className="w-[30%] p-7">
                          <img
                            src="/images/productcar1.webp"
                            className="w-full mb-8"
                            alt=""
                          />

                          <img
                            src="/images/productcar2.webp"
                            className="w-full mb-8"
                            alt=""
                          />

                          <img
                            src="/images/productcar3.webp"
                            className="w-full"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    {/* Parts & Accessories */}
                    <div
                      className="group/parts relative"
                      onMouseEnter={() => setActiveProduct("parts")}
                    >
                      <div className="flex items-center justify-between mb-8 cursor-pointer group/item">
                        <div className="flex items-center gap-1">
                          <Search
                            size={21}
                            className={
                              activeProduct === "parts"
                                ? "text-orange-500"
                                : "text-gray-800"
                            }
                          />

                          <span
                            className={
                              activeProduct === "parts"
                                ? "text-orange-500"
                                : "text-gray-800"
                            }
                          >
                            Parts & Accessories
                          </span>
                        </div>

                        <div
                          className={
                            activeProduct === "parts"
                              ? "text-orange-500"
                              : "text-gray-700"
                          }
                        >
                          {activeProduct === "parts" ? (
                            <ChevronDown size={18} />
                          ) : (
                            <ChevronRight size={18} />
                          )}
                        </div>
                      </div>

                      {/* Parts Mega Menu */}
                      <div
                        className={`${
                          activeProduct === "parts" ? "flex" : "hidden"
                        } absolute left-[calc(100%+1px)] -top-20 w-[calc(82vw-1px)] z-40 pl-4 min-h-125 bg-white`}
                      >
                        <div className="flex-1 grid grid-cols-2 gap-6 p-8">
                          <div>
                            <h3 className="font-bold text-lg border-b pb-2">
                              Car & Truck Parts
                            </h3>

                            <p className="mt-3">FCX24 Upgrades</p>
                            <p className="mt-3">RC Car Decorations</p>
                            <p className="mt-3">Transmitter Sets</p>
                            <p className="mt-3">Batteries</p>
                            <p className="mt-3">Motors</p>
                            <p className="mt-3">ESCs</p>
                            <p className="mt-3">LED Lights</p>

                            <button className="mt-4 bg-orange-400 text-white px-4 py-2 rounded-full">
                              Go to Part Finder
                            </button>
                          </div>

                          <div>
                            <h3 className="font-bold text-lg border-b pb-2">
                              FMS Merchandise
                            </h3>

                            <p className="mt-3">All FMS Merchandise</p>
                            <p className="mt-3">Tools & Accessories</p>
                            <p className="mt-3">FMS Life</p>
                          </div>
                        </div>

                        <div className="w-[30%] p-7">
                          <img
                            src="/images/partimage1.webp"
                            className="w-full mb-8 h-42"
                            alt=""
                          />

                          <img
                            src="/images/partimage2.webp"
                            className="w-full mb-8"
                            alt=""
                          />

                          <img
                            src="/images/partimage3.webp"
                            className="w-full"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    {/* E-Gift Cards */}
                    <div
                      className="group/gift relative"
                      onMouseEnter={() => setActiveProduct("gift")}
                    >
                      <div className="flex items-center justify-between cursor-pointer z-40 group/item">
                        <div className="flex items-center gap-1">
                          <Gift
                            size={21}
                            className={
                              activeProduct === "gift"
                                ? "text-orange-500"
                                : "text-gray-800"
                            }
                          />

                          <span
                            className={
                              activeProduct === "gift"
                                ? "text-orange-500"
                                : "text-gray-800"
                            }
                          >
                            E-Gift Cards
                          </span>
                        </div>

                        <div
                          className={
                            activeProduct === "gift"
                              ? "text-orange-500"
                              : "text-gray-700"
                          }
                        >
                          {activeProduct === "gift" ? (
                            <ChevronDown size={18} />
                          ) : (
                            <ChevronRight size={18} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DISCOVER */}
            <div className="group">
              <Link
                className="text-[17px] font-bold hover:text-orange-400 hover:border-b hover:border-b-black py-4"
                href="/"
              >
                DISCOVER
              </Link>

              <div
                className={`absolute left-0 ${
                  isFixed ? "top-16" : "top-28"
                } hidden w-full h-100 bg-white shadow-md z-40 group-hover:block`}
              >
                <div className="flex px-8 pt-8 gap-6">
                  <div className="w-[32%]">
                    <h3 className="font-bold text-lg border-b border-gray-300 pb-2">
                      🚗 Pick Your Perfect RC Car
                    </h3>

                    <p className="mt-3 cursor-pointer hover:text-orange-500">
                      RC Cars for Beginners
                    </p>

                    <p className="mt-3 cursor-pointer hover:text-orange-500">
                      FCX Series
                    </p>
                  </div>

                  <div className="w-[32%]">
                    <h3 className="font-bold text-lg border-b border-gray-300 pb-2">
                      🌟 Share More Fun
                    </h3>

                    <p className="mt-3 cursor-pointer hover:text-orange-500">
                      Adventurer Program
                    </p>

                    <p className="mt-3 cursor-pointer hover:text-orange-500">
                      E-Gift Cards
                    </p>

                    <p className="mt-3 cursor-pointer hover:text-orange-500">
                      Become an Affiliate
                    </p>
                  </div>

                  <div className="w-[30%] flex flex-col gap-4">
                    <img
                      src="/images/productcar1.webp"
                      alt="Pick Your Perfect RC Car"
                      className="w-62.5 h-37.5 object-cover cursor-pointer"
                    />

                    <img
                      src="/images/productcar2.webp"
                      alt="FCX Series"
                      className="w-62.5 h-37.5 object-cover cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* HELP */}
            <div className="group relative">
              <Link
                className="text-[17px] font-bold hover:text-orange-400 hover:border-b hover:border-b-black py-6"
                href="/"
              >
                HELP
              </Link>

              <div
                className={`absolute -left-135.75  ${
                  isFixed ? "top-12" : "top-12"
                } hidden w-349 bg-white z-20 h-60 group-hover:block`}
              >
                <div className="flex px-8">
                  {helpdata.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-[20%] p-10 hover:text-orange-500 text-center"
                      >
                        <img
                          className="w-26 h-24"
                          src={item.scr}
                          alt=""
                        />

                        <h3 className="font-bold text-lg mt-3 leading-6">
                          {item.heading}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex gap-2 items-center h-20">
          {/* Wishlist */}
          <div className="relative group">
            <Link
              href="/"
              className="flex gap-2 items-center py-10"
            >
              <LikeIcon width={20} height={20} />

              <p className="text-sm  text-gray-900">WISHLIST</p>
            </Link>

            <div className="absolute -right-1.5 top-19 shadow-2 mt-1 hidden group-hover:flex w-65 h-50.5 bg-white shadow-lg z-50 flex-col items-center justify-center">
              <div className="absolute -top-2 right-3 w-4 h-4 bg-white rotate-45" />

              <Heart
                size={70}
                strokeWidth={0.8}
                className="text-black relative z-10"
              />

              <p className="text-sm text-gray-700 mt-4">
                Sign in to view your wishlist
              </p>

              <Link
                href="/login"
                className="mt-4 w-51 h-10.75 bg-orange-400 hover:bg-orange-500 flex items-center justify-center text-sm font-medium"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Search */}
          <div className="flex items-center relative border cursor-pointer py-2.5 border-gray-300 rounded-lg ml-2 w-59 z-10">
            <Search className="absolute 0 left-3 w-5 h-5" />

            <p className="w-full pl-12 text-sm">
              Enter here and click search
            </p>
          </div>

          {/* User */}
          <div className="relative group h-full items-center flex">
            <UserIcon
              fill="black"
              className="w-12 text-black cursor-pointer"
            />

            <div className="absolute right-0 left-0 top-18 hidden group-hover:flex w-20 flex-col bg-white shadow-md border border-gray-200 z-50">
              <Link
                href="/login"
                className="px-3 py-2 text-sm hover:bg-gray-100"
              >
                Login
              </Link>

              <Link
                href="/orders"
                className="px-3 py-2 text-sm hover:bg-gray-100"
              >
                Orders
              </Link>
            </div>
          </div>

          {/* Cart Drawer */}
          <Drawer swipeDirection="right">
            <DrawerTrigger className="cursor-pointer">
              <i className="fa-solid fa-lock text-gray-900 text-xl mt-1"></i>
            </DrawerTrigger>

            <DrawerContent className="h-full w-100 fixed right-0 bg-white top-0 left-auto rounded-none">
              <DrawerHeader className="px-6 pt-8">
                <DrawerTitle className="text-2xl font-bold">
                  Cart
                </DrawerTitle>

                <div className="w-full border-b border-gray-300 mt-4" />

                <div className="flex flex-col justify-center mt-18">
                  <p className="text-gray-600 text-center text-lg mt-4">
                    Your cart is currently empty.
                  </p>

                  <div className="m-auto mt-1">
                    <button className="bg-[#FFAE00] w-48 rounded-lg text-center text-lg py-2 cursor-pointer">
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </DrawerHeader>

              <div className="px-6 py-4 mt-30">
                <h1 className="text-3xl text-center">
                  You May Also Like
                </h1>

                <div className="px-6 py-4">
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                      {[0, 1].map((offset) => {
                        const image =
                          images[(currentIndex + offset) % images.length];

                        return (
                          <div key={image.src}>
                            <img
                              src={image.src}
                              alt=""
                              className="w-full h-36 object-cover"
                            />

                            <p className="text-sm font-medium mt-3 text-center">
                              {image.para1}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <button
                      onClick={previousImages}
                      className="absolute -left-4.5 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 cursor-pointer"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      onClick={nextImages}
                      className="absolute -right-4.5 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 cursor-pointer"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden absolute left-0 top-30 w-full bg-white shadow-lg z-100 border-t border-gray-200">
          <div className="flex flex-col">
            <Link
              href="/"
              onClick={() => setMobileMenu(false)}
              className="px-6 py-4 text-lg font-bold border-b border-gray-200 hover:text-orange-500"
            >
              SALE
            </Link>

            <Link
              href="/"
              onClick={() => setMobileMenu(false)}
              className="px-6 py-4 text-lg font-bold border-b border-gray-200 hover:text-orange-500"
            >
              PRODUCTS
            </Link>

            <Link
              href="/"
              onClick={() => setMobileMenu(false)}
              className="px-6 py-4 text-lg font-bold border-b border-gray-200 hover:text-orange-500"
            >
              DISCOVER
            </Link>

            <Link
              href="/"
              onClick={() => setMobileMenu(false)}
              className="px-6 py-4 text-lg font-bold border-b border-gray-200 hover:text-orange-500"
            >
              HELP
            </Link>

            <Link
              href="/"
              onClick={() => setMobileMenu(false)}
              className="px-6 py-4 text-lg font-bold hover:text-orange-500"
            >
              WISHLIST
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;