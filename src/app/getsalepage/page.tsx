"use client";

import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  SlidersHorizontal,
  X,
} from "lucide-react";
import {
  products,
  saleFilters,
  completionFilters,
  scaleFilters,
  brandFilters,
  seriesFilters,
} from "@/constant/ProductPageData";
import { ProductSidebar } from "@/components/ProductSidebar";
import Heading from "@/constant/Heading";

// Sirf is page ke liye Vehicle Type data (sirf Rock Crawlers aur Scale Trucks)
const bogoVehicleTypeData = [
  { label: "Rock Crawlers", count: 1 },
  { label: "Scale Trucks", count: 1 },
];

const money = (price: number) => `£${price.toFixed(2)} GBP`;

const Buy1Get1FreePage = () => {
  const [openFilters, setOpenFilters] = useState<Record<string, boolean>>({
    Price: true,
    "Vehicle Type": true,
    "Vehicle Completion Level": true,
    "Vehicle Scale": true,
    "Vehicle Licensed Brand": true,
    "Vehicle Series": true,
  });

  const [minPrice, setMinPrice] = useState("359.99");
  const [maxPrice, setMaxPrice] = useState("425.99");
  const [appliedMin, setAppliedMin] = useState(359.99);
  const [appliedMax, setAppliedMax] = useState(425.99);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [page, setPage] = useState(1);
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
    setPage(1);
  };

  const filteredProducts = useMemo(() => {
    let result = products.filter(
      (product) =>
        product.price >= appliedMin &&
        product.price <= appliedMax &&
        (product.name.includes("Toyota FJ40") || product.name.includes("Land Rover")),
    );

    if (result.length === 0 && appliedMin <= 359.99 && appliedMax >= 425.99) {
      result = products.slice(0, 2);
    }

    if (sort === "Price: Low to High") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "Price: High to Low") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sort === "Name: A to Z") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    // Pehle aur dusre card ko swap karne ka logic (index 0 aur index 1)
    if (result.length >= 2) {
      const temp = result[0];
      result[0] = result[1];
      result[1] = temp;
    }

    return result;
  }, [appliedMin, appliedMax, selectedFilters, sort]);

  const clearFilters = () => {
    setSelectedFilters([]);
    setMinPrice("359.99");
    setMaxPrice("425.99");
    setAppliedMin(359.99);
    setAppliedMax(425.99);
    setPage(1);
  };

  const applyPrice = () => {
    const min = minPrice.trim() === "" ? 0 : Number(minPrice);
    const max = maxPrice.trim() === "" ? Infinity : Number(maxPrice);

    if (!Number.isFinite(min) || min < 0 || Number.isNaN(max) || max < min) {
      return;
    }

    setAppliedMin(min);
    setAppliedMax(max);
    setPage(1);
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
      <div className="pt-5 text-center flex flex-col items-center justify-center">
        <Heading heading="Buy 1 Get 1 FREE RC Car" style={{ marginTop: "10px" }} />
        <p className="mt-2 text-xs sm:text-sm text-gray-600">
          Use the <span className="font-semibold text-black">filter menu</span> to find your desired model.
        </p>
      </div>

      <div className="mt-8 flex items-start gap-5 lg:gap-6">
        <aside className="hidden w-70 shrink-0 text-left max-lg:w-55 md:block">
          <ProductSidebar {...sidebarProps} />
        </aside>

        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-100 md:hidden">
            <button
              type="button"
              aria-label="Close filters"
              onClick={() => setMobileFiltersOpen(false)}
              className="absolute inset-0 h-full w-full bg-black/40"
            />

            <aside className="absolute inset-y-0 left-0 flex w-[85vw] max-w-85 flex-col overflow-y-auto bg-white px-4 pb-6 text-left shadow-xl z-10">
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white py-4">
                <h2 className="text-base font-bold">Filters</h2>
                <button
                  type="button"
                  aria-label="Close filters"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="flex h-8 w-8 items-center justify-center"
                >
                  <X size={20} />
                </button>
              </div>

              <ProductSidebar {...sidebarProps} />

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="mt-5 h-10 w-full rounded-sm bg-amber-500 text-sm font-semibold hover:bg-amber-600"
              >
                Show {filteredProducts.length} items
              </button>
            </aside>
          </div>
        )}

        <section className="min-w-0 flex-1">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-700 bg-transparent py-1">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="flex h-8 items-center gap-1.5 rounded-sm border border-gray-300 bg-white px-2.5 text-xs md:hidden"
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

            <label className="flex items-center gap-1 font-medium">
              Sort:
              <select
                value={sort}
                onChange={(event) => {
                  setSort(event.target.value);
                  setPage(1);
                }}
                className="bg-transparent font-bold outline-none cursor-pointer"
              >
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A to Z</option>
              </select>
            </label>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
              {filteredProducts.map((product) => (
                <article key={product.id} className="min-w-0 text-left">
                  <div
                    className="relative group aspect-square w-full overflow-hidden rounded-xl bg-[#2b3828] shadow-sm"
                    style={{
                      backgroundImage: `url("${product.image}")`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {product.hoverImage && (
                      <div
                        className="absolute inset-0 cursor-pointer opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                        style={{
                          backgroundImage: `url("${product.hoverImage}")`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                    )}

                    <button
                      type="button"
                      aria-label="Toggle wishlist"
                      onClick={() =>
                        setFavorites((current) =>
                          current.includes(product.id)
                            ? current.filter((id) => id !== product.id)
                            : [...current, product.id],
                        )
                      }
                      className="absolute right-3 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-gray-500 shadow-sm transition-colors hover:text-orange-500"
                    >
                      <Heart
                        size={14}
                        fill={favorites.includes(product.id) ? "red" : "none"}
                        className={favorites.includes(product.id) ? "text-red-500" : ""}
                      />
                    </button>
                  </div>

                  <div className="mt-2.5 flex items-center gap-1.5">
                    <img className="w-4 h-4 rounded-full border border-gray-300 object-cover" src="/images/productpageimages/cardsmallimage1.webp" alt="" />
                    <img className="w-4 h-4 rounded-full border border-gray-300 object-cover" src="/images/productpageimages/cardsmallimage2.webp" alt="" />
                    <img className="w-4 h-4 rounded-full border border-gray-300 object-cover" src="/images/productpageimages/cardsmallimage3.webp" alt="" />
                  </div>

                  <h2 className="mt-2 line-clamp-2 text-xs sm:text-sm font-semibold leading-snug text-gray-800">
                    {product.name}
                  </h2>

                  <div className="mt-1 flex items-center gap-1 text-[11px] text-amber-500">
                    <span>★★★★★</span>
                    <span className="text-gray-400 text-[10px]">(11)</span>
                  </div>

                  <p className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {product.stock}
                  </p>

                  <div className="mt-1">
                    <span className="text-xs sm:text-sm font-extrabold text-red-600">
                      {money(product.price)}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex min-h-52 flex-col items-center justify-center text-center bg-white rounded-lg p-6 shadow-sm">
              <p className="text-base font-semibold">No products found</p>
              <p className="mt-1 text-xs text-gray-500">
                Try changing your filter range.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-3 rounded bg-amber-500 px-4 py-1.5 text-xs font-bold text-black"
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

export default Buy1Get1FreePage;