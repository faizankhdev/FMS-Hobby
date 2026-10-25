"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import {
  saleFilters,
  VihicletypeData,
  completionFilters,
  scaleFilters,
  brandFilters,
  seriesFilters,
  products,
} from "@/constant/ProductPageData";

interface ProductSidebarProps {
  openFilters: Record<string, boolean>;
  toggleSection: (title: string) => void;
  minPrice: string;
  setMinPrice: (value: string) => void;
  maxPrice: string;
  setMaxPrice: (value: string) => void;
  applyPrice: () => void;
  selectedFilters: string[];
  toggleFilter: (label: string) => void;
  clearFilters: () => void;
}

export const ProductSidebar = ({
  openFilters,
  toggleSection,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  applyPrice,
  selectedFilters,
  toggleFilter,
  clearFilters,
}: ProductSidebarProps) => {
  const renderFilterSection = (
    title: string,
    items: { label: string; count: number }[],
  ) => (
    <section className="border-b border-gray-200 py-3" key={title}>
      <button
        type="button"
        onClick={() => toggleSection(title)}
        className="flex w-full items-center justify-between text-left font-bold"
      >
        <span>{title}</span>
        {openFilters[title] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
      </button>

      {openFilters[title] && (
        <div className="mt-3 space-y-2">
          {items.map((item) => {
            const count = products.filter((product) => {
              if (VihicletypeData.some((i) => i.label === item.label)) {
                return product.vehicle === item.label;
              }
              if (completionFilters.some((i) => i.label === item.label)) {
                return product.completion === item.label;
              }
              if (scaleFilters.some((i) => i.label === item.label)) {
                return product.scale === item.label;
              }
              if (brandFilters.some((i) => i.label === item.label)) {
                return product.brand === item.label;
              }
              if (seriesFilters.some((i) => i.label === item.label)) {
                return product.series === item.label;
              }
              if (saleFilters.some((i) => i.label === item.label)) {
                if (product.oldPrice === undefined) return false;
                return (
                  Math.round(product.oldPrice - product.price) ===
                  Number(item.label.match(/\d+/)?.[0] ?? 0)
                );
              }
              return false;
            }).length;

            return (
              <label
                key={item.label}
                className="flex cursor-pointer items-center justify-between gap-2 text-sm text-gray-700"
              >
                <span className="flex min-w-0 items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(item.label)}
                    onChange={() => toggleFilter(item.label)}
                    className="h-3 w-3 shrink-0 accent-amber-500"
                  />
                  <span>{item.label}</span>
                </span>
                <span className="shrink-0 text-gray-500">{count}</span>
              </label>
            );
          })}
        </div>
      )}
    </section>
  );

  return (
    <>
      <section className="border-b border-gray-200 py-3">
        <button
          type="button"
          onClick={() => toggleSection("Price")}
          className="flex w-full items-center justify-between text-xl font-bold"
        >
          Price
          {openFilters.Price ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </button>

        {openFilters.Price && (
          <div className="mt-3">
            <div className="flex gap-2">
              <label className="flex h-8 min-w-0 flex-1 items-center border border-gray-400 px-1.5">
                <span className="mr-1 text-[10px] text-gray-500">£</span>
                <input
                  type="number"
                  min="0"
                  value={minPrice}
                  onChange={(event) => setMinPrice(event.target.value)}
                  className="w-full min-w-0 bg-transparent text-[10px] outline-none"
                />
              </label>

              <label className="flex h-8 min-w-0 flex-1 items-center border border-gray-400 px-1.5">
                <span className="mr-1 text-[10px] text-gray-500">£</span>
                <input
                  type="number"
                  min="0"
                  value={maxPrice}
                  onChange={(event) => setMaxPrice(event.target.value)}
                  className="w-full min-w-0 bg-transparent text-[10px] outline-none"
                />
              </label>
            </div>

            <button
              type="button"
              onClick={applyPrice}
              className="mt-2 h-8 w-full rounded-sm bg-amber-500 text-[11px] font-medium hover:bg-amber-600"
            >
              Confirm
            </button>
          </div>
        )}
      </section>

      {renderFilterSection("On Sale", saleFilters)}
      {renderFilterSection("Vehicle Type", VihicletypeData)}
      {renderFilterSection("Vehicle Completion Level", completionFilters)}
      {renderFilterSection("Vehicle Scale", scaleFilters)}
      {renderFilterSection("Vehicle Licensed Brand", brandFilters)}
      {renderFilterSection("Vehicle Series", seriesFilters)}

      {selectedFilters.length > 0 && (
        <button
          type="button"
          onClick={clearFilters}
          className="mt-4 text-xs text-orange-600 underline"
        >
          Clear all filters
        </button>
      )}
    </>
  );
};