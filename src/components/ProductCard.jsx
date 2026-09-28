import React, { useState, useEffect } from 'react';
import { Layers, Eye, Plus, ArrowUpRight, Flame, Sparkles, Tag } from 'lucide-react';
import { soundEngine } from '../utils/audio';
import { formatINR } from '../utils/currencyUtils';
import { ARCHIVE_FALLBACK_IMAGE } from '../data/products';

export default function ProductCard({ 
  product, 
  onSelectProduct, 
  onQuickAdd, 
  onOpenCostModal 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [costTooltip, setCostTooltip] = useState(false);
  const [imgSrc, setImgSrc] = useState(product.images?.[0] || product.image || ARCHIVE_FALLBACK_IMAGE);

  useEffect(() => {
    setImgSrc(product.images?.[0] || product.image || ARCHIVE_FALLBACK_IMAGE);
  }, [product.id, product.image, product.images]);

  const cost = product.costArchitecture;
  const deptLabel = product.department === 'men' 
    ? "Men's Atelier" 
    : product.department === 'women' 
      ? "Women's Atelier" 
      : "Tech & Audio";

  return (
    <div 
      className="group relative bg-[#FAF9F5] border border-[#E2E0D8] hover:border-[#121316] transition-all duration-300 flex flex-col justify-between h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCostTooltip(false);
      }}
    >
      {/* Card Header Stamp */}
      <div className="px-3 sm:px-4 py-2 border-b border-[#E2E0D8] flex items-center justify-between text-[9px] sm:text-[10px] font-mono-archive text-[#7A7870] bg-[#F0EFEA]/60">
        <span className="tracking-widest uppercase font-semibold text-[#121316] truncate max-w-[120px]">
          {product.edition}
        </span>
        <span className="truncate max-w-[100px] sm:max-w-[130px] text-[#5A5955] hidden xs:inline">
          {product.origin.split(',')[0]}
        </span>
      </div>

      {/* Media Container with Asymmetric Aspect Ratio */}
      <div 
        onClick={() => {
          soundEngine.playClick();
          onSelectProduct(product);
        }}
        className={`relative overflow-hidden cursor-pointer bg-[#F0EFEA] ${
          product.aspect === 'portrait' ? 'aspect-[4/5]' : 'aspect-square'
        }`}
      >
        <img
          src={imgSrc}
          alt={product.title}
          loading="lazy"
          onError={() => setImgSrc(ARCHIVE_FALLBACK_IMAGE)}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[10%] group-hover:grayscale-0"
        />

        {/* Stock Urgency / Scarcity Badge */}
        {product.scarcity <= 3 && (
          <div className="absolute top-2.5 left-2.5 z-10 bg-[#121316] text-[#FAF9F5] px-2 py-0.5 text-[8px] sm:text-[9px] font-mono-archive tracking-wider uppercase flex items-center gap-1 shadow-md">
            <Flame className="w-2.5 h-2.5 text-amber-400 shrink-0" />
            <span className="truncate max-w-[110px] sm:max-w-none">{product.scarcityLabel}</span>
          </div>
        )}

        {/* Architectural Savings Tag [SAVE X%] */}
        <div className="absolute top-2.5 right-2.5 z-10 bg-[#FAF9F5] border border-[#121316] text-[#121316] px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-mono-archive font-bold tracking-wider shadow-md flex items-center gap-0.5">
          <span>SAVE {product.discountPercent}%</span>
        </div>

        {/* Department Floating Pill */}
        <div className="absolute bottom-2.5 left-2.5 z-10 bg-[#121316]/85 backdrop-blur-xs text-[#FAF9F5] px-1.5 sm:px-2 py-0.5 text-[8px] font-mono-archive uppercase tracking-widest hidden sm:inline-block">
          {deptLabel}
        </div>

        {/* Hover Quick Inspection Button Overlay */}
        <div className="absolute inset-0 bg-[#121316]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center p-4">
          <span className="px-3.5 py-2 bg-[#FAF9F5] text-[#121316] border border-[#121316] text-[11px] font-mono-archive uppercase tracking-widest flex items-center gap-1.5 shadow-xl">
            <Eye className="w-3.5 h-3.5" />
            Inspect Specimen
          </span>
        </div>
      </div>

      {/* Card Detail Information */}
      <div className="p-3 sm:p-4 md:p-5 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
        <div>
          {/* Category & Material Fabric Tags */}
          <div className="flex flex-wrap items-center gap-1.5 mb-1.5 sm:mb-2">
            <span className="px-1.5 sm:px-2 py-0.5 bg-[#F0EFEA] border border-[#E2E0D8] text-[8px] sm:text-[9px] font-mono-archive uppercase tracking-wider text-[#5A5955]">
              {product.category}
            </span>
            <span className="px-1.5 sm:px-2 py-0.5 bg-[#FAF9F5] border border-[#E2E0D8] text-[8px] sm:text-[9px] font-mono-archive text-[#121316] font-medium truncate max-w-[140px]">
              {product.weight}
            </span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => {
              soundEngine.playClick();
              onSelectProduct(product);
            }}
            className="font-display font-bold text-sm sm:text-base text-[#121316] tracking-tight leading-snug cursor-pointer hover:underline decoration-[#121316] decoration-1 underline-offset-4 line-clamp-2"
          >
            {product.title}
          </h3>

          {/* Distinct Indian Pricing Architecture */}
          <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-2 mt-2">
            <span className="font-mono-archive text-base sm:text-lg font-bold text-[#121316]">
              {formatINR(product.price)}
            </span>
            <span className="font-mono-archive text-[10px] sm:text-xs text-[#7A7870] line-through">
              M.R.P. {formatINR(product.mrp)}
            </span>
            <span className="text-[9px] font-mono-archive text-emerald-800 font-bold hidden xs:inline">
              [{product.discountPercent}% OFF]
            </span>
          </div>

          {/* UK/IND Sizing Indicator */}
          <div className="mt-1 text-[9px] font-mono-archive text-[#7A7870] truncate">
            Sizes: {product.sizes.join(' · ')}
          </div>
        </div>

        {/* Micro Cost Architecture Indicator with Hover Card */}
        {cost && (
          <div className="relative pt-2.5 border-t border-[#E2E0D8]">
            <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono-archive text-[#7A7870]">
              <button
                type="button"
                onMouseEnter={() => setCostTooltip(true)}
                onMouseLeave={() => setCostTooltip(false)}
                onClick={(e) => {
                  e.stopPropagation();
                  soundEngine.playClick();
                  onOpenCostModal(product);
                }}
                className="flex items-center gap-1 hover:text-[#121316] transition-colors underline decoration-dotted underline-offset-2 py-0.5 min-h-[28px]"
              >
                <Layers className="w-3 h-3 shrink-0" />
                <span className="truncate">Cost Architecture</span>
              </button>
              <span className="text-[#121316] font-semibold text-[8px] sm:text-[9px] shrink-0">
                AUDITED
              </span>
            </div>

            {/* Hover Micro-Modal Popover */}
            {costTooltip && (
              <div className="absolute bottom-full left-0 right-0 mb-2 p-3 bg-[#FAF9F5] border border-[#121316] shadow-xl z-30 animate-in fade-in zoom-in-95 duration-150">
                <p className="font-mono-archive text-[9px] uppercase tracking-widest text-[#121316] font-bold mb-1.5 flex items-center justify-between">
                  <span>Transparent Cost Ledger</span>
                  <span className="text-[#7A7870]">100% DISCLOSED</span>
                </p>
                <div className="h-2 w-full flex border border-[#121316] overflow-hidden mb-2">
                  <div style={{ width: `${cost.rawMaterials}%` }} className="bg-[#121316]" title="Raw Materials" />
                  <div style={{ width: `${cost.artisanalAssembly}%` }} className="bg-[#5A5955]" title="Artisanal Assembly" />
                  <div style={{ width: `${cost.logistics}%` }} className="bg-[#8E8C85]" title="Logistics" />
                  <div style={{ width: `${cost.atelierMargin}%` }} className="bg-[#D5D3CB]" title="Atelier Margin" />
                </div>
                <div className="grid grid-cols-2 gap-1 text-[9px] font-mono-archive text-[#5A5955]">
                  <span>Materials: {cost.rawMaterials}%</span>
                  <span>Assembly: {cost.artisanalAssembly}%</span>
                  <span>Logistics: {cost.logistics}%</span>
                  <span>Margin: {cost.atelierMargin}%</span>
                </div>
                <p className="text-[8px] text-[#7A7870] mt-1.5 border-t border-[#E2E0D8] pt-1">
                  Click to inspect full audit ledger
                </p>
              </div>
            )}
          </div>
        )}

        {/* Action Controls: Quick Add & View Details (min 44px touch targets) */}
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-1">
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onSelectProduct(product);
            }}
            className="py-2.5 px-2 bg-[#F0EFEA] hover:bg-[#E2E0D8] text-[#121316] border border-[#E2E0D8] hover:border-[#121316] font-mono-archive text-[10px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1 min-h-[44px]"
          >
            <span>Specs</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
          </button>

          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onQuickAdd(product);
            }}
            className="py-2.5 px-2 bg-[#121316] hover:bg-[#2A2B30] text-[#FAF9F5] border border-[#121316] font-mono-archive text-[10px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1 font-semibold min-h-[44px]"
          >
            <Plus className="w-3.5 h-3.5 shrink-0" />
            <span>Select Size</span>
          </button>
        </div>
      </div>
    </div>
  );
}
