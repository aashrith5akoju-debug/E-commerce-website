import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { X, Compass, Truck, ShieldCheck, Check } from 'lucide-react';
import { GLOBAL_HUBS } from '../data/products';
import { soundEngine } from '../utils/audio';
import { estimatePincodeDelivery } from '../utils/pincodeUtils';

// Custom obsidian museum pin using L.divIcon
const createCustomPinIcon = () => {
  return L.divIcon({
    className: 'custom-obsidian-marker',
    html: `
      <div style="position: relative; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">
        <div style="position: absolute; width: 32px; height: 32px; border-radius: 50%; background: rgba(18, 19, 22, 0.2); animation: beaconPulse 2s infinite ease-out;"></div>
        <div style="width: 20px; height: 20px; background: #121316; border: 2px solid #FAF9F5; border-radius: 50%; box-shadow: 0 4px 10px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;">
          <div style="width: 6px; height: 6px; background: #FAF9F5; border-radius: 50%;"></div>
        </div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18]
  });
};

// Map controller to handle flyTo when presets are chosen or coordinates change
function MapRecenter({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center && center.lat && center.lng) {
      map.flyTo([center.lat, center.lng], map.getZoom() || 12, {
        duration: 1.2
      });
    }
  }, [center, map]);
  return null;
}

// Map click listener to relocate pin on map tap
function MapClickHandler({ onLocationSelect }) {
  useMapEvents({
    click(e) {
      onLocationSelect(e.latlng.lat, e.latlng.lng);
      soundEngine.playPill();
    },
  });
  return null;
}

// Haversine distance calculator in KM from Bengaluru Central Atelier Hub (12.9716, 77.5946)
function calculateDistanceKm(lat1, lon1, lat2 = 12.9716, lon2 = 77.5946) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

export default function MapLocationModal({ isOpen, onClose, currentDelivery, onSaveDelivery }) {

  const [coords, setCoords] = useState({
    lat: currentDelivery?.lat || 12.9716,
    lng: currentDelivery?.lng || 77.5946
  });

  const [addressForm, setAddressForm] = useState({
    street: currentDelivery?.street || "100 Feet Road, Indiranagar",
    city: currentDelivery?.city || "Bengaluru",
    postal: currentDelivery?.postal || "560038",
    country: currentDelivery?.country || "India",
    sector: currentDelivery?.sector || "IND-01 Indiranagar Atelier Hub"
  });

  const [selectedHub, setSelectedHub] = useState(currentDelivery?.city || "Bengaluru");
  const markerRef = useRef(null);
  const customIcon = useMemo(() => createCustomPinIcon(), []);

  // Compute distance from Bengaluru Hub
  const distanceKm = useMemo(() => {
    return calculateDistanceKm(coords.lat, coords.lng);
  }, [coords]);

  // Dynamic delivery calculations with Bluedart Air Courier
  const deliveryEstimates = useMemo(() => {
    let daysMin = 1;
    let daysMax = 2;
    let mode = "Bluedart Direct Air Courier";
    let co2 = 0.15;

    if (distanceKm < 400) {
      daysMin = 1;
      daysMax = 1;
      mode = "Bluedart Same-Day / Next-Day Express";
      co2 = 0.08;
    } else if (distanceKm < 1500) {
      daysMin = 1;
      daysMax = 2;
      mode = "Bluedart Priority Aviation Express";
      co2 = 0.22;
    } else {
      daysMin = 2;
      daysMax = 3;
      mode = "Bluedart All-India Air Cargo";
      co2 = 0.35;
    }

    const dateMin = new Date();
    dateMin.setDate(dateMin.getDate() + daysMin);
    const dateMax = new Date();
    dateMax.setDate(dateMax.getDate() + daysMax);

    const formatOpts = { month: 'short', day: 'numeric' };
    const dateRangeStr = `${dateMin.toLocaleDateString('en-IN', formatOpts)} – ${dateMax.toLocaleDateString('en-IN', formatOpts)}, 2026`;

    return {
      daysText: daysMin === daysMax ? `${daysMin} Business Day` : `${daysMin}–${daysMax} Business Days`,
      dateRangeStr,
      mode,
      co2: `${co2} kg CO2e (100% Certified Carbon-Neutral Offset)`
    };
  }, [distanceKm]);

  // Handle marker drag
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          const newPos = marker.getLatLng();
          setCoords({ lat: Number(newPos.lat.toFixed(4)), lng: Number(newPos.lng.toFixed(4)) });
          soundEngine.playPill();
          const sectorCode = `SECTOR-${Math.abs(Math.round(newPos.lat))}${Math.abs(Math.round(newPos.lng))}`;
          setAddressForm(prev => ({
            ...prev,
            sector: `Sector ${sectorCode} // Indian Geotagged Point`
          }));
        }
      },
    }),
    [],
  );

  const handleMapClick = (lat, lng) => {
    setCoords({ lat: Number(lat.toFixed(4)), lng: Number(lng.toFixed(4)) });
    const sectorCode = `SECTOR-${Math.abs(Math.round(lat))}${Math.abs(Math.round(lng))}`;
    setAddressForm(prev => ({
      ...prev,
      sector: `Sector ${sectorCode} // Indian Geotagged Point`
    }));
  };

  const handleSelectPreset = (hub) => {
    soundEngine.playClick();
    setSelectedHub(hub.city);
    setCoords({ lat: hub.lat, lng: hub.lng });
    setAddressForm({
      street: hub.address,
      city: hub.city,
      postal: hub.postal,
      country: hub.country,
      sector: hub.sector
    });
  };

  const handlePostalChange = (val) => {
    const cleanPin = val.replace(/\D/g, '').slice(0, 6);
    setAddressForm(prev => ({ ...prev, postal: cleanPin }));

    if (cleanPin.length === 6) {
      const est = estimatePincodeDelivery(cleanPin);
      if (est.isValid && est.city !== 'Direct Postal Sector') {
        setAddressForm(prev => ({ ...prev, city: est.city }));
      }
    }
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    soundEngine.playSuccess();

    const finalizedData = {
      ...addressForm,
      lat: coords.lat,
      lng: coords.lng,
      distanceKm,
      deliveryEstimates
    };

    onSaveDelivery(finalizedData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[85] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#121316]/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full sm:max-w-5xl bg-[#FAF9F5] border-t sm:border border-[#121316] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-5 sm:px-6 py-4 border-b border-[#E2E0D8] flex items-center justify-between bg-[#F0EFEA]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#121316] inline-block animate-pulse" />
            <div>
              <span className="font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] block">
                Indian Geolocation Engine // Bluedart Dispatch Network
              </span>
              <h2 className="font-display text-base sm:text-lg font-bold text-[#121316] tracking-tight">
                Pinpoint Indian Atelier Delivery Sector
              </h2>
            </div>
          </div>
          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="p-2 border border-[#E2E0D8] hover:border-[#121316] bg-[#FAF9F5] hover:bg-[#FAF9F5] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close delivery modal"
          >
            <X className="w-4 h-4 text-[#121316]" />
          </button>
        </div>

        {/* Modal Body: Split Map & Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          {/* Left Column: Interactive Leaflet Map with keyless OpenStreetMap tile server */}
          <div className="lg:col-span-7 h-[260px] sm:h-[350px] lg:h-auto min-h-[260px] relative border-b lg:border-b-0 lg:border-r border-[#E2E0D8] bg-[#F0EFEA]">
            <MapContainer
              center={[coords.lat, coords.lng]}
              zoom={12}
              maxZoom={19}
              scrollWheelZoom={true}
              className="h-full w-full z-10 filter grayscale contrast-125 brightness-95"
              attributionControl={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                maxZoom={19}
              />
              <MapRecenter center={coords} />
              <MapClickHandler onLocationSelect={handleMapClick} />
              <Marker
                position={[coords.lat, coords.lng]}
                draggable={true}
                eventHandlers={eventHandlers}
                ref={markerRef}
                icon={customIcon}
              >
                <Popup>
                  <div className="p-1 font-mono-archive">
                    <p className="font-bold text-[#121316] uppercase text-[10px]">{addressForm.city} ({addressForm.postal})</p>
                    <p className="text-[9px] text-[#5A5955]">{coords.lat.toFixed(4)}, {coords.lng.toFixed(4)}</p>
                    <p className="text-[9px] text-[#7A7870] mt-1">Drag marker to reposition sector</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>

            {/* Map Overlay Badge */}
            <div className="absolute top-3 left-3 z-20 pointer-events-none bg-[#FAF9F5]/90 border border-[#121316] px-3 py-1.5 backdrop-blur-sm shadow-md">
              <span className="font-mono-archive text-[10px] text-[#121316] font-semibold tracking-wider flex items-center gap-2">
                <Compass className="w-3.5 h-3.5" />
                {coords.lat.toFixed(4)}° N, {coords.lng.toFixed(4)}° E
              </span>
            </div>

            {/* Map Drag Instruction Pill */}
            <div className="absolute bottom-3 left-3 right-3 sm:right-auto z-20 pointer-events-none bg-[#121316]/90 text-[#FAF9F5] border border-[#121316] px-3 py-1.5 backdrop-blur-sm text-[10px] font-mono-archive text-center sm:text-left">
              Click anywhere or drag obsidian pin across Indian subcontinent
            </div>
          </div>

          {/* Right Column: Address Inputs, Global Hubs & Dispatch Ledger */}
          <div className="lg:col-span-5 p-5 sm:p-6 flex flex-col justify-between space-y-5 bg-[#FAF9F5]">
            {/* Indian Flagship Atelier Hubs Quick Presets */}
            <div>
              <label className="block font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] mb-2">
                Flagship Indian Atelier Hubs (Instant Pin)
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {GLOBAL_HUBS.map((hub) => {
                  const isActive = selectedHub === hub.city;
                  return (
                    <button
                      key={hub.city}
                      type="button"
                      onClick={() => handleSelectPreset(hub)}
                      className={`px-2 py-2 text-[11px] font-mono-archive tracking-wider border transition-all truncate min-h-[44px] flex items-center justify-center ${
                        isActive
                          ? 'bg-[#121316] text-[#FAF9F5] border-[#121316] font-bold'
                          : 'bg-[#F0EFEA] text-[#121316] border-[#E2E0D8] hover:border-[#121316]'
                      }`}
                    >
                      {hub.city}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Address Sync Form with 6-Digit PIN Code Field */}
            <form onSubmit={handleConfirm} className="space-y-3">
              <div>
                <label className="block font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] mb-1">
                  Street Address / Premise
                </label>
                <input
                  type="text"
                  value={addressForm.street}
                  onChange={(e) => setAddressForm({ ...addressForm, street: e.target.value })}
                  placeholder="e.g. 100 Feet Road, Indiranagar"
                  className="w-full bg-[#FAF9F5] border border-[#E2E0D8] focus:border-[#121316] px-3 py-2.5 text-xs font-sans text-[#121316] focus:outline-none transition-colors min-h-[44px]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] mb-1">
                    City / District
                  </label>
                  <input
                    type="text"
                    value={addressForm.city}
                    onChange={(e) => setAddressForm({ ...addressForm, city: e.target.value })}
                    placeholder="City"
                    className="w-full bg-[#FAF9F5] border border-[#E2E0D8] focus:border-[#121316] px-3 py-2.5 text-xs font-sans text-[#121316] focus:outline-none transition-colors min-h-[44px]"
                    required
                  />
                </div>
                <div>
                  <label className="block font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] mb-1">
                    6-Digit Postal PIN
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    value={addressForm.postal}
                    onChange={(e) => handlePostalChange(e.target.value)}
                    placeholder="e.g. 560038"
                    className="w-full bg-[#FAF9F5] border border-[#E2E0D8] focus:border-[#121316] px-3 py-2.5 text-xs font-mono-archive text-[#121316] focus:outline-none transition-colors min-h-[44px]"
                    required
                  />
                </div>
              </div>

              {/* Dynamic Carbon-Neutral Bluedart Air Estimation Box */}
              <div className="p-3.5 bg-[#F0EFEA] border border-[#E2E0D8] space-y-2 mt-4">
                <div className="flex items-center justify-between text-[11px] font-mono-archive text-[#121316]">
                  <span className="font-semibold flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5" />
                    Estimated Dispatch Window
                  </span>
                  <span className="font-bold">{deliveryEstimates.daysText}</span>
                </div>
                <div className="text-[11px] text-[#5A5955] flex justify-between">
                  <span>Transit Range:</span>
                  <span className="font-medium text-[#121316]">{deliveryEstimates.dateRangeStr}</span>
                </div>
                <div className="text-[11px] text-[#5A5955] flex justify-between">
                  <span>Haul From Bengaluru Hub:</span>
                  <span className="font-mono-archive">{distanceKm} km</span>
                </div>
                <div className="text-[11px] text-[#5A5955] flex justify-between">
                  <span>Express Carrier:</span>
                  <span className="text-right text-[#121316] font-semibold">{deliveryEstimates.mode}</span>
                </div>
                <div className="pt-2 border-t border-[#E2E0D8] flex items-center justify-between text-[10px] text-[#7A7870] font-mono-archive">
                  <span className="flex items-center gap-1 text-emerald-800">
                    <ShieldCheck className="w-3 h-3" />
                    Carbon Offset Status
                  </span>
                  <span>{deliveryEstimates.co2}</span>
                </div>
              </div>

              {/* Confirm & Save Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#121316] hover:bg-[#2A2B30] text-[#FAF9F5] font-mono-archive text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 font-medium min-h-[48px]"
                >
                  <Check className="w-4 h-4" />
                  Lock Indian Sector Coordinates
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
