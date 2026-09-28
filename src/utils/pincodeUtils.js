// 6-Digit Indian PIN Code & Express Delivery Estimation Engine for KINETIC ARCHIVE

// Known city mappings by prefix
const KNOWN_PINCODES = {
  '560': { city: 'Bengaluru', state: 'Karnataka', hub: 'South Air Express', hours: 24, courier: 'Bluedart Air Courier' },
  '400': { city: 'Mumbai', state: 'Maharashtra', hub: 'West Hub Direct', hours: 36, courier: 'Bluedart Express Surface/Air' },
  '110': { city: 'New Delhi', state: 'Delhi NCR', hub: 'North Central Hub', hours: 36, courier: 'Bluedart Air Express' },
  '500': { city: 'Hyderabad', state: 'Telangana', hub: 'Deccan Cargo Hub', hours: 36, courier: 'Bluedart Express' },
  '600': { city: 'Chennai', state: 'Tamil Nadu', hub: 'Coromandel Hub', hours: 36, courier: 'Bluedart Air Courier' },
  '700': { city: 'Kolkata', state: 'West Bengal', hub: 'Eastern Aviation Hub', hours: 48, courier: 'Bluedart Air Express' },
  '302': { city: 'Jaipur', state: 'Rajasthan', hub: 'Amer Heritage Logistics', hours: 48, courier: 'Bluedart Express' },
  '411': { city: 'Pune', state: 'Maharashtra', hub: 'Sahyadri Express Line', hours: 36, courier: 'Bluedart Express' },
  '380': { city: 'Ahmedabad', state: 'Gujarat', hub: 'Sabarmati Cargo Outpost', hours: 48, courier: 'Bluedart Express' },
  '682': { city: 'Kochi', state: 'Kerala', hub: 'Malabar Coastal Wing', hours: 48, courier: 'Bluedart Air Express' },
  '201': { city: 'Noida / Ghaziabad', state: 'Uttar Pradesh', hub: 'NCR Gateway', hours: 36, courier: 'Bluedart Express' },
  '122': { city: 'Gurugram', state: 'Haryana', hub: 'NCR Gateway', hours: 36, courier: 'Bluedart Express' },
  '641': { city: 'Coimbatore', state: 'Tamil Nadu', hub: 'Kongu Textile Corridor', hours: 48, courier: 'Bluedart Express' }
};

/**
 * Validates a 6-digit Indian PIN code
 */
export function isValidPincode(pin) {
  if (!pin) return false;
  const clean = String(pin).trim();
  return /^[1-9][0-9]{5}$/.test(clean);
}

/**
 * Resolves location and express delivery estimate based on 6-digit PIN code
 */
export function estimatePincodeDelivery(pincode) {
  const pinStr = String(pincode || '').trim();

  if (!isValidPincode(pinStr)) {
    return {
      isValid: false,
      message: 'Please enter a valid 6-digit Indian Postal PIN Code (e.g. 560001, 110001).'
    };
  }

  const prefix3 = pinStr.substring(0, 3);
  const known = KNOWN_PINCODES[prefix3];

  const city = known ? known.city : 'Direct Postal Sector';
  const state = known ? known.state : 'All-India Network';
  const courier = known ? known.courier : 'Bluedart Express Air Service';
  const hours = known ? known.hours : 48;

  // Calculate delivery date based on hours
  const days = Math.ceil(hours / 24);
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + days);

  const formatOpts = { weekday: 'short', month: 'short', day: 'numeric' };
  const dateStr = deliveryDate.toLocaleDateString('en-IN', formatOpts);

  return {
    isValid: true,
    pincode: pinStr,
    city,
    state,
    courier,
    estimatedHours: hours,
    estimatedDaysText: hours <= 24 ? 'Within 24 Hours' : `${hours}-Hour Delivery`,
    formattedDate: dateStr,
    statusText: `Dispatches via ${courier} // ${hours}-Hour Delivery to ${city} (${pinStr})`,
    badgeText: `Free Express Delivery by ${dateStr}`,
    carbonNeutral: '100% Carbon-Neutral Transit Certified'
  };
}

