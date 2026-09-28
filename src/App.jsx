import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import MapLocationModal from './components/MapLocationModal';
import AuthModal from './components/AuthModal';
import CostModal from './components/CostModal';
import Toast from './components/Toast';
import { PRODUCTS, CATEGORIES, DEPARTMENTS, GLOBAL_HUBS } from './data/products';
import { supabase, checkSupabaseConnection } from './utils/supabase';
import { soundEngine } from './utils/audio';
import { formatINR } from './utils/currencyUtils';
import { 
  ShieldCheck, 
  ArrowDown, 
  Compass,
  Truck,
  Sparkles,
  Layers,
  Flame
} from 'lucide-react';

export default function App() {
  // 1. Geolocation Delivery Point State (persistent, default Bengaluru)
  const [deliveryPoint, setDeliveryPoint] = useState(() => {
    try {
      const saved = localStorage.getItem('kinetic_delivery_point');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load delivery point', e);
    }
    // Default Flagship Bengaluru Atelier Hub
    return {
      street: "100 Feet Road, Indiranagar",
      city: "Bengaluru",
      postal: "560038",
      country: "India",
      sector: "IND-01 Indiranagar Atelier Hub",
      lat: 12.9716,
      lng: 77.5946,
      distanceKm: 0,
      deliveryEstimates: {
        daysText: "1 Business Day",
        dateRangeStr: "Within 24–48 Hours",
        mode: "Bluedart Priority Aviation Express",
        co2: "0.15 kg CO2e (100% Certified Carbon-Neutral Offset)"
      }
    };
  });

  // 2. Atelier ID Authentication State (persistent)
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('kinetic_atelier_user');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load user', e);
    }
    return null;
  });

  // 3. Cart State (The Trunk) (persistent)
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('kinetic_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load cart', e);
    }
    return [
      {
        product: PRODUCTS[0],
        size: PRODUCTS[0]?.sizes?.[1] || "M",
        silhouette: "Architectural Oversized",
        quantity: 1
      }
    ];
  });

  // 4. Wishlist State (persistent)
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('kinetic_wishlist');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load wishlist', e);
    }
    return [];
  });

  // 5. Promo Voucher State
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  // 6. Atelier Filter & Department Navigation State
  const [selectedDepartment, setSelectedDepartment] = useState('all'); // 'all' | 'men' | 'women' | 'electronics'
  const [selectedCategory, setSelectedCategory] = useState('all'); // 'all' | 'shirts' | 'pants' | 'shoes' | 'appliances'
  const [selectedSubCategory, setSelectedSubCategory] = useState('all'); // contextual subcategory id
  const [priceRange, setPriceRange] = useState('all'); // 'all' | 'under-3000' | '3000-5999' | '6000-plus'
  const [onlyVault, setOnlyVault] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // 7. Modals State
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [costProduct, setCostProduct] = useState(null);
  const [toast, setToast] = useState(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('kinetic_cart', JSON.stringify(cartItems));
    } catch (e) {}
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('kinetic_wishlist', JSON.stringify(wishlist));
    } catch (e) {}
  }, [wishlist]);

  // Supabase Atelier Client Connection & Session Listener
  useEffect(() => {
    let subscription = null;

    checkSupabaseConnection().then((res) => {
      if (res.ok) {
        console.log('[Supabase] Kinetic Archive atelier client connected successfully.');
      } else {
        console.warn('[Supabase] Client check:', res.status, res.details);
      }
    });

    try {
      const { data } = supabase.auth.onAuthStateChange((event, session) => {
        if (session?.user) {
          const supabaseUser = {
            name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0]?.toUpperCase() || 'ARCHIVAL PATRON',
            email: session.user.email,
            tier: 'ARCHIVAL MEMBER // TIER 01',
            fitPreference: session.user.user_metadata?.fitPreference || 'Relaxed',
            memberSince: 'EDITION 2026',
            registryId: `KA-${session.user.id.slice(0, 6).toUpperCase()}`
          };
          setUser((prev) => prev || supabaseUser);
        }
      });
      subscription = data?.subscription;
    } catch (e) {
      console.warn('[Supabase] Auth listener error:', e);
    }

    return () => {
      if (subscription) subscription.unsubscribe();
    };
  }, []);

  // Handlers
  const handleSaveDelivery = (data) => {
    setDeliveryPoint(data);
    try {
      localStorage.setItem('kinetic_delivery_point', JSON.stringify(data));
    } catch (e) {}
    setToast({
      title: "INDIAN DISPATCH SECTOR LOCKED",
      message: `Destination confirmed: ${data.city} (${data.postal}). Bluedart Express routing activated.`,
      type: "success"
    });
  };

  const handleAuthSuccess = (userData) => {
    setUser(userData);
    try {
      localStorage.setItem('kinetic_atelier_user', JSON.stringify(userData));
    } catch (e) {}
    setToast({
      title: "ATELIER ID AUTHENTICATED",
      message: `Welcome, ${userData.name}. Archival privileges & ${userData.fitPreference} sizing active.`,
      type: "success"
    });
  };

  const handleSignOut = () => {
    setUser(null);
    try {
      localStorage.removeItem('kinetic_atelier_user');
    } catch (e) {}
    setToast({
      title: "SIGNED OUT",
      message: "Atelier session concluded. Re-authenticate to access Tier 01 privileges.",
      type: "info"
    });
  };

  const handleAddToCart = ({ product, size, silhouette, quantity }) => {
    setCartItems(prev => {
      const existingIdx = prev.findIndex(
        it => it.product.id === product.id && it.size === size && it.silhouette === silhouette
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, size, silhouette, quantity }];
      }
    });

    setSelectedProduct(null);
    setIsCartOpen(true);
    setToast({
      title: "ADDED TO TRUNK",
      message: `${product.title} (Size ${size}, ${formatINR(product.price)}) reserved in trunk.`,
      type: "success"
    });
  };

  const handleQuickAdd = (product) => {
    setSelectedProduct(product);
  };

  const handleUpdateCartQuantity = (index, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCartItems(prev => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveCartItem = (index) => {
    const item = cartItems[index];
    setCartItems(prev => prev.filter((_, i) => i !== index));
    if (item) {
      setToast({
        title: "ITEM REMOVED",
        message: `${item.product.title} has been de-allocated from your trunk.`,
        type: "info"
      });
    }
  };

  const handleToggleWishlist = (product) => {
    const exists = wishlist.some(it => it.id === product.id);
    if (exists) {
      setWishlist(prev => prev.filter(it => it.id !== product.id));
      setToast({
        title: "WISHLIST UPDATED",
        message: `Removed ${product.title} from your archived wishlist.`,
        type: "info"
      });
    } else {
      setWishlist(prev => [...prev, product]);
      setToast({
        title: "SAVED TO WISHLIST",
        message: `${product.title} is now pinned to your private archival shortlist.`,
        type: "success"
      });
    }
  };

  const handleApplyPromo = (code, percent) => {
    setPromoCode(code);
    setDiscountPercent(percent);
    setToast({
      title: "PROMO CODE APPLIED",
      message: `Code ${code} activated: 25% discount deducted across all cataloged items.`,
      type: "success"
    });
  };

  const handleRemovePromo = () => {
    setPromoCode('');
    setDiscountPercent(0);
    setToast({
      title: "PROMO REMOVED",
      message: "Archival voucher removed.",
      type: "info"
    });
  };

  const handleOrderComplete = () => {
    setCartItems([]);
    setPromoCode('');
    setDiscountPercent(0);
  };

  const handleSelectDepartment = (dept) => {
    const d = (dept || 'all').toLowerCase().trim();
    setSelectedDepartment(d);
    setSelectedCategory('all');
    setSelectedSubCategory('all');
  };

  const handleSelectCategory = (cat) => {
    const c = (cat || 'all').toLowerCase().trim();
    setSelectedCategory(c);
    setSelectedSubCategory('all');

    if (c === 'appliances') {
      setSelectedDepartment('electronics');
    }
  };

  const handleSelectSubCategory = (subCat) => {
    const s = (subCat || 'all').toLowerCase().trim();
    setSelectedSubCategory(s);
  };

  const handleResetFilters = () => {
    setSelectedDepartment('all');
    setSelectedCategory('all');
    setSelectedSubCategory('all');
    setPriceRange('all');
    setOnlyVault(false);
    setSearchQuery('');
  };

  const handleResetCategoryFilters = () => {
    setSelectedCategory('all');
    setSelectedSubCategory('all');
    setPriceRange('all');
    setOnlyVault(false);
    setSearchQuery('');
  };

  const totalCartCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#121316] flex flex-col selection:bg-[#121316] selection:text-[#FAF9F5] overflow-x-hidden w-full">
      
      {/* 1. NAVBAR WITH INDIAN EXPRESS DISPATCH INDICATOR & MOBILE DRAWER */}
      <Navbar
        deliveryPoint={deliveryPoint}
        onOpenMap={() => setIsMapOpen(true)}
        user={user}
        onOpenAuth={() => setIsAuthOpen(true)}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => {
          handleResetFilters();
          const el = document.getElementById('specimens');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedDepartment={selectedDepartment}
        onSelectDepartment={handleSelectDepartment}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        selectedSubCategory={selectedSubCategory}
        onSelectSubCategory={handleSelectSubCategory}
      />

      {/* 2. EDITORIAL MONOGRAPH HERO ARCHITECTURE */}
      <section className="border-b border-[#E2E0D8] bg-[#FAF9F5] relative overflow-hidden">
        {/* Subtle Monograph Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E0D8_1px,transparent_1px),linear-gradient(to_bottom,#E2E0D8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0EFEA] border border-[#E2E0D8] text-[10px] font-mono-archive uppercase tracking-widest text-[#121316]">
                <span className="w-1.5 h-1.5 bg-[#121316] inline-block animate-ping" />
                <span>HIGH-END INDIAN LIFESTYLE & TECH ATELIER // ED. 2026</span>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#121316] tracking-tighter leading-[0.98]">
                KINETIC ARCHIVE
              </h1>

              <p className="font-serif-title italic text-base sm:text-lg lg:text-xl text-[#484742] max-w-2xl leading-relaxed">
                "Textiles and high-spec audio engineered with architectural discipline. Hand-spun Kutch kala cotton, pure Maheshwari silks, double-pleated selvedge tailoring, and precision Beryllium acoustic hardware."
              </p>

              {/* Functional CTA Cluster */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    document.getElementById('specimens')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-[#121316] hover:bg-[#2A2B30] text-[#FAF9F5] font-mono-archive text-xs uppercase tracking-widest transition-colors flex items-center gap-2 font-semibold shadow-md min-h-[44px]"
                >
                  <span>Explore {PRODUCTS.length} Specimens</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setIsMapOpen(true);
                  }}
                  className="px-6 py-3.5 bg-[#F0EFEA] hover:bg-[#E2E0D8] text-[#121316] border border-[#121316] font-mono-archive text-xs uppercase tracking-widest transition-colors flex items-center gap-2 min-h-[44px]"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Pinpoint Indian Sector & PIN</span>
                </button>
              </div>
            </div>

            {/* Right Metric Ledger Pillar */}
            <div className="lg:col-span-4 p-5 sm:p-6 bg-[#F0EFEA] border border-[#121316] space-y-3.5">
              <span className="font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] block border-b border-[#E2E0D8] pb-2">
                Atelier Audit Standards // India
              </span>

              <div className="space-y-2.5 font-mono-archive text-xs">
                <div className="flex justify-between">
                  <span className="text-[#5A5955]">COST DISCLOSURE:</span>
                  <span className="font-bold text-[#121316]">100% UNRESTRICTED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5A5955]">AIR LOGISTICS:</span>
                  <span className="font-bold text-emerald-800">BLUEDART 24-48H AIR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5A5955]">INDIAN EDITIONS:</span>
                  <span className="font-bold text-[#121316]">{PRODUCTS.length} REGISTERED SPECIMENS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5A5955]">SETTLEMENT:</span>
                  <span className="font-bold text-[#121316]">INSTANT UPI & NETBANKING</span>
                </div>
              </div>

              <div className="pt-2.5 border-t border-[#E2E0D8] text-[10px] text-[#5A5955] flex items-center gap-1.5 font-mono-archive">
                <ShieldCheck className="w-3.5 h-3.5 text-[#121316] shrink-0" />
                <span>Audited by Kinetic Archive Council // Inclusive of 12% GST</span>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Dispatch Destination Strip */}
        <div className="border-t border-[#E2E0D8] bg-[#F0EFEA]/60 py-2.5 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono-archive text-[#5A5955]">
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
              <span className="shrink-0 font-semibold text-[#121316]">DELIVERY SECTOR:</span>
              <strong className="text-[#121316] truncate">{deliveryPoint.street}, {deliveryPoint.city}</strong>
              <span className="bg-[#FAF9F5] border border-[#121316] px-1.5 py-0.2 text-[#121316] font-bold">
                PIN {deliveryPoint.postal}
              </span>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <span className="hidden sm:inline">COURIER: {deliveryPoint.deliveryEstimates?.mode || "Bluedart Air Express"}</span>
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setIsMapOpen(true);
                }}
                className="text-[#121316] font-bold underline hover:opacity-75 min-h-[32px] flex items-center"
              >
                Change PIN / Sector
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HIGH-DENSITY PROCEDURAL CATALOG & ASYMMETRIC MONOGRAPH GRID */}
      <main className="flex-1">
        <ProductGrid
          products={PRODUCTS}
          selectedDepartment={selectedDepartment}
          onSelectDepartment={handleSelectDepartment}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          selectedSubCategory={selectedSubCategory}
          onSelectSubCategory={handleSelectSubCategory}
          priceRange={priceRange}
          onSelectPriceRange={setPriceRange}
          onlyVault={onlyVault}
          onToggleVault={() => setOnlyVault(!onlyVault)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onQuickAdd={handleQuickAdd}
          onOpenCostModal={(prod) => setCostProduct(prod)}
          onResetFilters={handleResetFilters}
          onResetCategoryFilters={handleResetCategoryFilters}
        />
      </main>

      {/* 4. ATELIER FOOTER & COLOPHON */}
      <footer className="border-t border-[#121316] bg-[#FAF9F5] text-[#121316] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="space-y-3">
            <span className="font-display font-bold text-lg tracking-tight text-[#121316]">
              KINETIC ARCHIVE // INDIA
            </span>
            <p className="font-sans text-xs text-[#5A5955] leading-relaxed">
              A bespoke, high-end lifestyle and acoustic atelier merging Indian material provenance, architectural minimalism, and keyless geospatial dispatch.
            </p>
            <p className="font-mono-archive text-[10px] text-[#7A7870]">
              MUSEUM MONOGRAPH // EST. 2026 // 284 REGISTERED EDITIONS
            </p>
          </div>

          <div>
            <h4 className="font-mono-archive text-xs font-bold uppercase tracking-widest text-[#121316] mb-3">
              Flagship Indian Ateliers
            </h4>
            <ul className="space-y-1.5 text-xs font-mono-archive text-[#5A5955]">
              {GLOBAL_HUBS.map(hub => (
                <li key={hub.city} className="flex items-center justify-between">
                  <span>{hub.city} Flagship</span>
                  <span className="text-[10px] text-[#7A7870]">{hub.postal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono-archive text-xs font-bold uppercase tracking-widest text-[#121316] mb-3">
              Artisanal Craft Standards
            </h4>
            <ul className="space-y-1.5 text-xs text-[#5A5955]">
              <li>• Pure Kutch Organic Kala Cotton</li>
              <li>• Pit-Loomed Maheshwari Silks</li>
              <li>• 14.5oz Raw Indigo Toyoda Selvedge</li>
              <li>• Beryllium Vapor-Deposited Acoustics</li>
              <li>• Bluedart Express 24–48h Aviation Dispatch</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono-archive text-xs font-bold uppercase tracking-widest text-[#121316] mb-3">
              Atelier ID Access
            </h4>
            <p className="text-xs text-[#5A5955] mb-3 leading-relaxed">
              Mint an Atelier ID for private monograph reservations and tailored silhouette guidance.
            </p>
            <button
              onClick={() => {
                soundEngine.playClick();
                setIsAuthOpen(true);
              }}
              className="w-full py-3 bg-[#121316] text-[#FAF9F5] font-mono-archive text-[11px] uppercase tracking-wider hover:bg-[#303136] transition-colors min-h-[44px]"
            >
              {user ? "View Atelier Dossier" : "Mint Atelier ID"}
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-[#E2E0D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono-archive text-[#7A7870]">
          <span>© 2026 KINETIC ARCHIVE CORP. ALL RIGHTS RESERVED. INCLUSIVE OF 12% GST.</span>
          <span className="flex items-center gap-2">
            <span>BLUEDART EXPRESS</span>
            <span>•</span>
            <span>LEAFLET OSM</span>
            <span>•</span>
            <span>TAILWIND CSS</span>
            <span>•</span>
            <span>REACT 19</span>
          </span>
        </div>
      </footer>

      {/* 5. MODAL EXPERIENCES */}
      
      {/* Geolocation Map Modal with Indian Flagship Hubs */}
      <MapLocationModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        currentDelivery={deliveryPoint}
        onSaveDelivery={handleSaveDelivery}
      />

      {/* Atelier ID Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        user={user}
        onAuthSuccess={handleAuthSuccess}
        onSignOut={handleSignOut}
      />

      {/* Product Detail Modal with Indian PIN Checker & UK/IND Sizing */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProduct ? wishlist.some(it => it.id === selectedProduct.id) : false}
        user={user}
        onOpenCostModal={(prod) => setCostProduct(prod)}
      />

      {/* "The Trunk" Slide-Out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        promoCode={promoCode}
        discountPercent={discountPercent}
        onApplyPromo={handleApplyPromo}
        onRemovePromo={handleRemovePromo}
        deliveryPoint={deliveryPoint}
      />

      {/* Checkout Flow Modal with UPI and Indian Settlement */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        deliveryPoint={deliveryPoint}
        user={user}
        promoCode={promoCode}
        discountPercent={discountPercent}
        onOrderComplete={handleOrderComplete}
      />

      {/* Transparent Cost Architecture Micro-Modal */}
      <CostModal
        product={costProduct}
        isOpen={!!costProduct}
        onClose={() => setCostProduct(null)}
      />

      {/* System Toast Notifications */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />

    </div>
  );
}
