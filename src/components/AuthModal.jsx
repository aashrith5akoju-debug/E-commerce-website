import React, { useState } from 'react';
import { X, User, Lock, Mail, ShieldCheck, Sparkles, LogOut, CheckCircle } from 'lucide-react';
import { soundEngine } from '../utils/audio';
import { supabase } from '../utils/supabase';

export default function AuthModal({ isOpen, onClose, user, onAuthSuccess, onSignOut }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState(user ? 'profile' : 'signin');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    fitPreference: 'Relaxed' // Fitted, Relaxed, Architectural Oversized
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fitOptions = [
    { value: 'Fitted', label: 'Fitted', desc: 'Sharpened silhouette, close tailoring' },
    { value: 'Relaxed', label: 'Relaxed', desc: 'True natural drape, casual proportion' },
    { value: 'Architectural Oversized', label: 'Architectural Oversized', desc: 'Exaggerated box geometry & volume' }
  ];

  const handleTabSwitch = (tab) => {
    soundEngine.playClick();
    setActiveTab(tab);
    setErrorMsg('');
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setErrorMsg('Please specify an email address.');
      soundEngine.playError();
      return;
    }
    if (!formData.password) {
      setErrorMsg('Please specify your archive passcode.');
      soundEngine.playError();
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email.trim(),
        password: formData.password
      });

      if (error) {
        setErrorMsg(error.message);
        soundEngine.playError();
        setIsSubmitting(false);
        return;
      }

      soundEngine.playSuccess();
      const authenticatedUser = {
        id: data.user.id,
        name: data.user.user_metadata?.full_name || formData.name || data.user.email?.split('@')[0]?.toUpperCase() || "ARCHIVAL PATRON",
        email: data.user.email,
        tier: "ARCHIVAL MEMBER // TIER 01",
        fitPreference: data.user.user_metadata?.fit_preference || formData.fitPreference || "Relaxed",
        memberSince: "EDITION 2026",
        registryId: `KA-${data.user.id.slice(0, 6).toUpperCase()}`
      };

      onAuthSuccess(authenticatedUser);
      setIsSubmitting(false);
      onClose();
    } catch (err) {
      setErrorMsg(err?.message || 'Authentication failed.');
      soundEngine.playError();
      setIsSubmitting(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setErrorMsg('Full name and email are required to mint an Atelier ID.');
      soundEngine.playError();
      return;
    }
    if (!formData.password) {
      setErrorMsg('Archive passcode is required to mint an Atelier ID.');
      soundEngine.playError();
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email.trim(),
        password: formData.password,
        options: {
          data: {
            full_name: formData.name.trim(),
            fit_preference: formData.fitPreference
          }
        }
      });

      if (error) {
        setErrorMsg(error.message);
        soundEngine.playError();
        setIsSubmitting(false);
        return;
      }

      soundEngine.playSuccess();
      const newUser = {
        id: data.user?.id || `KA-${Math.floor(100000 + Math.random() * 900000)}`,
        name: data.user?.user_metadata?.full_name || formData.name,
        email: data.user?.email || formData.email,
        tier: "ARCHIVAL MEMBER // TIER 01",
        fitPreference: data.user?.user_metadata?.fit_preference || formData.fitPreference,
        memberSince: "EDITION 2026",
        registryId: `KA-${(data.user?.id || String(Math.floor(100000 + Math.random() * 900000))).slice(0, 6).toUpperCase()}`
      };

      onAuthSuccess(newUser);
      setIsSubmitting(false);
      onClose();
    } catch (err) {
      setErrorMsg(err?.message || 'Failed to mint Atelier ID.');
      soundEngine.playError();
      setIsSubmitting(false);
    }
  };

  const handleDemoSignIn = () => {
    soundEngine.playSuccess();
    const demoUser = {
      name: "Julian Vance",
      email: "julian.vance@kinetic-archive.com",
      tier: "ARCHIVAL MEMBER // TIER 01",
      fitPreference: "Architectural Oversized",
      memberSince: "EDITION 2026",
      registryId: "KA-948201"
    };
    onAuthSuccess(demoUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[85] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#121316]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full sm:max-w-md bg-[#FAF9F5] border-t sm:border border-[#121316] shadow-2xl p-6 sm:p-8 animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="flex items-start justify-between border-b border-[#E2E0D8] pb-4 mb-6">
          <div>
            <span className="font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] block">
              Passport // Patron System
            </span>
            <h3 className="font-display text-lg font-bold text-[#121316] tracking-tight mt-0.5">
              {user ? "Atelier Member Dossier" : "Atelier ID Authentication"}
            </h3>
          </div>
          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="p-2 border border-[#E2E0D8] hover:border-[#121316] hover:bg-[#F0EFEA] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close authentication modal"
          >
            <X className="w-4 h-4 text-[#121316]" />
          </button>
        </div>

        {/* If user is already authenticated, show Profile View */}
        {user ? (
          <div className="space-y-5">
            <div className="p-4 bg-[#F0EFEA] border border-[#E2E0D8] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#121316] text-[#FAF9F5] font-mono-archive text-sm font-bold flex items-center justify-center">
                    {user.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#121316]">{user.name}</h4>
                    <p className="text-[11px] text-[#5A5955] font-mono-archive">{user.email}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E2E0D8] flex items-center justify-between text-[11px] font-mono-archive">
                <span className="text-[#7A7870]">MEMBER TIER:</span>
                <span className="font-bold text-[#121316] bg-[#FAF9F5] px-2 py-0.5 border border-[#121316]">
                  {user.tier}
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono-archive">
                <span className="text-[#7A7870]">FIT PREFERENCE:</span>
                <span className="text-[#121316] font-medium">{user.fitPreference}</span>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono-archive">
                <span className="text-[#7A7870]">ARCHIVAL REGISTRY:</span>
                <span className="text-[#5A5955]">{user.registryId || "KA-2026-001"}</span>
              </div>
            </div>

            <div className="bg-[#FAF9F5] border border-[#E2E0D8] p-3 text-xs text-[#5A5955] flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#121316] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                As a Tier 01 Archival Member, your items automatically include complimentary carbon-neutral transport and private trunk previews.
              </p>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={async () => {
                  soundEngine.playClick();
                  try {
                    await supabase.auth.signOut();
                  } catch (e) {
                    console.warn('Supabase signout error:', e);
                  }
                  onSignOut();
                  onClose();
                }}
                className="w-full py-3 bg-transparent hover:bg-[#F0EFEA] border border-[#121316] text-[#121316] font-mono-archive text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 min-h-[44px]"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign Out Of Atelier
              </button>
            </div>
          </div>
        ) : (
          /* Dual Tab Sign In / Sign Up Interface */
          <div>
            {/* Tabs */}
            <div className="grid grid-cols-2 border-b border-[#E2E0D8] mb-6">
              <button
                type="button"
                onClick={() => handleTabSwitch('signin')}
                className={`py-3 text-xs font-mono-archive uppercase tracking-wider transition-all border-b-2 min-h-[44px] flex items-center justify-center ${
                  activeTab === 'signin'
                    ? 'border-[#121316] text-[#121316] font-bold'
                    : 'border-transparent text-[#7A7870] hover:text-[#121316]'
                }`}
              >
                Access Archive
              </button>
              <button
                type="button"
                onClick={() => handleTabSwitch('signup')}
                className={`py-3 text-xs font-mono-archive uppercase tracking-wider transition-all border-b-2 min-h-[44px] flex items-center justify-center ${
                  activeTab === 'signup'
                    ? 'border-[#121316] text-[#121316] font-bold'
                    : 'border-transparent text-[#7A7870] hover:text-[#121316]'
                }`}
              >
                Create Atelier ID
              </button>
            </div>

            {errorMsg && (
              <div className="mb-4 p-2.5 bg-[#A82B2B]/10 border border-[#A82B2B]/30 text-[#A82B2B] text-xs font-mono-archive">
                {errorMsg}
              </div>
            )}

            {/* Sign In Tab */}
            {activeTab === 'signin' ? (
              <form onSubmit={handleSignIn} className="space-y-4">
                <div>
                  <label className="block font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] mb-1">
                    Patron Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="patron@kinetic-archive.com"
                    className="w-full bg-[#FAF9F5] border border-[#E2E0D8] focus:border-[#121316] px-3 py-2.5 text-xs font-sans text-[#121316] focus:outline-none transition-colors min-h-[44px]"
                    required
                  />
                </div>

                <div>
                  <label className="block font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] mb-1">
                    Passcode / Archive Key
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••••••"
                    className="w-full bg-[#FAF9F5] border border-[#E2E0D8] focus:border-[#121316] px-3 py-2.5 text-xs font-sans text-[#121316] focus:outline-none transition-colors min-h-[44px]"
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#121316] hover:bg-[#2A2B30] disabled:opacity-50 text-[#FAF9F5] font-mono-archive text-xs uppercase tracking-widest transition-colors font-semibold min-h-[44px]"
                  >
                    {isSubmitting ? "Authenticating Passport..." : "Authenticate Passport"}
                  </button>
                </div>

                {/* Instant Quick Sign-In for Reviewers */}
                <div className="pt-3 border-t border-[#E2E0D8]">
                  <button
                    type="button"
                    onClick={handleDemoSignIn}
                    className="w-full py-2.5 bg-[#F0EFEA] hover:bg-[#E2E0D8] text-[#121316] border border-[#E2E0D8] font-mono-archive text-[11px] uppercase tracking-wider transition-colors min-h-[44px]"
                  >
                    1-Click Patron Sign In (Demo)
                  </button>
                </div>
              </form>
            ) : (
              /* Sign Up Tab */
              <form onSubmit={handleSignUp} className="space-y-4">
                <div>
                  <label className="block font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Julian Vance"
                    className="w-full bg-[#FAF9F5] border border-[#E2E0D8] focus:border-[#121316] px-3 py-2.5 text-xs font-sans text-[#121316] focus:outline-none transition-colors min-h-[44px]"
                    required
                  />
                </div>

                <div>
                  <label className="block font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="patron@kinetic-archive.com"
                    className="w-full bg-[#FAF9F5] border border-[#E2E0D8] focus:border-[#121316] px-3 py-2.5 text-xs font-sans text-[#121316] focus:outline-none transition-colors min-h-[44px]"
                    required
                  />
                </div>

                <div>
                  <label className="block font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] mb-1">
                    Archive Passcode
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Create a secure passcode"
                    className="w-full bg-[#FAF9F5] border border-[#E2E0D8] focus:border-[#121316] px-3 py-2.5 text-xs font-sans text-[#121316] focus:outline-none transition-colors min-h-[44px]"
                    required
                  />
                </div>

                {/* Saved Fit Preference Pill Matrix */}
                <div>
                  <label className="block font-mono-archive text-[10px] uppercase tracking-widest text-[#7A7870] mb-1.5">
                    Saved Fit Preference (Archival Cut)
                  </label>
                  <div className="space-y-1.5">
                    {fitOptions.map((option) => {
                      const isSelected = formData.fitPreference === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            soundEngine.playPill();
                            setFormData({ ...formData, fitPreference: option.value });
                          }}
                          className={`w-full p-3 text-left border transition-all flex items-start justify-between min-h-[44px] ${
                            isSelected
                              ? 'bg-[#121316] text-[#FAF9F5] border-[#121316]'
                              : 'bg-[#F0EFEA] text-[#121316] border-[#E2E0D8] hover:border-[#121316]'
                          }`}
                        >
                          <div>
                            <span className="font-mono-archive text-xs font-bold block">{option.label}</span>
                            <span className={`text-[10px] ${isSelected ? 'text-[#D5D3CB]' : 'text-[#7A7870]'}`}>
                              {option.desc}
                            </span>
                          </div>
                          {isSelected && <CheckCircle className="w-3.5 h-3.5 mt-0.5 text-[#FAF9F5]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#121316] hover:bg-[#2A2B30] disabled:opacity-50 text-[#FAF9F5] font-mono-archive text-xs uppercase tracking-widest transition-colors font-semibold min-h-[44px]"
                  >
                    {isSubmitting ? "Minting Atelier ID..." : "Mint Atelier ID // Tier 01"}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
