"use client";

import { ChevronDown, Globe } from "lucide-react";
import {
  productLinks,
  supportLinks,
  moreAboutLinks,
  socialIcons,
  paymentIcons,
} from "@/constant/FooterData";

import { useState } from "react";

const Footer = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  return (
    <footer className="w-full mt-10 bg-[#f7f7f8]">
      <img
        src="/images/footerimage.webp"
        alt="FMS Footer"
        className="w-full h-auto block"
      />

      <div className="w-full bg-[#ff9900] px-7 md:px-10 lg:px-12 pt-10 pb-8">

        <div className="md:hidden">

          <details className="group border-b border-black/10">
            <summary className="list-none cursor-pointer h-16 flex items-center justify-between text-lg font-medium">
              PRODUCT

              <ChevronDown
                size={20}
                className="transition-transform duration-300 group-open:rotate-180"
              />
            </summary>

            <div className="pb-5 flex flex-col gap-3 text-[13px]">
              {productLinks.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          </details>

          <details className="group border-b border-black/10">
            <summary className="list-none cursor-pointer h-16 flex items-center justify-between text-lg font-medium">
              SUPPORT

              <ChevronDown
                size={20}
                className="transition-transform duration-300 group-open:rotate-180"
              />
            </summary>

            <div className="pb-5 flex flex-col gap-3 text-[13px]">
              {supportLinks.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          </details>

          <details className="group border-b border-black/10">
            <summary className="list-none cursor-pointer h-16 flex items-center justify-between text-lg font-medium">
              MORE ABOUT FMS

              <ChevronDown
                size={20}
                className="transition-transform duration-300 group-open:rotate-180"
              />
            </summary>

            <div className="pb-5 flex flex-col gap-3 text-[13px]">
              {moreAboutLinks.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          </details>

          <button className="w-full h-16 flex items-center justify-between text-lg font-medium border-b border-black/10">
            <span className="flex items-center gap-2">
              <Globe size={19} strokeWidth={1.8} />
              Choose Your Region
            </span>

            <ChevronDown size={20} />
          </button>

        </div>

        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          <div>
            <h2 className="text-lg font-medium mb-4">
              PRODUCT
            </h2>

            <div className="flex flex-col gap-3 text-[13px]">
              {productLinks.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">
              SUPORT
            </h2>

            <div className="flex flex-col gap-3 text-[13px]">
              {supportLinks.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">
              MORE ABOUT FMS
            </h2>

            <div className="flex flex-col gap-3 text-[13px]">
              {moreAboutLinks.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <button className="flex items-center gap-2 text-lg font-medium">
              <Globe size={19} strokeWidth={1.8} />
              Choose Your Region
            </button>

            <button className="flex items-center gap-2 mt-4 text-[13px]">
              Go to US/CA Website (USD)
            </button>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">

          <div>
            <h3 className="font-bold text-sm mb-4">
              Subscribe today and get 5% off your first purchase
            </h3>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-70 h-11 border border-black/20 rounded-md bg-transparent px-3 text-sm outline-none placeholder:text-black/80"
              />

              <button className="h-11 px-5 bg-[#ffad24] rounded-md text-sm hover:bg-[#ffb83d] transition">
                Subscribe
              </button>
            </div>
          </div>

          <div className="lg:flex lg:justify-end">
            <div className="lg:mr-50">
              <h3 className="font-bold text-sm mb-4">
                Follow us
              </h3>

              <div className="flex items-center gap-2">
                {socialIcons.map((Icon, index) => (
                  <a
                    href="#"
                    key={index}
                    className="w-6 h-6 rounded-full border border-black flex items-center justify-center"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-9">

          <div className="flex gap-4 flex-wrap">

            <div className="relative">

              <button
                onClick={() => {
                  setLanguageOpen(!languageOpen);
                  setCountryOpen(false);
                }}
                className="h-10 px-3 border border-black/20 rounded-md flex items-center gap-2 text-sm bg-transparent"
              >
                English
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    languageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {languageOpen && (
                <div className="absolute bottom-full left-0 mb-1 w-full min-w-100 bg-white border border-black/20 rounded-md overflow-hidden z-50">
                  <button
                    onClick={() => setLanguageOpen(false)}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    English
                  </button>
                </div>
              )}

            </div>

            <div className="relative">

              <button
                onClick={() => {
                  setCountryOpen(!countryOpen);
                  setLanguageOpen(false);
                }}
                className="h-10 px-3 border border-black/20 rounded-md flex items-center gap-2 text-sm bg-transparent"
              >
                United Kingdom
                <span>(GBP £)</span>

                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    countryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {countryOpen && (
                <div className="absolute bottom-full left-0 mb-1 w-full min-w-47.5 bg-white border border-black/20 rounded-md overflow-hidden z-50">
                  <button
                    onClick={() => setCountryOpen(false)}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    United Kingdom (GBP £)
                  </button>
                </div>
              )}

            </div>

          </div>

          <div className="flex justify-start sm:justify-end items-center">
            <div className="flex items-center gap-1.5 flex-wrap">
              {paymentIcons.map((Icon, index) => (
                <div
                  key={index}
                  className="w-8 h-6 flex items-center justify-center overflow-hidden"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>

        </div>

        <p className="text-xs mt-12">
          Copyright© 2026, FMS Model. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
