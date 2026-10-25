"use client";

import { Heart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  hoverImage?: string;
  badge?: string;
  stock: string;
  [key: string]: any;
}

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

const money = (price: number) => `£${(price || 0).toFixed(2)} GBP`;

export default function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
}: ProductCardProps) {
  if (!product) return null;

  return (
    <article className="min-w-0 text-left">
      <div
        className="relative group aspect-square w-full overflow-hidden rounded-md bg-white"
        style={{
          backgroundImage: `url("${product.image || '/images/placeholder.webp'}")`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {product.hoverImage && (
          <div
            className="absolute inset-0 cursor-pointer opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            style={{
              backgroundImage: `url("${product.hoverImage}")`,
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          />
        )}

        {product.badge && (
          <span className="absolute left-1 top-1 z-10 max-w-[85%] rounded-sm bg-orange-600 px-2 py-1 text-[10px] font-bold leading-tight text-white shadow">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          aria-label="Toggle wishlist"
          onClick={() => onToggleFavorite(product.id)}
          className="absolute right-1.5 top-1.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/95 text-gray-500 shadow-sm transition-colors hover:text-orange-500 cursor-pointer"
        >
          <Heart
            size={13}
            fill={isFavorite ? "red" : "none"}
            className={isFavorite ? "text-red-500" : ""}
          />
        </button>
      </div>

      <div className="mt-3 flex h-8 items-center gap-2 overflow-hidden">
        <img
          className="w-7 border rounded-full h-7 bg-gray-600 object-cover"
          src="/images/productpageimages/cardsmallimage1.webp"
          alt=""
        />
        <img
          className="w-7 border rounded-full h-7 bg-gray-600 object-cover"
          src="/images/productpageimages/cardsmallimage2.webp"
          alt=""
        />
        <img
          className="w-7 border rounded-full h-7 bg-gray-600 object-cover"
          src="/images/productpageimages/cardsmallimage3.webp"
          alt=""
        />
      </div>

      <h2 className="mt-4 line-clamp-2 min-h-8 sm:text-sm md:text-[14px] leading-normal text-gray-800">
        {product.name}
      </h2>

      <p
        className={`mt-0 flex items-center gap-1 text-[12px] font-semibold ${
          product.stock === "In stock" ? "text-emerald-600" : "text-orange-500"
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
  );
}