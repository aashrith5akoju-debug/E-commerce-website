import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  CreditCard, 
  Smartphone, 
  FileText, 
  MapPin, 
  Truck, 
  ShieldCheck, 
  Lock, 
  Sparkles, 
  Printer,
  ChevronRight,
  ArrowLeft,
  QrCode
} from 'lucide-react';
import { soundEngine } from '../utils/audio';
import { formatINR, FREE_SHIPPING_THRESHOLD_INR, STANDARD_SHIPPING_INR, calculateGSTIncluded } from '../utils/currencyUtils';

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  deliveryPoint,
  user,
  promoCode,
  discountPercent,
  onOrderComplete
}) {
  if (!isOpen) return null;

  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi', 'card', 'invoice'
  const [upiId, setUpiId] = useState('patron@okhdfcbank');
  const [cardForm, setCardForm] = useState({
    number: '4242 •••• •••• 9104',
    name: user?.name || 'JULIAN VANCE',
    expiry: '11/29',
    cvv: '814'
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [orderSummary, setOrderSummary] = useState(null);

  // Computations in INR
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD_INR;
  const shippingCost = isFreeShipping ? 0 : STANDARD_SHIPPING_INR;
  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);
  const gstAmount = calculateGSTIncluded(grandTotal);

  const handleSelectPayment = (method) => {
    soundEngine.playPill();
    setPaymentMethod(method);
  };

  const handleProcessOrder = (e) => {
    e.preventDefault();
    soundEngine.playClick();
    setIsProcessing(true);

    // Simulate kinetic archival ledger processing
    setTimeout(() => {
      soundEngine.playSuccess();
      const generatedRef = `KA-IND-${Math.floor(10000 + Math.random() * 90000)}`;
      const completedOrder = {
        orderId: generatedRef,
        date: new Date().toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' }),
        dispatchWindow: "Within 24–48 Business Hours (Bluedart Air)",
        items: [...cartItems],
        subtotal,
        discountAmount,
        shippingCost,
        gstAmount,
        grandTotal,
        paymentMethod: paymentMethod === 'upi' ? `UPI [${upiId}]` : paymentMethod === 'card' ? 'Obsidian Card (RuPay/Visa)' : 'NetBanking Invoice',
        deliveryPoint,
        patron: user?.name || "Archival Patron"
      };

      setOrderSummary(completedOrder);
      setIsProcessing(false);
      setIsCompleted(true);
      if (onOrderComplete) onOrderComplete();
    }, 1800);
  };

  const handlePrintReceipt = () => {
    soundEngine.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-6 bg-[#121316]/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#FAF9F5] border border-[#121316] shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 sm:px-6 py-4 border-b border-[#E2E0D8] bg-[#F0EFEA] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#121316]" />
            <h2 className="font-display font-bold text-base text-[#121316] tracking-tight">
              {isCompleted ? "Atelier Acquisition Receipt" : "Kinetic Archival Ledger // Indian Dispatch"}
            </h2>
          </div>

          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="p-2 border border-[#E2E0D8] hover:border-[#121316] bg-[#FAF9F5] hover:bg-[#F0EFEA] transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label="Close Checkout"
          >
            <X className="w-4 h-4 text-[#121316]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8">
          {isCompleted && orderSummary ? (
            /* COMPLETED RECEIPT VIEW */
            <div className="max-w-2xl mx-auto space-y-6 animate-in zoom-in-95 duration-200">
              
              {/* Receipt Stamp Header */}
              <div className="text-center space-y-2 border-b border-[#121316] pb-6">
                <div className="w-12 h-12 bg-[#121316] text-[#FAF9F5] flex items-center justify-center mx-auto mb-3 shadow-md">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="font-mono-archive text-[10px] uppercase tracking-[0.25em] text-[#7A7870] block">
                  TRANSACTION VERIFIED // GST COMPLIANT
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#121316] tracking-tight">
                  ACQUISITION CONFIRMED
                </h3>
                <p className="font-mono-archive text-xs text-[#5A5955]">
                  Archival Reference: <strong className="text-[#121316]">{orderSummary.orderId}</strong>
                </p>
              </div>

              {/* Museum Ledger Summary Box */}
              <div className="p-5 sm:p-6 bg-[#F0EFEA] border border-[#121316] space-y-4 font-mono-archive text-xs">
                <div className="grid grid-cols-2 gap-4 border-b border-[#E2E0D8] pb-4">
                  <div>
                    <span className="text-[10px] uppercase text-[#7A7870] block">Patron:</span>
                    <span className="font-bold text-[#121316]">{orderSummary.patron}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#7A7870] block">Acquisition Date:</span>
                    <span className="font-bold text-[#121316]">{orderSummary.date}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#7A7870] block">Dispatch Route:</span>
                    <span className="font-bold text-[#121316]">Bluedart Express Air</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#7A7870] block">Settlement:</span>
                    <span className="font-bold text-[#121316]">{orderSummary.paymentMethod}</span>
                  </div>
                </div>

                {/* Destination Point */}
                <div className="border-b border-[#E2E0D8] pb-4">
                  <span className="text-[10px] uppercase text-[#7A7870] block mb-1">
                    Delivery Coordinates & PIN:
                  </span>
                  <p className="font-bold text-[#121316]">
                    {deliveryPoint?.street || "100 Feet Road, Indiranagar"}, {deliveryPoint?.city || "Bengaluru"} - {deliveryPoint?.postal || "560038"}
                  </p>
                  <span className="text-[10px] text-emerald-800 font-bold block mt-1">
                    ✓ Bluedart Air // Priority Express Transit
                  </span>
                </div>

                {/* Items Manifest */}
                <div className="space-y-2 border-b border-[#E2E0D8] pb-4">
                  <span className="text-[10px] uppercase text-[#7A7870] block">
                    Specimen Manifest ({orderSummary.items.length}):
                  </span>
                  {orderSummary.items.map((it, i) => (
                    <div key={i} className="flex justify-between items-center text-xs">
                      <span>
                        {it.product.title} (Size {it.size}) × {it.quantity}
                      </span>
                      <span className="font-bold">{formatINR(it.product.price * it.quantity)}</span>
                    </div>
                  ))}
                </div>

                {/* Financial Ledger */}
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-[#5A5955]">
                    <span>Subtotal:</span>
                    <span>{formatINR(orderSummary.subtotal)}</span>
                  </div>
                  {orderSummary.discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-800 font-bold">
                      <span>Archive Voucher Discount:</span>
                      <span>-{formatINR(orderSummary.discountAmount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#5A5955]">
                    <span>Express Dispatch:</span>
                    <span>{orderSummary.shippingCost === 0 ? 'FREE' : formatINR(orderSummary.shippingCost)}</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-[#7A7870]">
                    <span>Taxes (12% GST Included):</span>
                    <span>{formatINR(orderSummary.gstAmount)}</span>
                  </div>
                  <div className="flex justify-between text-base font-black text-[#121316] pt-2 border-t border-[#121316]">
                    <span>Total Settled:</span>
                    <span>{formatINR(orderSummary.grandTotal)}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={handlePrintReceipt}
                  className="flex-1 py-3 bg-[#FAF9F5] hover:bg-[#F0EFEA] text-[#121316] border border-[#121316] font-mono-archive text-xs uppercase tracking-widest flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Monograph Receipt</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    onClose();
                  }}
                  className="flex-1 py-3 bg-[#121316] hover:bg-[#2A2B30] text-[#FAF9F5] font-mono-archive text-xs uppercase tracking-widest flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <span>Return To Indian Archive</span>
                </button>
              </div>

            </div>
          ) : (
            /* ACTIVE CHECKOUT FORM */
            <form onSubmit={handleProcessOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Settlement & Address Confirmation */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* 1. Payment Method Selection */}
                <div>
                  <label className="block font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] mb-3">
                    Select Indian Settlement Channel
                  </label>

                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => handleSelectPayment('upi')}
                      className={`p-3 border text-left flex flex-col justify-between min-h-[54px] transition-all ${
                        paymentMethod === 'upi'
                          ? 'border-[#121316] bg-[#121316] text-[#FAF9F5]'
                          : 'border-[#E2E0D8] bg-[#F0EFEA] text-[#121316] hover:border-[#121316]'
                      }`}
                    >
                      <Smartphone className="w-4 h-4 mb-1" />
                      <span className="font-mono-archive text-xs font-bold">Instant UPI</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectPayment('card')}
                      className={`p-3 border text-left flex flex-col justify-between min-h-[54px] transition-all ${
                        paymentMethod === 'card'
                          ? 'border-[#121316] bg-[#121316] text-[#FAF9F5]'
                          : 'border-[#E2E0D8] bg-[#F0EFEA] text-[#121316] hover:border-[#121316]'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 mb-1" />
                      <span className="font-mono-archive text-xs font-bold">Obsidian Card</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectPayment('invoice')}
                      className={`p-3 border text-left flex flex-col justify-between min-h-[54px] transition-all ${
                        paymentMethod === 'invoice'
                          ? 'border-[#121316] bg-[#121316] text-[#FAF9F5]'
                          : 'border-[#E2E0D8] bg-[#F0EFEA] text-[#121316] hover:border-[#121316]'
                      }`}
                    >
                      <FileText className="w-4 h-4 mb-1" />
                      <span className="font-mono-archive text-xs font-bold">NetBanking</span>
                    </button>
                  </div>
                </div>

                {/* 2. Payment Details Inputs */}
                {paymentMethod === 'upi' ? (
                  <div className="p-4 bg-[#F0EFEA] border border-[#E2E0D8] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-archive text-[10px] uppercase tracking-widest text-[#121316] font-bold">
                        UPI VPA / QR Settlement
                      </span>
                      <span className="text-[10px] font-mono-archive text-emerald-800 font-bold flex items-center gap-1">
                        <QrCode className="w-3 h-3" />
                        Zero Surcharge
                      </span>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono-archive uppercase text-[#7A7870] mb-1">
                        Enter UPI ID (GPay / PhonePe / Paytm / BHIM)
                      </label>
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="e.g. mobile@upi or username@okhdfcbank"
                        className="w-full px-3 py-2.5 bg-[#FAF9F5] border border-[#E2E0D8] focus:border-[#121316] text-xs font-mono-archive text-[#121316] focus:outline-none min-h-[44px]"
                        required
                      />
                    </div>
                    <p className="text-[10px] font-mono-archive text-[#7A7870]">
                      * A secure UPI collect request will be sent to your primary UPI app upon authorization.
                    </p>
                  </div>
                ) : paymentMethod === 'card' ? (
                  <div className="p-4 bg-[#F0EFEA] border border-[#E2E0D8] space-y-3">
                    <div>
                      <label className="block text-[10px] font-mono-archive uppercase text-[#7A7870] mb-1">
                        Card Number (RuPay, Visa, Mastercard)
                      </label>
                      <input
                        type="text"
                        value={cardForm.number}
                        onChange={(e) => setCardForm({ ...cardForm, number: e.target.value })}
                        className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E2E0D8] text-xs font-mono-archive min-h-[40px]"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-mono-archive uppercase text-[#7A7870] mb-1">Expiry</label>
                        <input
                          type="text"
                          value={cardForm.expiry}
                          onChange={(e) => setCardForm({ ...cardForm, expiry: e.target.value })}
                          className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E2E0D8] text-xs font-mono-archive min-h-[40px]"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono-archive uppercase text-[#7A7870] mb-1">CVV</label>
                        <input
                          type="password"
                          maxLength={4}
                          value={cardForm.cvv}
                          onChange={(e) => setCardForm({ ...cardForm, cvv: e.target.value })}
                          className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E2E0D8] text-xs font-mono-archive min-h-[40px]"
                          required
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-[#F0EFEA] border border-[#E2E0D8] space-y-2 text-xs font-mono-archive">
                    <p className="font-bold text-[#121316]">Instant Indian NetBanking Available</p>
                    <p className="text-[#5A5955]">
                      Supports HDFC Bank, ICICI Bank, State Bank of India, Axis Bank, and Kotak Mahindra. Redirects securely with 12% GST invoice generated.
                    </p>
                  </div>
                )}

                {/* 3. Pincode & Delivery Destination Confirmation */}
                <div className="p-4 bg-[#FAF9F5] border border-[#121316] space-y-2">
                  <span className="font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] block">
                    Verified Indian Dispatch Sector
                  </span>
                  <div className="flex items-center justify-between text-xs font-mono-archive">
                    <div>
                      <p className="font-bold text-[#121316]">
                        {deliveryPoint?.street || "100 Feet Road"}, {deliveryPoint?.city || "Bengaluru"}
                      </p>
                      <p className="text-[#5A5955] text-[11px]">
                        Postal PIN: {deliveryPoint?.postal || "560038"} • India
                      </p>
                    </div>
                    <span className="text-[10px] font-mono-archive text-emerald-800 font-bold bg-emerald-50 px-2 py-1 border border-emerald-200">
                      BLUEDART EXPRESS
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Column: Ledger Totals & Authorization Button */}
              <div className="lg:col-span-5 p-5 bg-[#F0EFEA] border border-[#E2E0D8] flex flex-col justify-between space-y-6">
                <div>
                  <h4 className="font-mono-archive text-xs font-bold uppercase tracking-widest text-[#121316] pb-2 border-b border-[#E2E0D8]">
                    Archival Dispatch Ledger
                  </h4>

                  <div className="space-y-2 font-mono-archive text-xs text-[#5A5955] mt-4">
                    <div className="flex justify-between">
                      <span>Total Specimen Items:</span>
                      <span className="font-bold text-[#121316]">{cartItems.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gross Subtotal:</span>
                      <span>{formatINR(subtotal)}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-800 font-bold">
                        <span>Voucher (-25%):</span>
                        <span>-{formatINR(discountAmount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Bluedart Air Shipping:</span>
                      <span>{isFreeShipping ? 'FREE' : formatINR(shippingCost)}</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-[#7A7870] pt-1">
                      <span>Includes 12% GST:</span>
                      <span>{formatINR(gstAmount)}</span>
                    </div>
                    <div className="flex justify-between text-base font-black text-[#121316] pt-3 border-t border-[#121316] mt-2">
                      <span>Final Ledger Total:</span>
                      <span className="font-mono-archive text-lg">{formatINR(grandTotal)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-4 bg-[#121316] hover:bg-[#2A2B30] text-[#FAF9F5] font-mono-archive text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2 shadow-xl min-h-[48px] disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <span>Authorizing Indian Ledger...</span>
                    ) : (
                      <span>Authorize & Pay {formatINR(grandTotal)}</span>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[9px] font-mono-archive text-[#7A7870]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
                    <span>256-Bit Encrypted // RBI & NPCI Compliant Settlement</span>
                  </div>
                </div>

              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
