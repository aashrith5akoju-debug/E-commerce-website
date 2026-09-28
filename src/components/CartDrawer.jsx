import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Tag, 
  ShieldCheck, 
  Truck,
  CheckCircle2,
  Sparkles,
  CreditCard
} from 'lucide-react';
import { soundEngine } from '../utils/audio';
import { formatINR, FREE_SHIPPING_THRESHOLD_INR, STANDARD_SHIPPING_INR, calculateGSTIncluded } from '../utils/currencyUtils';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  promoCode,
  discountPercent,
  onApplyPromo,
  onRemovePromo,
  deliveryPoint
}) {
  const [voucherInput, setVoucherInput] = useState('');
  const [voucherError, setVoucherError] = useState('');

  if (!isOpen) return null;

  // Financial Calculations in INR
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD_INR || subtotal === 0;
  const shippingCost = isFreeShipping ? 0 : STANDARD_SHIPPING_INR;
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD_INR - subtotal);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD_INR) * 100));

  // Discount
  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);
  const gstAmount = calculateGSTIncluded(grandTotal);

  const handleApplyVoucher = (e) => {
    e.preventDefault();
    if (!voucherInput.trim()) return;

    if (voucherInput.trim().toUpperCase() === 'ARCHIVE25') {
      soundEngine.playSuccess();
      onApplyPromo('ARCHIVE25', 25);
      setVoucherInput('');
      setVoucherError('');
    } else {
      soundEngine.playError();
      setVoucherError('Invalid archive voucher code. Try "ARCHIVE25" for 25% discount.');
    }
  };

  return (
    <div className="fixed inset-0 z-[80] overflow-hidden">
      {/* Backdrop with soft blur */}
      <div 
        className="absolute inset-0 bg-[#121316]/50 backdrop-blur-sm transition-opacity"
        onClick={() => {
          soundEngine.playDrawer();
          onClose();
        }}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10 w-full sm:w-auto">
        <div className="w-full sm:w-screen sm:max-w-md bg-[#FAF9F5] border-l border-[#121316] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Drawer Header */}
          <div className="px-5 sm:px-6 py-4 border-b border-[#E2E0D8] bg-[#F0EFEA] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-4 h-4 text-[#121316]" />
              <h2 className="font-display font-bold text-base text-[#121316] tracking-tight">
                The Trunk // Archival Cart
              </h2>
              <span className="font-mono-archive text-[11px] bg-[#FAF9F5] px-2 py-0.5 border border-[#121316]">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)} Items
              </span>
            </div>

            <button
              onClick={() => {
                soundEngine.playDrawer();
                onClose();
              }}
              className="p-2 border border-[#E2E0D8] hover:border-[#121316] bg-[#FAF9F5] hover:bg-[#F0EFEA] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close Trunk"
            >
              <X className="w-4 h-4 text-[#121316]" />
            </button>
          </div>

          {/* Complimentary Bluedart Express Shipping Tracker (₹2,999 Threshold) */}
          <div className="px-5 sm:px-6 py-3 bg-[#FAF9F5] border-b border-[#E2E0D8]">
            <div className="flex items-center justify-between text-[11px] font-mono-archive mb-1.5">
              <span className="text-[#5A5955] flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#121316]" />
                {isFreeShipping ? (
                  <strong className="text-emerald-800 font-bold">Complimentary Bluedart Air Unlocked</strong>
                ) : (
                  <span>Add <strong>{formatINR(amountToFreeShipping)}</strong> for Free Express Air</span>
                )}
              </span>
              <span className="font-bold text-[#121316]">{freeShippingProgress}%</span>
            </div>

            {/* Architectural Progress Meter */}
            <div className="w-full h-1.5 bg-[#E2E0D8] overflow-hidden">
              <div 
                className="h-full bg-[#121316] transition-all duration-500 ease-out"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 divide-y divide-[#E2E0D8]">
            {cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-12 h-12 border border-[#121316] flex items-center justify-center mx-auto bg-[#F0EFEA]">
                  <ShoppingBag className="w-5 h-5 text-[#7A7870]" />
                </div>
                <p className="font-mono-archive text-xs uppercase tracking-widest text-[#7A7870]">
                  Trunk Is Empty
                </p>
                <p className="text-xs text-[#5A5955] max-w-xs mx-auto">
                  No textile specimens currently reserved. Explore the Indian handloom and audio archives.
                </p>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div key={`${item.product.id}-${item.size}-${item.silhouette}-${index}`} className="pt-4 first:pt-0 flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 sm:w-24 sm:h-28 bg-[#F0EFEA] border border-[#E2E0D8] overflow-hidden shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Detail Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display font-bold text-xs sm:text-sm text-[#121316] leading-snug line-clamp-1">
                          {item.product.title}
                        </h4>
                        <button
                          onClick={() => {
                            soundEngine.playClick();
                            onRemoveItem(index);
                          }}
                          className="text-[#7A7870] hover:text-[#A82B2B] transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 mt-1">
                        <span className="px-1.5 py-0.5 bg-[#F0EFEA] text-[9px] font-mono-archive uppercase text-[#121316] font-semibold border border-[#E2E0D8]">
                          Size: {item.size}
                        </span>
                        <span className="text-[9px] font-mono-archive text-[#5A5955] truncate max-w-[130px]">
                          {item.silhouette}
                        </span>
                      </div>
                    </div>

                    {/* Price & Quantity Adjuster */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#121316] bg-[#FAF9F5]">
                        <button
                          type="button"
                          onClick={() => {
                            soundEngine.playTick();
                            onUpdateQuantity(index, item.quantity - 1);
                          }}
                          className="px-2 py-1 hover:bg-[#F0EFEA] transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-mono-archive text-xs font-bold text-[#121316]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            soundEngine.playTick();
                            onUpdateQuantity(index, item.quantity + 1);
                          }}
                          className="px-2 py-1 hover:bg-[#F0EFEA] transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-mono-archive text-xs sm:text-sm font-bold text-[#121316]">
                          {formatINR(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer Ledger */}
          {cartItems.length > 0 && (
            <div className="p-5 sm:p-6 bg-[#F0EFEA] border-t border-[#E2E0D8] space-y-4">
              
              {/* Promo Voucher Form */}
              <div>
                {promoCode ? (
                  <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono-archive">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Code <strong>{promoCode}</strong> Active (-25%)</span>
                    </div>
                    <button
                      onClick={() => {
                        soundEngine.playClick();
                        onRemovePromo();
                      }}
                      className="text-[#A82B2B] hover:underline uppercase text-[10px] font-bold"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyVoucher} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-[#7A7870]" />
                      <input
                        type="text"
                        value={voucherInput}
                        onChange={(e) => setVoucherInput(e.target.value)}
                        placeholder="Voucher (try ARCHIVE25)"
                        className="w-full pl-9 pr-3 py-2 bg-[#FAF9F5] border border-[#E2E0D8] focus:border-[#121316] text-xs font-mono-archive text-[#121316] focus:outline-none min-h-[40px]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#121316] text-[#FAF9F5] font-mono-archive text-xs uppercase tracking-wider hover:bg-[#303136] transition-colors min-h-[40px]"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {voucherError && (
                  <p className="text-[10px] font-mono-archive text-[#A82B2B] mt-1">
                    {voucherError}
                  </p>
                )}
              </div>

              {/* Financial Ledger Breakdown */}
              <div className="space-y-1.5 font-mono-archive text-xs text-[#5A5955] border-t border-[#E2E0D8] pt-3">
                <div className="flex justify-between">
                  <span>Gross Subtotal:</span>
                  <span className="text-[#121316] font-medium">{formatINR(subtotal)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-bold">
                    <span>Archival Voucher (-25%):</span>
                    <span>-{formatINR(discountAmount)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Bluedart Air Dispatch:</span>
                  <span>{isFreeShipping ? 'FREE' : formatINR(shippingCost)}</span>
                </div>

                <div className="flex justify-between text-[10px] text-[#7A7870] pt-1">
                  <span>Taxes (Inclusive of 12% GST):</span>
                  <span>{formatINR(gstAmount)}</span>
                </div>

                <div className="flex justify-between text-sm font-black text-[#121316] border-t border-[#121316] pt-2 mt-2">
                  <span>Total Payable:</span>
                  <span className="font-mono-archive text-base">{formatINR(grandTotal)}</span>
                </div>
              </div>

              {/* Proceed to Checkout Action */}
              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  onProceedToCheckout();
                }}
                className="w-full py-3.5 bg-[#121316] hover:bg-[#2A2B30] text-[#FAF9F5] font-mono-archive text-xs uppercase tracking-widest font-bold transition-colors flex items-center justify-center gap-2 shadow-lg min-h-[48px]"
              >
                <span>Proceed To Secure Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono-archive text-[#7A7870]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
                <span>UPI, Cards & NetBanking • 100% Secure Checkout</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
