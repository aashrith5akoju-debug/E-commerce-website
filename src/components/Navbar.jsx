import React, { useState } from 'react';
import { 
  MapPin, 
  User, 
  ShoppingBag, 
  Volume2, 
  VolumeX, 
  Search, 
  X, 
  Menu, 
  ChevronRight, 
  Heart, 
  Compass, 
  ShieldCheck, 
  Sparkles,
  Truck
} from 'lucide-react';
import { soundEngine } from '../utils/audio';
import { 
  DEPARTMENTS, 
  MEN_SUBCATEGORIES, 
  WOMEN_SUBCATEGORIES, 
  ELECTRONICS_SUBCATEGORIES, 
  ALL_SUBCATEGORIES 
} from '../data/products';

export default function Navbar({
  deliveryPoint,
  onOpenMap,
  user,
  onOpenAuth,
  cartCount,
  onOpenCart,
  wishlistCount,
  onOpenWishlist,
  searchQuery,
  onSearchChange,
  selectedDepartment,
  activeDepartment,
  onSelectDepartment,
  selectedCategory,
  activeCategory,
  onSelectCategory,
  selectedSubCategory,
  onSelectSubCategory
}) {
  const [soundActive, setSoundActive] = useState(soundEngine.isEnabled());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentDept = (selectedDepartment || activeDepartment || 'all').toLowerCase();
  const currentSubCat = (selectedSubCategory || 'all').toLowerCase();

  const handleToggleSound = () => {
    const newState = soundEngine.toggle();
    setSoundActive(newState);
  };

  const destinationLabel = deliveryPoint
    ? `${deliveryPoint.city || 'Bengaluru'} (${deliveryPoint.postal || '560038'})`
    : "Bengaluru (560038) • Bluedart Express";

  const handleDepartmentSelect = (deptId) => {
    soundEngine.playPill();
    const d = (deptId || 'all').toLowerCase().trim();
    if (onSelectDepartment) onSelectDepartment(d);
    setMobileMenuOpen(false);

    const specimensEl = document.getElementById('specimens');
    if (specimensEl) specimensEl.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubCategorySelect = (subId) => {
    soundEngine.playPill();
    const s = (subId || 'all').toLowerCase();
    if (onSelectSubCategory) onSelectSubCategory(s);
    setMobileMenuOpen(false);

    const specimensEl = document.getElementById('specimens');
    if (specimensEl) specimensEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E2E0D8]">
      {/* 1. TOP ANNOUNCEMENT BAR: Indian Express Geolocation & Bluedart Dispatch */}
      <div 
        onClick={() => {
          soundEngine.playClick();
          onOpenMap();
        }}
        className="bg-[#121316] text-[#FAF9F5] px-3 sm:px-4 py-2 cursor-pointer hover:bg-[#25262B] transition-colors border-b border-[#2A2B30] text-center flex items-center justify-between"
      >
        <div className="flex items-center gap-2 text-[11px] font-mono-archive tracking-wider truncate">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-[#D5D3CB] hidden sm:inline">DISPATCH SECTOR:</span>
          <span className="font-semibold text-white underline decoration-[#7A7870] underline-offset-4 truncate">
            {destinationLabel}
          </span>
          <span className="hidden lg:inline text-[#8E8C85]">
            • Bluedart Air Courier // Express 24-48h Delivery (100% Carbon Neutral)
          </span>
        </div>

        <div className="flex items-center gap-1 text-[10px] font-mono-archive text-[#D5D3CB] hover:text-white uppercase tracking-widest shrink-0 ml-2">
          <span className="hidden sm:inline">Change PIN</span>
          <Compass className="w-3 h-3" />
        </div>
      </div>

      {/* 2. PRIMARY NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-3">
          
          {/* Brand Wordmark & Desktop Department Nav */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Mobile Hamburger Toggle (< md) */}
            <button
              onClick={() => {
                soundEngine.playDrawer();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 text-[#121316] border border-[#E2E0D8] hover:border-[#121316] bg-[#FAF9F5] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Brand Link */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                soundEngine.playClick();
                handleDepartmentSelect("all");
              }}
              className="group flex flex-col"
            >
              <span className="font-display font-black text-base sm:text-xl tracking-tighter text-[#121316] group-hover:opacity-80 transition-opacity">
                KINETIC ARCHIVE
              </span>
              <span className="font-mono-archive text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#7A7870] -mt-0.5 sm:-mt-1">
                Indian Atelier // ED. 2026
              </span>
            </a>

            {/* Desktop Department Navigation (>= md) */}
            <nav className="hidden md:flex items-center gap-1 border-l border-[#E2E0D8] pl-3 lg:pl-5">
              {DEPARTMENTS.map((dept) => {
                const isActive = currentDept === dept.id;
                return (
                  <button
                    key={dept.id}
                    onClick={() => handleDepartmentSelect(dept.id)}
                    className={`px-2.5 lg:px-3 py-1.5 text-xs font-mono-archive uppercase tracking-wider transition-all min-h-[36px] ${
                      isActive
                        ? 'bg-[#121316] text-[#FAF9F5] font-semibold'
                        : 'text-[#5A5955] hover:text-[#121316] hover:bg-[#F0EFEA]'
                    }`}
                  >
                    {dept.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Desktop Search Bar (>= md) */}
          <div className="hidden md:flex flex-1 max-w-xs lg:max-w-sm relative items-center">
            <Search className="w-3.5 h-3.5 absolute left-3 text-[#7A7870] pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search kurtas, joggers, slides, 4K TV..."
              className="w-full pl-9 pr-8 py-2 bg-[#F0EFEA] border border-[#E2E0D8] focus:border-[#121316] text-xs font-mono-archive text-[#121316] placeholder:text-[#8E8C85] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  soundEngine.playClick();
                  onSearchChange('');
                }}
                className="absolute right-2 p-1 text-[#7A7870] hover:text-[#121316] transition-colors"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Action Icons (Desktop & Mobile) */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Audio Toggle (Desktop) */}
            <button
              onClick={handleToggleSound}
              title={soundActive ? "Tactile Audio Active (Click to Mute)" : "Tactile Audio Muted (Click to Enable)"}
              className={`hidden sm:flex p-2.5 border transition-colors min-h-[44px] min-w-[44px] items-center justify-center ${
                soundActive 
                  ? 'border-[#121316] bg-[#F0EFEA] text-[#121316]' 
                  : 'border-[#E2E0D8] text-[#8E8C85] hover:border-[#121316]'
              }`}
              aria-label="Toggle Sound Physics"
            >
              {soundActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Geolocation / PIN Trigger (Desktop >= md) */}
            <button
              onClick={() => {
                soundEngine.playClick();
                onOpenMap();
              }}
              title="Pinpoint Indian Atelier Delivery PIN"
              className="hidden md:flex p-2.5 border border-[#E2E0D8] hover:border-[#121316] bg-[#FAF9F5] hover:bg-[#F0EFEA] text-[#121316] transition-colors items-center gap-1.5 min-h-[44px]"
              aria-label="Open Indian Pincode Map"
            >
              <MapPin className="w-4 h-4" />
              <span className="hidden xl:inline font-mono-archive text-[11px] uppercase tracking-wider">
                {deliveryPoint?.city || "560038"}
              </span>
            </button>

            {/* Atelier ID Authentication Trigger (Desktop >= md) */}
            <button
              onClick={() => {
                soundEngine.playClick();
                onOpenAuth();
              }}
              title={user ? `Atelier Patron: ${user.name}` : "Sign In / Atelier ID"}
              className={`hidden md:flex p-2.5 border transition-all items-center gap-2 min-h-[44px] ${
                user 
                  ? 'border-[#121316] bg-[#121316] text-[#FAF9F5]' 
                  : 'border-[#E2E0D8] hover:border-[#121316] bg-[#FAF9F5] text-[#121316]'
              }`}
            >
              <User className="w-4 h-4" />
              {user ? (
                <div className="hidden lg:flex flex-col text-left leading-none pr-1">
                  <span className="font-mono-archive text-[10px] font-bold tracking-wider truncate max-w-[90px]">
                    {user.name.split(' ')[0]}
                  </span>
                  <span className="text-[8px] text-[#D5D3CB] font-mono-archive uppercase">
                    PATRON
                  </span>
                </div>
              ) : (
                <span className="hidden lg:inline font-mono-archive text-[11px] uppercase tracking-wider">
                  Atelier ID
                </span>
              )}
            </button>

            {/* Wishlist Indicator */}
            {wishlistCount > 0 && (
              <button
                onClick={() => {
                  soundEngine.playClick();
                  onOpenWishlist();
                }}
                className="relative p-2.5 border border-[#E2E0D8] hover:border-[#121316] bg-[#FAF9F5] text-[#121316] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                title="Archived Wishlist"
              >
                <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#121316] text-[#FAF9F5] text-[9px] font-mono-archive flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              </button>
            )}

            {/* "The Trunk" Cart Trigger (Always visible, min 44px) */}
            <button
              onClick={() => {
                soundEngine.playDrawer();
                onOpenCart();
              }}
              className="relative px-3 sm:px-4 py-2.5 bg-[#121316] hover:bg-[#2A2B30] text-[#FAF9F5] border border-[#121316] flex items-center gap-2 transition-colors min-h-[44px]"
              aria-label="Open Cart Drawer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline font-mono-archive text-xs uppercase tracking-widest font-semibold">
                Trunk
              </span>
              <span className="w-5 h-5 bg-[#FAF9F5] text-[#121316] text-[11px] font-mono-archive font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>

          </div>
        </div>
      </div>

      {/* 3. MOBILE SLIDE-OUT DRAWER (< md) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-[#121316]/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu Surface */}
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-[#FAF9F5] border-r border-[#121316] shadow-2xl flex flex-col justify-between p-5 animate-in slide-in-from-left duration-200 overflow-y-auto">
            <div className="space-y-5">
              
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E0D8]">
                <span className="font-display font-black text-sm tracking-tight text-[#121316]">
                  KINETIC ARCHIVE // INDIA
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 border border-[#E2E0D8] text-[#121316] min-h-[38px] min-w-[38px] flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Search Bar */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-[#7A7870] pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search linen, khadi, audio..."
                  className="w-full pl-9 pr-8 py-2.5 bg-[#F0EFEA] border border-[#E2E0D8] focus:border-[#121316] text-xs font-mono-archive text-[#121316] placeholder:text-[#8E8C85] focus:outline-none min-h-[44px]"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="absolute right-2.5 top-2.5 p-1 text-[#7A7870]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Mobile Department Navigation */}
              <div>
                <label className="block font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] mb-2">
                  Atelier Departments
                </label>
                <div className="flex flex-col gap-1">
                  {DEPARTMENTS.map((dept) => {
                    const isActive = currentDept === dept.id;
                    return (
                      <button
                        key={dept.id}
                        onClick={() => handleDepartmentSelect(dept.id)}
                        className={`w-full px-3 py-2.5 text-left text-xs font-mono-archive uppercase tracking-wider flex items-center justify-between border transition-all min-h-[44px] ${
                          isActive
                            ? 'bg-[#121316] text-[#FAF9F5] border-[#121316] font-bold'
                            : 'bg-[#F0EFEA]/60 text-[#121316] border-[#E2E0D8] hover:border-[#121316]'
                        }`}
                      >
                        <span>{dept.label}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contextual Subcategory Navigation (Zero Leakage) */}
              <div>
                <label className="block font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] mb-2">
                  {currentDept === 'men' ? "Men's Subcategories" :
                   currentDept === 'women' ? "Women's Subcategories" :
                   currentDept === 'electronics' ? "Electronics Hardware" :
                   "Atelier Subcategories"}
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(currentDept === 'men' ? MEN_SUBCATEGORIES :
                    currentDept === 'women' ? WOMEN_SUBCATEGORIES :
                    currentDept === 'electronics' ? ELECTRONICS_SUBCATEGORIES :
                    ALL_SUBCATEGORIES).map((sub) => {
                    const isActive = currentSubCat === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => handleSubCategorySelect(sub.id)}
                        className={`px-2 py-2 text-center text-[10px] font-mono-archive uppercase tracking-wider border transition-all min-h-[40px] flex items-center justify-center ${
                          isActive
                            ? 'bg-[#121316] text-[#FAF9F5] border-[#121316] font-semibold'
                            : 'bg-[#F0EFEA]/60 text-[#121316] border-[#E2E0D8] hover:border-[#121316]'
                        }`}
                      >
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile PIN Location Card */}
              <div 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMap();
                }}
                className="p-3 bg-[#F0EFEA] border border-[#E2E0D8] cursor-pointer hover:border-[#121316] transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-mono-archive text-[#121316] font-semibold mb-1">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Express PIN Delivery</span>
                </div>
                <p className="text-[10px] font-mono-archive text-[#5A5955]">
                  {destinationLabel}
                </p>
                <span className="text-[9px] font-mono-archive text-emerald-800 font-bold block mt-1">
                  Change Delivery Sector & PIN →
                </span>
              </div>

            </div>

            {/* Drawer Bottom Controls */}
            <div className="pt-4 border-t border-[#E2E0D8] space-y-2">
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="w-full py-2.5 bg-[#121316] text-[#FAF9F5] font-mono-archive text-xs uppercase tracking-wider flex items-center justify-center gap-2 min-h-[44px]"
              >
                <User className="w-3.5 h-3.5" />
                <span>{user ? user.name : "Atelier ID Sign In"}</span>
              </button>

              <button
                onClick={handleToggleSound}
                className="w-full py-2 border border-[#E2E0D8] text-[#5A5955] font-mono-archive text-[10px] uppercase tracking-wider flex items-center justify-center gap-2 min-h-[38px]"
              >
                {soundActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                <span>{soundActive ? "Sound Physics Active" : "Sound Physics Muted"}</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
