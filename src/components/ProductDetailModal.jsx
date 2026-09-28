import React, { useState, useEffect } from 'react';
import { 
  X, 
  Layers, 
  Heart, 
  ShoppingBag, 
  Minus, 
  Plus, 
  ShieldCheck, 
  Flame, 
  AlertCircle, 
  Info, 
  Check, 
  Sparkles, 
  Truck,
  RotateCcw,
  CreditCard,
  Zap
} from 'lucide-react';
import { soundEngine } from '../utils/audio';
import { formatINR } from '../utils/currencyUtils';
import { estimatePincodeDelivery } from '../utils/pincodeUtils';
import { ARCHIVE_FALLBACK_IMAGE } from '../data/products';

export default function ProductDetailModal({ 
  product, 
  isOpen, 
  onClose, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted, 
  user, 
  onOpenCostModal 
}) {
  if (!isOpen || !product) return null;

  const isElectronics = product.department === 'electronics' || product.category === 'appliances';
  const isShoe = product.category === 'shoes' || product.subCategory === 'slides';

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [stageImgSrc, setStageImgSrc] = useState(product.images?.[0] || product.image || ARCHIVE_FALLBACK_IMAGE);
  const [selectedSize, setSelectedSize] = useState(
    isElectronics 
      ? (product.sizes?.[0] || 'Standard Unit') 
      : product.sizes?.length === 1 ? product.sizes[0] : ''
  );
  const [selectedSilhouette, setSelectedSilhouette] = useState(
    product.silhouettes?.[0]?.name || (isElectronics ? 'Technical Appliance' : 'Architectural Standard')
  );
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);
  const [hoveredSize, setHoveredSize] = useState(null);

  // 6-digit Indian PIN Code state
  const [pincodeInput, setPincodeInput] = useState('560001'); // default Bengaluru
  const [pincodeEstimate, setPincodeEstimate] = useState(() => estimatePincodeDelivery('560001'));
  const [pincodeError, setPincodeError] = useState('');

  // Sync user's saved fit preference if available
  useEffect(() => {
    if (user?.fitPreference && product.silhouettes) {
      const match = product.silhouettes.find(s => 
        s.name.toLowerCase().includes(user.fitPreference.toLowerCase()) ||
        user.fitPreference.toLowerCase().includes(s.name.toLowerCase())
      );
      if (match) {
        setSelectedSilhouette(match.name);
      }
    }
  }, [user, product]);

  useEffect(() => {
    setStageImgSrc(product?.images?.[activeImageIdx] || product?.image || ARCHIVE_FALLBACK_IMAGE);
  }, [activeImageIdx, product]);

  // Reset state when product changes
  useEffect(() => {
    setActiveImageIdx(0);
    setStageImgSrc(product?.images?.[0] || product?.image || ARCHIVE_FALLBACK_IMAGE);
    setSelectedSize(
      isElectronics 
        ? (product.sizes?.[0] || 'Standard Unit') 
        : product.sizes?.length === 1 ? product.sizes[0] : ''
    );
    setQuantity(1);
    setSizeError(false);
    if (product.silhouettes?.[0]) {
      setSelectedSilhouette(product.silhouettes[0].name);
    }
  }, [product, isElectronics]);

  const handleSelectSize = (size) => {
    soundEngine.playPill();
    setSelectedSize(size);
    setSizeError(false);
  };

  const handleSelectSilhouette = (sil) => {
    soundEngine.playPill();
    setSelectedSilhouette(sil);
  };

  const handleQuantityDelta = (delta) => {
    const next = quantity + delta;
    if (next >= 1 && next <= 10) {
      soundEngine.playTick();
      setQuantity(next);
    }
  };

  const handlePincodeCheck = (e) => {
    e.preventDefault();
    soundEngine.playClick();
    const result = estimatePincodeDelivery(pincodeInput);
    if (result.isValid) {
      setPincodeEstimate(result);
      setPincodeError('');
    } else {
      setPincodeError(result.message);
    }
  };

  const handleAddAction = () => {
    const sizeToUse = isElectronics ? (selectedSize || product.sizes?.[0] || 'Standard Unit') : selectedSize;

    if (!sizeToUse) {
      soundEngine.playError();
      setSizeError(true);
      return;
    }

    soundEngine.playSuccess();
    onAddToCart({
      product,
      size: sizeToUse,
      silhouette: selectedSilhouette,
      quantity
    });
  };

  const currentSilhouetteObj = product.silhouettes?.find(s => s.name === selectedSilhouette);

  return (
    <div className="fixed inset-0 z-[75] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-[#121316]/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full sm:max-w-5xl md:max-w-6xl max-h-[92vh] sm:max-h-[94vh] bg-[#FAF9F5] border-t sm:border border-[#121316] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-4 sm:px-6 py-3 border-b border-[#E2E0D8] bg-[#F0EFEA] flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 truncate pr-2">
            <span className="font-mono-archive text-[10px] uppercase tracking-widest text-[#121316] font-bold shrink-0">
              {product.id.toUpperCase()}
            </span>
            <span className="text-[#7A7870] font-mono-archive text-xs shrink-0">/</span>
            <span className="font-mono-archive text-[10px] uppercase tracking-wider text-[#5A5955] truncate">
              {product.department === 'men' 
                ? "Men's Atelier" 
                : product.department === 'women' 
                  ? "Women's Atelier" 
                  : product.department === 'electronics'
                    ? "Electronics & Appliances"
                    : "Unisex Atelier"}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => {
                soundEngine.playClick();
                onToggleWishlist(product);
              }}
              className={`p-2 border transition-colors flex items-center gap-1 text-xs font-mono-archive min-h-[44px] ${
                isWishlisted 
                  ? 'border-red-600 bg-red-50 text-red-600' 
                  : 'border-[#E2E0D8] hover:border-[#121316] bg-[#FAF9F5] text-[#121316]'
              }`}
              title={isWishlisted ? "In Wishlist" : "Save to Wishlist"}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-600 text-red-600' : ''}`} />
              <span className="hidden sm:inline text-[10px] uppercase">
                {isWishlisted ? 'Saved' : 'Wishlist'}
              </span>
            </button>

            <button
              onClick={() => {
                soundEngine.playClick();
                onClose();
              }}
              className="p-2 border border-[#E2E0D8] hover:border-[#121316] bg-[#FAF9F5] hover:bg-[#F0EFEA] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close product detail"
            >
              <X className="w-4 h-4 text-[#121316]" />
            </button>
          </div>
        </div>

        {/* Modal Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          
          {/* Left Column: Gallery & Thumbnails */}
          <div className="lg:col-span-6 p-4 sm:p-6 lg:p-8 bg-[#F0EFEA]/60 border-b lg:border-b-0 lg:border-r border-[#E2E0D8] flex flex-col justify-between">
            {/* Main Stage Image */}
            <div className="relative aspect-[4/5] w-full bg-[#E2E0D8] overflow-hidden border border-[#E2E0D8]">
              <img
                src={stageImgSrc || ARCHIVE_FALLBACK_IMAGE}
                alt={`${product.title} view ${activeImageIdx + 1}`}
                onError={() => setStageImgSrc(ARCHIVE_FALLBACK_IMAGE)}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />

              {/* Scarcity badge overlay */}
              {product.scarcity <= 3 && (
                <div className="absolute top-3 left-3 bg-[#121316] text-[#FAF9F5] px-2.5 py-1 text-[10px] font-mono-archive tracking-wider uppercase flex items-center gap-1.5 shadow-md">
                  <Flame className="w-3 h-3 text-amber-400" />
                  <span>{product.scarcityLabel}</span>
                </div>
              )}

              {/* Angle Indicator */}
              <div className="absolute bottom-3 right-3 bg-[#FAF9F5]/90 border border-[#121316] px-2 py-0.5 text-[9px] font-mono-archive text-[#121316]">
                VIEW 0{activeImageIdx + 1} // 0{product.images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-2 sm:gap-3 mt-4 overflow-x-auto pb-1">
                {product.images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      soundEngine.playPill();
                      setActiveImageIdx(idx);
                    }}
                    className={`relative w-16 h-20 sm:w-20 sm:h-24 shrink-0 overflow-hidden border transition-all ${
                      activeImageIdx === idx 
                        ? 'border-[#121316] ring-1 ring-[#121316]' 
                        : 'border-[#E2E0D8] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Thumbnail ${idx + 1}`} 
                      onError={(e) => { e.target.src = ARCHIVE_FALLBACK_IMAGE; }}
                      className="w-full h-full object-cover" 
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Garment Specs, Sizing Matrix, Delivery Checker, Actions */}
          <div className="lg:col-span-6 p-5 sm:p-6 lg:p-8 flex flex-col justify-between space-y-5">
            <div className="space-y-5">
              
              {/* Title & Archival Pricing */}
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-[10px] font-mono-archive uppercase tracking-widest text-[#7A7870]">
                    Hub: {product.origin}
                  </span>
                  <span className="text-[#7A7870]">•</span>
                  <span className="text-[10px] font-mono-archive uppercase tracking-widest text-[#121316] font-semibold">
                    {product.weight}
                  </span>
                </div>

                <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#121316] tracking-tight">
                  {product.title}
                </h1>

                {/* Indian Price Stack with M.R.P. & Savings Tag */}
                <div className="flex items-baseline gap-3 mt-3 flex-wrap">
                  <span className="font-mono-archive text-2xl sm:text-3xl font-black text-[#121316]">
                    {formatINR(product.price)}
                  </span>
                  <span className="font-mono-archive text-base text-[#7A7870] line-through">
                    M.R.P. {formatINR(product.mrp)}
                  </span>
                  <span className="px-2.5 py-1 bg-[#121316] text-[#FAF9F5] text-xs font-mono-archive font-bold">
                    SAVE {product.discountPercent}%
                  </span>
                  <span className="text-[11px] font-mono-archive text-[#5A5955]">
                    (Inclusive of all taxes)
                  </span>
                </div>
              </div>

              {/* Garment / Specimen Description */}
              <p className="font-sans text-xs sm:text-sm text-[#484742] leading-relaxed">
                {product.description}
              </p>

              {/* 1. ADAPTIVE SIZING / TECHNICAL SPECIFICATION MATRIX */}
              {isElectronics ? (
                /* High-Tech Appliance & Electronics Specifications Card */
                <div className="p-4 border border-[#121316] bg-[#F0EFEA]/80 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-archive text-[11px] uppercase tracking-widest font-bold text-[#121316] flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-600" />
                      Engineering & Warranty Specifications
                    </span>
                    <span className="text-[10px] font-mono-archive text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 border border-emerald-300">
                      BIS CERTIFIED
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono-archive text-[#121316]">
                    <div className="p-2 bg-[#FAF9F5] border border-[#E2E0D8]">
                      <span className="text-[9px] uppercase text-[#7A7870] block">Operating Voltage</span>
                      <span className="font-bold">220V–240V AC 50Hz</span>
                    </div>
                    <div className="p-2 bg-[#FAF9F5] border border-[#E2E0D8]">
                      <span className="text-[9px] uppercase text-[#7A7870] block">Warranty Protection</span>
                      <span className="font-bold">2-Year Comprehensive</span>
                    </div>
                    <div className="p-2 bg-[#FAF9F5] border border-[#E2E0D8]">
                      <span className="text-[9px] uppercase text-[#7A7870] block">Energy Efficiency</span>
                      <span className="font-bold">High Star Inverter</span>
                    </div>
                    <div className="p-2 bg-[#FAF9F5] border border-[#E2E0D8]">
                      <span className="text-[9px] uppercase text-[#7A7870] block">Doorstep Setup</span>
                      <span className="font-bold text-emerald-800">Free Expert Demo</span>
                    </div>
                  </div>
                </div>
              ) : isShoe ? (
                /* UK/IND Shoe Sizing Matrix [6, 7, 8, 9, 10, 11] */
                <div className={`p-4 border transition-colors ${
                  sizeError 
                    ? 'border-[#A82B2B] bg-[#A82B2B]/5 animate-archival-shake' 
                    : 'border-[#E2E0D8] bg-[#F0EFEA]/40'
                }`}>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-archive text-[11px] uppercase tracking-widest font-bold text-[#121316]">
                        UK / IND Footwear Sizing Matrix
                      </span>
                      {sizeError && (
                        <span className="text-[10px] font-mono-archive text-[#A82B2B] font-semibold flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          Size Required
                        </span>
                      )}
                    </div>
                    <span className="font-mono-archive text-[10px] text-[#7A7870]">
                      {hoveredSize ? `Stock: ${product.scarcityLabel}` : 'Select UK/IND Size'}
                    </span>
                  </div>

                  <div className="grid grid-cols-6 gap-2">
                    {product.sizes.map((size) => {
                      const isSelected = selectedSize === size;
                      return (
                        <button
                          key={size}
                          type="button"
                          onClick={() => handleSelectSize(size)}
                          onMouseEnter={() => setHoveredSize(size)}
                          onMouseLeave={() => setHoveredSize(null)}
                          className={`py-3 px-2 text-xs font-mono-archive tracking-wider uppercase border transition-all text-center relative min-h-[44px] flex items-center justify-center ${
                            isSelected
                              ? 'bg-[#121316] text-[#FAF9F5] border-[#121316] font-bold shadow-md'
                              : 'bg-[#FAF9F5] text-[#121316] border-[#E2E0D8] hover:border-[#121316] hover:bg-[#F0EFEA]'
                          }`}
                        >
                          UK {size}
                        </button>
                      );
                    })}
                  </div>

                  {sizeError && (
                    <p className="font-mono-archive text-[10px] text-[#A82B2B] mt-2.5">
                      * Please select your UK/IND shoe size to verify atelier stock.
                    </p>
                  )}
                </div>
              ) : (
                /* Apparel Sizing Matrix (S, M, L, XL, XXL) */
                <div className={`p-4 border transition-colors ${
                  sizeError 
                    ? 'border-[#A82B2B] bg-[#A82B2B]/5 animate-archival-shake' 
                    : 'border-[#E2E0D8] bg-[#F0EFEA]/40'
                }`}>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-archive text-[11px] uppercase tracking-widest font-bold text-[#121316]">
                        Apparel Standard Size Matrix (S–XXL)
                      </span>
                      {sizeError && (
                        <span className="text-[10px] font-mono-archive text-[#A82B2B] font-semibold flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          Size Required
                        </span>
                      )}
                    </div>
                    <span className="font-mono-archive text-[10px] text-[#7A7870]">
                      {hoveredSize ? `Stock: ${product.scarcityLabel}` : 'Select to Reserve'}
                    </span>
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    {product.sizes.map((size) => {
                      const isSelected = selectedSize === size;
                      return (
                        <button
                          key={size}
                          type="button"
                          onClick={() => handleSelectSize(size)}
                          onMouseEnter={() => setHoveredSize(size)}
                          onMouseLeave={() => setHoveredSize(null)}
                          className={`py-3 px-2 text-xs font-mono-archive tracking-wider uppercase border transition-all text-center relative min-h-[44px] flex items-center justify-center ${
                            isSelected
                              ? 'bg-[#121316] text-[#FAF9F5] border-[#121316] font-bold shadow-md'
                              : 'bg-[#FAF9F5] text-[#121316] border-[#E2E0D8] hover:border-[#121316] hover:bg-[#F0EFEA]'
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>

                  {sizeError && (
                    <p className="font-mono-archive text-[10px] text-[#A82B2B] mt-2.5">
                      * Please select an apparel size before reserving in your trunk.
                    </p>
                  )}
                </div>
              )}

              {/* 2. 6-DIGIT INDIAN PINCODE & BLUEDART EXPRESS DELIVERY CHECKER */}
              <div className="p-4 bg-[#F0EFEA] border border-[#E2E0D8] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono-archive text-[10px] uppercase tracking-widest text-[#121316] font-bold flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5" />
                    Indian Express Delivery & Pincode Checker
                  </span>
                  <span className="text-[10px] font-mono-archive text-emerald-800 font-semibold">
                    BLUEDART AIR
                  </span>
                </div>

                <form onSubmit={handlePincodeCheck} className="flex gap-2">
                  <input
                    type="text"
                    maxLength={6}
                    value={pincodeInput}
                    onChange={(e) => setPincodeInput(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter 6-digit PIN"
                    className="flex-1 px-3 py-2 bg-[#FAF9F5] border border-[#E2E0D8] focus:border-[#121316] text-xs font-mono-archive text-[#121316] focus:outline-none min-h-[40px]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#121316] text-[#FAF9F5] font-mono-archive text-xs uppercase tracking-wider hover:bg-[#303136] transition-colors min-h-[40px] font-semibold"
                  >
                    Verify
                  </button>
                </form>

                {pincodeError && (
                  <p className="text-[10px] font-mono-archive text-[#A82B2B]">
                    {pincodeError}
                  </p>
                )}

                {pincodeEstimate && pincodeEstimate.isValid && (
                  <div className="text-[11px] font-mono-archive space-y-1 pt-1 border-t border-[#E2E0D8]/80 text-[#5A5955]">
                    <div className="flex justify-between font-medium text-[#121316]">
                      <span>Dispatch Status:</span>
                      <span className="text-emerald-800">{pincodeEstimate.badgeText}</span>
                    </div>
                    <p className="text-[10px] text-[#7A7870] leading-snug">
                      {pincodeEstimate.statusText}
                    </p>
                  </div>
                )}
              </div>

              {/* 3. PAYMENT TRUST BADGES (Monochrome Editorial Markers) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-2 border-y border-[#E2E0D8]">
                <div className="p-2.5 bg-[#FAF9F5] border border-[#E2E0D8] text-center space-y-1">
                  <CreditCard className="w-3.5 h-3.5 mx-auto text-[#121316]" />
                  <p className="font-mono-archive text-[9px] uppercase tracking-wider font-bold text-[#121316]">
                    Verified UPI & NetBanking
                  </p>
                  <p className="text-[8px] text-[#7A7870]">GPay, PhonePe, Paytm</p>
                </div>

                <div className="p-2.5 bg-[#FAF9F5] border border-[#E2E0D8] text-center space-y-1">
                  <ShieldCheck className="w-3.5 h-3.5 mx-auto text-[#121316]" />
                  <p className="font-mono-archive text-[9px] uppercase tracking-wider font-bold text-[#121316]">
                    Zero Hidden Taxes
                  </p>
                  <p className="text-[8px] text-[#7A7870]">Inclusive of 12% GST</p>
                </div>

                <div className="p-2.5 bg-[#FAF9F5] border border-[#E2E0D8] text-center space-y-1">
                  <RotateCcw className="w-3.5 h-3.5 mx-auto text-[#121316]" />
                  <p className="font-mono-archive text-[9px] uppercase tracking-wider font-bold text-[#121316]">
                    7-Day Atelier Return
                  </p>
                  <p className="text-[8px] text-[#7A7870]">Doorstep Pickup Guarantee</p>
                </div>
              </div>

              {/* Quantity Selector & Cost Ledger Trigger */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870]">
                    Quantity:
                  </span>
                  <div className="flex items-center border border-[#121316] bg-[#FAF9F5] min-h-[44px]">
                    <button
                      type="button"
                      onClick={() => handleQuantityDelta(-1)}
                      disabled={quantity <= 1}
                      className="px-3 py-2 hover:bg-[#F0EFEA] transition-colors disabled:opacity-30 min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-10 text-center font-mono-archive text-xs font-bold text-[#121316]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleQuantityDelta(1)}
                      disabled={quantity >= 10}
                      className="px-3 py-2 hover:bg-[#F0EFEA] transition-colors disabled:opacity-30 min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {product.costArchitecture && (
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      onOpenCostModal(product);
                    }}
                    className="flex items-center gap-1.5 text-[11px] font-mono-archive text-[#121316] underline decoration-dotted underline-offset-4 hover:opacity-80 transition-opacity min-h-[44px]"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Cost Architecture (35/30/15/20)</span>
                  </button>
                )}
              </div>

              {/* Craftsmanship & Specifications */}
              <div className="border-t border-[#E2E0D8] pt-3 space-y-1.5 text-xs text-[#5A5955]">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#121316] shrink-0 mt-0.5" />
                  <p><strong className="text-[#121316]">Craftsmanship:</strong> {product.craftsmanship}</p>
                </div>
                <div className="flex items-start gap-2">
                  <Truck className="w-3.5 h-3.5 text-[#121316] shrink-0 mt-0.5" />
                  <p><strong className="text-[#121316]">Logistics:</strong> {product.carbonOffset}</p>
                </div>
              </div>

            </div>

            {/* Bottom Actions: Add to Trunk (min 48px height) */}
            <div className="pt-4 border-t border-[#E2E0D8] flex gap-3">
              <button
                type="button"
                onClick={handleAddAction}
                className="flex-1 py-3.5 px-4 bg-[#121316] hover:bg-[#2A2B30] text-[#FAF9F5] font-mono-archive text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2 shadow-lg min-h-[48px]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add To Trunk • {formatINR(product.price * quantity)}</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
