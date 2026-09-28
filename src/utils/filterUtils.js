// Category, Department, SubCategory & Search Normalization Utilities for KINETIC ARCHIVE
// Strict AND (&&) Conjunction Engine with Zero Department Leakage

/**
 * Normalizes category string to canonical key ('all' | 'shirts' | 'pants' | 'shoes' | 'appliances')
 */
export function normalizeCategory(cat) {
  if (!cat) return 'all';
  const c = cat.trim().toLowerCase();

  if (c === 'all' || c === 'all categories' || c === 'all specimens') return 'all';

  // Sarees & Drapes
  if (
    c.includes('saree') || 
    c.includes('sari')
  ) {
    return 'sarees';
  }

  // Shirts, Kurtas, Kurtis & Tops
  if (
    c.includes('shirt') || 
    c.includes('kurta') || 
    c.includes('kurti') || 
    c.includes('tee') || 
    c.includes('t-shirt') || 
    c.includes('top') || 
    c.includes('kadak') || 
    c.includes('blouse')
  ) {
    return 'shirts';
  }

  // Dresses & Gowns
  if (
    c.includes('dress') || 
    c.includes('gown') || 
    c.includes('anarkali') || 
    c.includes('maxi')
  ) {
    return 'dresses';
  }

  // Handbags & Accessories
  if (
    c.includes('bag') || 
    c.includes('handbag') || 
    c.includes('tote') || 
    c.includes('clutch') || 
    c.includes('satchel') || 
    c.includes('crossbody') || 
    c.includes('purse') || 
    c.includes('accessory') || 
    c.includes('accessories')
  ) {
    return 'accessories';
  }

  // Pants, Jeans, Joggers, Bottoms & Trousers
  if (
    c.includes('pant') || 
    c.includes('jean') || 
    c.includes('jogger') || 
    c.includes('trackpant') || 
    c.includes('chino') || 
    c.includes('trouser') || 
    c.includes('corduroy') || 
    c.includes('culotte') ||
    c.includes('bottom') ||
    c.includes('palazzo')
  ) {
    return 'pants';
  }

  // Shoes, Slides, Slippers & Footwear
  if (
    c.includes('shoe') || 
    c.includes('slide') || 
    c.includes('slipper') || 
    c.includes('chappal') || 
    c.includes('sneaker') || 
    c.includes('loafer') || 
    c.includes('boot') || 
    c.includes('derby') || 
    c.includes('oxford') || 
    c.includes('clog') || 
    c.includes('footwear') ||
    c.includes('mule')
  ) {
    return 'shoes';
  }

  // Appliances, TV & Electronics
  if (
    c.includes('appliance') || 
    c.includes('tv') || 
    c.includes('fridge') || 
    c.includes('refrigerator') || 
    c.includes('washing') || 
    c.includes('mixer') || 
    c.includes('microwave') || 
    c.includes('ac') || 
    c.includes('air conditioner') || 
    c.includes('purifier') || 
    c.includes('induction') || 
    c.includes('vacuum') || 
    c.includes('audio') || 
    c.includes('soundbar') || 
    c.includes('headphone') || 
    c.includes('earbud') || 
    c.includes('kettle') || 
    c.includes('steamer') || 
    c.includes('electronics') ||
    c.includes('tech')
  ) {
    return 'appliances';
  }

  return c;
}

/**
 * Matches product against selected department strictly ('all' | 'men' | 'women' | 'electronics')
 * Zero cross-leakage.
 */
export function matchesDepartment(itemDepartment, selectedDepartment) {
  if (!selectedDepartment || selectedDepartment === 'all') return true;
  const itemDept = (itemDepartment || '').toLowerCase().trim();
  const selDept = selectedDepartment.toLowerCase().trim();
  return itemDept === selDept;
}

/**
 * Matches product against selected category ('all' | 'shirts' | 'pants' | 'shoes' | 'appliances' | 'sarees' | 'dresses' | 'accessories')
 */
export function matchesCategory(itemCategory, selectedCategory) {
  if (!selectedCategory || selectedCategory.toLowerCase() === 'all') return true;
  const target = normalizeCategory(selectedCategory);
  if (target === 'all') return true;
  return normalizeCategory(itemCategory) === target;
}

/**
 * Matches product against selected sub-category with zero department leakage
 */
