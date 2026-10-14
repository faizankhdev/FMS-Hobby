
"use client";

import { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
} from "lucide-react";
import {
  products,
  saleFilters,
  VihicletypeData,
  completionFilters,
  scaleFilters,
  brandFilters,
  seriesFilters,
} from "@/constant/ProductPageData";

const money = (price: number) => `£${price.toFixed(2)} GBP`;

const Page = () => {
  const [openFilters, setOpenFilters] = useState<Record<string, boolean>>({
    Price: true,
    "On Sale": true,
    "Vehicle Type": true,
    "Vehicle Completion Level": true,
    "Vehicle Scale": true,
    "Vehicle Licensed Brand": true,
    "Vehicle Series": true,
  });

  const [minPrice, setMinPrice] = useState("9.99");
  const [maxPrice, setMaxPrice] = useState("535.99");
  const [appliedMin, setAppliedMin] = useState(9.99);
  const [appliedMax, setAppliedMax] = useState(535.99);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("Recommended");
  const [favorites, setFavorites] = useState<number[]>([]);

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
        : [...current, label]
    );
    setPage(1);
  };

  const filteredProducts = useMemo(() => {
    let result = products.filter(
      (product) =>
        product.price >= appliedMin &&
        product.price <= appliedMax
    );

    const filterGroups = [
      {
        labels: selectedFilters.filter((label) =>
          VihicletypeData.some((item) => item.label === label)
        ),
        field: "vehicle",
      },
      {
        labels: selectedFilters.filter((label) =>
          completionFilters.some((item) => item.label === label)
        ),
        field: "completion",
      },
      {
        labels: selectedFilters.filter((label) =>
          scaleFilters.some((item) => item.label === label)
        ),
        field: "scale",
      },
      {
        labels: selectedFilters.filter((label) =>
          brandFilters.some((item) => item.label === label)
        ),
        field: "brand",
      },
      {
        labels: selectedFilters.filter((label) =>
          seriesFilters.some((item) => item.label === label)
        ),
        field: "series",
      },
    ];

    for (const group of filterGroups) {
      if (group.labels.length) {
        result = result.filter((product) =>
          group.labels.includes(
            product[group.field as keyof typeof product] as string
          )
        );
      }
    }

    const selectedSales = selectedFilters.filter((label) =>
      saleFilters.some((item) => item.label === label)
    );

    if (selectedSales.length) {
      result = result.filter((product) => {
        if (product.oldPrice === undefined) return false;

        const discount = product.oldPrice - product.price;

        return selectedSales.some((label) => {
          const amount = Number(label.match(/\d+/)?.[0] ?? 0);
          return Math.round(discount) === amount;
        });
      });
    }

    if (sort === "Price: Low to High") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "Price: High to Low") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sort === "Name: A to Z") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [appliedMin, appliedMax, selectedFilters, sort]);

  const pageSize = 18;
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / pageSize)
  );

  const visibleProducts = filteredProducts.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const clearFilters = () => {
    setSelectedFilters([]);
    setMinPrice("9.99");
    setMaxPrice("535.99");
    setAppliedMin(9.99);
    setAppliedMax(535.99);
    setPage(1);
  };

  const applyPrice = () => {
    const min = minPrice.trim() === "" ? 0 : Number(minPrice);
    const max = maxPrice.trim() === "" ? Infinity : Number(maxPrice);

    if (
      !Number.isFinite(min) ||
      min < 0 ||
      Number.isNaN(max) ||
      max < min
    ) {
      return;
    }

    setAppliedMin(min);
    setAppliedMax(max);
    setPage(1);
  };

  const renderFilterSection = (
    title: string,
    items: { label: string; count: number }[]
  ) => (
    <section className="border-b border-gray-200 py-3">
      <button
        type="button"
        onClick={() => toggleSection(title)}
        className="flex w-full items-center justify-between text-left font-bold"
      >
        <span>{title}</span>
        {openFilters[title] ? (
          <ChevronDown size={14} />
        ) : (
          <ChevronRight size={14} />
        )}
      </button>

      {openFilters[title] && (
        <div className="mt-3 space-y-2">
          {items.map((item) => (
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
              <span className="text-gray-500">
                {products.filter((product) => {
                  if (VihicletypeData.some((i) => i.label === item.label))
                    return product.vehicle === item.label;

                  if (completionFilters.some((i) => i.label === item.label))
                    return product.completion === item.label;

                  if (scaleFilters.some((i) => i.label === item.label))
                    return product.scale === item.label;

                  if (brandFilters.some((i) => i.label === item.label))
                    return product.brand === item.label;

                  if (seriesFilters.some((i) => i.label === item.label))
                    return product.series === item.label;

                  if (saleFilters.some((i) => i.label === item.label)) {
                    if (product.oldPrice === undefined) return false;

                    return (
                      Math.round(product.oldPrice - product.price) ===
                      Number(item.label.match(/\\d+/)?.[0] ?? 0)
                    );
                  }

                  return false;
                }).length}
              </span>
            </label>
          ))}
        </div>
      )}
    </section>
  );

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-3 pb-20 text-black sm:px-5 lg:px-6">
      <div className="pt-5 text-center">
        <h1 className="text-[30px] font-extrabold leading-tight sm:text-[36px]">
          All RC Models
        </h1>
        <p className="mt-4 text-[12px] text-gray-600">
          Use the filter menu to find your desired model.
        </p>
      </div>

      <div className="mt-10 flex items-start gap-5 lg:gap-6">
        <aside className="w-70 shrink-0 text-left max-lg:w-[220px] max-md:w-[180px] max-sm:w-[135px]">
          <section className="border-b border-gray-200 py-3">
            <button
              type="button"
              onClick={() => toggleSection("Price")}
              className="flex w-full items-center justify-between text-sm font-bold"
            >
              Price
              {openFilters.Price ? (
                <ChevronDown size={14} />
              ) : (
                <ChevronRight size={14} />
              )}
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
        </aside>

        <section className="min-w-0 flex-1">
          <div className="mb-3 flex flex-wrap items-center justify-end gap-2 text-[11px] text-gray-700">
            <span>{filteredProducts.length} items</span>
            <label className="flex items-center gap-1">
              Sort:
              <select
                value={sort}
                onChange={(event) => {
                  setSort(event.target.value);
                  setPage(1);
                }}
                className="max-w-[140px] bg-transparent font-medium outline-none"
              >
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A to Z</option>
              </select>
            </label>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-4 lg:gap-y-6">
              {visibleProducts.map((product) => (
                <article key={product.id} className="group min-w-0 text-left">
                  <div
                    className="relative aspect-square w-full overflow-hidden rounded-md bg-white"
                    style={{
                      backgroundImage: `url("${product.image}")`,
                      backgroundPosition: "center",
                      backgroundSize: "100% 100%",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                      style={{
                        backgroundImage: `url("${product.hoverImage}")`,
                        backgroundPosition: "center",
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                      }}
                    />

                    {product.badge && (
                      <span className="absolute left-1 top-1 z-10 max-w-[85%] rounded-sm bg-orange-500 px-1 py-0.5 text-[8px] font-bold leading-tight text-white">
                        {product.badge}
                      </span>
                    )}

                    <button
                      type="button"
                      aria-label="Toggle wishlist"
                      onClick={() =>
                        setFavorites((current) =>
                          current.includes(product.id)
                            ? current.filter((id) => id !== product.id)
                            : [...current, product.id]
                        )
                      }
                      className="absolute right-1.5 top-1.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/95 text-gray-500 shadow-sm transition-colors hover:text-orange-500"
                    >
                      <Heart
                        size={13}
                        fill={
                          favorites.includes(product.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>
                  </div>

                  <div className="mt-2 flex h-4 items-center gap-1 overflow-hidden">
                    <span className="text-[9px]">🚙</span>
                    <span className="text-[9px]">🚗</span>
                    <span className="text-[9px]">🚙</span>
                  </div>

                  <h2 className="mt-1 line-clamp-2 min-h-8 text-[10px] leading-[1.5] text-gray-800 sm:text-[11px]">
                    {product.name}
                  </h2>

                  <p
                    className={`mt-1 flex items-center gap-1 text-[10px] font-semibold ${
                      product.stock === "In stock"
                        ? "text-emerald-600"
                        : "text-orange-500"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {product.stock}
                  </p>

                  <div className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-1">
                    <span className="text-[11px] font-bold text-red-600">
                      {money(product.price)}
                    </span>
                    {product.oldPrice !== undefined && (
                      <span className="text-[9px] text-gray-500 line-through">
                        {money(product.oldPrice)}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex min-h-52 flex-col items-center justify-center text-center">
              <p className="text-sm font-semibold">No products found</p>
              <p className="mt-2 text-xs text-gray-500">
                Try changing your filters or price range.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-3 text-xs text-orange-600 underline"
              >
                Clear filters
              </button>
            </div>
          )}

          {filteredProducts.length > 0 && (
            <nav
              aria-label="Product pagination"
              className="mt-8 flex items-center justify-center gap-1.5"
            >
              <button
                type="button"
                aria-label="Previous page"
                disabled={page === 1}
                onClick={() => {
                  setPage((current) => Math.max(1, current - 1));
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex h-7 w-7 items-center justify-center rounded-full text-gray-600 hover:bg-gray-200 disabled:opacity-30"
              >
                <ChevronLeft size={15} />
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1)
                .filter(
                  (number) =>
                    number === 1 ||
                    number === totalPages ||
                    Math.abs(number - page) <= 1
                )
                .map((number, index, array) => (
                  <span key={number} className="contents">
                    {index > 0 && array[index - 1] !== number - 1 && (
                      <span className="px-1 text-xs text-gray-500">...</span>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setPage(number);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-xs ${
                        page === number
                          ? "bg-amber-500 font-bold text-black"
                          : "text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {number}
                    </button>
                  </span>
                ))}

              <button
                type="button"
                aria-label="Next page"
                disabled={page === totalPages}
                onClick={() => {
                  setPage((current) => Math.min(totalPages, current + 1));
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-black hover:bg-amber-600 disabled:opacity-30"
              >
                <ChevronRight size={15} />
              </button>
            </nav>
          )}
        </section>
      </div>
    </main>
  );
};

export default Page;
