"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LikeIcon } from "@/constant/Svg";
import { helpdata } from "@/constant/HelpData";
import { images } from "@/constant/CartImages";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/Drawer";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  ShoppingBag,
  Package,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeProduct, setActiveProduct] = useState("rc");
  const [activeMobileDropdown, setActiveMobileDropdown] = useState("");
  const [activeMobileProduct, setActiveMobileProduct] = useState("rc");
  const [isFixed, setIsFixed] = useState(false);

  const texts = [
    "FMS New Release | FCX18 II Ford Bronco | Order Now ",
    "Free Shipping Over £99 | Learn More ",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY >= 120);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const closeMobileMenu = () => setMobileMenu(false);

    window.addEventListener("resize", closeMobileMenu);

    return () => {
      window.removeEventListener("resize", closeMobileMenu);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenu) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenu(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenu]);

  const nextImages = () => {
    setCurrentIndex((prev) => (prev + 2) % images.length);
  };

  const previousImages = () => {
    setCurrentIndex(
      (prev) => (prev - 2 + images.length) % images.length
    );
  };

  return (
    <div className="relative bg-[#f7f7f8] border border-b-gray-200">
      {/* Announcement Bar */}
      <div className="w-full h-9 bg-[#ff9900] text-gray-800 flex items-center px-2">
        <Carousel
          opts={{ loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {texts.map((text, index) => (
              <CarouselItem key={index}>
                <div className="h-9 sm:h-10 relative flex items-center justify-center">
                  <div className="hidden lg:flex absolute left-11.5 items-center gap-3.5">
                    <FaFacebookF size={13} />
                    <FaInstagram size={14} />
                    <FaTiktok size={14} />
                    <FaYoutube size={14} />
                    <Gamepad2 size={14} fill="black" />
                  </div>

                  <span className="text-[11px] sm:text-[13px] font-semibold whitespace-nowrap px-7">
                    {text}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-1 sm:left-2 h-6 w-6 border-0 bg-transparent hover:bg-transparent" />

          <CarouselNext className="right-1 sm:right-2 h-6 w-6 border-0 bg-transparent hover:bg-transparent" />
        </Carousel>
      </div>

      {/* Main Header */}
      <div
        className={`w-full h-20 flex items-center justify-between lg:justify-start gap-3 lg:gap-88 px-3 sm:px-4 md:px-5 lg:px-0 ${
          isFixed
            ? "fixed top-0 left-0 z-50 bg-[#f7f7f8] shadow-md"
            : ""
        }`}
      >
        {/* Logo and Desktop Navigation */}
        <div className="flex h-full min-w-0 items-center gap-3 sm:gap-5 lg:gap-6 text-gray-800 lg:pl-6.5">
          <Link
            href="/"
            onClick={() => setMobileMenu(false)}
            className="shrink-0"
          >
            <img
              className="w-28 h-auto sm:w-32 md:w-36 lg:w-34 lg:h-10.5 object-contain"
              src="/images/fmslogo.webp"
              alt="FMS Hobby"
            />
          </Link>

          {/* Desktop Navigation: original mega menus */}
          <div className="hidden lg:flex items-center gap-8 ml-1 shrink-0">
            {/* SALE */}
            <div className="group">
              <Link
                className="text-[17.5px] font-bold hover:text-orange-400 hover:border-b hover:border-b-black py-3 z-20"
                href="/salepage"
              >
                SALE
              </Link>

              <div
                className={`absolute left-0 ${
                  isFixed ? "top-18" : "top-25"
                } hidden w-full h-83.75 bg-white shadow-md z-40 group-hover:block`}
              >
                <div className="flex gap-20 px-14 pt-8">
                  <Link
                    href="/salepage"
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
                    href="/getsalepage"
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
                      <div className="flex items-center justify-between mb-8 cursor-pointer">
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
                      <div className="flex items-center justify-between mb-8 cursor-pointer">
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
                      <div className="flex items-center justify-between cursor-pointer">
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
                href="/discoverpage"
              >
                DISCOVER
              </Link>

              <div
                className={`absolute left-0 ${
                  isFixed ? "top-16" : "top-25.5"
                } hidden w-full h-100 bg-white shadow-md z-40 group-hover:block`}
              >
                <div className="flex px-8 pt-8 gap-6">
                  <div className="w-[32%] flex flex-col">
                   <Link href="/discoverpage" className="font-bold text-lg border-b border-gray-300 pb-2">
                      🚗 Pick Your Perfect RC Car
                   </Link>

                    <Link href="/carsforbeginners" className="mt-3 cursor-pointer block hover:text-orange-500">
                      RC Cars for Beginners
                    </Link>

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
                className={`absolute -left-135.75 ${
                  isFixed ? "top-12" : "top-12"
                } hidden w-screen bg-white z-20 h-60 group-hover:block`}
              >
                <div className="flex px-8">
                  {helpdata.map((item, index) => (
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex gap-2 items-center h-20 shrink-0">
          {/* Wishlist */}
          <div className="relative group">
            <Link
              href="/"
              className="flex gap-2 items-center py-10"
            >
              <LikeIcon width={20} height={20} />

              <p className="text-sm text-gray-900">WISHLIST</p>
            </Link>

            <div className="absolute -right-1.5 top-19 mt-1 hidden group-hover:flex w-65 h-50.5 bg-white shadow-lg z-50 flex-col items-center justify-center">
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
          <Link
            href="/search"
            aria-label="Search"
            className="flex items-center relative border cursor-pointer py-2.5 border-gray-300 rounded-lg ml-2 w-59 z-10"
          >
            <Search className="absolute left-3 w-5 h-5" />

            <p className="w-full pl-12 text-sm">
              Enter here and click search
            </p>
          </Link>

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
              <i className="fa-solid fa-lock text-gray-900 text-xl mt-1" />
            </DrawerTrigger>

            <DrawerContent className="h-full w-100 max-w-[100vw] fixed right-0 bg-white top-0 left-auto rounded-none">
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
                    <Link
                      href="/productpage"
                      className="bg-[#FFAE00] w-48 rounded-lg text-center text-lg py-2 cursor-pointer block"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </DrawerHeader>

              <div className="px-6 py-4 mt-30">
                <h2 className="text-3xl text-center">
                  You May Also Like
                </h2>

                <div className="px-6 py-4">
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                      {[0, 1].map((offset) => {
                        const image =
                          images[
                            (currentIndex + offset) % images.length
                          ];

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
                      aria-label="Previous products"
                      className="absolute -left-4.5 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 cursor-pointer"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      onClick={nextImages}
                      aria-label="Next products"
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

        {/* Mobile and Tablet Menu Button */}
        <div className="lg:hidden ml-auto flex items-center shrink-0">
          <button
            onClick={() => setMobileMenu((prev) => !prev)}
            className="p-2 cursor-pointer"
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenu}
          >
            {mobileMenu ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>
      </div>

      {/* Mobile and Tablet Navigation */}
      {mobileMenu && (
        <div
          className={`lg:hidden fixed inset-x-0 bottom-0 ${
            isFixed ? "top-20" : "top-29 sm:top-28"
          } z-60 bg-white overflow-y-auto shadow-xl border-t border-gray-200`}
        >
          {/* Mobile Search */}
          <Link
            href="/search"
            onClick={() => setMobileMenu(false)}
            className="flex items-center gap-3 mx-4 mt-4 mb-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700"
          >
            <Search size={20} />
            <span className="text-sm">Search products</span>
          </Link>

          <nav className="flex flex-col">
            {/* SALE */}
            <div className="border-b border-gray-200">
              <div className="flex items-center justify-between">
                <Link
                  href="/salepage"
                  onClick={() => setMobileMenu(false)}
                  className="px-5 py-4 text-base font-bold hover:text-orange-500"
                >
                  SALE
                </Link>
                <button
                  type="button"
                  aria-label="Toggle Sale menu"
                  aria-expanded={activeMobileDropdown === "sale"}
                  onClick={() =>
                    setActiveMobileDropdown(
                      activeMobileDropdown === "sale" ? "" : "sale"
                    )
                  }
                  className="px-5 py-4"
                >
                  {activeMobileDropdown === "sale" ? (
                    <ChevronDown size={19} />
                  ) : (
                    <ChevronRight size={19} />
                  )}
                </button>
              </div>

              {activeMobileDropdown === "sale" && (
                <div className="px-5 pb-4 grid grid-cols-2 gap-4">
                  <Link
                    href="/salepage"
                    onClick={() => setMobileMenu(false)}
                    className="text-center hover:text-orange-500"
                  >
                    <img
                      src="/images/saleimage1.webp"
                      alt="RC Car Sale"
                      className="w-full aspect-square object-cover"
                    />
                    <p className="mt-2 font-semibold">RC Car Sale</p>
                  </Link>
                  <Link
                    href="/getsalepage"
                    onClick={() => setMobileMenu(false)}
                    className="text-center hover:text-orange-500"
                  >
                    <img
                      src="/images/saleimage2.webp"
                      alt="Buy 1 Get 1 FREE"
                      className="w-full aspect-square object-cover"
                    />
                    <p className="mt-2 font-semibold">Buy 1 Get 1 FREE</p>
                  </Link>
                </div>
              )}
            </div>

            {/* PRODUCTS */}
            <div className="border-b border-gray-200">
              <div className="flex items-center justify-between">
                <Link
                  href="/productpage"
                  onClick={() => setMobileMenu(false)}
                  className="px-5 py-4 text-base font-bold hover:text-orange-500"
                >
                  PRODUCTS
                </Link>
                <button
                  type="button"
                  aria-label="Toggle Products menu"
                  aria-expanded={activeMobileDropdown === "products"}
                  onClick={() =>
                    setActiveMobileDropdown(
                      activeMobileDropdown === "products" ? "" : "products"
                    )
                  }
                  className="px-5 py-4"
                >
                  {activeMobileDropdown === "products" ? (
                    <ChevronDown size={19} />
                  ) : (
                    <ChevronRight size={19} />
                  )}
                </button>
              </div>

              {activeMobileDropdown === "products" && (
                <div className="px-5 pb-4">
                  {/* RC Cars & Trucks */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveMobileProduct(
                        activeMobileProduct === "rc" ? "" : "rc"
                      )
                    }
                    className="w-full flex items-center justify-between py-3 border-b border-gray-100"
                  >
                    <span className="flex items-center gap-2">
                      <CarFront size={20} />
                      RC Cars &amp; Trucks
                    </span>
                    {activeMobileProduct === "rc" ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )}
                  </button>

                  {activeMobileProduct === "rc" && (
                    <div className="py-3 pl-3">
                      <h3 className="font-bold border-b pb-2">
                        RC Vehicle Types
                      </h3>
                      {[
                        "Rock Crawlers",
                        "Short Course Trucks",
                        "Monster Trucks",
                        "Scale Trucks",
                        "Mini/Micros Cars",
                      ].map((item) => (
                        <p key={item} className="mt-3 text-sm">{item}</p>
                      ))}

                      <Link
                        href="/productpage"
                        onClick={() => setMobileMenu(false)}
                        className="inline-block mt-4 bg-orange-400 text-white px-4 py-2 rounded-full"
                      >
                        View All RC Cars
                      </Link>

                      <h3 className="font-bold border-b pb-2 mt-5">
                        RC Vehicle Scales
                      </h3>
                      {["1:24 Scale", "1:18 Scale", "1:10 Scale", "1:6 Scale"].map(
                        (item) => (
                          <p key={item} className="mt-3 text-sm">{item}</p>
                        )
                      )}

                      <h3 className="font-bold border-b pb-2 mt-5">
                        Realistic Collection
                      </h3>
                      {["Land Rover", "Toyota", "Mercedes-Benz", "Chevrolet"].map(
                        (item) => (
                          <p key={item} className="mt-3 text-sm">{item}</p>
                        )
                      )}

                      <div className="grid grid-cols-2 gap-3 mt-4">
                        {[
                          "/images/productcar1.webp",
                          "/images/productcar2.webp",
                          "/images/productcar3.webp",
                        ].map((src) => (
                          <Link
                            key={src}
                            href="/productpage"
                            onClick={() => setMobileMenu(false)}
                          >
                            <img
                              src={src}
                              alt="RC vehicle"
                              className="w-full object-cover"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Parts & Accessories */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveMobileProduct(
                        activeMobileProduct === "parts" ? "" : "parts"
                      )
                    }
                    className="w-full flex items-center justify-between py-3 border-b border-gray-100"
                  >
                    <span className="flex items-center gap-2">
                      <Search size={20} />
                      Parts &amp; Accessories
                    </span>
                    {activeMobileProduct === "parts" ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )}
                  </button>

                  {activeMobileProduct === "parts" && (
                    <div className="py-3 pl-3">
                      <h3 className="font-bold border-b pb-2">
                        Car &amp; Truck Parts
                      </h3>
                      {[
                        "FCX24 Upgrades",
                        "RC Car Decorations",
                        "Transmitter Sets",
                        "Batteries",
                        "Motors",
                        "ESCs",
                        "LED Lights",
                      ].map((item) => (
                        <p key={item} className="mt-3 text-sm">{item}</p>
                      ))}

                      <h3 className="font-bold border-b pb-2 mt-5">
                        FMS Merchandise
                      </h3>
                      {[
                        "All FMS Merchandise",
                        "Tools & Accessories",
                        "FMS Life",
                      ].map((item) => (
                        <p key={item} className="mt-3 text-sm">{item}</p>
                      ))}

                      <div className="grid grid-cols-2 gap-3 mt-4">
                        {[
                          "/images/partimage1.webp",
                          "/images/partimage2.webp",
                          "/images/partimage3.webp",
                        ].map((src) => (
                          <Link
                            key={src}
                            href="/productpage"
                            onClick={() => setMobileMenu(false)}
                          >
                            <img
                              src={src}
                              alt="Parts and accessories"
                              className="w-full object-cover"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* E-Gift Cards */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveMobileProduct(
                        activeMobileProduct === "gift" ? "" : "gift"
                      )
                    }
                    className="w-full flex items-center justify-between py-3"
                  >
                    <span className="flex items-center gap-2">
                      <Gift size={20} />
                      E-Gift Cards
                    </span>
                    {activeMobileProduct === "gift" ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )}
                  </button>

                  {activeMobileProduct === "gift" && (
                    <div className="pl-3 pb-3">
                      <Link
                        href="/productpage"
                        onClick={() => setMobileMenu(false)}
                        className="text-sm hover:text-orange-500"
                      >
                        View E-Gift Cards
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* DISCOVER */}
            <div className="border-b border-gray-200">
              <div className="flex items-center justify-between">
                <Link
                  href="/discoverpage"
                  onClick={() => setMobileMenu(false)}
                  className="px-5 py-4 text-base font-bold hover:text-orange-500"
                >
                  DISCOVER
                </Link>
                <button
                  type="button"
                  aria-label="Toggle Discover menu"
                  aria-expanded={activeMobileDropdown === "discover"}
                  onClick={() =>
                    setActiveMobileDropdown(
                      activeMobileDropdown === "discover" ? "" : "discover"
                    )
                  }
                  className="px-5 py-4"
                >
                  {activeMobileDropdown === "discover" ? (
                    <ChevronDown size={19} />
                  ) : (
                    <ChevronRight size={19} />
                  )}
                </button>
              </div>

              {activeMobileDropdown === "discover" && (
                <div className="px-5 pb-4">
                  <h3 className="font-bold border-b pb-2">
                    🚗 Pick Your Perfect RC Car
                  </h3>
                  <Link
                    href="/carsforbeginners"
                    onClick={() => setMobileMenu(false)}
                    className="block mt-3 text-sm hover:text-orange-500"
                  >
                    RC Cars for Beginners
                  </Link>
                  <p className="mt-3 text-sm">FCX Series</p>

                  <h3 className="font-bold border-b pb-2 mt-5">
                    🌟 Share More Fun
                  </h3>
                  <p className="mt-3 text-sm">Adventurer Program</p>
                  <p className="mt-3 text-sm">E-Gift Cards</p>
                  <p className="mt-3 text-sm">Become an Affiliate</p>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <img
                      src="/images/productcar1.webp"
                      alt="Pick Your Perfect RC Car"
                      className="w-full object-cover"
                    />
                    <img
                      src="/images/productcar2.webp"
                      alt="FCX Series"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* HELP */}
            <div className="border-b border-gray-200">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setMobileMenu(false)}
                  className="px-5 py-4 text-base font-bold hover:text-orange-500"
                >
                  HELP
                </Link>
                <button
                  type="button"
                  aria-label="Toggle Help menu"
                  aria-expanded={activeMobileDropdown === "help"}
                  onClick={() =>
                    setActiveMobileDropdown(
                      activeMobileDropdown === "help" ? "" : "help"
                    )
                  }
                  className="px-5 py-4"
                >
                  {activeMobileDropdown === "help" ? (
                    <ChevronDown size={19} />
                  ) : (
                    <ChevronRight size={19} />
                  )}
                </button>
              </div>

              {activeMobileDropdown === "help" && (
                <div className="px-5 pb-4 grid grid-cols-2 gap-3">
                  {helpdata.map((item, index) => (
                    <Link
                      key={index}
                      href="/"
                      onClick={() => setMobileMenu(false)}
                      className="flex flex-col items-center text-center p-3 border border-gray-100 hover:text-orange-500"
                    >
                      <img
                        src={item.scr}
                        alt={item.heading}
                        className="w-14 h-14 object-contain"
                      />
                      <span className="text-sm mt-2">{item.heading}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Account Options */}
          <div className="p-4 space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-3 px-3 py-3 border border-gray-200 hover:bg-gray-50"
            >
              <Heart size={20} />
              <span>Wishlist</span>
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-3 px-3 py-3 border border-gray-200 hover:bg-gray-50"
            >
              <UserIcon size={20} />
              <span>Login / My Account</span>
            </Link>
            <Link
              href="/orders"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-3 px-3 py-3 border border-gray-200 hover:bg-gray-50"
            >
              <Package size={20} />
              <span>My Orders</span>
            </Link>
            <Link
              href="/productpage"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-3 px-3 py-3 border border-gray-200 hover:bg-gray-50"
            >
              <ShoppingBag size={20} />
              <span>Continue Shopping</span>
            </Link>
          </div>

          {/* Mobile Social Links */}
          <div className="flex items-center justify-center gap-6 py-5 border-t border-gray-200">
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <FaInstagram size={19} />
            </a>
            <a href="https://www.tiktok.com/" aria-label="TikTok">
              <FaTiktok size={18} />
            </a>
            <a href="https://www.youtube.com/" aria-label="YouTube">
              <FaYoutube size={20} />
            </a>
            <Gamepad2 size={20} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
