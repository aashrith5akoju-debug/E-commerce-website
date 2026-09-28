import React from 'react';
import { X, Layers, ShieldCheck, Compass, Sparkles } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function CostModal({ product, isOpen, onClose }) {
  if (!isOpen || !product) return null;

  const cost = product.costArchitecture || {
    rawMaterials: 35,
    artisanalAssembly: 30,
    logistics: 15,
    atelierMargin: 20,
    notes: "Transparent ethical production."
  };

  const rawDollar = ((cost.rawMaterials / 100) * product.price).toFixed(2);
  const assemblyDollar = ((cost.artisanalAssembly / 100) * product.price).toFixed(2);
  const logisticsDollar = ((cost.logistics / 100) * product.price).toFixed(2);
  const marginDollar = ((cost.atelierMargin / 100) * product.price).toFixed(2);

  return (
    <div className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#121316]/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full sm:max-w-lg bg-[#FAF9F5] border-t sm:border border-[#121316] p-5 sm:p-8 shadow-2xl animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#E2E0D8] pb-4 mb-6">
          <div>
            <span className="font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] block">
              {product.edition} • Ledger 04-A
            </span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#121316] tracking-tight mt-1">
              Transparent Cost Architecture
            </h3>
            <p className="font-sans text-xs text-[#5A5955] mt-1">
              {product.title} (${product.price}.00 Selling Price)
            </p>
          </div>
          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="p-2 border border-[#E2E0D8] hover:border-[#121316] hover:bg-[#F0EFEA] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close cost architecture modal"
          >
            <X className="w-4 h-4 text-[#121316]" />
          </button>
        </div>

        {/* Visual Segmented Progress Bar */}
        <div className="mb-6">
          <div className="text-[10px] font-mono-archive uppercase text-[#7A7870] tracking-wider mb-2 flex justify-between">
            <span>Production Cost Allocation</span>
            <span>100% Disclosure</span>
          </div>
          <div className="h-4 w-full flex border border-[#121316] overflow-hidden bg-[#E2E0D8]">
            <div 
              style={{ width: `${cost.rawMaterials}%` }} 
              className="bg-[#121316] h-full transition-all duration-500" 
              title={`Raw Materials: ${cost.rawMaterials}%`} 
            />
            <div 
              style={{ width: `${cost.artisanalAssembly}%` }} 
              className="bg-[#484742] h-full transition-all duration-500" 
              title={`Artisanal Assembly: ${cost.artisanalAssembly}%`} 
            />
            <div 
              style={{ width: `${cost.logistics}%` }} 
              className="bg-[#8E8C85] h-full transition-all duration-500" 
              title={`Logistics: ${cost.logistics}%`} 
            />
            <div 
              style={{ width: `${cost.atelierMargin}%` }} 
              className="bg-[#D5D3CB] h-full transition-all duration-500" 
              title={`Atelier Margin: ${cost.atelierMargin}%`} 
            />
          </div>
        </div>

        {/* Four Ledger Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="p-3 bg-[#F0EFEA] border border-[#E2E0D8]">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="flex items-center gap-1.5 font-medium text-[#121316]">
                <span className="w-2.5 h-2.5 bg-[#121316] inline-block" />
                Raw Materials
              </span>
              <span className="font-mono-archive font-bold text-[#121316]">{cost.rawMaterials}%</span>
            </div>
            <div className="flex justify-between text-[11px] text-[#7A7870] font-mono-archive">
              <span>Allocated</span>
              <span>${rawDollar}</span>
            </div>
          </div>

          <div className="p-3 bg-[#F0EFEA] border border-[#E2E0D8]">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="flex items-center gap-1.5 font-medium text-[#121316]">
                <span className="w-2.5 h-2.5 bg-[#484742] inline-block" />
                Artisanal Assembly
              </span>
              <span className="font-mono-archive font-bold text-[#121316]">{cost.artisanalAssembly}%</span>
            </div>
            <div className="flex justify-between text-[11px] text-[#7A7870] font-mono-archive">
              <span>Fair Living Wage</span>
              <span>${assemblyDollar}</span>
            </div>
          </div>

          <div className="p-3 bg-[#F0EFEA] border border-[#E2E0D8]">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="flex items-center gap-1.5 font-medium text-[#121316]">
                <span className="w-2.5 h-2.5 bg-[#8E8C85] inline-block" />
                Logistics & Offset
              </span>
              <span className="font-mono-archive font-bold text-[#121316]">{cost.logistics}%</span>
            </div>
            <div className="flex justify-between text-[11px] text-[#7A7870] font-mono-archive">
              <span>Carbon Neutral</span>
              <span>${logisticsDollar}</span>
            </div>
          </div>

          <div className="p-3 bg-[#F0EFEA] border border-[#E2E0D8]">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="flex items-center gap-1.5 font-medium text-[#121316]">
                <span className="w-2.5 h-2.5 bg-[#D5D3CB] inline-block border border-[#7A7870]" />
                Atelier Margin
              </span>
              <span className="font-mono-archive font-bold text-[#121316]">{cost.atelierMargin}%</span>
            </div>
            <div className="flex justify-between text-[11px] text-[#7A7870] font-mono-archive">
              <span>R&D & Reinvestment</span>
              <span>${marginDollar}</span>
            </div>
          </div>
        </div>

        {/* Provenance note */}
        <div className="bg-[#FAF9F5] border border-[#E2E0D8] p-3 text-xs text-[#5A5955] flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#121316] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#121316]">Provenance Guarantee:</strong> {cost.notes} Fabricated in small batches with full traceability of supply chain and certified non-toxic organic botanical dyes.
          </p>
        </div>

        {/* Action Button (min 44px) */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-3 bg-[#121316] text-[#FAF9F5] font-mono-archive text-xs uppercase tracking-widest hover:bg-[#303136] transition-colors min-h-[44px] flex items-center justify-center"
          >
            Acknowledge Ledger
          </button>
        </div>
      </div>
    </div>
  );
}