export function matchesSubCategory(item, selectedSubCategory) {
  if (!selectedSubCategory || selectedSubCategory.toLowerCase() === 'all') return true;
  const target = selectedSubCategory.toLowerCase().trim();
  const itemSub = (item.subCategory || item.subcategory || '').toLowerCase().trim();
  const itemCat = (item.category || '').toLowerCase().trim();

  // Refrigerators
  if (target === 'refrigerators' || target === 'fridge') {
    return itemSub === 'refrigerators' || itemSub === 'fridge';
  }

  // Washing Machines
  if (target === 'washing-machines' || target === 'washing') {
    return itemSub === 'washing-machines' || itemSub === 'washing';
  }

  // Televisions
  if (target === 'televisions' || target === 'tv') {
    return itemSub === 'televisions' || itemSub === 'tv';
  }

  // Audio & Speakers
  if (target === 'audio-speakers' || target === 'audio') {
    return itemSub === 'audio-speakers' || itemSub === 'audio';
  }

  // Kitchen Appliances
  if (target === 'kitchen-appliances' || target === 'kitchen') {
    return itemSub === 'kitchen-appliances' || itemSub === 'kitchen';
  }

  // Other Electronics
  if (target === 'other-electronics' || target === 'other') {
    return itemSub === 'other-electronics' || itemSub === 'other';
  }

  // Shoes & Footwear subcategory encapsulates shoes, footwear, slides
  if (target === 'shoes' || target === 'footwear') {
    return itemSub === 'shoes' || itemSub === 'footwear' || itemSub === 'slides' || itemCat === 'shoes';
  }

  // Sarees
  if (target === 'sarees' || target === 'saree') {
    return itemSub === 'sarees' || itemSub === 'saree' || itemCat === 'sarees';
  }

  // Kurtas (Men)
  if (target === 'kurtas' || target === 'kurta') {
    return itemSub === 'kurtas' || itemSub === 'kurta';
  }

  // Kurtis (Women)
  if (target === 'kurtis' || target === 'kurti') {
    return itemSub === 'kurtis' || itemSub === 'kurti';
  }

  // Women's Bottoms
  if (target === 'bottoms') {
    return itemSub === 'bottoms';
  }

  // Handbags & Accessories
  if (target === 'handbags' || target === 'bags') {
    return itemSub === 'handbags' || itemSub === 'bags' || itemCat === 'accessories';
  }

  // Dresses
  if (target === 'dresses' || target === 'dress') {
    return itemSub === 'dresses' || itemSub === 'dress' || itemCat === 'dresses';
  }

  // Kadak Shirts (Men)
  if (target === 'kadak' || target === 'shirts' || target === 'shirt') {
    return itemSub === 'kadak' || itemSub === 'shirts' || itemSub === 'shirt';
  }

  // T-Shirts (Men)
  if (target === 't-shirts' || target === 'tshirts' || target === 't-shirt') {
    return itemSub === 't-shirts' || itemSub === 'tshirts' || itemSub === 't-shirt';
  }

  // Jeans (Men)
  if (target === 'jeans' || target === 'jean') {
    return itemSub === 'jeans' || itemSub === 'jean';
  }

  // Joggers (Men)
  if (target === 'joggers' || target === 'jogger') {
    return itemSub === 'joggers' || itemSub === 'jogger' || itemSub === 'trackpants';
  }

  // Tops (Women)
  if (target === 'tops' || target === 'top') {
    return itemSub === 'tops' || itemSub === 'top';
  }

  return itemSub === target;
}

/**
 * Matches product against selected price bracket
 */
export function matchesPriceRange(price, rangeKey) {
  if (!rangeKey || rangeKey === 'all') return true;
  if (rangeKey === 'under-3000') return price < 3000;
  if (rangeKey === '3000-5999') return price >= 3000 && price <= 5999;
  if (rangeKey === '6000-plus') return price >= 6000;
  return true;
}

/**
 * Matches product against 40%+ Archive Vault filter
 */
export function matchesVault(item, onlyVault) {
  if (!onlyVault) return true;
  return (item.discountPercent || 0) >= 40;
}

/**
 * Multi-term fuzzy search across title, department, subcategory, and description
 */
export function matchesSearch(item, query) {
  if (!query || !query.trim()) return true;
  const q = query.trim().toLowerCase();
  const terms = q.split(/\s+/).filter(Boolean);

  return terms.every(term => {
    const termNorm = normalizeCategory(term);
    const catNorm = normalizeCategory(item.category);

    if (termNorm !== 'all' && termNorm === catNorm) return true;
    if (item.department && item.department.toLowerCase() === term) return true;
    if (item.subCategory && item.subCategory.toLowerCase().includes(term)) return true;
    if (item.color && item.color.toLowerCase().includes(term)) return true;

    const nameMatch = (item.name || item.title || '').toLowerCase().includes(term);
    const descMatch = (item.description || '').toLowerCase().includes(term);
    const fabricMatch = (item.weight || '').toLowerCase().includes(term);
    const originMatch = (item.origin || '').toLowerCase().includes(term);

    return nameMatch || descMatch || fabricMatch || originMatch;
  });
}

/**
 * Strict AND Conjunction Filter
 */
export function filterProductsStrict(products, {
  selectedDepartment = 'all',
  selectedCategory = 'all',
  selectedSubCategory = 'all',
  searchQuery = '',
  priceRange = 'all',
  onlyVault = false
}) {
  return products.filter((product) => {
    const matchDepartment = matchesDepartment(product.department, selectedDepartment);
    const matchCategory = matchesCategory(product.category, selectedCategory);
    const matchSubCat = matchesSubCategory(product, selectedSubCategory);
    const matchSearch = matchesSearch(product, searchQuery);
    const matchPrice = matchesPriceRange(product.price, priceRange);
    const matchVault = matchesVault(product, onlyVault);

    return matchDepartment && matchCategory && matchSubCat && matchPrice && matchVault && matchSearch;
  });
}
