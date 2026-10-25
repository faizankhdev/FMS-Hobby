"use client";

import { useMemo, useState } from "react";
import {
  SlidersHorizontal,
  X,
} from "lucide-react";
import {
  products,
} from "@/constant/ProductPageData";
import { ProductSidebar } from "@/components/ProductSidebar";
import ProductCard from "@/components/ProductCard";
import Heading from "@/constant/Heading";

const money = (price: number) => `£${price.toFixed(2)} GBP`;

const SalePage = () => {
  const [openFilters, setOpenFilters] = useState<Record<string, boolean>>({
    Price: true,
    "On Sale": true,
    "Vehicle Type": true,
    "Vehicle Completion Level": true,
    "Vehicle Scale": true,
    "Vehicle Licensed Brand": true,
    "Vehicle Series": true,
  });

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [appliedMin, setAppliedMin] = useState(0);
  const [appliedMax, setAppliedMax] = useState(Infinity);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sort, setSort] = useState("Recommended");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleSection = (title: string) => {
    setOpenFilters((current) => ({
      ...current,
      [title]: !current[title],
    }));
  };

  const toggleFilter = (label: string) => {
    setSelectedFilters((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label],
    );
  };

  // Filter products based on price, sidebar selections, sort order, and custom ID sequence
  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesPrice =
        product.price >= appliedMin && product.price <= appliedMax;

      if (!matchesPrice) return false;

      if (selectedFilters.length === 0) return true;

      return selectedFilters.some((filter) => {
        if (product.vehicle === filter) return true;
        if (product.completion === filter) return true;
        if (product.scale === filter) return true;
        if (product.brand === filter) return true;
        if (product.series === filter) return true;
        if (product.oldPrice !== undefined) {
          const diff = Math.round(product.oldPrice - product.price);
          if (filter.includes(String(diff))) return true;
        }
        return false;
      });
    });

    if (sort === "Price: Low to High") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "Price: High to Low") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sort === "Name: A to Z") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    // --- APNI MARZI SE CARDS KI TARTEEB SET KARNE KA TARIKA ---
    // Yahan product IDs ki sequence likhein jaisa aap cards ko aage-piche karna chahte hain:
    const customOrder = [18, 12, 16, 10, 14, 13,15, 17,8,8,8]; 

    result.sort((a, b) => {
      const indexA = customOrder.indexOf(a.id);
      const indexB = customOrder.indexOf(b.id);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

    return result.slice(0, 16);
  }, [appliedMin, appliedMax, selectedFilters, sort]);

  const clearFilters = () => {
    setSelectedFilters([]);
    setMinPrice("");
    setMaxPrice("");
    setAppliedMin(0);
    setAppliedMax(Infinity);
  };

  const applyPrice = () => {
    const min = minPrice.trim() === "" ? 0 : Number(minPrice);
    const max = maxPrice.trim() === "" ? Infinity : Number(maxPrice);

    if (!Number.isFinite(min) || min < 0 || Number.isNaN(max) || max < min) {
      return;
    }

    setAppliedMin(min);
    setAppliedMax(max);
  };

  const toggleFavorite = (id: number) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favId) => favId !== id)
        : [...current, id],
    );
  };

  const sidebarProps = {
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
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-3 pb-20 text-black sm:px-5 lg:px-6">
      {/* Top Heading */}
      <div className="pt-6 text-center flex flex-col items-center justify-center">
        <Heading heading="RC Car Sale" style={{ marginTop: "10px" }} />
        <p className="mt-2 text-xs sm:text-sm text-gray-600">
          Explore our exclusive RC car sales and limited-time offers.
        </p>
      </div>

      <div className="mt-8 flex items-start gap-6 lg:gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden w-64 shrink-0 text-left md:block">
          <ProductSidebar {...sidebarProps} />
        </aside>

        {/* Mobile Filters Drawer */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <button
              type="button"
              aria-label="Close filters"
              onClick={() => setMobileFiltersOpen(false)}
              className="absolute inset-0 h-full w-full bg-black/40 backdrop-blur-sm"
            />
            <aside className="absolute inset-y-0 left-0 flex w-[85vw] max-w-xs flex-col overflow-y-auto bg-white px-4 pb-6 text-left shadow-xl z-10">
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white py-4">
                <h2 className="text-base font-bold">Filters</h2>
                <button
                  type="button"
                  aria-label="Close filters"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="flex h-8 w-8 items-center justify-center text-gray-500 hover:text-black"
                >
                  <X size={20} />
                </button>
              </div>
              <ProductSidebar {...sidebarProps} />
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="mt-5 h-10 w-full rounded-md bg-amber-500 text-sm font-semibold text-black hover:bg-amber-600"
              >
                Show {filteredProducts.length} items
              </button>
            </aside>
          </div>
        )}

        {/* Right Product Grid Section */}
        <section className="min-w-0 flex-1">
          {/* Controls Bar */}
          <div className="mb-4 flex items-center justify-between gap-2 text-xs text-gray-700 bg-transparent py-1">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="flex h-8 items-center gap-1.5 rounded border border-gray-300 bg-white px-3 font-medium md:hidden"
            >
              <SlidersHorizontal size={14} />
              Filters
              {selectedFilters.length > 0 && (
                <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] text-black">
                  {selectedFilters.length}
                </span>
              )}
            </button>

            <span className="font-semibold text-gray-600 ml-auto md:ml-0">
              {filteredProducts.length} items
            </span>

            <label className="flex items-center gap-1.5 font-medium">
              Sort:
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent font-bold outline-none cursor-pointer"
              >
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A to Z</option>
              </select>
            </label>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isFavorite={favorites.includes(product.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          ) : (
            <div className="flex min-h-52 flex-col items-center justify-center text-center bg-white rounded-lg p-6 shadow-sm">
              <p className="text-base font-semibold">No products found</p>
              <p className="mt-1 text-xs text-gray-500">
                Try changing your filter range or clearing active filters.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-3 rounded bg-amber-500 px-4 py-1.5 text-xs font-bold text-black cursor-pointer"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default SalePage;