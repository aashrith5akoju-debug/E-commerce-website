import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { ArrowUpDown, RefreshCw, Search, Flame, Check, ChevronRight } from 'lucide-react';
import { soundEngine } from '../utils/audio';
import { 
  matchesDepartment,
  matchesCategory,
  matchesSubCategory,
  matchesPriceRange, 
  matchesVault,
  matchesSearch
} from '../utils/filterUtils';
import { 
  DEPARTMENTS, 
  MEN_SUBCATEGORIES, 
  WOMEN_SUBCATEGORIES, 
  ELECTRONICS_SUBCATEGORIES, 
  ALL_SUBCATEGORIES 
} from '../data/products';

export default function ProductGrid({ 
  products, 
  selectedDepartment = 'all',
  activeDepartment,
  onSelectDepartment,
  selectedCategory = 'all',
  activeCategory, 
  onSelectCategory,
  selectedSubCategory = 'all',
  onSelectSubCategory,
  priceRange = 'all',
  onSelectPriceRange,
  onlyVault = false,
  onToggleVault,
  searchQuery = '', 
  onSearchChange,
  onSelectProduct, 
  onQuickAdd, 
  onOpenCostModal, 
  onResetFilters,
  onResetCategoryFilters
}) {
  const [sortBy, setSortBy] = useState('curated'); // 'curated', 'price-asc', 'price-desc', 'weight'

  const currentDept = (
    activeDepartment || selectedDepartment || "all"
  ).toLowerCase();

  const currentCat = (
    activeCategory || selectedCategory || "all"
  ).toLowerCase();

  const currentSubCat = (
    selectedSubCategory || "all"
  ).toLowerCase();

  // Dynamic exact counts per department
  const departmentCounts = useMemo(() => {
    return {
      all: products.length,
      men: products.filter(p => p.department === 'men').length,
      women: products.filter(p => p.department === 'women').length,
      electronics: products.filter(p => p.department === 'electronics').length
    };
  }, [products]);

  // Contextual Subcategories based on active department (Zero Leakage)
  const contextualSubcategories = useMemo(() => {
    if (currentDept === 'men') return MEN_SUBCATEGORIES;
    if (currentDept === 'women') return WOMEN_SUBCATEGORIES;
    if (currentDept === 'electronics') return ELECTRONICS_SUBCATEGORIES;
    return ALL_SUBCATEGORIES;
  }, [currentDept]);

  // Sort helper
  const sortList = (items, sortOrder) => {
    const list = [...items];
    if (sortOrder === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'weight') {
      const getNum = (w) => {
        const match = (w || '').match(/(\d+)/);
        return match ? parseInt(match[1], 10) : 0;
      };
      list.sort((a, b) => getNum(b.weight) - getNum(a.weight));
    }
    return list;
  };

  // Specific subcategories to match directly against product subCategory
  const subCategories = [
    "kurtas",
    "kurtis",
    "t-shirts",
    "jeans",
    "joggers",
    "footwear",
    "shoes",
    "shirts",
    "kadak",
    "sarees",
    "dresses",
    "tops",
    "bottoms",
    "refrigerators",
    "washing-machines",
    "televisions",
    "audio-speakers",
    "audio",
    "kitchen-appliances",
    "kitchen"
  ];

  // Strict boolean AND (&&) filtering with complete isolation
  const filteredProducts = useMemo(() => {
    let list = products.filter((product) => {
      const matchDept = matchesDepartment(product.department, currentDept);
      const matchCat = matchesCategory(product.category, currentCat);
      const matchSubCat = matchesSubCategory(product, currentSubCat);
      const department = String(product.department || "").toLowerCase();
      const subCategory = String(
        product.subCategory || product.subcategory || ""
      ).toLowerCase();
      const category = String(product.category || "").toLowerCase();

      // 1. Department filter
      const matchesDept =
        currentDept === "all" ||
        department === currentDept;

      if (!matchesDept) return false;

      // 2. Category / Subcategory filter (activeCategory || selectedCategory)
      if (currentCat !== "all") {
        if (subCategories.includes(currentCat)) {
          let match = false;
          if (currentCat === "shoes" || currentCat === "footwear") {
            match = subCategory === "footwear" || subCategory === "shoes" || subCategory === "slides";
          } else if (currentCat === "shirts" || currentCat === "kadak") {
            match = subCategory === "shirts" || subCategory === "kadak";
          } else if (currentCat === "audio" || currentCat === "audio-speakers") {
            match = subCategory === "audio" || subCategory === "audio-speakers";
          } else if (currentCat === "kitchen" || currentCat === "kitchen-appliances") {
            match = subCategory === "kitchen" || subCategory === "kitchen-appliances";
          } else {
            match = subCategory === currentCat;
          }
          if (!match) return false;
        } else {
          const match = category === currentCat || matchesCategory(category, currentCat);
          if (!match) return false;
        }
      }

      // 3. Subcategory pill filter (selectedSubCategory)
      if (currentSubCat !== "all") {
        const match = matchesSubCategory(product, currentSubCat);
        if (!match) return false;
      }

      // 4. Secondary filters
      const matchPrice = matchesPriceRange(product.price, priceRange);
      if (!matchPrice) return false;

      const matchVaultOnly = matchesVault(product, onlyVault);
      if (!matchVaultOnly) return false;

      const matchSearchQuery = matchesSearch(product, searchQuery);
      if (!matchSearchQuery) return false;

      return matchDept && matchCat && matchSubCat && matchPrice && matchVaultOnly && matchSearchQuery;
      return true;
    });

    return sortList(list, sortBy);
  }, [products, currentDept, currentCat, currentSubCat, priceRange, onlyVault, searchQuery, sortBy]);

  // Condition for full grouped view (when "ALL" department & "all" subcategory without search/filters)
  const isGroupedView = currentDept === 'all' && 
                        currentCat === 'all' && 
                        currentSubCat === 'all' &&
                        !searchQuery.trim() && 
                        priceRange === 'all' && 
                        !onlyVault;

  // Grouped products for "ALL" mode
  const menProducts = useMemo(() => {
    const list = products.filter(p => p.department === 'men');
    return sortList(list, sortBy);
  }, [products, sortBy]);

  const womenProducts = useMemo(() => {
    const list = products.filter(p => p.department === 'women');
    return sortList(list, sortBy);
  }, [products, sortBy]);

  const electronicsProducts = useMemo(() => {
    const list = products.filter(p => p.department === 'electronics');
    return sortList(list, sortBy);
  }, [products, sortBy]);

  const handleDepartmentClick = (deptId) => {
    soundEngine.playPill();
    const d = (deptId || 'all').toLowerCase().trim();
    if (onSelectDepartment) onSelectDepartment(d);
    const el = document.getElementById('specimens');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubCategoryClick = (subId) => {
    soundEngine.playPill();
    const s = (subId || 'all').toLowerCase();
    if (onSelectSubCategory) onSelectSubCategory(s);
    const el = document.getElementById('specimens');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSortChange = (val) => {
    soundEngine.playPill();
    setSortBy(val);
  };

  // Construct dynamic top subheader string
  const dynamicSubheaderText = useMemo(() => {
    const total = filteredProducts.length;
    if (searchQuery.trim()) {
      return `${total} SPECIMENS MATCHING "${searchQuery.toUpperCase()}"`;
    }

    const currentSubObj = contextualSubcategories.find(s => s.id === currentSubCat);
    const subLabel = currentSubObj && currentSubObj.id !== 'all' ? ` // ${currentSubObj.label.toUpperCase()}` : '';

    if (currentDept === 'men') {
      return `${total} SPECIMENS IN MEN'S ATELIER${subLabel}`;
    }
    if (currentDept === 'women') {
      return `${total} SPECIMENS IN WOMEN'S ATELIER${subLabel}`;
    }
    if (currentDept === 'electronics') {
      return `${total} SPECIMENS IN ELECTRONICS & HOME APPLIANCES${subLabel}`;
    }
    if (currentSubCat !== 'all') {
      return `${total} SPECIMENS IN ${currentSubObj ? currentSubObj.label.toUpperCase() : currentSubCat.toUpperCase()}`;
    }
    return `${total} SPECIMENS IN ARCHIVE // ALL ATELIER DEPARTMENTS`;
  }, [filteredProducts.length, currentDept, currentSubCat, contextualSubcategories, searchQuery]);

  return (
    <section id="specimens" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 scroll-mt-16">
      
      {/* 1. PRIMARY DEPARTMENT & CONTEXTUAL SUBCATEGORY NAVIGATION BAR */}
      <div className="pb-6 mb-6 border-b border-[#E2E0D8] space-y-4">
        
        {/* Department Switcher Strip: [ALL SPECIMENS] | [MEN'S ATELIER] | [WOMEN'S ATELIER] | [ELECTRONICS & APPLIANCES] */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 no-scrollbar">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {DEPARTMENTS.map((dept) => {
              const isActive = currentDept === dept.id;
              const count = departmentCounts[dept.id] ?? dept.count;
              return (
                <button
                  key={dept.id}
                  onClick={() => handleDepartmentClick(dept.id)}
                  className={`px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-mono-archive uppercase tracking-wider whitespace-nowrap transition-all border min-h-[44px] flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#121316] text-[#FAF9F5] border-[#121316] font-bold shadow-md'
                      : 'bg-[#FAF9F5] text-[#5A5955] border-[#E2E0D8] hover:border-[#121316] hover:text-[#121316]'
                  }`}
                >
                  <span>{dept.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 font-bold ${
                    isActive ? 'bg-[#FAF9F5] text-[#121316]' : 'bg-[#F0EFEA] text-[#7A7870]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Vault 40%+ Filter Pill */}
          <button
            onClick={() => {
              soundEngine.playPill();
              if (onToggleVault) onToggleVault();
            }}
            className={`px-3 py-2 text-xs font-mono-archive uppercase tracking-wider whitespace-nowrap transition-all border min-h-[44px] flex items-center gap-1.5 shrink-0 ${
              onlyVault
                ? 'bg-amber-500 text-[#121316] border-amber-600 font-bold'
                : 'bg-[#F0EFEA] text-[#121316] border-[#E2E0D8] hover:border-[#121316]'
            }`}
          >
            <Flame className={`w-3.5 h-3.5 ${onlyVault ? 'text-[#121316]' : 'text-amber-600'}`} />
            <span>40%+ Archive Vault</span>
          </button>
        </div>

        {/* Dynamic & Contextual Subcategory Navigation Pills (Zero Leakage) */}
        <div className="flex items-center justify-between gap-3 overflow-x-auto pb-1 no-scrollbar border-t border-[#E2E0D8] pt-3">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <span className="font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] mr-2 shrink-0 hidden md:inline">
              {currentDept === 'men' ? "Men's Focus:" :
               currentDept === 'women' ? "Women's Focus:" :
               currentDept === 'electronics' ? "Hardware Focus:" :
               "Focus:"}
            </span>
            {contextualSubcategories.map((sub) => {
              const isActive = currentSubCat === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => handleSubCategoryClick(sub.id)}
                  className={`px-3 py-1.5 text-xs font-mono-archive uppercase tracking-wider whitespace-nowrap transition-all border min-h-[38px] flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#121316] text-[#FAF9F5] border-[#121316] font-semibold shadow-sm'
                      : 'bg-[#F0EFEA]/80 text-[#5A5955] border-[#E2E0D8] hover:border-[#121316] hover:text-[#121316]'
                  }`}
                >
                  {isActive && <Check className="w-3 h-3" />}
                  <span>{sub.label}</span>
                </button>
              );
            })}
          </div>

          {/* Price Range Filter & Sequence Sorting Toolbar */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Price Filter Dropdown */}
            <div className="flex items-center gap-1.5 bg-[#FAF9F5] border border-[#E2E0D8] px-2.5 py-1.5 min-h-[38px]">
              <span className="font-mono-archive text-[10px] uppercase tracking-wider text-[#7A7870] hidden sm:inline">
                Price:
              </span>
              <select
                value={priceRange}
                onChange={(e) => {
                  soundEngine.playPill();
                  if (onSelectPriceRange) onSelectPriceRange(e.target.value);
                }}
                className="bg-transparent font-mono-archive text-xs text-[#121316] focus:outline-none cursor-pointer"
                aria-label="Filter by price bracket"
              >
                <option value="all">All Prices</option>
                <option value="under-3000">Under ₹2,999</option>
                <option value="3000-5999">₹3,000 – ₹5,999</option>
                <option value="6000-plus">Premium Editions (₹6,000+)</option>
              </select>
            </div>

            {/* Sequence Sorting Control */}
            <div className="flex items-center gap-1.5 bg-[#FAF9F5] border border-[#E2E0D8] px-2.5 py-1.5 min-h-[38px]">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#7A7870]" />
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="bg-transparent font-mono-archive text-xs text-[#121316] focus:outline-none cursor-pointer"
                aria-label="Sort specimens sequence"
              >
                <option value="curated">Sequence: Curated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="weight">Density / Specs</option>
              </select>
            </div>
          </div>
        </div>

        {/* Real-time Dynamic Subheader & Active Count Badge */}
        <div className="pt-2 border-t border-[#E2E0D8]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5">
            <div>
              <span className="font-mono-archive text-[9px] uppercase tracking-[0.2em] text-[#7A7870] block">
                ATELIER REGISTER // REAL-TIME INVENTORY INDEX
              </span>
              <h2 className="font-display font-black text-lg sm:text-xl text-[#121316] tracking-tight">
                {dynamicSubheaderText}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0EFEA] border border-[#121316] text-[#121316]">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="font-mono-archive text-[11px] uppercase tracking-wider font-bold">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'Specimen' : 'Specimens'} Available
                </span>
              </div>

              {(searchQuery || priceRange !== 'all' || onlyVault || currentSubCat !== 'all' || currentDept !== 'all' || currentCat !== 'all') && (
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    if (onResetFilters) onResetFilters();
                  }}
                  className="text-[11px] font-mono-archive text-[#121316] underline hover:opacity-75 flex items-center gap-1 min-h-[32px] shrink-0"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset All</span>
                </button>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* 2. CATALOG RENDERING: GROUPED BY DEPARTMENT WHEN "ALL", OR FOCUSED LIST */}
      {isGroupedView ? (
        <div className="space-y-16 sm:space-y-20 pt-2">
          
          {/* Section 1: Men's Atelier */}
          <section id="division-men" className="space-y-6">
            <div className="border-b-2 border-[#121316] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#F0EFEA] border border-[#E2E0D8] text-[9px] font-mono-archive uppercase tracking-widest text-[#121316]">
                  <span>DIVISION 01</span>
                  <span>•</span>
                  <span>MEN'S ATELIER // {menProducts.length} EDITIONS</span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#121316] tracking-tight">
                  MEN'S ATELIER
                </h3>
                <p className="text-xs font-sans text-[#5A5955] max-w-xl">
                  Handloom linen casual kurtas, starched stiff Kadak dress shirts, 14.5oz shuttle selvedge denim, cargo joggers, and Goodyear-welt footwear.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="font-mono-archive text-xs font-bold text-[#121316] bg-[#F0EFEA] px-2.5 py-1 border border-[#E2E0D8]">
                  {menProducts.length} Specimens
                </span>
                <button
                  onClick={() => handleDepartmentClick('men')}
                  className="px-3 py-1 bg-[#121316] text-[#FAF9F5] font-mono-archive text-xs uppercase tracking-wider hover:bg-[#303136] transition-colors flex items-center gap-1"
                >
                  <span>Explore Men's</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 items-start">
              {menProducts.map((product, idx) => {
                const staggerClass = (idx % 2 === 1) ? 'md:translate-y-2' : '';
                return (
                  <div key={product.id} className={`transition-transform duration-500 ${staggerClass}`}>
                    <ProductCard
                      product={product}
                      onSelectProduct={onSelectProduct}
                      onQuickAdd={onQuickAdd}
                      onOpenCostModal={onOpenCostModal}
                    />
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 2: Women's Atelier */}
          <section id="division-women" className="space-y-6">
            <div className="border-b-2 border-[#121316] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#F0EFEA] border border-[#E2E0D8] text-[9px] font-mono-archive uppercase tracking-widest text-[#121316]">
                  <span>DIVISION 02</span>
                  <span>•</span>
                  <span>WOMEN'S ATELIER // {womenProducts.length} EDITIONS</span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#121316] tracking-tight">
                  WOMEN'S ATELIER
                </h3>
                <p className="text-xs font-sans text-[#5A5955] max-w-xl">
                  Daily office cotton kurtis, festive anarkalis & dresses, pure silk blouses, pleated silk palazzos, designer leather handbags, and artisanal footwear.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="font-mono-archive text-xs font-bold text-[#121316] bg-[#F0EFEA] px-2.5 py-1 border border-[#E2E0D8]">
                  {womenProducts.length} Specimens
                </span>
                <button
                  onClick={() => handleDepartmentClick('women')}
                  className="px-3 py-1 bg-[#121316] text-[#FAF9F5] font-mono-archive text-xs uppercase tracking-wider hover:bg-[#303136] transition-colors flex items-center gap-1"
                >
                  <span>Explore Women's</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 items-start">
              {womenProducts.map((product, idx) => {
                const staggerClass = (idx % 2 === 1) ? 'md:translate-y-2' : '';
                return (
                  <div key={product.id} className={`transition-transform duration-500 ${staggerClass}`}>
                    <ProductCard
                      product={product}
                      onSelectProduct={onSelectProduct}
                      onQuickAdd={onQuickAdd}
                      onOpenCostModal={onOpenCostModal}
                    />
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 3: Electronics & Home Appliances */}
          <section id="division-electronics" className="space-y-6">
            <div className="border-b-2 border-[#121316] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#F0EFEA] border border-[#E2E0D8] text-[9px] font-mono-archive uppercase tracking-widest text-[#121316]">
                  <span>DIVISION 03</span>
                  <span>•</span>
                  <span>LIVING & ACOUSTICS // {electronicsProducts.length} EDITIONS</span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#121316] tracking-tight">
                  ELECTRONICS & HOME APPLIANCES
                </h3>
                <p className="text-xs font-sans text-[#5A5955] max-w-xl">
                  4K OLED displays, inverter double-door refrigeration, AI steam washers, induction cooktops, and studio acoustic hardware with BIS 2-year warranty.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="font-mono-archive text-xs font-bold text-[#121316] bg-[#F0EFEA] px-2.5 py-1 border border-[#E2E0D8]">
                  {electronicsProducts.length} Specimens
                </span>
                <button
                  onClick={() => handleDepartmentClick('electronics')}
                  className="px-3 py-1 bg-[#121316] text-[#FAF9F5] font-mono-archive text-xs uppercase tracking-wider hover:bg-[#303136] transition-colors flex items-center gap-1"
                >
                  <span>Explore Electronics</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 items-start">
              {electronicsProducts.map((product, idx) => {
                const staggerClass = (idx % 2 === 1) ? 'md:translate-y-2' : '';
                return (
                  <div key={product.id} className={`transition-transform duration-500 ${staggerClass}`}>
                    <ProductCard
                      product={product}
                      onSelectProduct={onSelectProduct}
                      onQuickAdd={onQuickAdd}
                      onOpenCostModal={onOpenCostModal}
                    />
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      ) : (
        /* Focused Single Grid View (When specific department, category, or subcategory is active) */
        filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 items-start pt-4">
            {filteredProducts.map((product, idx) => {
              const staggerClass = (idx % 2 === 1) ? 'md:translate-y-2' : '';

              return (
                <div key={product.id} className={`transition-transform duration-500 ${staggerClass}`}>
                  <ProductCard
                    product={product}
                    onSelectProduct={onSelectProduct}
                    onQuickAdd={onQuickAdd}
                    onOpenCostModal={onOpenCostModal}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          /* Editorial Empty Fallback State (Requirement 4) */
          <div className="py-16 sm:py-24 text-center max-w-lg mx-auto border border-dashed border-[#121316]/40 p-6 sm:p-10 bg-[#F0EFEA]/40 mt-6">
            <div className="w-12 h-12 bg-[#FAF9F5] border border-[#121316] flex items-center justify-center mx-auto mb-4">
              <Search className="w-5 h-5 text-[#121316]" />
            </div>

            <p className="font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] mb-1.5">
              Archival Inventory Index
            </p>

            <h3 className="font-display text-lg sm:text-xl font-bold text-[#121316] mb-2 leading-snug">
              No archival specimens matching this category
            </h3>

            <p className="text-xs text-[#5A5955] mb-6 leading-relaxed font-sans max-w-sm mx-auto">
              No editions found under the active department and subcategory filter combination.
            </p>

            <button
              onClick={() => {
                soundEngine.playClick();
                if (onResetCategoryFilters) onResetCategoryFilters();
                else if (onResetFilters) onResetFilters();
              }}
              className="px-6 py-3 bg-[#121316] text-[#FAF9F5] font-mono-archive text-xs uppercase tracking-widest hover:bg-[#303136] transition-colors inline-flex items-center gap-2 font-semibold min-h-[44px]"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset Category Filters</span>
            </button>
          </div>
        )
      )}

    </section>
  );
}
